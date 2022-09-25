import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐮𝐧 𝐞𝐧𝐥𝐚𝐜𝐞 𝐯𝐚𝐥𝐢𝐝𝐨 𝐝𝐞 𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞, 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${usedPrefix + command} https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*𝐍𝐎𝐌𝐁𝐑𝐄:* ${filename}
*𝐏𝐄𝐒𝐎:* ${filesizeH}
*𝐓𝐈𝐏𝐎:* ${ext}

*⏳ 𝙴𝚂𝙿𝙴𝚁𝙴 𝙴𝙽 𝙻𝙾 𝚀𝚄𝙴 𝙴𝙽𝚅𝙸𝙾 𝚂𝚄 𝙰𝚁𝙲𝙷𝙸𝚅𝙾. . . .* 
*_- 𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂 𝙼𝙰𝚈𝙾𝚁𝙴𝚂 𝙰 𝟷00 𝙼𝙱 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝙽𝙾 𝚂𝙴𝙰𝙽 𝙴𝙽𝚅𝙸𝙰𝙳𝙾𝚂_* 
`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙳𝙴 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴',
body: 'ʙʏ ᴛʜᴇ ᴋɪɴɢ - ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐑𝐑𝐎𝐑, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*\n\n*- 𝐂𝐎𝐑𝐑𝐎𝐁𝐎𝐑𝐄 𝐐𝐔𝐄 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐒𝐄𝐀 𝐒𝐈𝐌𝐈𝐋𝐀𝐑 𝐀:*\n*◉ https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.register = true
export default handler
