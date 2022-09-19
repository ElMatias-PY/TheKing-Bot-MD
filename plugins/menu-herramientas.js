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
*ミ💖 𝑯𝒐𝒍𝒂 _${username}_ 💖彡*
𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐 𝒂𝒍 𝒎𝒆𝒏𝒖 𝒅𝒆 𝒉𝒆𝒓𝒓𝒂𝒎𝒊𝒆𝒏𝒕𝒂𝒔 

╭──────────────╮
║➣ *𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🛠️ _${usedPrefix}afk *<motivo>*_
║➣° ඬ⃟🛠️ _${usedPrefix}ocr *<responde a imagen>*_
║➣° ඬ⃟🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
║➣° ඬ⃟🛠️ _${usedPrefix}calc *<operacion math>*_
║➣° ඬ⃟🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
║➣° ඬ⃟🛠️ _${usedPrefix}whatmusic *<responde a un audio>*_
║➣° ඬ⃟🛠️ _${usedPrefix}qrcode *<texto>*_
║➣° ඬ⃟🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
║➣° ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
║➣° ඬ⃟🛠️ _${usedPrefix}styletext *<texto>*_
║➣° ඬ⃟🛠️ _${usedPrefix}traducir *<texto>*_
║➣° ඬ⃟🛠️ _${usedPrefix}nowa *<numero>*_
║➣° ඬ⃟🛠️ _${usedPrefix}repetir *<texto>*
║➣° ඬ⃟🛠️ _${usedPrefix}repetir2 *<texto>*
║➣° ඬ⃟🛠️ _${usedPrefix}tiempo *<localidad>*
╰──────────────╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒍𝒊𝒔𝒕𝒂𝒔 🗒️', '.menu'],
['🥵 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 🥵', '.owner'],
['📮 𝒅𝒐𝒏𝒂𝒓 📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuherramientas|menuherra|memuherramientas|menuherramientas|menúherramientas)$/i
handler.fail = null
handler.register = true
export default  handler
