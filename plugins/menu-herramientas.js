const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ミ💖 𝗛𝗢𝗟𝗔 _${username}_ 💖彡*
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 

╭──────────────╮
║➤ *𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 🛠️ _${usedPrefix}afk *<motivo>*_
║➤ 🛠️ _${usedPrefix}ocr *<responde a imagen>*_
║➤ 🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
║➤ 🛠️ _${usedPrefix}calc *<operacion math>*_
║➤ 🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
║➤ 🛠️ _${usedPrefix}whatmusic *<responde a un audio>*_
║➤ 🛠️ _${usedPrefix}qrcode *<texto>*_
║➤ 🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
║➤ 🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
║➤ 🛠️ _${usedPrefix}styletext *<texto>*_
║➤ 🛠️ _${usedPrefix}traducir *<texto>*_
║➤ 🛠️ _${usedPrefix}nowa *<numero>*_
║➤ 🛠️ _${usedPrefix}repetir *<texto>*_
║➤ 🛠️ _${usedPrefix}repetir2 *<texto>*_
║➤ 🛠️ _${usedPrefix}tiempo *<localidad>*_
╰──────────────╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓𝐀𝐒 🗒️', '.menu'],
['🥵 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 🥵', '.owner'],
['📮 𝐃𝐎𝐍𝐀𝐑 📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuherramientas|menuherra|memuherramientas|menuherramientas|menúherramientas)$/i
handler.fail = null
handler.register = true
export default  handler
