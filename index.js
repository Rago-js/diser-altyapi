const { AoiClient, LoadCommands } = require("aoi.js");


  const bot = new AoiClient({
  token: process.env['token'],
  prefix: ["+"],
    intents: ["MessageContent", "Guilds", "GuildMessages"],
      events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  },

});





require('./handler/variables.js')(bot);
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")