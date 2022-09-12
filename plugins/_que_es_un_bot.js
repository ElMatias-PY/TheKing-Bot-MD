import util from 'util'
import path from 'path'
import fs from 'fs'
let handler = async (m, { conn}) => {
await conn.sendMessage(m.chat, { react: { text: '🤖', key: m.key } })
let pp = './Menu2.jpg'
let name = conn.getName(m.sender)
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : 69, status: 1, surface : 1, message: '𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
let fgac = [ pp, "adri"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 

conn.sendHydrated(m.chat, `\n𝙷𝙾𝙻𝙰 *${name}* \n\n*¿Que es un Bot de WhatsApp?*

*_Un Bot es una inteligencia artificial que puede realizar tareas cómo_*

*-Descargar músicas*
*-Descargar vídeos*
*-Hacer stickers*
*-Crear logos personalizados, etc*

*_Esto de forma automatizada, o sea que un humano no interfiere en el proceso_*

*-Para ver el menú de comandos escriba #menu*`, wm, null, 'https://instagram.com/matiass.zzz', 'Sigueme en Instagram', null, null, [ 
      ['⦙☰ 𝙼𝙴𝙽𝚄', '.help'],
      ['⦙☰ 𝙲𝚁𝙴𝙰𝙳𝙾𝚁', '.owner'],
      ['⦙☰ 𝙳𝙾𝙽𝙰𝚁', '.donar'],
    ], m)
// conn.sendFile(m.chat, null, null, m, null, true, {
// type: 'audioMessage', 
// ptt: true
// })
}
handler.customPrefix = /^(que es un bot|que es bot|q es un bot)$/i
handler.command = new RegExp
export default handler
