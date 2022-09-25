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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠

╭──────────────╮
║➤ *𝗥𝗔𝗡𝗗𝗢𝗠/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 👾 _${usedPrefix}cristianoronaldo_
║➤ 👾 _${usedPrefix}messi_
║➤ 👾 _${usedPrefix}meme_
║➤ 👾 _${usedPrefix}itzy_
║➤ 👾 _${usedPrefix}blackpink_
║➤ 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
║➤ 👾 _${usedPrefix}lolivid_
║➤ 👾 _${usedPrefix}loli_
║➤ 👾 _${usedPrefix}navidad_
║➤ 👾 _${usedPrefix}ppcouple_
║➤ 👾 _${usedPrefix}wpmontaña_
║➤ 👾 _${usedPrefix}pubg_
║➤ 👾 _${usedPrefix}wpgaming_
║➤ 👾 _${usedPrefix}wpaesthetic_
║➤ 👾 _${usedPrefix}wpaesthetic2_
║➤ 👾 _${usedPrefix}wprandom_
║➤ 👾 _${usedPrefix}wallhp_
║➤ 👾 _${usedPrefix}wpvehiculo_
║➤ 👾 _${usedPrefix}wpmoto_
║➤ 👾 _${usedPrefix}coffee_
║➤ 👾 _${usedPrefix}pentol_
║➤ 👾 _${usedPrefix}caricatura_
║➤ 👾 _${usedPrefix}ciberespacio_
║➤ 👾 _${usedPrefix}technology_
║➤ 👾 _${usedPrefix}doraemon_
║➤ 👾 _${usedPrefix}hacker_
║➤ 👾 _${usedPrefix}planeta_
║➤ 👾 _${usedPrefix}randomprofile_
║➤ 👾 _${usedPrefix}neko_
║➤ 👾 _${usedPrefix}waifu_
║➤ 👾 _${usedPrefix}akira_
║➤ 👾 _${usedPrefix}akiyama_
║➤ 👾 _${usedPrefix}anna_
║➤ 👾 _${usedPrefix}asuna_
║➤ 👾 _${usedPrefix}ayuzawa_
║➤ 👾 _${usedPrefix}boruto_
║➤ 👾 _${usedPrefix}chiho_
║➤ 👾 _${usedPrefix}chitoge_
║➤ 👾 _${usedPrefix}deidara_
║➤ 👾 _${usedPrefix}erza_
║➤ 👾 _${usedPrefix}elaina_
║➤ 👾 _${usedPrefix}eba_
║➤ 👾 _${usedPrefix}emilia_
║➤ 👾 _${usedPrefix}hestia_
║➤ 👾 _${usedPrefix}hinata_
║➤ 👾 _${usedPrefix}inori_
║➤ 👾 _${usedPrefix}isuzu_
║➤ 👾 _${usedPrefix}itachi_
║➤ 👾 _${usedPrefix}itori_
║➤ 👾 _${usedPrefix}kaga_
║➤ 👾 _${usedPrefix}kagura_
║➤ 👾 _${usedPrefix}kaori_
║➤ 👾 _${usedPrefix}keneki_
║➤ 👾 _${usedPrefix}kotori_
║➤ 👾 _${usedPrefix}kurumi_
║➤ 👾 _${usedPrefix}madara_
║➤ 👾 _${usedPrefix}mikasa_
║➤ 👾 _${usedPrefix}miku_
║➤ 👾 _${usedPrefix}minato_
║➤ 👾 _${usedPrefix}naruto_
║➤ 👾 _${usedPrefix}nezuko_
║➤ 👾 _${usedPrefix}sagiri_
║➤ 👾 _${usedPrefix}sasuke_
║➤ 👾 _${usedPrefix}sakura_
║➤ 👾 _${usedPrefix}cosplay_
╰──────────────╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓𝐀𝐒 🗒️', '.menu'],
['🥵 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 🥵', '.menu'],
['📮 𝐃𝐎𝐍𝐀𝐑 📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menurandom|menurndm|memurandom)$/i
handler.fail = null
handler.register = true
export default  handler
