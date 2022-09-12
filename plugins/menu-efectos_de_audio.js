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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢𝗦

╭──────────────╮
║➣ *𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒/>*
║➣ *- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🎤 _${usedPrefix}bass_
║➣° ඬ⃟🎤 _${usedPrefix}blown_
║➣° ඬ⃟🎤 _${usedPrefix}deep_
║➣° ඬ⃟🎤 _${usedPrefix}earrape_
║➣° ඬ⃟🎤 _${usedPrefix}fast_
║➣° ඬ⃟🎤 _${usedPrefix}fat_
║➣° ඬ⃟🎤 _${usedPrefix}nightcore_
║➣° ඬ⃟🎤 _${usedPrefix}reverse_
║➣° ඬ⃟🎤 _${usedPrefix}robot_
║➣° ඬ⃟🎤 _${usedPrefix}slow_
║➣° ඬ⃟🎤 _${usedPrefix}smooth_
║➣° ඬ⃟🎤 _${usedPrefix}tupai_
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
handler.command = /^(efectosdeaudios|efectosaudios|menuefectos|audiosefec)$/i
handler.register = true
export default  handler
