import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
m.reply(m.chat, '*_Toma mi rey, aquí tienes el link del grupo👇_*\n\nhttps://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: 'https://instagram.com/matiass.zzz', mediaType: 2, description: `prueba`, 
title: '𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾',
body: '𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭',         
previewType: 1, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: null}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^(link)$/i
handler.group = true
handler.botAdmin = true
export default handler
