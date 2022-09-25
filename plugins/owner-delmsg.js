let handler = async (m, { command, usedPrefix, text }) => {
let which = command.replace(/eliminar/i, '')
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐔𝐬𝐚𝐫 ${usedPrefix}list${which} 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐥𝐚 𝐥𝐢𝐬𝐭𝐚*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' 𝐧𝐨 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨 𝐞𝐧 𝐥𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐦𝐞𝐧𝐬𝐚𝐣𝐞𝐬*`
delete msgs[text]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥𝐢𝐦𝐢𝐧𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨 𝐞𝐧 𝐥𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐦𝐞𝐧𝐬𝐚𝐣𝐞𝐬 𝐞𝐥 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐜𝐨𝐧 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 '${text}'*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler