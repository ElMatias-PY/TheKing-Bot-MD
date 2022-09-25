import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗠𝗘𝗡𝗨𝗦`,
rows: [
      {title: "👑 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 👑", description: '𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗠𝗜 𝗖𝗥𝗘𝗔𝗗𝗢𝗥', rowId: `${usedPrefix}creador`},
      {title: "🎁 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢  🎁", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗣𝗔𝗥𝗔 𝗩𝗘𝗥 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 𝗗𝗘𝗟 𝗕𝗢𝗧', rowId: `${usedPrefix}menucomp`},
      {title: "💎 𝗠𝗘𝗡𝗨 𝗚𝗥𝗨𝗣𝗢 💎", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦/𝗧𝗢𝗣𝗦 🎮", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗝𝗨𝗘𝗚𝗢𝗦 𝗬 𝗧𝗢𝗣𝗦', rowId: `${usedPrefix}menujuegos`},
      {title: "🥇 𝗧𝗔𝗕𝗟𝗔 𝗗𝗘 𝗖𝗟𝗔𝗦𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢𝗡 🥇", description: '𝗣𝗔𝗥𝗔 𝗩𝗘𝗥 𝗟𝗔 𝗧𝗔𝗕𝗟𝗔 𝗗𝗘 𝗖𝗟𝗔𝗦𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢𝗡', rowId: `${usedPrefix}lb`},
      {title: "🔊 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢𝗦 🔊", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢𝗦', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 𝗠𝗘𝗡𝗨 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 👽", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢 🎤", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠 👾", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 𝗠𝗘𝗡𝗨 +𝟭𝟴 🔞", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 +𝟭𝟴🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 📲", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ 𝗠𝗘𝗡𝗨 𝗟𝗢𝗚𝗢𝗦 🖍️", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗟𝗢𝗚𝗢𝗦', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 𝗠𝗘𝗡𝗨 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦 🔍", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦', rowId: `${usedPrefix}menubusquedas`},
{title: "⚒️ 𝗠𝗘𝗡𝗨 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 ⚒️", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 𝗠𝗘𝗡𝗨 𝗖𝗥𝗘𝗔𝗗𝗢𝗥  👑", description: '𝗘𝗦𝗧𝗘 𝗠𝗘𝗡𝗨 𝗦𝗢𝗟𝗢 𝗣𝗨𝗘𝗗𝗘 𝗦𝗘𝗥 𝗨𝗧𝗜𝗟𝗜𝗭𝗔𝗗𝗢 𝗣𝗢𝗥 𝗠𝗜 𝗖𝗥𝗘𝗔𝗗𝗢𝗥', rowId: `${usedPrefix}menucreador`},
]}, ]
 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*📅 𝐅𝐞𝐜𝐡𝐚: ${week}, ${date}*
*📈 𝐓𝐢𝐞𝐦𝐩𝐨 𝐀𝐜𝐭𝐢𝐯𝐨: ${uptime}*
*📊 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬: ${rtotalreg}*

╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║═ *𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *𝗛ola😘, ${name}*!!!
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *Creador del Bot: Matias* 
║➤ *N° del creador:* *wa.me/595985958156* (No Bot)
║➤ *IG de mi creador:* *https://instagram.com/matiass.zzz*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
╭──────────────╮
║➤ *𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡 𝗗𝗘 𝗠𝗘𝗡𝗨𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ ℹ️ _${usedPrefix}menucompleto_
║➤ ℹ️ _${usedPrefix}menuaudios_
║➤ ℹ️ _Bot_ (𝑼𝒔𝒐 𝒔𝒊𝒏 𝒑𝒓𝒆𝒇𝒊𝒋𝒐)
║➤ ℹ️ _Que es un Bot_ (𝑼𝒔𝒐 𝒔𝒊𝒏 𝒑𝒓𝒆𝒇𝒊𝒋𝒐)
╰──────────────╯
╭──────────────╮
║➤ *<𝗧𝗔𝗕𝗟𝗔 𝗗𝗘 𝗖𝗟𝗔𝗦𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢𝗡/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 🥇 _${usedPrefix}lb_
║➤ *_Para ver la tabla de clasificación_*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *<𝗨𝗡𝗘 𝗨𝗡 𝗕𝗢𝗧 𝗔 𝗧𝗨 𝗚𝗥𝗨𝗣𝗢/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 🤖 _${usedPrefix}join *link del grupo*_ 
║➤ *_Añade al Bot a tu grupo y dale admin_*
╰──────────────╯`, footer: `${wm}`, pp,
title: null,
buttonText: "𝐋𝐈𝐒𝐓𝐀𝐒 𝐃𝐄 𝐌𝐄𝐍𝐔𝐒", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menulista|menu|menú|memu|memú|help|info|comandos|2help|ayuda|commands|commandos|m|\?)$/i
handler.exp = 85
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
