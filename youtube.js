/**
 * YouTube API module
 * Handles searching for videos on YouTube
 */

const YOUTUBE_API_URL =
  "https://www.youtube.com/youtubei/v1/search?prettyPrint=false";

/**
 * Creates headers for YouTube API requests
 * @returns {Headers} The headers object
 */
function createYouTubeHeaders() {
  const headers = new Headers();
  headers.append("accept", "*/*");
  headers.append("accept-language", "en-US,en;q=0.9,en-GB;q=0.8");
  headers.append("content-type", "application/json");
  headers.append("origin", "https://www.youtube.com");
  headers.append("priority", "u=1, i");
  headers.append(
    "referer",
    "https://www.youtube.com/results?search_query=Mere+Rang+Me+Rangne+Wali"
  );
  headers.append("sec-ch-dpr", "2");
  headers.append(
    "sec-ch-ua",
    '"Microsoft Edge";v="143", "Chromium";v="143", "Not A(Brand";v="24"'
  );
  headers.append("sec-ch-ua-mobile", "?0");
  headers.append("sec-ch-ua-platform", '"macOS"');
  headers.append("sec-ch-viewport-width", "573");
  headers.append("sec-fetch-dest", "empty");
  headers.append("sec-fetch-mode", "same-origin");
  headers.append("sec-fetch-site", "same-origin");
  headers.append(
    "user-agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0"
  );
  headers.append(
    "x-goog-visitor-id",
    "CgsyX28xRmtRVEhnVSiIi-TJBjIKCgJJThIEGgAgYWLfAgrcAjE0LllUPVRpXy1HMTBOWGNXaUVPcW92dXdrbVAyVDhuRnkzZFZtMnFKdnpBM1VNNDFkYU1SWHdqLW9HRTVUT3BvV3VPd0pEUnYwN0NmUGJuM2pYeXAxYmZiVXF1ZjVvYTlkQ0VHZ2xkb3ljZlI5TjJjdEhVWVlGdlU5RTJBSXZzcUpzSzNrVmlXWFZwcWxVa2V3ajlPS0VqV3dvSndsUk5DV0NCVHFqbjN0amsxZ0lqR2lUSURWS08xSS10RDVPR1hTUW94RUZCV2VwTF8wTGpiMmdaQnpUQWh2eWVsbEJDMU1rZWE3VzdaWVFySWpGeUFVNFoySWNBZ05wX25FeFhMZnR0ajlGRTVVeVUtVVg4aHBPenA4RFlOMk9zRUVQRVFVRnFJbzZnaFpFcWd4dDR1VkUxeElxYlVRSkl0d1BQYzFQclRRc3JFNVVNaGhlanpDRVRWdlNqTDh5dw%3D%3D"
  );
  headers.append("x-youtube-bootstrap-logged-in", "false");
  headers.append("x-youtube-client-name", "1");
  headers.append("x-youtube-client-version", "2.20251208.06.00");
  headers.append(
    "Cookie",
    "VISITOR_INFO1_LIVE=2_o1FkQTHgU; VISITOR_PRIVACY_METADATA=CgJJThIEGgAgYQ%3D%3D"
  );
  return headers;
}

/**
 * Searches YouTube for a video matching the given query
 * @param {string} query - The search query
 * @returns {Promise<string|null>} The video ID or null if not found
 */
async function searchYouTube(query) {
  const body = JSON.stringify({
    context: {
      client: {
        hl: "en",
        gl: "IN",
        clientName: "WEB",
        clientVersion: "2.20251208.06.00",
      },
    },
    query,
  });

  const requestOptions = {
    method: "POST",
    headers: createYouTubeHeaders(),
    body,
    redirect: "follow",
  };

  try {
    const response = await fetch(YOUTUBE_API_URL, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();

    const videoItem =
      result.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.find(
        (item) => !!item.videoRenderer
      );

    return videoItem?.videoRenderer?.videoId ?? null;
  } catch (error) {
    console.error("❌ Error searching YouTube:", error.message);
    return null;
  }
}

module.exports = searchYouTube;
