import MessageType from '@adiwajshing/baileys' 
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `πΏππ½π πΏπ ππππππππΌπ πΌπ ππππΌπππ *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `πππππππ ππΌ πΎπΌππππΏπΌπΏ πΏπ πππππ(π)`
if (isNaN(txt)) throw `πππ ππππ½ππππ, ππππ πππππππ πππππππ`
let tok = parseInt(txt)
let joincount = tok
let pjk = Math.ceil(tok * pajak)
joincount += pjk
if (joincount < 1) throw `ππ ππππππ ππππππ ππΌππΌ πππππ(π) ππ *1*`
let users = global.db.data.users
users[who].joincount += tok

conn.sendHydrated(m.chat, `β­[ πππππ(π) πͺ ]β¬£\nβ\nβα¦ *PARA:*\nβα¦ *${text}*\nββββββββββββββββββ\nβα¦ *SE LE AΓADIΓ*\nβα¦ *${tok} Token(s)* πͺ\nβ\nβ°βββββββββββββββ¬£`, wm, null, null, null, null, null, [null, null], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['aΓ±adirtokens', 'dartokens', 'addtoken', 'dartoken'] 
handler.group = true
handler.botAdmin = true
handler.owner = true
export default handler