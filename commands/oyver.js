module.exports = [
  {
    name: "oyver-setup",
    $if: "old",
    code: `

$if[$guildIcon[$guildID]==]
$author[1;$guildName[$guildID]]
$else
$author[$guildName[$guildID];$guildIcon[$guildID]]
$endif
$description[
[**$get[tarih]** Ayında Toplam **$getGuildVar[teeest;$guildID]** Oy Verildi.](https://discord.gg/xdCRnsCebk) 
\`\`\`js
Sıra | Oy Veren | Oy Sayısı
$userLeaderBoard[$guildID;ençokoyveren;desc;#{top}. {tag} - {value} oy;10;1]
\`\`\`
]


$addButton[1;Hatırlat;secondary;hatırlatma;false;<a:hatirlatma:1221259475210731530>]
$addButton[1;Yorum Yap;secondary;yorumyapma;false;<:icons8comments100:1185679820500258909>]
$addButton[1;Oy Ver;primary;oyverme;false;<:onaylandi:1221260479188435055>]
 $let[tarih;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLocaleUpperCase[$month];January;Ocak];Febuary;Şubat];March;Mart];April;Nisan];May;Mayıs];June;Haziran];July;Temmuz];August;Ağustos];September;Eylül];October;Ekim];November;Kasım];December;Aralık]]
 
$onlyPerms[manageguild;:x: **BU komutu kullana bilmek için \`Yönetici\` yetkisine sahip olmalısın.**]
    `,
  },

  {
    name: "oyverme",
    type: "interaction",
    prototype: "button",
    code: `

    $interactionModal[Oy Ver;oyver-modal;
      {actionRow:
        {textInput:Oy Verme Kodu $get[oykodu]:1:GirdiğiKod:true:$get[oykodu]:5:5}
      }
      $setUserVar[oy_kodu; $randomString[5];$authorID] 
      $setUserVar[seçilen_oy_kodu;$get[oykodu];$authorID;$guildID]

     /*
    ]
    $let[oykodu;$toUpperCase[$randomString[5;false]]]
$onlyIf[$getUserVar[bs]<=$datestamp; <t:$truncate[$divide[$getUserVar[bs];1000]]:F> **Tarihinde Tekrar Deneyin.**{ephemeral} {interaction}]
    `,
  },


  /*     {newEmbed: {title:Oy Verme İşlemi Başarılı} {description:<@$authorID> }}      */
  //GirdiğiKod

  {

      name: "oyver-modal",
      type: "interaction",
      $if: "old",
      prototype: "modal",
      code: `

  $if[$textInputValue[GirdiğiKod]==$getUserVar[seçilen_oy_kodu;$authorID;$guildID]]
$interactionFollowUp[**Başarıyla Oy Verdin.**{actionRow:{button:Sunucuya Git:link:https#COLON#//discord.gg/gjNXw5mm6x:false:}} ;true;false]

$deleteVar[oy_kodu;$authorID;main]
$deleteVar[seçilen_oy_kodu;$authorID;main]

  $interactionUpdate[

  {newEmbed: 
  {title:Oy Sıralaması}
  $if[{thumbnail:$guildIcon}==]
  $else
  {thumbnail:$guildIcon}
  $endif
  {description:
  [**$get[tarih]** Ayında Toplam **$getGuildVar[teeest;$guildID]** Oy Verildi.](https://discord.gg/gjNXw5mm6x) 
\`\`\`js
Sıra | Oy Veren | Oy Sayısı
$userLeaderBoard[$guildID;ençokoyveren;desc;#{top}. {tag} - {value} oy;10;1]
\`\`\`
}
  {footer:$username en son oy verdi.:$authorAvatar}
  }
  {actionRow:
  {button:Oy Ver:primary:oyverme:false:<#COLON#onaylandi#COLON#1221260479188435055>}
  {button:Yorum Yap:secondary:yorumyapma:false:<#COLON#icons8comments100#COLON#1185679820500258909>}  
  {button:Hatırlat:secondary:hatırlatma:false:<a#COLON#hatirlatma#COLON#1221259475210731530>} 
  }
  ]

  $setUserVar[ençokoyveren;$sum[$getUserVar[ençokoyveren;$authorID];1];$authorID;$guildID]
  $setGuildVar[teeest;$sum[$getGuildVar[teeest;$guildID];1];$guildID]

  $setUserVar[bs;$sum[$datestamp;86400000]]

 $channelSendMessage[1221447008536232067;<@$authorID>. **$guildName** Sunucusuna Oy Verdi. 
 **Sunucu Oy Sayısı:** \`$sum[1;$getGuildVar[teeest;$guildID]]\`
 [**Sunucu Davet**]($getGuildInvite)
 ]

  $else
  $interactionReply[**Hatalı Kod Girdiniz, Lütfen Tekrar Deneyin.**;everyone;true]
  $endif
$let[tarih;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLocaleUpperCase[$month];January;Ocak];Febuary;Şubat];March;Mart];April;Nisan];May;Mayıs];June;Haziran];July;Temmuz];August;Ağustos];September;Eylül];October;Ekim];November;Kasım];December;Aralık]]
  $onlyIf[$getUserVar[bs]<=$datestamp; <t:$truncate[$divide[$getUserVar[bs];1000]]:F> **Tarihinde Tekrar Deneyin.**{ephemeral} {interaction}]
    `,
    },



  {
    name: "yorumyapma",
    type: "interaction",
    prototype: "button",
    code: `

    $interactionModal[Yorum Yap;yorum-modal;
      {actionRow:
        {textInput:Yorumunuz:2:yoruminput:true:Çok Güzel Sunucu 👌:10:500}
      }
      {actionRow:
        {textInput:Suncuya Puan Ver:1:yorumsunucupuan:true:1 ve 5 arasında bir puan verin.:1:1}
      }



`,
  },
  {
    name: "yorum-modal",
    type: "interaction",
    prototype: "modal",
    $if: "old",
    code: `
  
    $if[$isNumber[$textInputValue[yorumsunucupuan]]==false]
    $interactionReply[Lütfen Geçerli Bir Puan Yazın.;everyone;true]
    $else
    $interactionReply[Yorumunuz Başarıyla Gönderildi;everyone;true]


    $useChannel[1221429522327535698]

    $if[$guildIcon[$guildID]==]
$author[1;$guildName[$guildID]]
$else
$author[$guildName[$guildID];$guildIcon[$guildID]]
$endif
$description[1;
> **Yorum:**
\`\`\`
$textInputValue[yoruminput]
\`\`\`
> **Puan:**
\`\`\`
$textInputValue[yorumsunucupuan]
\`\`\`]

$footer[$username Yorum Yaptı $addTimesTamp;$authorAvatar]
$addButton[1;Sunucuya Git;link;$nonEscape[$getGuildInvite]]
$endif

$onlyIf[$textInputValue[yorumsunucupuan]>0&&$textInputValue[yorumsunucupuan]<=5;Puanınız Yalnızca 1 İle 5 Arasında Olabilir {ephemeral} {interaction}]

`,
  },
  
  {
    name: "hatırlatma",
    type: "interaction",
    prototype: "button",
    code: `

    $interactionReply[**Tek Seferlik Hatırlatma Açıldı**;everyone;true]
    $setUserVar[oyver_hatırlat;$setTimeout[oyverhatırlat;24h;{"channelID": "$channelID", "authorID": "$authorID", "messageID": "$interactionData[message.id]", "guildID": "$guildID"};true];$authorID;$guildID;main]
    



  `,
  },
  {
    name: "oyverhatırlat",
    type: "timeout",
    //oyver_hatırlat
    $if: "old",
    code: `
    $deleteVar[oyver_hatırlat;$timeoutData[authorID];main]
    $stopTimeout[$getUserVar[oyver_hatırlat;$timeoutData[authorID];$timeoutData[guildID];main]]
    
$sendDm[
  {newEmbed:
    {title:Hatırlatma}
    {description:
    id: $getUserVar[oyver_hatırlat;$timeoutData[authorID];$timeoutData[guildID];main]
      Sanırım **$guildName[$timeoutData[guildID]]** Sunucusna Oy Verme Zamanı Geldi. [Oy Ver]($replaceText[$messageURL[$timeoutData[messageID];$timeoutData[channelID]];:;#COLON#])
    }
  }
  {actionRow:{button:Oy Ver:link:$replaceText[$messageURL[$timeoutData[messageID];$timeoutData[channelID]];:;#COLON#]:false}}
  ;$timeoutData[authorID];false]

  `,
  },//$createChannelInvite[$channelID]
/*
  {
    name: "yenileme",
    type: "interaction",
    prototype: "button",
    code: `


    $interactionUpdate[

    {newEmbed: 
    {author: $guildName[$guildID]:$guildIcon[$guildID]}

    {description:
    [**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak];February;Şubat];March;Mart];April;Nisan];May;Mayıs];June;Haziran];July;Temmuz];August;Ağustos];September;Eylül];October;Ekim];November;Kasım];December;Aralık]** Ayında Toplam **$getGuildVar[teeest]** Oy Verildi.](https://discord.gg/xdCRnsCebk)
\`\`\`
$userLeaderBoard[$guildID;ençokoyveren;desc;#{top}. {tag} - {value};10;1]
\`\`\`

    }


    }

    
    {actionRow:
    {button:Oy Ver:success:oyverme:false}
    {button:Yorum Yap:secondary:yorumyapma:false}
    {button:Yenile:secondary:yenileme:false}
    }

    ;;everyone;false]


`,
  },
  */
  
  //hatırlatma
];




// teeest