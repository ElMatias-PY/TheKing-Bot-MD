let limit = 80
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) throw '*[âđđđđâ] đđ§đŦđđĢđ­đ đđĨ đđ¨đĻđđ§đđ¨ đĻđđŦ đđĨ đđ§đĨđđđ/đĨđĸđ§đ¤ đđ đŽđ§ đ¯đĸđđđ¨ đđ đđ¨đŽđđŽđđ*'
conn.reply(m.chat, `*â° đđ đđ đĄđ đđđđđđ đđđđ đ đĸ đŖđđđđ...â°*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'đđ´đŋđđžđŗđđ˛đđžđ đŗđ´ đđ¸đŗđ´đž đđ¸',
body: 'ĘĘ á´Ęá´ á´ÉĒÉ´Éĸ īšŖ Ęá´á´',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
let video, source, res, link, lastError, isLimit
for (let i in _video) {
try {
video = _video[i]
isLimit = limitedSize < video.fileSize
if (isLimit) continue
link = await video.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
video = source = link = null
lastError = e
}}
conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'video/mp4', fileName: title + `.mp4`}, {quoted: m})
}
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i
handler.register = true
export default handler
