import util from 'util'
import path from 'path'
import fs from 'fs'
let handler = async (m, { conn}) => {
await conn.sendMessage(m.chat, { react: { text: '✨', key: m.key } })
let pp = './Menu2.jpg'
let name = conn.getName(m.sender)
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : 69, status: 1, surface : 1, message: '𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
let fgac = [ pp, "adri"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 

conn.sendHydrated(m.chat, `\𝐇𝐎𝐋𝐀 *${name}* 𝐏𝐔𝐓𝐀 \n\n*𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐀𝐒 𝐀𝐘𝐔𝐃𝐀??*`, wm, null, 'https://instagram.com/matiass.zzz', '𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌', null, null, [ 
      ['⦙☰ 𝐌𝐄𝐍𝐔', '.help'],
      ['⦙☰ 𝐂𝐑𝐄𝐀𝐃𝐎𝐑', '.owner'],
      ['⦙☰ 𝐃𝐎𝐍𝐀𝐑', '.donar'],
    ], m)
// conn.sendFile(m.chat, null, null, m, null, true, {
// type: 'audioMessage', 
// ptt: true
// })
}
handler.customPrefix = /^(bot|robot)$/i
handler.command = new RegExp
export default handler
