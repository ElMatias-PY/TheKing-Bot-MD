import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let sremovebg = global.API(`https://violetics.pw/api/media/removebg?apikey=beta&img=${url}`) 
let stickerr = await sticker(false, sremovebg, global.packname, global.author)
conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨, 𝐨𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫, 𝐧𝐨 𝐨𝐥𝐯𝐢𝐝𝐞 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐥𝐚 𝐜𝐮𝐚𝐥 𝐬𝐞 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐫𝐚 𝐞𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐬𝐢𝐧 𝐟𝐨𝐧𝐝𝐨*')
}}
handler.command = /^sremovebg|removebg$/i
export default handler
