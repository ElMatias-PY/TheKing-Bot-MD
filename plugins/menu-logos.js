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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗟𝗢𝗚𝗢𝗦
╭──────────────╮
║➤ *𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕃𝕆𝔾𝕆𝕊/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
║➤ 🖍️ _${usedPrefix}logocorazon *<texto>*_
║➤ 🖍️ _${usedPrefix}logochristmas *<texto>*_
║➤ 🖍️ _${usedPrefix}simpcard *<@tag>*_
║➤ 🖍️ _${usedPrefix}hornycard *<@tag>*_
║➤ 🖍️ _${usedPrefix}lolice *<@tag>*_
║➤ 🖍️ _${usedPrefix}ytcomment *<texto>*_
║➤ 🖍️ _${usedPrefix}phmaker *<opcion><responder a imagen>*_
║➤ 🖍️ _${usedPrefix}itssostupid_
║➤ 🖍️ _${usedPrefix}pixelar_
║➤ 🖍️ _${usedPrefix}blur_
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
handler.command = /^(menuefectos|efectoslogos|efectosdelogos|logosefectos|logodeefecto)$/i
handler.exp = 85
handler.register = true
export default  handler
