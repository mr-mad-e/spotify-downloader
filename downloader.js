/**
 * Downloader module
 * Handles downloading and processing songs
 */

const fs = require("fs");
const path = require("path");
const ytdl = require("ytdl-core-enhanced");
const NodeID3 = require("node-id3");
const https = require("https");
const youtube = require("./youtube");
const { DIRECTORIES } = require("./config");

/**
 * Downloads audio from YouTube and saves as MP3
 * @param {string} videoId - YouTube video ID
 * @param {string} filePath - Destination file path
 * @returns {Promise<void>}
 */
function downloadAudio(videoId, filePath) {
  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(filePath);
    ytdl(`https://www.youtube.com/watch?v=${videoId}`, {
      filter: "audioonly",
      quality: "highestaudio",
    })
      .pipe(writer)
      .on("finish", resolve)
      .on("error", reject);
    writer.on("error", reject);
  });
}

/**
 * Downloads thumbnail and returns the path
 * @param {string} imageUrl - Image URL
 * @param {string} fileName - File name
 * @returns {Promise<string>} Path to downloaded thumbnail
 */
function downloadThumbnail(imageUrl, fileName, playlistName) {
  return new Promise((resolve, reject) => {
    const thumbnailPath = path.join(
      DIRECTORIES.temp,
      playlistName,
      `${fileName}.jpg`
    );
    const file = fs.createWriteStream(thumbnailPath);
    https
      .get(imageUrl, (response) => {
        response.pipe(file);
      })
      .on("error", reject);
    file.on("finish", () => resolve(thumbnailPath));
    file.on("error", reject);
  });
}

/**
 * Adds ID3 tags to MP3 file
 * @param {object} metadata - Track metadata
 * @param {string} filePath - MP3 file path
 * @param {string} thumbnailPath - Thumbnail path
 * @returns {Promise<void>}
 */
function addMetadata(metadata, filePath, thumbnailPath) {
  return new Promise((resolve, reject) => {
    const tags = {
      title: metadata.title,
      album: metadata.album,
      artist: metadata.artist,
      APIC: thumbnailPath,
    };
    NodeID3.update(tags, filePath, (err) => {
      if (err) {
        console.error(`❌ Error adding tags to ${metadata.title}:`, err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/**
 * Downloads and processes a song
 * @param {object} metadata - Track metadata
 * @param {string} filePath - Destination file path
 */
async function downloadAndProcessSong(metadata, filePath, playlistName) {
  try {
    const videoId = await youtube(`${metadata.title} | ${metadata.album}`);
    if (!videoId) {
      console.log(`⏭️  Video not found for ${metadata.title}, skipping...`);
      return;
    }
    await downloadAudio(videoId, filePath);
    console.log(`✅ Downloaded: ${metadata.title}`);
    const thumbnailPath = await downloadThumbnail(
      metadata.thumbnail,
      metadata.title,
      playlistName
    );
    await addMetadata(metadata, filePath, thumbnailPath);
  } catch (error) {
    console.error(`❌ Error processing ${metadata.title}:`, error.message);
  }
}

module.exports = {
  downloadAndProcessSong,
};
