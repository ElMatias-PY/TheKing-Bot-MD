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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦

┏━━━━━━━━━━━━━┓
┃ *<𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔍 _${usedPrefix}animeinfo *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}google *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}imagen *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}letra *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}wikipedia *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}ytsearch *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}igstalk *<nombre de usuario>*_
┣ ඬ⃟🔍 _${usedPrefix}igstalk2 *<nombre de usuario>*_
┣ ඬ⃟🔍 _${usedPrefix}tiktokstalk *<nombre de usuario>*_
┣ ඬ⃟🔍 _${usedPrefix}sweb *link*_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙻𝙸𝚂𝚃𝙰𝚂 🗒️', '.menu'],
['🥵 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 🥵', '.menu'],
['📮 𝙳𝙾𝙽𝙰𝚁📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menubusqueda|menubusc|memubusq|menubusquedas)$/i
handler.fail = null
handler.register = true
export default  handler
