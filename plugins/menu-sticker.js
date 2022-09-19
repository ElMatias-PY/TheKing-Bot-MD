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
𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐 𝒂𝒍 𝒎𝒆𝒏𝒖 𝒅𝒆 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒔 

╭──────────────╮
║➣ *𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟👽 _${usedPrefix}sticker *<responder a imagen o video>*_
║➣° ඬ⃟👽 _${usedPrefix}sticker *<enlace / link / url>*_
║➣° ඬ⃟👽 _${usedPrefix}s *<responder a imagen o video>*_
║➣° ඬ⃟👽 _${usedPrefix}s *<enlace / link / url>*_
║➣° ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
║➣° ඬ⃟👽 _${usedPrefix}scircle *<responder a imagen>*_
║➣° ඬ⃟👽 _${usedPrefix}sremovebg *<responder a imagen>*_
║➣° ඬ⃟👽 _${usedPrefix}semoji *<tipo> <emoji>*_
║➣° ඬ⃟👽 _${usedPrefix}attp *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}attp2 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}attp3 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}ttp *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}ttp2 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}ttp3 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}ttp4 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}ttp5 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}pat *<@tag>*_
║➣° ඬ⃟👽 _${usedPrefix}slap *<@tag>*_
║➣° ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_
║➣° ඬ⃟👽 _${usedPrefix}dado_
║➣° ඬ⃟👽 _${usedPrefix}wm *<packname> <author>*_
║➣° ඬ⃟👽 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
║➣° ඬ⃟👽 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
╰──────────────╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒍𝒊𝒔𝒕𝒂𝒔 🗒️', '.menu'],
['🥵 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 🥵', '.menu'],
['📮 𝒅𝒐𝒏𝒂𝒓 📮', '.donar']
], m)
}}
handler.help = ['menustickers']
handler.tags = ['main']
handler.command = /^(menusticker|menustickers)$/i
handler.fail = null
handler.register = true
export default  handler
