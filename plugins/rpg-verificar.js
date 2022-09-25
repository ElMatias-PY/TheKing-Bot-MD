import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `*[❗𝐈𝐍𝐅𝐎❗]𝐇𝐞𝐲, 𝐲𝐚 𝐞𝐬𝐭𝐚𝐬 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨*\n\n*𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐪𝐮𝐢𝐭𝐚𝐫 𝐭𝐮 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐨? 𝐮𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${usedPrefix}unreg <numero de serie>*\n\n*𝐒𝐢 𝐧𝐨 𝐫𝐞𝐜𝐮𝐞𝐫𝐝𝐨 𝐬𝐮 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐬𝐞𝐫𝐢𝐞 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = Math.floor(Math.random() * 41)
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *𝐍𝐎𝐌𝐁𝐑𝐄:* ${name}
┃ *𝐄𝐃𝐀𝐃:* ${age} años
┃ *𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄 𝐒𝐄𝐑𝐈𝐄:* 
┃ ${sn}
┗┅ ━━━━━━━━━━━━ ┅ ━`
let author = global.author
conn.sendButton(m.chat, caption, `𝐓𝐮 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐬𝐞𝐫𝐢𝐞 𝐭𝐞 𝐬𝐞𝐫𝐯𝐢𝐫𝐚 𝐬𝐢 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐪𝐮𝐢𝐭𝐚𝐫 𝐭𝐮 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐨 𝐞𝐧 𝐞𝐥 𝐁𝐨𝐭\n${author}`, [['¡¡𝐀𝐇𝐎𝐑𝐀 𝐒𝐎𝐘 𝐔𝐍 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐃𝐎!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler
