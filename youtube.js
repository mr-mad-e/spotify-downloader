const myHeaders = new Headers();
myHeaders.append("accept", "*/*");
myHeaders.append("accept-language", "en-US,en;q=0.9,en-GB;q=0.8");
myHeaders.append("content-type", "application/json");
myHeaders.append("origin", "https://www.youtube.com");
myHeaders.append("priority", "u=1, i");
myHeaders.append(
  "referer",
  "https://www.youtube.com/results?search_query=Mere+Rang+Me+Rangne+Wali"
);
myHeaders.append("sec-ch-dpr", "2");
myHeaders.append(
  "sec-ch-ua",
  '"Microsoft Edge";v="143", "Chromium";v="143", "Not A(Brand";v="24"'
);
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", '"macOS"');
myHeaders.append("sec-ch-viewport-width", "573");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "same-origin");
myHeaders.append("sec-fetch-site", "same-origin");
myHeaders.append(
  "user-agent",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0"
);
myHeaders.append(
  "x-goog-visitor-id",
  "CgsyX28xRmtRVEhnVSiIi-TJBjIKCgJJThIEGgAgYWLfAgrcAjE0LllUPVRpXy1HMTBOWGNXaUVPcW92dXdrbVAyVDhuRnkzZFZtMnFKdnpBM1VNNDFkYU1SWHdqLW9HRTVUT3BvV3VPd0pEUnYwN0NmUGJuM2pYeXAxYmZiVXF1ZjVvYTlkQ0VHZ2xkb3ljZlI5TjJjdEhVWVlGdlU5RTJBSXZzcUpzSzNrVmlXWFZwcWxVa2V3ajlPS0VqV3dvSndsUk5DV0NCVHFqbjN0amsxZ0lqR2lUSURWS08xSS10RDVPR1hTUW94RUZCV2VwTF8wTGpiMmdaQnpUQWh2eWVsbEJDMU1rZWE3VzdaWVFySWpGeUFVNFoySWNBZ05wX25FeFhMZnR0ajlGRTVVeVUtVVg4aHBPenA4RFlOMk9zRUVQRVFVRnFJbzZnaFpFcWd4dDR1VkUxeElxYlVRSkl0d1BQYzFQclRRc3JFNVVNaGhlanpDRVRWdlNqTDh5dw%3D%3D"
);
myHeaders.append("x-youtube-bootstrap-logged-in", "false");
myHeaders.append("x-youtube-client-name", "1");
myHeaders.append("x-youtube-client-version", "2.20251208.06.00");
myHeaders.append(
  "Cookie",
  "VISITOR_INFO1_LIVE=2_o1FkQTHgU; VISITOR_PRIVACY_METADATA=CgJJThIEGgAgYQ%3D%3D; __Secure-YNID=14.YT=Ti_-G10NXcWiEOqovuwkmP2T8nFy3dVm2qJvzA3UM41daMRXwj-oGE5TOpoWuOwJDRv07CfPbn3jXyp1bfbUquf5oa9dCEGgldoycfR9N2ctHUYYFvU9E2AIvsqJsK3kViWXVpqlUkewj9OKEjWwoJwlRNCWCBTqjn3tjk1gIjGiTIDVKO1I-tD5OGXSQoxEFBWepL_0Ljb2gZBzTAhvyellBC1Mkea7W7ZYQrIjFyAU4Z2IcAgNp_nExXLfttj9FE5UyU-UX8hpOzp8DYN2OsEEPEQUFqIo6ghZEqgxt4uVE1xIqbUQJItwPPc1PrTQsrE5UMhhejzCETVvSjL8yw; __Secure-ROLLOUT_TOKEN=COLQuPvwjaKrVBDQpLfzgeyPAxi0yr3Vl7CRAw%3D%3D; YSC=nkpP7W1BlRo; _gcl_au=1.1.1409069963.1765340210; PREF=f4=4000000&f6=40000000&tz=Asia.Calcutta&f7=100&repeat=NONE; GPS=1; ST-biyus7=gs_l=youtube.12..0i512i433i10i11k1l3j0i512i433i131i10i11k1j0i512i433i10i11k1l2j0i512i433i131i10i11k1l3j0i512i433i10i11k1j0i512i433i131i10i11k1j0i512i433i10i11k1j0i512i10i11k1j0i512i433i131i10i11k1.33789.33916.0.37852......0.290.290.2-1..........1j2.......0...257&oq=Mere%20Rang%20Me%20Rangne%20Wali&itct=CA0Q7VAiEwjL3MCypbKRAxVjn9gFHZxwDv3KAQQnXxOV&csn=PvYVNWGFBvncxKhC&endpoint=%7B%22clickTrackingParams%22%3A%22CA0Q7VAiEwjL3MCypbKRAxVjn9gFHZxwDv3KAQQnXxOV%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22url%22%3A%22%2Fresults%3Fsearch_query%3DMere%2BRang%2BMe%2BRangne%2BWali%22%2C%22webPageType%22%3A%22WEB_PAGE_TYPE_SEARCH%22%2C%22rootVe%22%3A4724%7D%7D%2C%22searchEndpoint%22%3A%7B%22query%22%3A%22Mere%20Rang%20Me%20Rangne%20Wali%22%7D%7D"
);

