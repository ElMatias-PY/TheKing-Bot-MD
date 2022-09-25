/* Created By https://github.com/ALBERTO9883 */
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
let sfoto = fs.readFileSync('./Menu2.jpg')
if (!text) throw `*[❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐩𝐚𝐪𝐮𝐞𝐭𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐞 𝐛𝐮𝐬𝐜𝐚𝐫*`
let json = await fetch(`https://api.zacros.my.id/search/sticker?query=${text}`)
let jsons = await json.json()
  let res = jsons.result.map((v, index) => `*🪴 • 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎:* ${1 + index}\n*🌵 • 𝐍𝐎𝐌𝐁𝐑𝐄:* ${v.title}\n*🍂 • 𝐔𝐑𝐋:* ${v.url}`).join`\n\n─────────────────────\n\n`
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let buttonMessage= {
'document': { url: `https://instagram.com/matiass.zzz` },
'mimetype': `application/${document}`,
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://instagram.com/matiass.zzz',
'mediaType': 2,
'previewType': 'pdf',
'title': `• Resultados Encontrados🔎`,
'body': wm,
'thumbnail': sfoto,
'sourceUrl': 'hhttps://instagram.com/matiass.zzz'}},
'caption': res,
'footer': `• 𝐒𝐢 𝐝𝐞𝐬𝐞𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐮𝐧\n*𝐏𝐚𝐪𝐮𝐞𝐭𝐞 𝐝𝐞 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬*\n*𝐄𝐬𝐜𝐫𝐢𝐛𝐚 ${usedPrefix}stickerpack <URL>*`,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝐌𝐄𝐍𝐔'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.command = ['stickersearch', 'searchsticker', 'stickerssearch', 'searchstickers']
export default handler
