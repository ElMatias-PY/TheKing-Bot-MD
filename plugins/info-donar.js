let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇     「 𝐃𝐎𝐍𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙾𝙻𝙰 ${name} 💙*
*┃*
*┃ 👉🏻 𝙰𝚀𝚄𝙸 𝙰𝙻𝙶𝚄𝙽𝙾𝚂 𝙳𝙰𝚃𝙾𝚂*
*┃ 𝙿𝙾𝚁 𝚂𝙸 𝙶𝚄𝚂𝚃𝙰𝚂 𝙰𝙿𝙾𝚈𝙰𝚁 :𝟹*
*┃*
*┃𝚂𝙸𝙶𝚄𝙴𝙼𝙴 𝙴𝙽 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼* 
*┃ ➤ 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼: https://instagram.com/matiass.zzz*
*┃*
*┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝙼𝙴 𝚂𝙸 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 𝙼𝙰𝚂*
*┃ 𝙳𝙰𝚃𝙾𝚂 𝚈 𝙿𝙰𝚁𝙰 𝙰𝙶𝚁𝙰𝙳𝙴𝙲𝙴𝚁𝚃𝙴 <𝟹*
*┃ wa.me/595985958156*
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://instagram.com/matiass.zzz', '𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
