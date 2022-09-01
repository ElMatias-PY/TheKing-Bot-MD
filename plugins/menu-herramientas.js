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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦

┏━━━━━━━━━━━━━┓
┃ *<𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣° ඬ⃟🛠️ _${usedPrefix}afk *<motivo>*_
┣° ඬ⃟🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┣° ඬ⃟🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┣° ඬ⃟🛠️ _${usedPrefix}calc *<operacion math>*_
┣° ඬ⃟🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
┣° ඬ⃟🛠️ _${usedPrefix}whatmusic *<responde a un audio>*_
┣° ඬ⃟🛠️ _${usedPrefix}qrcode *<texto>*_
┣° ඬ⃟🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┣° ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣° ඬ⃟🛠️ _${usedPrefix}styletext *<texto>*_
┣° ඬ⃟🛠️ _${usedPrefix}traducir *<texto>*_
┣° ඬ⃟🛠️ _${usedPrefix}nowa *<numero>*_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙻𝙸𝚂𝚃𝙰𝚂 🗒️', '.menu'],
['🥵 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 🥵', '.owner'],
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuherramientas|menuherra|memuherramientas|menuherramientas|menúherramientas)$/i
handler.fail = null
handler.register = true
export default  handler
