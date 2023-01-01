const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Isekai Meikyuu De Harem - épisode 2 VOSTFR",
      description: "Vous regardez",
      image: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/03/isekaimeikyuudeharemwo_keyvisual-1-e1648179739159.jpg?resize=696%2C391&ssl=1",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m115.syncusercontent.com/mfs-60:0072a77d2e56a91e4817749f7f2f500d=============================/p/Isekai.Meikyuu.De.Harem.Wo.S01e02.Unrated.Vostfr.1080P.Webrip.french-anime.com.mp4?allowdd=0&datakey=HfgPM0z+gsuYEHQPlnA+rynOiM8LYKCae6Fk44GObW0n1D8gTBZLl67j4sCp3dfSclWg/Ri6ct6ARKqTMxZNJ2oukFhSPmQDKn9C3z+c0Qc6CD5xmV9/3/rFVFBPMSV7zqlN9Sz7OlvW94ivfLevRR2igimYUh/hDZeC8BnX4SNpZCLY7O0immS0cIv9NfvWvVMtVfkFJE8Vk0+Qfjmqo9UZTWvlVnVAOQN7Hu7dMzGhtAGEVPTiTAa+bNjwBVxOhPrnecmEXVe9NI1ImFK0UYsymVCx2J2VEDqM8x9dehp6f6RKDABuEMWLrF8RushymAlO2d6ZZPYk0yz+9o2Ijw&engine=ln-2.3.7.3&errurl=YZZKy3DRdDx5dK+K0FCRZSLdk7RW2+MT2/V73fcs+h5TpY2Vdaac1RkFBTLVfLRt2WodMs11+baab5qetm6lq5vR63/8cw9JpzBNz8kXbztlV/IvBZVH5DF9h7W61kkYj7t8HeD/1tHe9C3sSO1IpMuR3QlcFit0p8trVnBYeIPyittAip4rIHosSJsAG4MyK6JZlK9rO1+Z93aoVhtpYNroYtErDnTyTFOX7PCweYt+1O8NSqKUo9J1GCWDQSrPdaTugasJpVa70MY3jIseDAn8Unyp2XmaQ+kiI7WCFooxpnozaqbgdPs15VJ7wO0kFEu1N4z5/Wd3M0ybtXvO/Q==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iSXNla2FpLk1laWt5dXUuRGUuSGFyZW0uV28uUzAxZTAyLlVucmF0ZWQuVm9zdGZyLjEwODBQLldlYnJpcC5mcmVuY2gtYW5pbWUuY29tLm1wNCI7ZmlsZW5hbWUqPVVURi04JydJc2VrYWkuTWVpa3l1dS5EZS5IYXJlbS5Xby5TMDFlMDIuVW5yYXRlZC5Wb3N0ZnIuMTA4MFAuV2VicmlwLmZyZW5jaC1hbmltZS5jb20ubXA0Ow&ipaddress=1458994159&linkcachekey=5f4571cc0&linkoid=652350000&mode=101&sharelink_id=8937710520000&timestamp=1672596779762&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=608089f09884f596cceabcd2eba1c923cfc82001&cachekey=60:0072a77d2e56a91e4817749f7f2f500d=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
