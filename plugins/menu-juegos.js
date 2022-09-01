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
*ミ💖 𝗛𝗢𝗟𝗔 _${username}_
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗧𝗢𝗣𝗦/𝗝𝗨𝗘𝗚𝗢𝗦 
┏━━━━━━━━━━━━━┓
┃ *<𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣° ඬ⃟🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣° ඬ⃟🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣° ඬ⃟🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
┣°ඬ⃟🎖️ _${usedPrefix}puto *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}puta *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}manco *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}manca *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}rata *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}follar @tag>_*
┣° ඬ⃟🎖️ _${usedPrefix}pfollar @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}ship
┣° ඬ⃟🎖️ _${usedPrefix}love *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}pregunta *<texto>*_
┣° ඬ⃟🎖️ _${usedPrefix}suitpvp *<@tag>*_
┣° ඬ⃟🎖️ _${usedPrefix}slot *<apuesta>*_
┣° ඬ⃟🎖️ _${usedPrefix}ttt *<nombre sala>*_
┣° ඬ⃟🎖️ _${usedPrefix}delttt_
┣° ඬ⃟🎖️ _${usedPrefix}simi *<texto>*_
┣° ඬ⃟🎖️ _${usedPrefix}top *<texto>*_
┣° ඬ⃟🎖️ _${usedPrefix}topgays_
┣° ඬ⃟🎖️ _${usedPrefix}topotakus_
┣° ඬ⃟🎖️ _${usedPrefix}formarpareja_
┣° ඬ⃟🎖️ _${usedPrefix}verdad_
┣° ඬ⃟🎖️ _${usedPrefix}reto_
┣° ඬ⃟🎖️ _${usedPrefix}cancion *adivinar nombre de la canción*_
┣° ඬ⃟🎖️ _${usedPrefix}ñengo *adivinar nombre de la canción de ñengo*_
┣° ඬ⃟🎖️ _${usedPrefix}pista *pista del nombre de la canción*_
┣° ඬ⃟🎖️ _${usedPrefix}acertijo_
┣° ඬ⃟🎖️ _${usedPrefix}zodiac *AAAA MM DD*_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙻𝙸𝚂𝚃𝙰𝚂 🗒️', '.menu'],
['🥵 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 🥵', '.owner']
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menujuegos|menutops)$/i
handler.fail = null
handler.register = true
export default  handler
