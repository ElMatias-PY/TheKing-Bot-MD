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
*ใ๐ ๐๐ข๐๐ _${username}_ ๐ๅฝก*
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ ๐๐จ๐๐๐ข๐ฆ  ๐ฌ ๐ง๐ข๐ฃ๐ฆ

โญโโโโโโโโโโโโโโโฎ
โโค *๐๐๐ผ๐พ๐๐/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค ๐ฎ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
โโค ๐ฎ _${usedPrefix}ppt *<papel / tijera /piedra>*_
โโค ๐ฎ _${usedPrefix}prostituto *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}prostituta *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}gay2 *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}lesbiana *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}pajero *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}pajera *<nombre / @tag>*_
โโค ๐ฎ_${usedPrefix}puto *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}puta *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}manco *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}manca *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}rata *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}follar *<nombre> / @tag>*_
โโค ๐ฎ _${usedPrefix}pfollar *<nombre> / @tag>*_
โโค ๐ฎ _${usedPrefix}minovia/o *<nombre> / @tag>*_
โโค ๐ฎ _${usedPrefix}ship_
โโค ๐ฎ _${usedPrefix}love *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}doxear *<nombre / @tag>*_
โโค ๐ฎ _${usedPrefix}pregunta *<texto>*_
โโค ๐ฎ _${usedPrefix}suitpvp *<@tag>*_
โโค ๐ฎ _${usedPrefix}slot *<apuesta>*_
โโค ๐ฎ _${usedPrefix}ttt *<nombre sala>*_
โโค ๐ฎ _${usedPrefix}delttt_
โโค ๐ฎ _${usedPrefix}simi *<texto>*_
โโค ๐ฎ _${usedPrefix}formarpareja_
โโค ๐ฎ _${usedPrefix}formartrio_
โโค ๐ฎ _${usedPrefix}verdad_
โโค ๐ฎ _${usedPrefix}reto_
โโค ๐ฎ _${usedPrefix}cancion *adivina el nombre de la canciรณn*_
โโค ๐ฎ _${usedPrefix}รฑengo *adivinar canciรณn de รฑengo*_
โโค ๐ฎ _${usedPrefix}pista *pista del nombre de la canciรณn*_
โโค ๐ฎ _${usedPrefix}acertijo *adivina el acertijo*_
โฐโโโโโโโโโโโโโโโฏ
โญโโโโโโโโโโโโโโโฎ
โโค *๐๐ผโ๐ ๐๐โ๐/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค ๐ฅ _${usedPrefix}topgays_
โโค ๐ฅ _${usedPrefix}topput@s_
โโค ๐ฅ _${usedPrefix}topotakus_
โโค ๐ฅ _${usedPrefix}topfamos@s_
โโค ๐ฅ _${usedPrefix}topparejas_
โโค ๐ฅ _${usedPrefix}toplagrasa_
โโค ๐ฅ _${usedPrefix}topshiposters_
โโค ๐ฅ _${usedPrefix}topshipost_
โโค ๐ฅ _${usedPrefix}toppanafrescos_
โโค ๐ฅ _${usedPrefix}toppajeros_
โโค ๐ฅ _${usedPrefix}topintegrantes_
โฐโโโโโโโโโโโโโโโฏ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ ๐๐๐๐ ๐๐๐๐๐๐ ๐๏ธ', '.menu'],
['๐ฅต ๐๐๐๐๐๐๐ ๐ฅต', '.owner'],
['๐ฎ ๐๐๐๐๐ ๐ฎ', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menudejuegos|menujuegos|menugames|gamesmenu|menutops|topsmenu|gamestops)$/i
handler.register = true
export default  handler
