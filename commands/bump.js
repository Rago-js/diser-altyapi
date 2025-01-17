module.exports = [
  {
    name: "bump",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[
    {newEmbed:
    {author:$guildName:$guildIcon}
    {title:Sunucu Öne Çıkarıldı!} 
    {description: 
    > **Öne Çıkartma Başarılı**
    > **Öne Çıkaran:** <@$authorID>
    > **Bir Sonraki Öne Çıkartma:** <t:$truncate[$divide[$sum[$datestamp;5400000];1000]]:R>
    }
    {timestamp}
    }
   
    ;everyone;false]
    
    $useChannel[1221430152496681012]
    $getGuildInvite
    $thumbnail[1;$guildIcon]
    $description[
    ## [**$guildName[$guildID]**]($getGuildInvite)
    > **Kullanıcı Sayısı:** \`$membersCount\`
    > **Öne Çıkaran:** <@$authorID>
    > **Bir Sonraki Öne Çıkartma:** <t:$truncate[$divide[$sum[$datestamp;5400000];1000]]:R>
    ]
    $addTimestamp

    $addButton[1;Sunucuya Git;link;$nonEscape[$getGuildInvite]]
    
    $setGuildVar[bumpzamanaşımı;$sum[$datestamp;5400000]]
    
    $onlyIf[$getGuildVar[bumpzamanaşımı]<=$datestamp;<t:$truncate[$divide[$getGuildVar[bumpzamanaşımı];1000]]:R> **Tekrar Deneyin.**{ephemeral} {interaction}]
    `
    
  }//5400000
]