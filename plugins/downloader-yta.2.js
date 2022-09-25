let limit = 80
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐬𝐞𝐫𝐭𝐞 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐦𝐚𝐬 𝐞𝐥 𝐞𝐧𝐥𝐚𝐜𝐞/𝐥𝐢𝐧𝐤 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞*'
await conn.reply(m.chat, `*⏰ 𝑆𝑒 𝑒𝑠𝑡𝑎 𝑝𝑟𝑜𝑐𝑒𝑠𝑎𝑛𝑑𝑜 𝑠𝑢 𝑣𝑖𝑑𝑒𝑜...⏰*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝚁𝙴𝙿𝚁𝙾𝙳𝚄𝙲𝚃𝙾𝚁 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾 𝚅𝟸',
body: 'ʙʏ ᴛʜᴇ ᴋɪɴɢ ﹣ ʙᴏᴛ',
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://instagram.com/matiass.zzz`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSize
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}}
await conn.sendMessage(m.chat, { document: { url: link}, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: m})
}
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
handler.register = true
export default handler