module.exports = function youtubeSearch(query) {
  const raw = JSON.stringify({
    context: {
      client: {
        hl: "en",
        gl: "IN",
        remoteHost: "2405:201:2003:204c:e9b8:45bb:e5bc:b170",
        deviceMake: "Apple",
        deviceModel: "",
        visitorData:
          "CgsyX28xRmtRVEhnVSiIi-TJBjIKCgJJThIEGgAgYWLfAgrcAjE0LllUPVRpXy1HMTBOWGNXaUVPcW92dXdrbVAyVDhuRnkzZFZtMnFKdnpBM1VNNDFkYU1SWHdqLW9HRTVUT3BvV3VPd0pEUnYwN0NmUGJuM2pYeXAxYmZiVXF1ZjVvYTlkQ0VHZ2xkb3ljZlI5TjJjdEhVWVlGdlU5RTJBSXZzcUpzSzNrVmlXWFZwcWxVa2V3ajlPS0VqV3dvSndsUk5DV0NCVHFqbjN0amsxZ0lqR2lUSURWS08xSS10RDVPR1hTUW94RUZCV2VwTF8wTGpiMmdaQnpUQWh2eWVsbEJDMU1rZWE3VzdaWVFySWpGeUFVNFoySWNBZ05wX25FeFhMZnR0ajlGRTVVeVUtVVg4aHBPenA4RFlOMk9zRUVQRVFVRnFJbzZnaFpFcWd4dDR1VkUxeElxYlVRSkl0d1BQYzFQclRRc3JFNVVNaGhlanpDRVRWdlNqTDh5dw%3D%3D",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0,gzip(gfe)",
        clientName: "WEB",
        clientVersion: "2.20251208.06.00",
        osName: "Macintosh",
        osVersion: "10_15_7",
        originalUrl:
          "https://www.youtube.com/results?search_query=Mere+Rang+Me+Rangne+Wali",
        screenPixelDensity: 2,
        platform: "DESKTOP",
        clientFormFactor: "UNKNOWN_FORM_FACTOR",
        windowWidthPoints: 1488,
        configInfo: {
          appInstallData:
            "CIiL5MkGELvZzhwQwarQHBCaudAcELfq_hIQqp3PHBCVr9AcEL2u0BwQ2JbQHBCHrM4cEMvRsQUQxPTPHBDRvdAcEJX3zxwQv9vPHBD3idAcEKil0BwQgo_PHBDjuM8cEParsAUQw5HQHBDI988cEJ3XzxwQzOvPHBDys9AcEJmNsQUQ87OAExC24K4FEMOq0BwQpbbQHBCxotAcEMuy0BwQk4PQHBDi1K4FEK-GzxwQgc3OHBCIh7AFEPG00BwQvoqwBRDgzbEFEInorgUQjLDQHBCJsM4cEJO20BwQlPLPHBC7s4ATEKaasAUQndCwBRCM6c8cELyk0BwQudnOHBDBj9AcEMm70BwQxb2AExCL988cEL22rgUQs5DPHBDOs9AcENqu0BwQ2vfOHBDJ968FEI-50BwQ0eDPHBCU_rAFEIz-_xIQrKzQHBCu1s8cELqu0BwQg57QHBDevM4cEMzfrgUQ0-GvBRDwnLAFEIOs0BwQzdGxBRC9mbAFELjkzhwQh4PQHBDmh9AcEPKd0BwQiJPQHBCW288cEPyyzhwQ5aTQHBD4voATEMmW0BwqYENBTVNSQlZILVpxLURMaVVFdm9QdGdLRHp1WUw4TEVTaDB3eW9Ld0VBODNfQmZtQ0JxQUdvaTdaY08xYzlTXzJENFVVNGlQdW5RV01FSjB2Z2k3cEU1OUxxNDNsSGgwSDAA",
          coldConfigData:
            "CIiL5MkGEO66rQUQxIWuBRC9tq4FEOLUrgUQvoqwBRDwnLAFEI3MsAUQndCwBRDP0rAFEOP4sAUQr6fOHBD8ss4cEK-GzxwQqp3PHBD4xs8cENvTzxwQndfPHBDH2s8cEL_bzxwQseDPHBDP4M8cEOXnzxwQ5-fPHBCTg9AcEIiG0BwQ5ofQHBD3idAcEM2L0BwQ_pPQHBCTldAcEMmW0BwQqpzQHBC8pNAcELSo0BwQwarQHBDDqtAcEJ2s0BwQzqzQHBC6rtAcEIyw0BwQzrLQHBDxtNAcEM-10BwQk7bQHBClttAcEMa20BwQmrnQHBDOudAcEPu60BwQlLvQHBDJu9AcEK290BwQxL3QHBDRvtAcENG_0BwQ4L_QHBoyQU9qRm94M1J0SVBRYzduSFRsOVJ2RUJiQm5yUm12cTVzc3lwaUlxLXdscUVPaVphV2ciMkFPakZveDNSdElQUWM3bkhUbDlSdkVCYkJuclJtdnE1c3N5cGlJcS13bHFFT2laYVdnKqQBQ0FNU2RnMHB1TjIzQXFRWjd5bkhOcG1TbWhEN0ZvMDJfaU9uRGNnQXJBeHFOSjBXcUFTaERLZ0MyUmV1RFRIekFJc0dlQlZEcHQ2MUg1R2NCZFhHQkpTY0JNX0NBSS1uQnYzVUJqTFBnQVhacEFZRG9ySUZ5a3NHc0ctSEE4WUo4d09xaUFhVVVzcDV5MG9Fa3I0RzdHM21BTE1EMDJFRm1ocz0%3D",
          coldHashData:
            "CIiL5MkGEhM1MDYyMDc4MDY1MzEwNzQyNTA5GIiL5MkGMjJBT2pGb3gzUnRJUFFjN25IVGw5UnZFQmJCbnJSbXZxNXNzeXBpSXEtd2xxRU9pWmFXZzoyQU9qRm94M1J0SVBRYzduSFRsOVJ2RUJiQm5yUm12cTVzc3lwaUlxLXdscUVPaVphV2dCpAFDQU1TZGcwcHVOMjNBcVFaN3luSE5wbVNtaEQ3Rm8wMl9pT25EY2dBckF4cU5KMFdxQVNoREtnQzJSZXVEVEh6QUlzR2VCVkRwdDYxSDVHY0JkWEdCSlNjQk1fQ0FJLW5CdjNVQmpMUGdBWFpwQVlEb3JJRnlrc0dzRy1IQThZSjh3T3FpQWFVVXNwNXkwb0VrcjRHN0czbUFMTUQwMkVGbWhzPQ%3D%3D",
          hotHashData:
            "CIiL5MkGEhQxMzcwMTE1MjM3Mzc0MTU5MDg2NxiIi-TJBiiU5PwSKKXQ_RIonpH-EijIyv4SKLfq_hIojP7_Eij3kIATKMuRgBMotZuAEyjYsIATKLyzgBMosLeAEyjat4ATKKS4gBMovrqAEyjCvYATKMW9gBMoj7-AEyi9v4ATKP6_gBMyMkFPakZveDNSdElQUWM3bkhUbDlSdkVCYkJuclJtdnE1c3N5cGlJcS13bHFFT2laYVdnOjJBT2pGb3gzUnRJUFFjN25IVGw5UnZFQmJCbnJSbXZxNXNzeXBpSXEtd2xxRU9pWmFXZ0JEQ0FNU0x3MFdvdGY2RmE3QkJwTk5zeGFsUm9JTnl3WVZIZDNQd2d6aTlnX2NxZVlMMk0wSjg1QUVzYW9XNlE2M0J1TXo%3D",
        },
        screenDensityFloat: 2,
        userInterfaceTheme: "USER_INTERFACE_THEME_DARK",
        timeZone: "Asia/Calcutta",
        browserName: "Edge Chromium",
        browserVersion: "143.0.0.0",
        acceptHeader:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        deviceExperimentId:
          "ChxOelU0TWpBNU56VXpNRFkwTVRZek5Ea3lPQT09EIiL5MkGGIiL5MkG",
        rolloutToken: "COLQuPvwjaKrVBDQpLfzgeyPAxi0yr3Vl7CRAw%3D%3D",
        screenWidthPoints: 573,
        screenHeightPoints: 764,
        utcOffsetMinutes: 330,
        memoryTotalKbytes: "8000000",
        mainAppWebInfo: {
          graftUrl: "/results?search_query=Mere+Rang+Me+Rangne+Wali",
          pwaInstallabilityStatus: "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED",
          webDisplayMode: "WEB_DISPLAY_MODE_BROWSER",
          isWebNativeShareAvailable: true,
        },
      },
      user: {
        lockedSafetyMode: false,
      },
      request: {
        useSsl: true,
        internalExperimentFlags: [],
        consistencyTokenJars: [],
      },
      clickTracking: {
        clickTrackingParams: "CA0Q7VAiEwjL3MCypbKRAxVjn9gFHZxwDv3KAQQnXxOV",
      },
      adSignalsInfo: {
        params: [
          {
            key: "dt",
            value: "1765344649846",
          },
          {
            key: "flash",
            value: "0",
          },
          {
            key: "frm",
            value: "0",
          },
          {
            key: "u_tz",
            value: "330",
          },
          {
            key: "u_his",
            value: "5",
          },
          {
            key: "u_h",
            value: "967",
          },
          {
            key: "u_w",
            value: "1496",
          },
          {
            key: "u_ah",
            value: "848",
          },
          {
            key: "u_aw",
            value: "1496",
          },
          {
            key: "u_cd",
            value: "30",
          },
          {
            key: "bc",
            value: "31",
          },
          {
            key: "bih",
            value: "764",
          },
          {
            key: "biw",
            value: "573",
          },
          {
            key: "brdim",
            value: "0,34,0,34,1496,34,1496,848,573,764",
          },
          {
            key: "vis",
            value: "1",
          },
          {
            key: "wgl",
            value: "true",
          },
          {
            key: "ca_type",
            value: "image",
          },
        ],
        bid: "ANyPxKoejW0NhSSYcXUAvqa62wA1sE6_aar5B7ZCl2ChRJk7vkcKofN9D9kCNpP7GfpJIcGFwm0IoLDQgIy4dhVmhpugF5M1Eg",
      },
    },
    query,
    webSearchboxStatsUrl:
      "/search?oq=Mere Rang Me Rangne Wali&gs_l=youtube.12..0i512i433i10i11k1l3j0i512i433i131i10i11k1j0i512i433i10i11k1l2j0i512i433i131i10i11k1l3j0i512i433i10i11k1j0i512i433i131i10i11k1j0i512i433i10i11k1j0i512i10i11k1j0i512i433i131i10i11k1.33789.33916.0.37852......0.290.290.2-1..........1j2.......0...257",
    inlineSettingStatus: "INLINE_SETTING_STATUS_ON",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://www.youtube.com/youtubei/v1/search?prettyPrint=false",
    requestOptions
  )
    .then((response) => response.json())
    .then(
      (result) =>
        result.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.find(
          (item) => !!item.videoRenderer
        ).videoRenderer.videoId ?? null
    )
    .catch((error) => console.error(error));
};
