let handler = async (m, { conn }) => {
let vn = './media/gay2.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '*𝐉𝐀𝐉𝐀𝐉𝐀𝐉𝐀, 𝐌𝐈𝐑𝐄𝐍 𝐀 𝐄𝐒𝐓𝐄 𝐆𝐀𝐘🤣🏳️‍🌈*\n\n*¿𝐐𝐔𝐈𝐄𝐍 𝐒𝐄 𝐋𝐎 𝐐𝐔𝐈𝐄𝐑𝐄 𝐅𝐎𝐋𝐋𝐀𝐑?*', m)
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })
}
handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(2gay)$/i
export default handler
