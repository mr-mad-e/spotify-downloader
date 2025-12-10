require("dotenv").config();
const fs = require("fs");
const ytdl = require("ytdl-core-enhanced");
const NodeID3 = require("node-id3");
const https = require("https");
const youtube = require("./youtube");
const spotify = require("./spotify");

const playlistIds = ["37i9dQZF1DWVDvBpGQbzXj"];

// ------------ MAIN ------------
(async () => {
  for (const playlistId of playlistIds) {
    const playlist = await spotify(playlistId);
    const playlistName = playlist.data.playlistV2.name;

    if (!fs.existsSync(`playlists/${playlistName}`)) {
      fs.mkdirSync(`playlists/${playlistName}`, { recursive: true });
    }

    for (const item of playlist.data.playlistV2.content.items) {
      const title = item.itemV3.data.identityTrait.name.replaceAll("/", "-");
      const album =
        item.itemV3.data.identityTrait.contentHierarchyParent.identityTrait
          .name;

      const filePath = `playlists/${playlistName}/${title}.mp3`;

      // Skip if file already exists
      if (fs.existsSync(filePath)) {
        console.log(`${title} already exists, skipping...`);
        continue;
      }

      const videoId = await youtube(`${title} | ${album}`);
      if (!videoId) {
        console.log(`Video not found for ${title}, skipping...`);
        continue;
      }

      const artist = item.itemV3.data.identityTrait.contributors.items
        .map((item) => item.name)
        .join(" / ");
      const image =
        item.itemV3.data.visualIdentityTrait.squareCoverImage.image.data
          .sources[0].url;

      const writer = fs.createWriteStream(filePath);

      ytdl(`https://www.youtube.com/watch?v=${videoId}`, {
        filter: "audioonly",
        quality: "highestaudio",
      }).pipe(writer);

      writer.on("finish", () => {
        // Download thumbnail
        https.get(image, (response) => {
          const thumbnailWriter = fs.createWriteStream(`temp/${title}.jpg`);
          response.pipe(thumbnailWriter);

          thumbnailWriter.on("finish", () => {
            // Add tags to MP3
            const tags = {
              title: title,
              album: album,
              artist: artist,
              APIC: thumbnailWriter.path,
            };

            NodeID3.update(tags, filePath, (err) => {
              if (err) console.error("Error adding tags:", err);
              // else console.log("Thumbnail and metadata added!");
            });
          });
        });
      });
    }
  }
})();
