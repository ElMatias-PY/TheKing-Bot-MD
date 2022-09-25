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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗝𝗨𝗘𝗚𝗢𝗦  𝗬 𝗧𝗢𝗣𝗦

╭──────────────╮
║➤ *𝕁𝕌𝔼𝔾𝕆𝕊/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 🎮 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
║➤ 🎮 _${usedPrefix}ppt *<papel / tijera /piedra>*_
║➤ 🎮 _${usedPrefix}prostituto *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}prostituta *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}gay2 *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}lesbiana *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}pajero *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}pajera *<nombre / @tag>*_
║➤ 🎮_${usedPrefix}puto *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}puta *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}manco *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}manca *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}rata *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}follar *<nombre> / @tag>*_
║➤ 🎮 _${usedPrefix}pfollar *<nombre> / @tag>*_
║➤ 🎮 _${usedPrefix}minovia/o *<nombre> / @tag>*_
║➤ 🎮 _${usedPrefix}ship_
║➤ 🎮 _${usedPrefix}love *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}doxear *<nombre / @tag>*_
║➤ 🎮 _${usedPrefix}pregunta *<texto>*_
║➤ 🎮 _${usedPrefix}suitpvp *<@tag>*_
║➤ 🎮 _${usedPrefix}slot *<apuesta>*_
║➤ 🎮 _${usedPrefix}ttt *<nombre sala>*_
║➤ 🎮 _${usedPrefix}delttt_
║➤ 🎮 _${usedPrefix}simi *<texto>*_
║➤ 🎮 _${usedPrefix}formarpareja_
║➤ 🎮 _${usedPrefix}formartrio_
║➤ 🎮 _${usedPrefix}verdad_
║➤ 🎮 _${usedPrefix}reto_
║➤ 🎮 _${usedPrefix}cancion *adivina el nombre de la canción*_
║➤ 🎮 _${usedPrefix}ñengo *adivinar canción de ñengo*_
║➤ 🎮 _${usedPrefix}pista *pista del nombre de la canción*_
║➤ 🎮 _${usedPrefix}acertijo *adivina el acertijo*_
╰──────────────╯
╭──────────────╮
║➤ *𝕄𝔼ℕ𝕌 𝕋𝕆ℙ𝕊/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 🥇 _${usedPrefix}topgays_
║➤ 🥇 _${usedPrefix}topput@s_
║➤ 🥇 _${usedPrefix}topotakus_
║➤ 🥇 _${usedPrefix}topfamos@s_
║➤ 🥇 _${usedPrefix}topparejas_
║➤ 🥇 _${usedPrefix}toplagrasa_
║➤ 🥇 _${usedPrefix}topshiposters_
║➤ 🥇 _${usedPrefix}topshipost_
║➤ 🥇 _${usedPrefix}toppanafrescos_
║➤ 🥇 _${usedPrefix}toppajeros_
║➤ 🥇 _${usedPrefix}topintegrantes_
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
handler.command = /^(menudejuegos|menujuegos|menugames|gamesmenu|menutops|topsmenu|gamestops)$/i
handler.register = true
export default  handler
