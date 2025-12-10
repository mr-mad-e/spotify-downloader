const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("accept-language", "en");
myHeaders.append("app-platform", "WebPlayer");
myHeaders.append(
  "authorization",
  "Bearer BQAL16cuQrXqEsAvGRcHOIHiiFCul8hKhVd_hyZyjhdGaDDKLEb6tt_PSmtLrhkJ1_gmQ49xHfuG6g-m7kKX2Rl-oYNzgKYIeGoDtU8COd0PJwomtOFjhljd9nsVir-Z-Mm57bQXwjFa8u7cdnfhJEz6aBIVyG0X3aRwZXqQpx_cXoVK-y61WHpHF1R5Qv7SscDOGy-_EOCBuMcTRigl86zmmFjcMh0kPtntZD-9vAqzQdrm9l1FjzByl4mKgYGHktTeXFH4_b9JEEvcy2CxdjsW8eveKELOnWJGIfw4dvHGArlZlG4ibHNbuUoscSqxIP_1CZUTI80GiK_hFT9p2yR4pNhocaYBT1mOoMvQtWyUubw8W8UOxnFAg-hnBGpUibJfJZFpcC27DxdV"
);
myHeaders.append("content-type", "application/json;charset=UTF-8");
myHeaders.append("origin", "https://open.spotify.com");
myHeaders.append("priority", "u=1, i");
myHeaders.append("referer", "https://open.spotify.com/");
myHeaders.append("spotify-app-version", "1.2.79.336.g2f666f74");

module.exports = async (playlistId) => {
  const raw = JSON.stringify({
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
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://api-partner.spotify.com/pathfinder/v2/query",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
