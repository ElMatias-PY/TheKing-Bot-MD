/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ElMatias-PY
  🍀 • The King Bot - By Matias
-----------------------------------------------------------------------------------------*/

import { randomBytes } from 'crypto'
let link = /chat.whatsapp.com/
let handler = async (m, { conn, text, groupMetadata }) => {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
if (!text) throw '*[⚠️ ] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐪𝐮𝐞 𝐪𝐮𝐢𝐞𝐫𝐚 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐞𝐧𝐯𝐢𝐞 𝐚 𝐭𝐨𝐝𝐨𝐬 𝐥𝐨𝐬 𝐠𝐫𝐮𝐩𝐨𝐬*'
const linkThisGroup = `${link}`
if (m.text.includes(linkThisGroup)) return conn.reply(m.chat, '❌ *[ ⚠️ ] 𝐍𝐨 𝐩𝐮𝐞𝐝𝐞𝐬 𝐞𝐧𝐯𝐢𝐚𝐫 𝐞𝐧𝐥𝐚𝐜𝐞𝐬 𝐚 𝐨𝐭𝐫𝐨𝐬 𝐠𝐫𝐮𝐩𝐨𝐬*', m)
let time = global.db.data.users[m.sender].msgwait + 300000
if (new Date - db.data.users[m.sender].msgwait < 300000) throw `*[ ⚠️ ] 𝐓𝐢𝐞𝐧𝐞𝐬 𝐪𝐮𝐞 𝐞𝐬𝐩𝐞𝐫𝐚𝐫 ${msToTime(time - new Date())} 𝐩𝐚𝐫𝐚 𝐯𝐨𝐥𝐯𝐞𝐫 𝐚 𝐞𝐧𝐯𝐢𝐚𝐫 𝐦𝐞𝐧𝐬𝐚𝐣𝐞𝐬*`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(m.sender)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": '𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': '𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭', 'jpegThumbnail': false }}}
let teks = `*𝐆𝐑𝐔𝐏𝐎:* ${groupMetadata.subject}\n*𝐃𝐄:* ${name}\n*𝐍𝐔𝐌𝐄𝐑𝐎:* wa.me/${who.split`@`[0]}\n*𝐌𝐄𝐍𝐒𝐀𝐉𝐄:* ${text}`
for (let id of groups) {
await conn.sendMessage(id, { text: teks }, { quoted: fakegif })
global.db.data.users[m.sender].msgwait = new Date * 1
}}
handler.command = /^(msg)$/i
handler.owner = true
handler.group = true
export default handler
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return minutes + " m " + seconds + " s " }
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
