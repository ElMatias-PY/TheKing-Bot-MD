import util from 'util'
import path from 'path'
import fs from 'fs'
let handler = async (m, { conn}) => {
await conn.sendMessage(m.chat, { react: { text: 'π€', key: m.key } })
let pp = './Menu2.jpg'
let name = conn.getName(m.sender)
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : 69, status: 1, surface : 1, message: 'ππ‘π ππ’π§π  - ππ¨π­', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
let fgac = [ pp, "adri"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 

conn.sendHydrated(m.chat, `\nπ·πΎπ»π° *${name}* \n\n*ΒΏQue es un Bot de WhatsApp?*

*_Un Bot es una inteligencia artificial que puede realizar tareas cΓ³mo_*

*-Descargar mΓΊsicas*
*-Descargar vΓ­deos*
*-Hacer stickers*
*-Crear logos personalizados, etc*

*_Esto de forma automatizada, o sea que un humano no interfiere en el proceso_*

*-Para ver el menΓΊ de comandos escriba #menu*`, wm, null, 'https://instagram.com/matiass.zzz', 'Sigueme en Instagram', null, null, [ 
      ['β¦β° πΌπ΄π½π', '.help'],
      ['β¦β° π²ππ΄π°π³πΎπ', '.owner'],
      ['β¦β° π³πΎπ½π°π', '.donar'],
    ], m)
// conn.sendFile(m.chat, null, null, m, null, true, {
// type: 'audioMessage', 
// ptt: true
// })
}
handler.customPrefix = /^(que es un bot|que es bot|q es un bot)$/i
handler.command = new RegExp
export default handler
