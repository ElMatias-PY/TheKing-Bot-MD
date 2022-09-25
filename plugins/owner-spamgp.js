let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': 'Auto spam ♨️', 'jpegThumbnail': false }}}

  if (!text) throw `*𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐮𝐧 𝐥𝐢𝐧𝐤 𝐝𝐞 𝐮𝐧 𝐠𝐫𝐮𝐩𝐨 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐩𝐚𝐫𝐚 𝐬𝐩𝐚𝐦𝐞𝐚𝐫*`
  let [_, code, expired] = text.match(linkRegex) || []
  if (!code) throw '*𝐄𝐥 𝐥𝐢𝐧𝐤 𝐞𝐬 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨*'
  let res = await conn.groupAcceptInvite(code)
  //await m.reply(`${JSON.stringify(res, null, 1)}`)
  await m.reply(`*𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐬𝐩𝐚𝐦...*`)
  await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/FDDWATCdw7nLvUqcJcP1NZ', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res)
  await m.reply(`*𝐄𝐥 𝐬𝐩𝐚𝐦 𝐡𝐚 𝐒𝐢𝐝𝐨 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨*`)
}

handler.help = ['spamjp']
handler.tags = ['premium']
handler.command = ['spamgp'] 

handler.owner = true

export default handler
