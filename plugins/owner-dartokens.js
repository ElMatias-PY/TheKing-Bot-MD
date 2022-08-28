import MessageType from '@adiwajshing/baileys' 
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝙏𝙊𝙆𝙀𝙉(𝙎)`
if (isNaN(txt)) throw `𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎`
let tok = parseInt(txt)
let joincount = tok
let pjk = Math.ceil(tok * pajak)
joincount += pjk
if (joincount < 1) throw `𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝙋𝘼𝙍𝘼 𝙏𝙊𝙆𝙀𝙉(𝙎) 𝙀𝙎 *1*`
let users = global.db.data.users
users[who].joincount += tok

conn.sendHydrated(m.chat, `╭[ 𝙏𝙊𝙆𝙀𝙉(𝙎) 🪙 ]⬣\n┃\n┃ღ *PARA:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ*\n┃ღ *${tok} Token(s)* 🪙\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, null, null, null, null, [null, null], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['añadirtokens', 'dartokens', 'addtoken', 'dartoken'] 
handler.group = true
handler.botAdmin = true
handler.owner = true
export default handler