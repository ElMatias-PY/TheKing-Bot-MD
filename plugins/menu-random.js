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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐ฅ๐๐ก๐๐ข๐ 

โญโโโโโโโโโโโโโโโฎ
โโค *๐ฅ๐๐ก๐๐ข๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค ๐พ _${usedPrefix}cristianoronaldo_
โโค ๐พ _${usedPrefix}messi_
โโค ๐พ _${usedPrefix}meme_
โโค ๐พ _${usedPrefix}itzy_
โโค ๐พ _${usedPrefix}blackpink_
โโค ๐พ _${usedPrefix}kpop *<blackpink / exo / bts>*_
โโค ๐พ _${usedPrefix}lolivid_
โโค ๐พ _${usedPrefix}loli_
โโค ๐พ _${usedPrefix}navidad_
โโค ๐พ _${usedPrefix}ppcouple_
โโค ๐พ _${usedPrefix}wpmontaรฑa_
โโค ๐พ _${usedPrefix}pubg_
โโค ๐พ _${usedPrefix}wpgaming_
โโค ๐พ _${usedPrefix}wpaesthetic_
โโค ๐พ _${usedPrefix}wpaesthetic2_
โโค ๐พ _${usedPrefix}wprandom_
โโค ๐พ _${usedPrefix}wallhp_
โโค ๐พ _${usedPrefix}wpvehiculo_
โโค ๐พ _${usedPrefix}wpmoto_
โโค ๐พ _${usedPrefix}coffee_
โโค ๐พ _${usedPrefix}pentol_
โโค ๐พ _${usedPrefix}caricatura_
โโค ๐พ _${usedPrefix}ciberespacio_
โโค ๐พ _${usedPrefix}technology_
โโค ๐พ _${usedPrefix}doraemon_
โโค ๐พ _${usedPrefix}hacker_
โโค ๐พ _${usedPrefix}planeta_
โโค ๐พ _${usedPrefix}randomprofile_
โโค ๐พ _${usedPrefix}neko_
โโค ๐พ _${usedPrefix}waifu_
โโค ๐พ _${usedPrefix}akira_
โโค ๐พ _${usedPrefix}akiyama_
โโค ๐พ _${usedPrefix}anna_
โโค ๐พ _${usedPrefix}asuna_
โโค ๐พ _${usedPrefix}ayuzawa_
โโค ๐พ _${usedPrefix}boruto_
โโค ๐พ _${usedPrefix}chiho_
โโค ๐พ _${usedPrefix}chitoge_
โโค ๐พ _${usedPrefix}deidara_
โโค ๐พ _${usedPrefix}erza_
โโค ๐พ _${usedPrefix}elaina_
โโค ๐พ _${usedPrefix}eba_
โโค ๐พ _${usedPrefix}emilia_
โโค ๐พ _${usedPrefix}hestia_
โโค ๐พ _${usedPrefix}hinata_
โโค ๐พ _${usedPrefix}inori_
โโค ๐พ _${usedPrefix}isuzu_
โโค ๐พ _${usedPrefix}itachi_
โโค ๐พ _${usedPrefix}itori_
โโค ๐พ _${usedPrefix}kaga_
โโค ๐พ _${usedPrefix}kagura_
โโค ๐พ _${usedPrefix}kaori_
โโค ๐พ _${usedPrefix}keneki_
โโค ๐พ _${usedPrefix}kotori_
โโค ๐พ _${usedPrefix}kurumi_
โโค ๐พ _${usedPrefix}madara_
โโค ๐พ _${usedPrefix}mikasa_
โโค ๐พ _${usedPrefix}miku_
โโค ๐พ _${usedPrefix}minato_
โโค ๐พ _${usedPrefix}naruto_
โโค ๐พ _${usedPrefix}nezuko_
โโค ๐พ _${usedPrefix}sagiri_
โโค ๐พ _${usedPrefix}sasuke_
โโค ๐พ _${usedPrefix}sakura_
โโค ๐พ _${usedPrefix}cosplay_
โฐโโโโโโโโโโโโโโโฏ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ ๐๐๐๐ ๐๐๐๐๐๐ ๐๏ธ', '.menu'],
['๐ฅต ๐๐๐๐๐๐๐ ๐ฅต', '.menu'],
['๐ฎ ๐๐๐๐๐ ๐ฎ', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menurandom|menurndm|memurandom)$/i
handler.fail = null
handler.register = true
export default  handler
