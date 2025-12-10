const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("accept-language", "en");
myHeaders.append("app-platform", "WebPlayer");
myHeaders.append(
  "authorization",
  "Bearer BQBYZWcfyQ4f6nJWO2TZJW7Y9JRrjAxjih4V6ACukI-jH6rdkw152vrmTI9JeRggmvDzxTyhxg6VdlVwCu6u-dqIqy6S0tlMOwY-mdzejLFFCdcWLwUqPllnnJjmAYFiJaDAxQXxhnjKbCVFL4b3seLcoTdgGhb4t-hq6keSzur-bx9fM5-52L-PBqJa0a0BYKKUT2iTIzFIk2FQ5oleLN5IJpdenPQ3YmugxCLAdoD1s_3YpbXGwxNoF82aOBOaPhQTfD2eu2k3TtMGUQry88FBjwrt5Hpj7UDv1tWuDsvSRtAX3E6-QG23j6pxf3MszhvQfro-RQ1Svdd2qZPd3DTPqaGRGj7bw3ofnRA3h7Y0s3XPibkH7f9bab0gHQWVFjMHL55KskDWQ_Jd"
);
myHeaders.append(
  "client-token",
  "AABjBYBGNX4xco2EcRElVvsPCdWb8DKqwzw1/Z8agy3czja1ltXKWNnn40YGbV/BKnwXIaPI9G126B/dK70XJ/tcElDQgjaNVXZaon/yiJUJVPdigjQjmq7ggErpjrdTtVueMs4vBWXGNFg3njN8gZQFRKOmCh9SQ/8ljTHVCtoybpFMMxITNXu3/jzZ6psYpAsk0YLLpKZK97wz635Nh8ohAk4NlV0vrXUdJFuMtCD6tN/kZQWU4yk0Vfeouka9Jh80C5xsrc8OJLfge4+fJUra4tGQVcIb1aXHdIaBwdoYIsUyqZ8cV/KfOM2nHH3J6kvI98yhzZ7iXA2s6m7ExYbhBW1HdD/eCs1nF+xfEIdr3dSREM8kTkE="
);
myHeaders.append("content-type", "application/json;charset=UTF-8");
myHeaders.append("origin", "https://open.spotify.com");
myHeaders.append("priority", "u=1, i");
myHeaders.append("referer", "https://open.spotify.com/");
myHeaders.append(
  "sec-ch-ua",
  '"Microsoft Edge";v="143", "Chromium";v="143", "Not A(Brand";v="24"'
);
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", '"macOS"');
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("spotify-app-version", "1.2.79.336.g2f666f74");
myHeaders.append(
  "user-agent",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0"
);

module.exports = async (playlistId) => {
  const raw = `{"variables":{"uri":"spotify:playlist:${playlistId}","offset":0,"limit":1000,"enableWatchFeedEntrypoint":true},"operationName":"fetchPlaylist","extensions":{"persistedQuery":{"version":1,"sha256Hash":"bb67e0af06e8d6f52b531f97468ee4acd44cd0f82b988e15c2ea47b1148efc77"}}}`;

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
