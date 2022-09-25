import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐚𝐥 𝐯𝐢𝐝𝐞𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐞 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐫 𝐚 𝐧𝐨𝐭𝐚 𝐝𝐞 𝐯𝐨𝐳*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨, 𝐨𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐚𝐥 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐬𝐮 𝐯𝐢𝐝𝐞𝐨, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐯𝐮𝐞𝐥𝐯𝐚 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨*'
if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨, 𝐨𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐚𝐥 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐬𝐮 𝐚𝐮𝐝𝐢𝐨, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐯𝐮𝐞𝐥𝐯𝐚 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨, 𝐨𝐜𝐮𝐫𝐫𝐢𝐨 𝐚𝐥 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐫 𝐬𝐮 𝐚𝐮𝐝𝐢𝐨 𝐚 𝐧𝐨𝐭𝐚 𝐝𝐞 𝐯𝐨𝐳, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐯𝐮𝐞𝐥𝐯𝐚 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨*'
if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨, 𝐨𝐜𝐮𝐫𝐫𝐢𝐨 𝐚𝐥 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐫 𝐬𝐮 𝐯𝐢𝐝𝐞𝐨 𝐚 𝐧𝐨𝐭𝐚 𝐝𝐞 𝐯𝐨𝐳, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐯𝐮𝐞𝐥𝐯𝐚 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^to(vn|(ptt)?)$/i
export default handler
