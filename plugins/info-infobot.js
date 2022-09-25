import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〙 ═
╠
╠➥ [🤴🏻] *CREADOR:* *Matias*
╠➥ [#️⃣] *N° DEL CREADOR:* *wa.me/595985958156*
╠➥ [🎳] *PREFIJO:* *${usedPrefix}*
╠➥ [🔐] *CHATS PRIVADOS:* *${chats.length - groups.length}*
╠➥ [🦜] *CHATS DE GRUPOS:* *${groups.length}* 
╠➥ [💡] *CHATS TOTALES:* *${chats.length}* 
╠➥ [🚀] *ACTIVIDAD:* *${uptime}*
╠➥ [🎩] *USUARIOS:* *${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
╠➥ [👨‍🦯] *VELOCIDAD*
╠  *${speed}* 
╠  *𝚖𝚒𝚕𝚒𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*
╠➥ [☑️] *AUTOREAD:* ${autoread ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➥ [❗] *RESTRICT:* ${restrict ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'} 
╠
╠═〘 𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 𝐁𝐨𝐭 〙 ═
`.trim() 
conn.reply(m.chat, info, m)
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
