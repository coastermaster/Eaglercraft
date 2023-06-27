const relayId = Math.floor(Math.random() * 3);

const eaglercraftOpts = {
  container: "game_frame",
  assetsURI: "assets.epk",
  worldsFolder: "MAIN",
  servers: [
    {
      serverName: "MC Server",
      serverAddress: "address here",
      hideAddress: false
    }
  ],
  relays: [
    {
      addr: "wss://relay.deev.is/",
      name: "lax1dude relay #1",
      primary: relayId === 0
    },
    {
      addr: "wss://relay.lax1dude.net/",
      name: "lax1dude relay #2",
      primary: relayId === 1
    },
    {
      addr: "wss://relay.shhnowisnottheti.me/",
      name: "ayunami relay #1",
      primary: relayId === 2
    }
  ],
  mainMenu: {
    splashes: [
      "1.8.9!",
      "Ported by lax1dude!",
      "1.8.9 by AR-DEV-1!",
      "Yeeeeeee!",
      "LOL!",
      "Hahaha!",
      "Added Herobrine!",
      "No Microsoft!",
      ":>",
      "|>",
      "Singleplayer!"
    ],
    eaglerLogo: true
  },
  serverWorkerURI: "worker_bootstrap.js",
  assetOverrides: {},
  profanity: false,
  serverListTitle: "",
  serverListLink: ""
};

// Export the configuration object
export default eaglercraftOpts;
