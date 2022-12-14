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
ā āć šššš ššš ššš ć ā
ā 
ā ā„ [š¤“š»] *CREADOR:* *Matias*
ā ā„ [#ļøā£] *NĀ° DEL CREADOR:* *wa.me/595985958156*
ā ā„ [š³] *PREFIJO:* *${usedPrefix}*
ā ā„ [š] *CHATS PRIVADOS:* *${chats.length - groups.length}*
ā ā„ [š¦] *CHATS DE GRUPOS:* *${groups.length}* 
ā ā„ [š”] *CHATS TOTALES:* *${chats.length}* 
ā ā„ [š] *ACTIVIDAD:* *${uptime}*
ā ā„ [š©] *USUARIOS:* *${totalreg} ššššššš*
ā ā„ [šØāš¦Æ] *VELOCIDAD*
ā   *${speed}* 
ā   *šššššššššššš*
ā ā„ [āļø] *AUTOREAD:* ${autoread ? '*šššššššš*' : '*ššššššššššš*'}
ā ā„ [ā] *RESTRICT:* ${restrict ? '*šššššššš*' : '*ššššššššššš*'} 
ā 
ā āć šš”š šš¢š§š  ššØš­ ć ā
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
