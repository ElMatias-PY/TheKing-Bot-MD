import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐚 𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐜𝐨𝐧 𝐞𝐥 @𝐭𝐚𝐠*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐥𝐚 𝐜𝐚𝐧𝐭𝐢𝐝𝐚𝐝 𝐝𝐞 𝐝𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚 𝐚𝐠𝐫𝐞𝐠𝐚𝐫*'
if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐒𝐢𝐦𝐛𝐨𝐥𝐨 𝐧𝐨 𝐚𝐝𝐦𝐢𝐭𝐢𝐝𝐨, 𝐬𝐨𝐥𝐨 𝐧𝐮𝐦𝐞𝐫𝐨𝐬!*'
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐦𝐢𝐧𝐢𝐦𝐨 𝐝𝐞 𝐝𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐞𝐬 1*'
let users = global.db.data.users
users[who].limit += dmt
m.reply(`≡ *💎 𝐀𝐆𝐑𝐄𝐆𝐀𝐃𝐎*
┌──────────────
▢ *𝚃𝚘𝚝𝚊𝚕:* ${dmt}
└──────────────`)
}
handler.command = ['addd','addlimit','añadirdiamantes'] 
handler.rowner = true
export default handler
