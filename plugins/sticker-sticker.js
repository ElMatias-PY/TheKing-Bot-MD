import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐯𝐢𝐝𝐞𝐨 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐝𝐮𝐫𝐚𝐫 𝐦𝐚𝐬 𝐝𝐞 𝟕 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬*')
let img = await q.download?.()

if (!img) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨, 𝐢𝐦𝐚𝐠𝐞𝐧 𝐨 𝐢𝐧𝐬𝐞𝐫𝐭𝐞 𝐞𝐥 𝐞𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐮𝐧𝐚 𝐭𝐞𝐫𝐦𝐢𝐧𝐚𝐜𝐢𝐨𝐧 .𝐉𝐏𝐆 𝐞𝐥 𝐜𝐮𝐚𝐥 𝐬𝐞𝐫𝐚 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐝𝐨 𝐞𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫, 𝐝𝐞𝐛𝐞 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐨 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${usedPrefix + command}*`

let out
try {
stiker = await sticker(img, false, global.packname, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)

else return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐞𝐧𝐥𝐚𝐜𝐞 /𝐮𝐫𝐥 /𝐥𝐢𝐧𝐤 𝐧𝐨 𝐞𝐬 𝐯𝐚𝐥𝐢𝐝𝐚, 𝐥𝐚 𝐭𝐞𝐫𝐦𝐢𝐧𝐚𝐜𝐢𝐨𝐧 𝐝𝐞𝐥 𝐞𝐧𝐥𝐚𝐜𝐞  /𝐮𝐫𝐥 /𝐥𝐢𝐧𝐤 𝐝𝐞𝐛𝐞 𝐬𝐞𝐫 .𝐉𝐏𝐆. 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: #s https://telegra.ph/file/0dc687c61410765e98de2.jpg*')
  
}
} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)

else throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨, 𝐨𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫, 𝐧𝐨 𝐨𝐥𝐯𝐢𝐝𝐞 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨, 𝐢𝐦𝐚𝐠𝐞𝐧 𝐨 𝐢𝐧𝐬𝐞𝐫𝐭𝐞 𝐮𝐧 𝐞𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 .𝐉𝐏𝐆 𝐞𝐥 𝐜𝐮𝐚𝐥 𝐬𝐞𝐫𝐚 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐝𝐨 𝐞𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫*'

}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
