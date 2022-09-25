import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*𝐍𝐎𝐌𝐁𝐑𝐄:* ${username} ${registered ? '(' + name + ') ': ''}
*𝐍𝐔𝐌𝐄𝐑𝐎:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*𝐋𝐈𝐍𝐊:* wa.me/${who.split`@`[0]}${registered ? '\n*𝐄𝐃𝐀𝐃:* ' + age + ' años' : ''}
*𝐋𝐈𝐌𝐈𝐓𝐄:* ${limit} 𝚄𝚂𝙾𝚂
*𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎:* ${registered ? 'Si': 'No'}
*𝐏𝐑𝐄𝐌𝐈𝐔𝐌:* ${prem ? 'Si' : 'No'}
*𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄 𝐒𝐄𝐑𝐈𝐄:* 
${sn}`
conn.sendButton(m.chat, str, author, pp, [['𝐌𝐄𝐍𝐔', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
handler.register = true
export default handler
