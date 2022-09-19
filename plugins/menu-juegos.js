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
*ミ💖 𝑯𝒐𝒍𝒂 _${username}_ 💖彡*
𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐 𝒂𝒍 𝒎𝒆𝒏𝒖 𝒅𝒆 𝒋𝒖𝒆𝒈𝒐𝒔  

╭──────────────╮
║➣ *𝐉𝐔𝐄𝐆𝐎𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
║➣° ඬ⃟🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
║➣° ඬ⃟🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}puto *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}puta *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}manco *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}manca *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}rata *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}follar *<nombre> / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}pfollar *<nombre> / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}minovia/o *<nombre> / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}ship_
║➣° ඬ⃟🎖️ _${usedPrefix}love *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}pregunta *<texto>*_
║➣° ඬ⃟🎖️ _${usedPrefix}suitpvp *<@tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}slot *<apuesta>*_
║➣° ඬ⃟🎖️ _${usedPrefix}ttt *<nombre sala>*_
║➣° ඬ⃟🎖️ _${usedPrefix}delttt_
║➣° ඬ⃟🎖️ _${usedPrefix}simi *<texto>*_
║➣° ඬ⃟🎖️ _${usedPrefix}top *<texto>*_
║➣° ඬ⃟🎖️ _${usedPrefix}topgays_
║➣° ඬ⃟🎖️ _${usedPrefix}topotakus_
║➣° ඬ⃟🎖️ _${usedPrefix}formarpareja_
║➣° ඬ⃟🎖️ _${usedPrefix}verdad_
║➣° ඬ⃟🎖️ _${usedPrefix}reto_
║➣° ඬ⃟🎖️ _${usedPrefix}cancion *adivina el nombre de la canción*_
║➣° ඬ⃟🎖️ _${usedPrefix}ñengo *adivinar canción de ñengo*_
║➣° ඬ⃟🎖️ _${usedPrefix}pista *pista del nombre de la canción*_
║➣° ඬ⃟🎖️ _${usedPrefix}acertijo_
╰──────────────╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒍𝒊𝒔𝒕𝒂𝒔 🗒️', '.menu'],
['🥵 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 🥵', '.owner'],
['📮 𝒅𝒐𝒏𝒂𝒓 📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menudejuegos|menujuegos|menugames|gamesmenu)$/i
handler.register = true
export default  handler
