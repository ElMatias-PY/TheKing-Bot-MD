import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐚 𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐜𝐨𝐧 𝐞𝐥 @𝐭𝐚𝐠*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐥𝐚 𝐜𝐚𝐧𝐭𝐢𝐝𝐚𝐝 𝐝𝐞 𝐄𝐗𝐏 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚 𝐚𝐠𝐫𝐞𝐠𝐚𝐫*'
if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐒𝐢𝐦𝐛𝐨𝐥𝐨 𝐧𝐨 𝐚𝐝𝐦𝐢𝐭𝐢𝐝𝐨, 𝐬𝐨𝐥𝐨 𝐧𝐮𝐦𝐞𝐫𝐨𝐬!*'
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐦𝐢𝐧𝐢𝐦𝐨 𝐝𝐞 𝐄𝐗𝐏 𝐩𝐚𝐫𝐚 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐞𝐬 𝟷*'
let users = global.db.data.users
users[who].exp += xp
  m.reply(`≡ *𝚇𝙿 𝐀𝐆𝐑𝐄𝐆𝐀𝐃𝐎*
┌──────────────
▢  *𝚃𝚘𝚝𝚊𝚕:* ${xp}
└──────────────`)
}
handler.help = ['addxp <@user>']
handler.tags = ['xp']
handler.command = ['darxp','xpdar','añadirexp'] 
handler.rowner = true
export default handler
