let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 @𝐭𝐚𝐠 𝐝𝐞 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐞 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐚 𝐥𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐩𝐫𝐞𝐦𝐢𝐮𝐦*`
if (global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐝𝐨 𝐲𝐚 𝐞𝐬 𝐩𝐫𝐞𝐦𝐢𝐮𝐦*'
global.prems.push(`${who.split`@`[0]}`)
let textprem = `*[❗𝐈𝐍𝐅𝐎❗] @${who.split`@`[0]} 𝐀𝐡𝐨𝐫𝐚 𝐞𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐩𝐫𝐞𝐦𝐢𝐮𝐦, 𝐧𝐨 𝐭𝐞𝐧𝐝𝐫𝐚 𝐥𝐢𝐦𝐢𝐭𝐞𝐬 𝐚𝐥 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐁𝐨𝐭*`
m.reply(textprem, null, { mentions: conn.parseMention(textprem) })
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.rowner = true
export default handler
