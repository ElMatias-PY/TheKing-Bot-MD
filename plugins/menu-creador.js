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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗖𝗥𝗘𝗔𝗗𝗢𝗥𝗘𝗦 

╭──────────────╮
║➤ *𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 👑 _${usedPrefix}> *<funcion>*_
║➤ 👑 _${usedPrefix}=> *<funcion>*_
║➤ 👑 _${usedPrefix}$ *<funcion>*_
║➤ 👑 _${usedPrefix}cajafuerte_
║➤ 👑 _${usedPrefix}enable *restrict*_
║➤ 👑 _${usedPrefix}disable *restrict*_
║➤ 👑 _${usedPrefix}enable *autoread*_
║➤ 👑 _${usedPrefix}disable *autoread*_
║➤ 👑 _${usedPrefix}enable *public*_
║➤ 👑 _${usedPrefix}disable *public*_
║➤ 👑 _${usedPrefix}enable *pconly*_
║➤ 👑 _${usedPrefix}disable *pconly*_
║➤ 👑 _${usedPrefix}enable *gconly*_
║➤ 👑 _${usedPrefix}disable *gconly*_
║➤ 👑 _${usedPrefix}enable *anticall*_
║➤ 👑 _${usedPrefix}disable *anticall*_
║➤ 👑 _${usedPrefix}enable *antiprivado*_
║➤ 👑 _${usedPrefix}disable *antiprivado*_
║➤ 👑 _${usedPrefix}enable *antitraba*_
║➤ 👑 _${usedPrefix}disable *antitraba*_
║➤ 👑 _${usedPrefix}enable *antiarabes*_
║➤ 👑 _${usedPrefix}disable *antiarabes*_
║➤ 👑 _${usedPrefix}add *numero*_
║➤ 👑 _${usedPrefix}kick *<@tag*_
║➤ 👑 _${usedPrefix}spamgp *<link>*_
║➤ 👑 _${usedPrefix}msg *<texto>*_
║➤ 👑 _${usedPrefix}banchat_
║➤ 👑 _${usedPrefix}unbanchat_
║➤ 👑 _${usedPrefix}banuser *<@tag>*_
║➤ 👑 _${usedPrefix}unbanuser *<@tag>*_
║➤ 👑 _${usedPrefix}banuser *<@tag>*_
║➤ 👑 _${usedPrefix}banlist_
║➤ 👑 _${usedPrefix}block *<@tag>*_
║➤ 👑 _${usedPrefix}unblock *<@tag>*_
║➤ 👑 _${usedPrefix}getplugins *<plugin>*_
║➤ 👑 _${usedPrefix}df *<plugin>*_
║➤ 👑 _${usedPrefix}bc *<texto>*_
║➤ 👑 _${usedPrefix}bcchats *<texto>*_
║➤ 👑 _${usedPrefix}bcgc *<texto>*_
║➤ 👑 _${usedPrefix}añadirdiamantes *<@tag>* *<cantidad>*_
║➤ 👑 _${usedPrefix}añadirxp *<@tag>* *<cantidad>*_
║➤ 👑 _${usedPrefix}cleartpm_
║➤ 👑 _${usedPrefix}restart_
║➤ 👑 _${usedPrefix}update_
║➤ 👑 _${usedPrefix}traba1_ 
║➤ 👑 _${usedPrefix}addprem *<@tag>*_
║➤ 👑 _${usedPrefix}delprem *<@tag>*_
║➤ 👑 _${usedPrefix}listprem_
║➤ 👑 _${usedPrefix}listcmd_
║➤ 👑 _${usedPrefix}addcmd *<texto> <responder> a sticker/imagen>*_
║➤ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
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
handler.command = /^(menuowner|menucreador|memuowner|memucreador|omenu|omemu)$/i
handler.fail = null
handler.register = true
export default  handler
