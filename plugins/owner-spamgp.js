let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': 'Auto spam ♨️', 'jpegThumbnail': false }}}

  if (!text) throw `*𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙿𝙰𝚁𝙰 𝚂𝙿𝙰𝙼𝙴𝙰𝚁*`
  let [_, code, expired] = text.match(linkRegex) || []
  if (!code) throw '*𝙴𝙻 𝙻𝙸𝙽𝙺 𝙴𝚂 𝙸𝙽𝚅𝙰𝙻𝙸𝙳𝙾*'
  let res = await conn.groupAcceptInvite(code)
  //await m.reply(`${JSON.stringify(res, null, 1)}`)
  await m.reply(`*𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝚂𝙿𝙰𝙼...*`)
  await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res)
  await m.reply(`*𝚂𝙿𝙰𝙼 𝙰 𝚂𝙸𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾🙂*`)
}

handler.help = ['spamjp']
handler.tags = ['premium']
handler.command = ['spamgp'] 

handler.owner = true

export default handler
