import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*[❗𝐍𝐅𝐎❗] 𝐈𝐧𝐜𝐫𝐞𝐬𝐞 𝐬𝐮 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐬𝐞𝐫𝐢𝐞, 𝐬𝐢 𝐧𝐨 𝐥𝐨 𝐫𝐞𝐜𝐮𝐞𝐫𝐝𝐚 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 #myns*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*[❗𝐍𝐅𝐎❗] 𝐍𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐬𝐞𝐫𝐢𝐞 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨, 𝐜𝐨𝐦𝐩𝐫𝐮𝐞𝐛𝐞 𝐪𝐮𝐞 𝐥𝐨 𝐡𝐚𝐲𝐚𝐬 𝐞𝐬𝐜𝐫𝐢𝐭𝐨 𝐛𝐢𝐞𝐧!*\n\n*𝐒𝐢 𝐧𝐨 𝐥𝐨 𝐫𝐞𝐜𝐮𝐞𝐫𝐝𝐚 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 #myns*'
user.registered = false
m.reply(`*[ ✔ ] 𝐒𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨, 𝐲𝐚 𝐧𝐨 𝐞𝐬𝐭𝐚𝐬 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨 𝐞𝐧 𝐞𝐥 𝐁𝐨𝐭*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
