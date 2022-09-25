let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 @𝐭𝐚𝐠 𝐝𝐞 𝐚𝐥𝐠𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 @𝐭𝐚𝐠 𝐝𝐞 𝐚𝐥𝐠𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨*'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐟𝐮𝐞 𝐛𝐚𝐧𝐞𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨*\n*—◉ 𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐧𝐨 𝐩𝐨𝐝𝐫𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐁𝐨𝐭 𝐡𝐚𝐬𝐭𝐚 𝐪𝐮𝐞 𝐬𝐞𝐚 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐝𝐨*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
