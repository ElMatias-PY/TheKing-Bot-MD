let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 @𝐭𝐚𝐠 𝐝𝐞 𝐚𝐥𝐠𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 @𝐭𝐚𝐠 𝐝𝐞 𝐚𝐥𝐠𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐟𝐮𝐞 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨*\n*—◉ 𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐲𝐚 𝐩𝐨𝐝𝐫𝐞 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐁𝐨𝐭*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
