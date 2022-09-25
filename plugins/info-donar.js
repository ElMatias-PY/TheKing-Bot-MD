let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇     「 𝐃𝐎𝐍𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ 𝐇𝐎𝐋𝐀 ${name} 😘*
*┃*
*┃ 👉🏻 𝐀𝐐𝐔𝐈 𝐀𝐋𝐆𝐔𝐍𝐎𝐒 𝐃𝐀𝐓𝐎𝐒*
*┃ 𝐏𝐎𝐑 𝐒𝐈 𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐀𝐏𝐎𝐘𝐀𝐑 :𝟹*
*┃*
*┃𝐒𝐈𝐆𝐔𝐄𝐌𝐄 𝐄𝐍 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌* 
*┃ ➤ 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼: https://instagram.com/matiass.zzz*
*┃*
*┃ 👉🏻 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐀𝐌𝐄 𝐒𝐈 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐀𝐒 𝐌𝐀𝐒*
*┃ 𝐃𝐀𝐓𝐎𝐒 𝐏𝐀𝐑𝐀 𝐀𝐆𝐑𝐀𝐃𝐄𝐂𝐄𝐑𝐓𝐄 <𝟹*
*┃ wa.me/595985958156*
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://instagram.com/matiass.zzz', '𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌', null, null, [['𝐌𝐄𝐍𝐔', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
