/* Created By https://github.com/ALBERTO9883 */
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
let sfoto = fs.readFileSync('./Menu2.jpg')
if (!text) throw `*[โ] ๐๐ง๐ ๐ซ๐๐ฌ๐ ๐๐ฅ ๐ง๐จ๐ฆ๐๐ซ๐ ๐๐๐ฅ ๐ฉ๐๐ช๐ฎ๐๐ญ๐ ๐ช๐ฎ๐ ๐๐๐ฌ๐๐ ๐๐ฎ๐ฌ๐๐๐ซ*`
let json = await fetch(`https://api.zacros.my.id/search/sticker?query=${text}`)
let jsons = await json.json()
  let res = jsons.result.map((v, index) => `*๐ชด โข ๐๐๐๐๐๐๐๐๐:* ${1 + index}\n*๐ต โข ๐๐๐๐๐๐:* ${v.title}\n*๐ โข ๐๐๐:* ${v.url}`).join`\n\nโโโโโโโโโโโโโโโโโโโโโ\n\n`
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let buttonMessage= {
'document': { url: `https://instagram.com/matiass.zzz` },
'mimetype': `application/${document}`,
'fileName': `ใ  ๐ฏ๐๐๐๐ ๐พ๐๐๐๐ ใ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://instagram.com/matiass.zzz',
'mediaType': 2,
'previewType': 'pdf',
'title': `โข Resultados Encontrados๐`,
'body': wm,
'thumbnail': sfoto,
'sourceUrl': 'hhttps://instagram.com/matiass.zzz'}},
'caption': res,
'footer': `โข ๐๐ข ๐๐๐ฌ๐๐ ๐๐๐ฌ๐๐๐ซ๐ ๐๐ซ ๐ฎ๐ง\n*๐๐๐ช๐ฎ๐๐ญ๐ ๐๐ ๐ฌ๐ญ๐ข๐๐ค๐๐ซ๐ฌ*\n*๐๐ฌ๐๐ซ๐ข๐๐ ${usedPrefix}stickerpack <URL>*`,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '๐๐๐๐'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.command = ['stickersearch', 'searchsticker', 'stickerssearch', 'searchstickers']
export default handler
