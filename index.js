require("dotenv").config();
const fs = require("fs");
const path = require("path");
const youtube = require("./youtube");
const spotify = require("./spotify");
const { downloadAndProcessSong } = require("./downloader");
const { PLAYLIST_IDS, DIRECTORIES } = require("./config");

/**
 * Ensures required directories exist
 */
function ensureDirectories() {
  [DIRECTORIES.playlists, DIRECTORIES.temp].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

function ensureSubDirectories(playlistName) {
  const playlistPath = path.join(DIRECTORIES.playlists, playlistName);
  const tempPath = path.join(DIRECTORIES.temp, playlistName);

  if (!fs.existsSync(playlistPath)) {
    fs.mkdirSync(playlistPath, { recursive: true });
  }

  if (!fs.existsSync(tempPath)) {
    fs.mkdirSync(tempPath, { recursive: true });
  }
}

/**
 * Extracts metadata from Spotify track item
 */
function extractTrackMetadata(spotifyItem) {
  const data = spotifyItem.itemV3.data;
  return {
    title: data.identityTrait.name.replaceAll("/", "-"),
    album: data.identityTrait.contentHierarchyParent.identityTrait.name,
    artist: data.identityTrait.contributors.items
      .map((item) => item.name)
      .join(" / "),
    thumbnail:
      data.visualIdentityTrait.squareCoverImage.image.data.sources[0].url,
  };
}

/**
 * Processes all songs in a playlist
 */
async function processPlaylist(playlistId) {
  try {
    const playlist = await spotify(playlistId);
    if (!playlist) {
      console.error(`❌ Failed to fetch playlist: ${playlistId}`);
      return;
    }

    const playlistName = playlist.data.playlistV2.name;
    const playlistPath = path.join(DIRECTORIES.playlists, playlistName);
    ensureSubDirectories(playlistName);

    console.log(`\n📃 Processing playlist: ${playlistName}`);

    const items = playlist.data.playlistV2.content.items;
    for (const item of items) {
      const metadata = extractTrackMetadata(item);
      const filePath = path.join(playlistPath, `${metadata.title}.mp3`);

      // Skip if file already exists
      if (fs.existsSync(filePath)) {
        console.log(`↩️  ${metadata.title} already exists, skipping...`);
        continue;
      }

      await downloadAndProcessSong(metadata, filePath, playlistName);
    }
  } catch (error) {
    console.error(`Error processing playlist ${playlistId}:`, error);
  }
}

/**
 * Main function
 */
async function main() {
  try {
    console.log("🎵 Starting Spotify Playlist Downloader...");
    ensureDirectories();

    for (const playlistId of PLAYLIST_IDS) {
      await processPlaylist(playlistId);
    }

    console.log("\n✅ All playlists processed!");
  } catch (error) {
    console.error("Fatal error:", error);
    process.exit(1);
  }
}

main();
