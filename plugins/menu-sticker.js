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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 

╭──────────────╮
║➤ *𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 👽 _${usedPrefix}sticker *<responder a imagen o video>*_
║➤ 👽 _${usedPrefix}sticker *<enlace / link / url>*_
║➤ 👽 _${usedPrefix}s *<responder a imagen o video>*_
║➤ 👽 _${usedPrefix}s *<enlace / link / url>*_
║➤ 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
║➤ 👽 _${usedPrefix}scircle *<responder a imagen>*_
║➤ 👽 _${usedPrefix}sremovebg *<responder a imagen>*_
║➤ 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
║➤ 👽 _${usedPrefix}attp *<texto>*_
║➤ 👽 _${usedPrefix}attp2 *<texto>*_
║➤ 👽 _${usedPrefix}attp3 *<texto>*_
║➤ 👽 _${usedPrefix}ttp *<texto>*_
║➤ 👽 _${usedPrefix}ttp2 *<texto>*_
║➤ 👽 _${usedPrefix}ttp3 *<texto>*_
║➤ 👽 _${usedPrefix}ttp4 *<texto>*_
║➤ 👽 _${usedPrefix}ttp5 *<texto>*_
║➤ 👽 _${usedPrefix}pat *<@tag>*_
║➤ 👽 _${usedPrefix}slap *<@tag>*_
║➤ 👽 _${usedPrefix}kiss *<@tag>*_
║➤ 👽 _${usedPrefix}dado_
║➤ 👽 _${usedPrefix}wm *<packname> <author>*_
║➤ 👽 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
║➤ 👽 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
╰──────────────╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓𝐀𝐒 🗒️', '.menu'],
['🥵 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 🥵', '.menu'],
['📮 𝐃𝐎𝐍𝐀𝐑 📮', '.donar']
], m)
}}
handler.help = ['menustickers']
handler.tags = ['main']
handler.command = /^(menusticker|menustickers)$/i
handler.fail = null
handler.register = true
export default  handler
