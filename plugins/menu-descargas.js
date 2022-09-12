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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 

╭──────────────╮
║➣ *𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟📥 _${usedPrefix}facebook *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}mediafire *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}gitclone *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}gdrive *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}tiktok *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}play.1 *<texto / enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}play.2 *<texto / enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}play *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}playdoc *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}playlist *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}playlist2 *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}spotify *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}ringtone *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}soundcloud *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}imagen *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}pinteret *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}wallpaper *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}wallpaper2 *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
║➣° ඬ⃟📥 _${usedPrefix}igstalk *<nombre de usuario>*_
║➣° ඬ⃟📥 _${usedPrefix}igstory *<nombre de usuario>*_
║➣° ඬ⃟📥 _${usedPrefix}tiktokstalk *<nombre de usuario>*_
╰──────────────╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙻𝙸𝚂𝚃𝙰𝚂 🗒️', '.menu'],
['🥵 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 🥵', '.owner'],
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menudescargas|menudedescargas|descargasmenu|download)$/i
handler.register = true
export default  handler
