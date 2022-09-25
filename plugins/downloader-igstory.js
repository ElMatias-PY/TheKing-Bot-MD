/* CREDITOS A https://github.com/FG98F */
import axios from 'axios'
import hx from 'hxz-api' 
let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐝𝐞 𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐝𝐞 𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦*\n\n*𝐄𝐣𝐞𝐦𝐩𝐥𝐨:*\n*${usedPrefix + command} matiass.zzz*`        
hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', null, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria' ]
handler.register = true
export default handler
