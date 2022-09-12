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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦 

╭──────────────╮
║➣ *𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🔍 _${usedPrefix}stickersearch *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}xnxxsearch *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}animeinfo *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}google *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}letra *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}wikipedia *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}ytsearch *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}apkdone *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}apkgoogle *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}apkmody *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}apkshub *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}happymod *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}hostapk *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}revdl *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}toraccino *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}uapkpro *<texto>*_
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
handler.command = /^(menubusquedas|buscadores|busquedamenu)$/i
handler.register = true
export default  handler
