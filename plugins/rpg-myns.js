import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
m.reply(`┏┅ ━━━━━━━━━━━━ ┅ ━
┃ *𝐍𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐬𝐞𝐫𝐢𝐞:* 
┃ ${sn}
┗┅ ━━━━━━━━━━━━ ┅ ━`.trim())}
handler.help = ['myns']
handler.tags = ['xp']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler
