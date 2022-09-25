let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐮𝐧 𝐫𝐞𝐩𝐨𝐫𝐭𝐞*\n\n*𝐄𝐣𝐞𝐦𝐩𝐥𝐨:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`
if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐫𝐞𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐛𝐞 𝐬𝐞𝐫 𝐦𝐢𝐧𝐢𝐦𝐨 𝟏𝟎 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬!!!*`
if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐫𝐞𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐛𝐞 𝐬𝐞𝐫 𝐦𝐚𝐱𝐢𝐦𝐨 𝟏𝟎𝟎𝟎 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬!!!*`
let teks = `*❒═════[𝐑𝐄𝐏𝐎𝐑𝐓𝐄]═════❒*\n*┬*\n*├❧ 𝐍𝐔𝐌𝐄𝐑𝐎:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ 𝐌𝐄𝐍𝐒𝐀𝐉𝐄:* ${text}\n*┴*`
conn.reply('595985958156@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ ✔️ ] 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨 𝐚 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫, 𝐬𝐮 𝐫𝐞𝐩𝐨𝐫𝐭𝐞 𝐬𝐞𝐫𝐚 𝐚𝐭𝐞𝐧𝐝𝐢𝐝𝐨 𝐥𝐨 𝐚𝐧𝐭𝐞𝐬 𝐩𝐨𝐬𝐢𝐛𝐥𝐞, 𝐬𝐢 𝐞𝐬 𝐟𝐚𝐥𝐬𝐨 𝐨 𝐛𝐫𝐨𝐦𝐚 𝐬𝐨𝐥𝐨 𝐬𝐞𝐫𝐚 𝐢𝐠𝐧𝐨𝐫𝐚𝐝𝐨, 𝐬𝐢 𝐯𝐮𝐞𝐥𝐯𝐞𝐬 𝐡𝐚𝐜𝐞𝐫 𝐮𝐧𝐚 𝐛𝐫𝐨𝐦𝐚 𝐬𝐞𝐫𝐚𝐬 𝐛𝐥𝐨𝐪𝐮𝐞𝐚𝐝𝐨*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
