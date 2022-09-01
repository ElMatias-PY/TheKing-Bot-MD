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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗖𝗥𝗘𝗔𝗗𝗢𝗥

┏━━━━━━━━━━━━━┓
┃ *<COMANDOS CREADOR/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣° ඬ⃟👑 _${usedPrefix}cajafuerte_
┣° ඬ⃟👑 _${usedPrefix}enable *restrict*_
┣° ඬ⃟👑 _${usedPrefix}disable *restrict*_
┣° ඬ⃟👑 _${usedPrefix}enable *autoread*_
┣° ඬ⃟👑 _${usedPrefix}disable *autoread*_
┣° ඬ⃟👑 _${usedPrefix}enable *public*_
┣° ඬ⃟👑 _${usedPrefix}disable *public*_
┣° ඬ⃟👑 _${usedPrefix}enable *pconly*_
┣° ඬ⃟👑 _${usedPrefix}disable *pconly*_
┣° ඬ⃟👑 _${usedPrefix}enable *gconly*_
┣° ඬ⃟👑 _${usedPrefix}disable *gconly*_
┣° ඬ⃟👑 _${usedPrefix}enable *anticall*_
┣° ඬ⃟👑 _${usedPrefix}disable *anticall*_
┣° ඬ⃟👑 _${usedPrefix}enable *antiprivado*_
┣° ඬ⃟👑 _${usedPrefix}disable *antiprivado*_
┣° ඬ⃟👑 _${usedPrefix}enable *antitraba*_
┣° ඬ⃟👑 _${usedPrefix}disable *antitraba*_
┣° ඬ⃟👑 _${usedPrefix}spamgp *<link>*
┣° ඬ⃟👑 _${usedPrefix}msg *<texto>*_
┣° ඬ⃟👑 _${usedPrefix}banchat_
┣° ඬ⃟👑 _${usedPrefix}unbanchat_
┣° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
┣° ඬ⃟👑 _${usedPrefix}unbanuser *<@tag>*_
┣° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
┣° ඬ⃟👑 _${usedPrefix}banlist
┣° ඬ⃟👑 _${usedPrefix}bc *<texto>*_
┣° ඬ⃟👑 _${usedPrefix}bcchats *<texto>*_
┣° ඬ⃟👑 _${usedPrefix}bcgc *<texto>*_
┣° ඬ⃟👑 _${usedPrefix}añadirdiamantes *<@tag>* *<cantidad>*
┣° ඬ⃟👑 _${usedPrefix}añadirxp *<@tag>* *<cantidad>*
┣° ඬ⃟👑 _${usedPrefix}añadirtokens *<@tag>* *<cantidad>*
┣° ඬ⃟👑 _${usedPrefix}cleartpm_
┣° ඬ⃟👑 _${usedPrefix}restart_
┣° ඬ⃟👑 _${usedPrefix}update_
┣° ඬ⃟👑 _${usedPrefix}traba1_ 
┣° ඬ⃟👑 _${usedPrefix}addprem *<@tag>*_
┣° ඬ⃟👑 _${usedPrefix}delprem *<@tag>*_
┣° ඬ⃟👑 _${usedPrefix}listprem_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙻𝙸𝚂𝚃𝙰𝚂 🗒️', '.menu'],
['🥵 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 🥵', '.owner'],
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuowner|menucreador|memuowner|memucreador|omenu|omemu)$/i
handler.fail = null
handler.register = true
export default  handler
