import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `El usuario que estΓ‘ mencionando no estΓ‘ registrado en mi base de datos`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*ππππππ:* ${username} ${registered ? '(' + name + ') ': ''}
*ππππππ:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*ππππ:* wa.me/${who.split`@`[0]}${registered ? '\n*ππππ:* ' + age + ' aΓ±os' : ''}
*ππππππ:* ${limit} πππΎπ
*ππππππππππ:* ${registered ? 'Si': 'No'}
*πππππππ:* ${prem ? 'Si' : 'No'}
*ππππππ ππ πππππ:* 
${sn}`
conn.sendButton(m.chat, str, author, pp, [['ππππ', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
handler.register = true
export default handler
