let handler = m => {
let msgs = global.db.data.msgs
m.reply(`
*🔰 𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐭𝐞𝐱𝐭𝐨𝐬/𝐦𝐞𝐧𝐬𝐚𝐣𝐞𝐬/𝐩𝐚𝐥𝐚𝐛𝐫𝐚𝐬 𝐜𝐥𝐚𝐯𝐞 🔰*

*✳️ 𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 ✳️*
${Object.keys(msgs).map(v => '*👉🏻 ' + v).join('*\n*')}*
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^lista(vn|msg|video|audio|img|sticker)$/
export default handler