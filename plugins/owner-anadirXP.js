import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[โ๐๐๐๐โ] ๐๐ญ๐ข๐ช๐ฎ๐๐ญ๐ ๐ ๐ฎ๐ง ๐ฎ๐ฌ๐ฎ๐๐ซ๐ข๐จ ๐๐จ๐ง ๐๐ฅ @๐ญ๐๐ *'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[โ๐๐๐๐โ] ๐๐ง๐ ๐ซ๐๐ฌ๐ ๐ฅ๐ ๐๐๐ง๐ญ๐ข๐๐๐ ๐๐ ๐๐๐ ๐ช๐ฎ๐ ๐๐๐ฌ๐๐ ๐๐ ๐ซ๐๐ ๐๐ซ*'
if (isNaN(txt)) throw '*[โ๐๐๐๐โ] ๐๐ข๐ฆ๐๐จ๐ฅ๐จ ๐ง๐จ ๐๐๐ฆ๐ข๐ญ๐ข๐๐จ, ๐ฌ๐จ๐ฅ๐จ ๐ง๐ฎ๐ฆ๐๐ซ๐จ๐ฌ!*'
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw '*[โ๐๐๐๐โ] ๐๐ฅ ๐ง๐ฎ๐ฆ๐๐ซ๐จ ๐ฆ๐ข๐ง๐ข๐ฆ๐จ ๐๐ ๐๐๐ ๐ฉ๐๐ซ๐ ๐๐ ๐ซ๐๐ ๐๐ซ ๐๐ฌ ๐ท*'
let users = global.db.data.users
users[who].exp += xp
  m.reply(`โก *๐๐ฟ ๐๐๐๐๐๐๐๐*
โโโโโโโโโโโโโโโ
โข  *๐๐๐๐๐:* ${xp}
โโโโโโโโโโโโโโโ`)
}
handler.help = ['addxp <@user>']
handler.tags = ['xp']
handler.command = ['darxp','xpdar','aรฑadirexp'] 
handler.rowner = true
export default handler
