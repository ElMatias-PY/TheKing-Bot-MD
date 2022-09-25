let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚𝐥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐨 𝐢𝐦𝐚𝐠𝐞𝐧 𝐚𝐥 𝐝𝐞𝐬𝐞𝐚 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐮𝐧 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐨 𝐭𝐞𝐱𝐭𝐨*'
if (!m.quoted.fileSha256) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐒𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞𝐬 𝐚𝐬𝐢𝐠𝐧𝐚𝐫 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐨 𝐭𝐞𝐱𝐭𝐨𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬 𝐞 𝐢𝐦𝐚𝐠𝐞𝐧𝐞𝐬*'
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐫𝐫𝐨𝐫 𝐝𝐞 𝐮𝐬𝐨, 𝐭𝐞𝐱𝐭𝐨 𝐟𝐚𝐥𝐭𝐚𝐧𝐭𝐞*\n\n*𝐔𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨:*\n*—◉ ${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*𝐄𝐣𝐞𝐦𝐩𝐥𝐨 𝐝𝐞 𝐮𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨:*\n*—◉ ${usedPrefix + command} <#menu> <responder a sticker o imagen>*`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐒𝐨𝐥𝐨 𝐞𝐥 𝐨𝐰𝐧𝐞𝐫 𝐩𝐮𝐞𝐝𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐚𝐫 𝐥𝐚 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐜𝐢𝐨𝐧*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*[ ✔ ] 𝐄𝐥 𝐭𝐞𝐱𝐭𝐨/𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐬𝐢𝐠𝐧𝐚𝐝𝐨 𝐚𝐥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫/𝐢𝐦𝐚𝐠𝐞𝐧 𝐟𝐮𝐞 𝐚𝐠𝐫𝐞𝐠𝐚𝐝𝐨 𝐚 𝐥𝐚 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬 𝐞𝐱𝐢𝐭𝐨𝐬𝐚𝐦𝐞𝐧𝐭𝐞*`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
