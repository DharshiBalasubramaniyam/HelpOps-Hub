//script
document.addEventListener("DOMContentLoaded", async function () {
  function _0x2f00(_0x8f731d, _0x540245) {
    const _0x35b8dc = _0x35b8();
    return (
      (_0x2f00 = function (_0x2f005c, _0x4958ed) {
        _0x2f005c = _0x2f005c - 0x10c;
        let _0x591871 = _0x35b8dc[_0x2f005c];
        return _0x591871;
      }),
      _0x2f00(_0x8f731d, _0x540245)
    );
  }
  const _0x325d39 = _0x2f00;
  (function (_0x4151fc, _0xb369e9) {
    const _0x4e7762 = _0x2f00,
      _0x3c3186 = _0x4151fc();
    while (!![]) {
      try {
        const _0x525e77 =
          parseInt(_0x4e7762(0x112)) / 0x1 +
          (-parseInt(_0x4e7762(0x11c)) / 0x2) *
            (-parseInt(_0x4e7762(0x119)) / 0x3) +
          parseInt(_0x4e7762(0x10f)) / 0x4 +
          (parseInt(_0x4e7762(0x11a)) / 0x5) *
            (-parseInt(_0x4e7762(0x115)) / 0x6) +
          -parseInt(_0x4e7762(0x117)) / 0x7 +
          -parseInt(_0x4e7762(0x114)) / 0x8 +
          (parseInt(_0x4e7762(0x11b)) / 0x9) *
            (-parseInt(_0x4e7762(0x111)) / 0xa);
        if (_0x525e77 === _0xb369e9) break;
        else _0x3c3186["push"](_0x3c3186["shift"]());
      } catch (_0x1fdb3c) {
        _0x3c3186["push"](_0x3c3186["shift"]());
      }
    }
  })(_0x35b8, 0x6d915);
  function _0x35b8() {
    const _0x332eb2 = [
      "409580RoLiUq",
      "apikey",
      "1674440paAThL",
      "30330fTgmBv",
      "Network\x20response\x20was\x20not\x20ok",
      "565376UWJHTh",
      "json",
      "15IwAEsy",
      "745WUQgoO",
      "1113939kaHLBK",
      "275510qyCDuL",
      "error",
      "apik",
      "https://script.googleusercontent.com/macros/echo?user_content_key=EzyPm8qoLqvtQWyyN8R5Z80voJk-ptU5byKtPo8haVVFeeUO3d2KRa3n_8fBJtHskVxV8yvI507uTyLDWUeIrrNtISZYcaz1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPGM7xLHLqvZvMSHnARWbupyIWIJrY7gK1mSjVDHcR25w5zDMGOWGLe99CpEY-JfLA6TOwkCoui3XCUWh_VsrxoGyvkiYp3rQ9z9Jw9Md8uu&lib=Ms2w9yo699vd0M5y2UYeB-z4c9SZU-kkO",
      "2069892hawKdV",
      "log",
      "10uvHqxB",
    ];
    _0x35b8 = function () {
      return _0x332eb2;
    };
    return _0x35b8();
  }
  const apiUrl = _0x325d39(0x10e);
  async function getkey() {
    const _0x309b02 = _0x325d39;
    try {
      const _0x39a329 = await fetch(apiUrl);
      if (!_0x39a329["ok"]) throw new Error(_0x309b02(0x116));
      const _0x10b7b1 = await _0x39a329[_0x309b02(0x118)]();
      return (
        console[_0x309b02(0x110)](_0x10b7b1),
        _0x10b7b1[_0x309b02(0x10d)][0x0][_0x309b02(0x113)]
      );
    } catch (_0x1d7ef2) {
      console[_0x309b02(0x10c)]("Error\x20fetching\x20data:", _0x1d7ef2);
    }
  }
  const token = await getkey();
  // Fetch repository contents using the GitHub APi
  function fetchRepository(url) {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const filteredData = data.filter((file) => {
            const iswebsite =
              file.name.toLowerCase() == "HelpOps-Hub Official Website";
            return !file.name.includes(".") && !iswebsite;
          });

          const foldersContainer = document.getElementById("folders-container");
          filteredData.forEach((item) => {
            if (item.type === "dir") {
              // Create a card for each folder
              const folderCard = document.createElement("div");
              folderCard.classList.add("folder-card");
              folderCard.innerHTML = `
                            <h3>${item.name}</h3>
                            <p>${item.path}</p>
                        `;
              // Add click event to redirect to folder
              folderCard.addEventListener("click", () => {
                window.location.href = item.html_url;
              });
              foldersContainer.appendChild(folderCard);
            }
          });
        }
      })

      .catch((error) => console.error("Error fetching data:", error));
  }
  fetchRepository("https://api.github.com/repos/mdazfar2/HelpOps-Hub/contents");
});