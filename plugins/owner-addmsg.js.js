let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/agregar/i, '')
    if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐭𝐞𝐱𝐭𝐨, 𝐦𝐞𝐧𝐬𝐚𝐣𝐞, 𝐢𝐦𝐚𝐠𝐞𝐧, 𝐞𝐭𝐜, 𝐘 𝐚𝐠𝐫𝐞𝐠𝐚 𝐮𝐧 𝐭𝐞𝐱𝐭𝐨 𝐜𝐨𝐦𝐨 𝐩𝐚𝐥𝐚𝐛𝐫𝐚 𝐜𝐥𝐚𝐯𝐞*'
    if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐔𝐭𝐢𝐥𝐢𝐳𝐚𝐫 *${usedPrefix}list${which}* 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐥𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐦𝐞𝐧𝐬𝐚𝐣𝐞`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' 𝐒𝐞 𝐡𝐚 𝐚𝐠𝐫𝐞𝐠𝐚𝐝𝐨 𝐞𝐧 𝐥𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐦𝐞𝐧𝐬𝐚𝐣𝐞𝐬`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝐌𝐞𝐧𝐬𝐚𝐣𝐞 𝐚𝐠𝐫𝐞𝐠𝐚𝐝𝐨 𝐞𝐱𝐢𝐭𝐨𝐬𝐚𝐦𝐞𝐧𝐭𝐞 𝐚 𝐥𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐦𝐞𝐧𝐬𝐚𝐣𝐞𝐬 𝐜𝐨𝐦𝐨 '${text}'*\n*𝐀𝐜𝐜𝐞𝐝𝐞 𝐜𝐨𝐦𝐨 ${usedPrefix}ver${which} ${text}*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler