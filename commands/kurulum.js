module.exports = [
  {
    name: "kurulum",
    type: "interaction",
    prototype: "slash",
    code: `
  $interactionReply[
Sunucu kategorisini Seç
{actionRow:
{selectMenu:sunucukategori:Sunucu Kategorisini Seç:1:1:false:
{stringInput:Halk:halk:Herkese Açık:false}
{stringInput:Eğitim:eğitim:Eğitim, Öğrenim:false}
{stringInput:Teknoloji:teknoloji:Tekonoloji İle İlgili:false}
{stringInput:Oyun:oyun:Oyun:false}
{stringInput:Arkadaşlık:arkdaşlık:Arkadaşlık:false}
{stringInput:Finans:finans:Alım Satım:false}
}}
;everyone;true]
$onlyForIDs[1007285377729572864;$guildOwnerID[$guildID];:x: **Sadece Sunucu Sahibi Bu Komutu kullanabilir.**{interaction}{ephemeral}]
    `

  },
  {
    name: "sunucukategori",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $setG
      $interactionReply[
    Ayarları Düzenle
    {actionRow:
    {button:Ayarlar:secondary:ayarlar:false}
    }
    ;everyone;true]
    $setGlobalUserVar[sunucu_id;$guildID]
    $setGlobalUserVar[sunucu_kategori;$interactionData[values[0]]]
    `
  },
  {
    name: "ayarlar",
    type: "interaction",
    prototype: "button",
    code: `

    $interactionModal[Ayarları Düzenle;swayarları-modal;
      {actionRow:
        {textInput:Sunucnuzun Sınırsız Davet Linki:2:snrzdvtlink:true:https://discord.gg/...:10:60}
      }
      {actionRow:
        {textInput:Suncuya Puan Ver:1:yorumsunucupuan:true:1 ve 5 arasında bir puan verin.:1:1}
      }



  `,
  },
]