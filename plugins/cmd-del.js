let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐒𝐨𝐥𝐨 𝐬𝐞 𝐩𝐮𝐞𝐝𝐞𝐧 𝐚𝐬𝐢𝐠𝐧𝐚𝐫 𝐭𝐞𝐱𝐭𝐨𝐬 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐚𝐬𝐢𝐠𝐧𝐚𝐝𝐨𝐬 𝐚𝐥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐨 𝐢𝐦𝐚𝐠𝐞𝐧, 𝐩𝐚𝐫𝐚 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐞𝐥 𝐜𝐨𝐝𝐢𝐠𝐨 𝐚𝐬𝐢𝐠𝐧𝐚𝐝𝐨 𝐮𝐬𝐞 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝  ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐒𝐨𝐥𝐨 𝐞𝐥 𝐨𝐰𝐧𝐞𝐫 𝐩𝐮𝐞𝐝𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐚𝐫 𝐥𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐜𝐢𝐨𝐧*'
delete sticker[hash]
m.reply(`*[ ✔ ] 𝐄𝐥 𝐭𝐞𝐱𝐭𝐨/𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐬𝐢𝐠𝐧𝐚𝐝𝐨 𝐚𝐥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫/𝐢𝐦𝐚𝐠𝐞𝐧 𝐟𝐮𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨 𝐝𝐞 𝐥𝐚 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬 𝐞𝐱𝐢𝐭𝐨𝐬𝐚𝐦𝐞𝐧𝐭𝐞*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
