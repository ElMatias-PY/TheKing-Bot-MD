import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐢𝐦𝐚𝐠𝐞𝐧 𝐞𝐥 𝐜𝐮𝐚𝐥 𝐬𝐞𝐫𝐚 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐝𝐨 𝐚 𝐞𝐧𝐥𝐚𝐜𝐞*'
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`*𝙴𝙽𝙻𝙰𝙲𝙴 𝙰 𝚂𝚄 𝙰𝚁𝙲𝙷𝙸𝚅𝙾:* ${link}`)
}
handler.help = ['tourl <reply image>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl)$/i
export default handler
