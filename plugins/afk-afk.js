let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 ${conn.getName(m.sender)} 𝐞𝐬𝐭𝐚𝐫𝐚 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐨 (𝙰𝙵𝙺), 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐧𝐨 𝐥𝐨 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞𝐧*\n\n*—◉ 𝐌𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝 (𝙰𝙵𝙺)${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
