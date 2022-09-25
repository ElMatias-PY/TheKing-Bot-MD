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
║➤ *𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 🔍 _${usedPrefix}stickersearch *<texto>*_
║➤ 🔍 _${usedPrefix}xnxxsearch *<texto>*_
║➤ 🔍 _${usedPrefix}animeinfo *<texto>*_
║➤ 🔍 _${usedPrefix}google *<texto>*_
║➤ 🔍 _${usedPrefix}letra *<texto>*_
║➤ 🔍 _${usedPrefix}wikipedia *<texto>*_
║➤ 🔍 _${usedPrefix}ytsearch *<texto>*_
║➤ 🔍 _${usedPrefix}apkdone *<texto>*_
║➤ 🔍 _${usedPrefix}apkgoogle *<texto>*_
║➤ 🔍 _${usedPrefix}apkmody *<texto>*_
║➤ 🔍 _${usedPrefix}apkshub *<texto>*_
║➤ 🔍 _${usedPrefix}happymod *<texto>*_
║➤ 🔍 _${usedPrefix}hostapk *<texto>*_
║➤ 🔍 _${usedPrefix}revdl *<texto>*_
║➤ 🔍 _${usedPrefix}toraccino *<texto>*_
║➤ 🔍 _${usedPrefix}uapkpro *<texto>*_
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
handler.command = /^(menubusquedas|buscadores|busquedamenu)$/i
handler.register = true
export default  handler
