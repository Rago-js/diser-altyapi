module.exports = [
  {
  name: "top-10",
  code: `
  $interactionReply[Başarıyla Yorumunuz Gönderildi;everyone;true]
$title[Oy Sıralaması]
$description[1;
\`\`\`js
Sıra | Sunucu | Oy Sayısı
$guildLeaderboard[teeest;asc;{value};10;1]
\`\`\`
]
$footer[$username Tarafınfan $addTimesTamp;$authorAvatar]
`,
},
   {
    name: "eklee",
    code: `
    $setGuildVar[teeest;$message;$guildID]
  `,
  },
]