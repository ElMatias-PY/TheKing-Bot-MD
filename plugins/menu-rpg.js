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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗘𝗖𝗢𝗡𝗢𝗠𝗜𝗖𝗢
╭──────────────╮
*ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀ℂ𝔸/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 💵 _${usedPrefix}balance_
║➤ 💵 _${usedPrefix}claim_
║➤ 💵 _${usedPrefix}lb_
║➤ 💵 _${usedPrefix}levelup_
║➤ 💵 _${usedPrefix}myns_
║➤ 💵 _${usedPrefix}perfil_
║➤ 💵 _${usedPrefix}work_
║➤ 💵 _${usedPrefix}minar_
║➤ 💵 _${usedPrefix}buy_
║➤ 💵 _${usedPrefix}buyall_
║➤ 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
║➤ 💵 _${usedPrefix}verificar_
║➤ 💵 _${usedPrefix}unreg *<numero de serie>*_
╰──────────────╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓𝐀𝐒 🗒️', '.menu'],
['🥵 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 🥵', '.owner'],
['📮 𝐃𝐎𝐍𝐀𝐑 📮', '.donar']
], m)
}}
handler.help = ['rpg', 'helprpg', '?rpg', 'menurpg']
handler.tags = ['main']
handler.command = /^(menurpg|rpgmenu|menueconomico|)$/i
handler.exp = 85
handler.register = true
export default  handler
