let handler = async (m, { conn, usedPrefix, command }) => {
 let name = conn.getName(m.sender)
 
await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
 let txt = `
Hola *${name}* 

*𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚈𝙰 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴🙂*`
    
     conn.sendHydrated(m.chat, txt, igfg, null, null, null, null, null, [
      ['⦙☰ 𝙼𝙴𝙽𝚄', '.menu'],
      ['⦙☰ 𝙼𝙴𝙽𝚄2', '.menucomp'],
    ], m)

} 

handler.command = ['serbot', 'jadibot'] 

export default handler