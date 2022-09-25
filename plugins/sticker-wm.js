import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐚 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐞 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐮𝐧 𝐩𝐚𝐪𝐮𝐞𝐭𝐞 𝐲 𝐮𝐧 𝐧𝐨𝐦𝐛𝐫𝐞*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐚 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐞 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐮𝐧 𝐩𝐚𝐪𝐮𝐞𝐭𝐞 𝐲 𝐮𝐧 𝐧𝐨𝐦𝐛𝐫𝐞*'
let img = await m.quoted.download()
if (!img) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐚 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐞 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐮𝐧 𝐩𝐚𝐪𝐮𝐞𝐭𝐞 𝐲 𝐮𝐧 𝐧𝐨𝐦𝐛𝐫𝐞*'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨,𝐚𝐥𝐠𝐨 𝐟𝐚𝐥𝐥𝐨... 𝐂𝐨𝐫𝐫𝐨𝐛𝐨𝐫𝐞 𝐪𝐮𝐞 𝐡𝐚𝐲𝐚𝐬 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐢𝐝𝐨 𝐚 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐲 𝐥𝐞 𝐡𝐚𝐲𝐚 𝐚𝐠𝐫𝐞𝐠𝐚𝐝𝐨 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐩𝐚𝐪𝐮𝐞𝐭𝐞 𝐲 𝐮𝐧 𝐧𝐨𝐦𝐛𝐫𝐞  𝐝𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^robar|wm$/i
export default handler
