let handler = async (m, { conn }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/simpcard', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '*¡¡𝐓𝐮 𝐫𝐞𝐥𝐢𝐠𝐢𝐨𝐧 𝐞𝐬 𝐬𝐞𝐫 𝐮𝐧 𝐬𝐢𝐦𝐩!!*', m)
}
handler.help = ['simpcard']
handler.tags = ['maker']  
handler.command = /^(simpcard)$/i  
export default handler
