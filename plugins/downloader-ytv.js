import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {

await conn.sendMessage(m.chat, { react: { text: 'ā°', key: m.key } })

if (!args[0]) throw '*[āššššā] šš§š¬šš«š­š šš„ ššØš¦šš§ššØ š¦šš¬ šš„ šš§š„ššš/š„š¢š§š¤ šš š®š§ šÆš¢šššØ šš ššØš®šš®šš*'
await m.reply(`*ā° šš šš š”š šššššš šššš š š¢ š£šššš...ā°*\n\n*ā šš š š¢ š£šššš šš šš  ššš£šššš, ššš¢ššš š¢š šššš šš ššššššš #playdoc į“ #play.2 į“ #ytmp4doc ā*`)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `ā¢ šššššš: ${ttl}\nā¢ šššš ššš ššššš: ${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
await conn.reply(m.chat, '*[ā] šš«š«šØš«, š§šØ šš®š š©šØš¬š¢šš„š ššš¬ššš«š šš« šš„ šÆš¢šššØ*', m)}
}
handler.command = /^getvid|yt(v|mp4)?$/i
export default handler

/*let limit = 50
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) throw `*[āššššā] šøš½šš“ššš“ š“š» š²š¾š¼š°š½š³š¾ š¼š°š š“š» š“š½š»š°š²š“ / š»šøš½šŗ š³š“ šš½ ššøš³š“š¾ š³š“ šš¾šššš±š“*`
conn.reply(m.chat, `*_ā³Sį“ į“sį“į“ į“Źį“į“į“sį“É“į“į“ Sį“ į“ ÉŖį“į“į“...ā³_*\n\n*ā SÉŖ Sį“ į“ ÉŖį“į“į“ É“į“ į“s į“É“į“ ÉŖį“į“į“, į“Źį“į“Źį“ į“į“É“ į“Ź į“į“į“į“É“į“į“ #playdoc į“ #play.2 į“ #ytmp4doc ā*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'šš“šæšš¾š³šš²šš¾š š³š“ ššøš³š“š¾',
body: 'ŹŹ į“Źį“ į“Źsį“ÉŖį“ ļ¹£ Źį“į“',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 350 : limit) * 3074
let video, source, res, link, lastError, isLimit
for (let i in _video) {
try {
video = _video[i]
isLimit = limitedSize < video.fileSizeH
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
if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw '*[ā] š“ššš¾š: ' + (lastError || 'š½š¾ šµšš“ šæš¾ššøš±š»š“ š³š“šš²š°šš¶š°š š“š» ššøš³š“š¾*')
let _thumb = {}
try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
catch (e) { }
conn.sendFile(m.chat, link, title + '.mp4', `
*š„ ššøššš»š¾:* ${title}
*š šæš“šš¾ š³š“š» ššøš³š“š¾:* ${video.fileSizeH}
`.trim(), m, false, {
..._thumb,
asDocument: chat.useDocument
})}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.register = true
export default handler*/
