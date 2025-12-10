/**
 * Spotify API module
 * Handles fetching playlists from Spotify
 */

const SPOTIFY_API_URL = "https://api-partner.spotify.com/pathfinder/v2/query";
const SPOTIFY_AUTH_TOKEN = process.env.SPOTIFY_AUTH_TOKEN;

/**
 * Creates headers for Spotify API requests
 * @returns {Headers} The headers object
 */
function createSpotifyHeaders() {
  const headers = new Headers();
  headers.append("accept", "application/json");
  headers.append("accept-language", "en");
  headers.append("app-platform", "WebPlayer");
  headers.append("authorization", `Bearer ${SPOTIFY_AUTH_TOKEN}`);
  headers.append("content-type", "application/json;charset=UTF-8");
  headers.append("origin", "https://open.spotify.com");
  headers.append("priority", "u=1, i");
  headers.append("referer", "https://open.spotify.com/");
  headers.append("spotify-app-version", "1.2.79.336.g2f666f74");
  return headers;
}

/**
 * Fetches a Spotify playlist
 * @param {string} playlistId - The Spotify playlist ID
 * @returns {Promise<object|null>} The playlist data or null on error
 */
async function fetchPlaylist(playlistId) {
  const body = JSON.stringify({
    variables: {
      uri: `spotify:playlist:${playlistId}`,
      offset: 0,
      limit: 1000,
      enableWatchFeedEntrypoint: true,
    },
    operationName: "fetchPlaylist",
    extensions: {
      persistedQuery: {
        version: 1,
        sha256Hash:
          "bb67e0af06e8d6f52b531f97468ee4acd44cd0f82b988e15c2ea47b1148efc77",
      },
    },
  });

  const requestOptions = {
    method: "POST",
    headers: createSpotifyHeaders(),
    body,
    redirect: "follow",
  };

  try {
    const response = await fetch(SPOTIFY_API_URL, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("❌ Error fetching Spotify playlist:", error.message);
    return null;
  }
}

module.exports = fetchPlaylist;
