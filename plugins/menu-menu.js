import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
*📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
*📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*
*🔐 𝙲𝙷𝙰𝚃𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙰𝚂: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}*
*🔐 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ${Object.entries(global.db.data.users).filter(user => user[1].isBanned).length}*

╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║═ *𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣ *✨𝗛ola, ${name}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣ *Creador del Bot: Matias*
║➣ *N° del creador:* *wa.me/595985958156*
║➣ *IG del creador:* *https://instagram.com/matiass.zzz*
╰══╡✯✯✯✯✯✯✯✯╞══╯
╭──────────────╮
║➣ *𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐁𝐎𝐓/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ ⃟ 💟 _${usedPrefix}estado_
║➣° ඬ ⃟ 💟 _${usedPrefix}infobot_
║➣° ඬ ⃟ 💟 _${usedPrefix}grouplist_
║➣° ඬ ⃟ 💟 _${usedPrefix}owner_
║➣° ඬ ⃟ 💟 _${usedPrefix}script_
║➣° ඬ ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╰──────────────╯
╭──────────────╮
║➣ *𝐔𝐍𝐄 𝐔𝐍 𝐁𝐎𝐓 𝐀 𝐓𝐔 𝐆𝐑𝐔𝐏𝐎/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣ *AÑADE AL BOT A TU GRUPO Y DALE ADMIN*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟👽 _${usedPrefix}join *<enlace / link / url>*_
╰──────────────╯
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
║➣° ඬ⃟🎖️ _${usedPrefix}follar @tag>*_
║➣° ඬ⃟🎖️ _${usedPrefix}pfollar @tag>*_
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
║➣° ඬ⃟🎖️ _${usedPrefix}acertijo*_
╰──────────────╯
╭──────────────╮
║➣ *𝐀𝐂𝐓𝐈𝐕𝐀𝐑/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟✅ _${usedPrefix}enable *welcome*_
║➣° ඬ⃟✅ _${usedPrefix}enable *modohorny*_
║➣° ඬ⃟✅ _${usedPrefix}enable *antilink*_
║➣° ඬ⃟✅ _${usedPrefix}enable *antilink2*_
║➣° ඬ⃟✅ _${usedPrefix}enable *detect*_
║➣° ඬ⃟✅ _${usedPrefix}enable *audios*_
║➣° ඬ⃟✅ _${usedPrefix}enable *autosticker*_
║➣° ඬ⃟✅ _${usedPrefix}enable *antiviewonce*_
║➣° ඬ⃟✅ _${usedPrefix}enable *antitoxic*_
║➣° ඬ⃟✅ _${usedPrefix}enable *antitraba*_
║➣° ඬ⃟✅ _${usedPrefix}enable *antiarabes*_
╰──────────────╯
╭──────────────╮
║➣ *𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟❎ _${usedPrefix}disable *welcome*_
║➣° ඬ⃟❎ _${usedPrefix}disable *modohorny*_
║➣° ඬ⃟❎ _${usedPrefix}disable *antilink*_
║➣° ඬ⃟❎ _${usedPrefix}disable *antilink2*_
║➣° ඬ⃟❎ _${usedPrefix}disable *detect*_
║➣° ඬ⃟❎ _${usedPrefix}disable *audios*_
║➣° ඬ⃟❎ _${usedPrefix}disable *autosticker*_
║➣° ඬ⃟❎ _${usedPrefix}disable *antiviewonce*_
║➣° ඬ⃟❎ _${usedPrefix}disable *antitoxic*_
║➣° ඬ⃟❎ _${usedPrefix}disable *antitraba*_
║➣° ඬ⃟❎ _${usedPrefix}disable *Antiarabes*_
╰──────────────╯
╭──────────────╮
║➣ *𝐑𝐄𝐏𝐎𝐑𝐓𝐄𝐒 𝐃𝐄 𝐅𝐀𝐋𝐋𝐎𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🔰 _${usedPrefix}reporte *<texto>*_
╰──────────────╯
╭──────────────╮
║➣ *𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟📥 _${usedPrefix}facebook *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}mediafire *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}gitclone *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}gdrive *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}tiktok *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}play.1 *<texto / enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}play.2 *<texto / enlace / link / url>*_
║➣° ඬ⃟📥 _${usedPrefix}play *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}playdoc *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}playlist *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}playlist2 *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}spotify *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}ringtone *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}soundcloud *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}imagen *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}pinteret *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}wallpaper *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}wallpaper2 *<texto>*_
║➣° ඬ⃟📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
║➣° ඬ⃟📥 _${usedPrefix}igstalk *<nombre de usuario>*_
║➣° ඬ⃟📥 _${usedPrefix}igstory *<nombre de usuario>*_
║➣° ඬ⃟📥 _${usedPrefix}tiktokstalk *<nombre de usuario>*_
╰──────────────╯
╭──────────────╮
║➣ *𝐆𝐑𝐔𝐏𝐎𝐒/>* 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟💎 _${usedPrefix}add *<numero>*_
║➣° ඬ⃟💎 _${usedPrefix}kick *<@tag>*_
║➣° ඬ⃟💎 _${usedPrefix}grupo *<abrir / cerrar>*_
║➣° ඬ⃟💎 _${usedPrefix}promote *<@tag>*_
║➣° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
║➣° ඬ⃟💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
║➣° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
║➣° ඬ⃟💎 _${usedPrefix}infogroup_
║➣° ඬ⃟💎 _${usedPrefix}link_
║➣° ඬ⃟💎 _${usedPrefix}setname *<texto>*_
║➣° ඬ⃟💎 _${usedPrefix}setdesc *<texto>*_
║➣° ඬ⃟💎 _${usedPrefix}invocar *<texto>*_
║➣° ඬ⃟💎 _${usedPrefix}setwelcome *<texto>*_
║➣° ඬ⃟💎 _${usedPrefix}setbye *<texto>*_
║➣° ඬ⃟💎 _${usedPrefix}hidetag *<texto>*_
║➣° ඬ⃟💎 _${usedPrefix}fantasmas_
║➣° ඬ⃟💎 _${usedPrefix}destraba_
╰──────────────╯
╭──────────────╮
║➣ *𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🧧 _${usedPrefix}togifaud *<responde a un video>*_
║➣° ඬ⃟🧧 _${usedPrefix}toimg *<responde a un sticker>*_
║➣° ඬ⃟🧧 _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
║➣° ඬ⃟🧧 _${usedPrefix}toptt *<responde a un video / audio>*_
║➣° ඬ⃟🧧 _${usedPrefix}tovideo *<responde a un sticker>*_
║➣° ඬ⃟🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
║➣° ඬ⃟🧧 _${usedPrefix}tts es *<texto>*_
╰──────────────╯
╭──────────────╮
║➣ *𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐋𝐎𝐆𝐎𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🖍️ _${usedPrefix}logos *<efecto> <texto>*_
║➣° ඬ⃟🖍️ _${usedPrefix}logocorazon *<texto>*_
║➣° ඬ⃟🖍️ _${usedPrefix}logochristmas *<texto>*_
║➣° ඬ⃟🖍️ _${usedPrefix}simpcard *<@tag>*_
║➣° ඬ⃟🖍️ _${usedPrefix}hornycard *<@tag>*_
║➣° ඬ⃟🖍️ _${usedPrefix}lolice *<@tag>*_
║➣° ඬ⃟🖍️ _${usedPrefix}ytcomment *<texto>*_
║➣° ඬ⃟🖍️ _${usedPrefix}phmaker *<opcion><responder a imagen>*_
║➣° ඬ⃟🖍️ _${usedPrefix}itssostupid_
║➣° ඬ⃟🖍️ _${usedPrefix}pixelar_
║➣° ඬ⃟🖍️ _${usedPrefix}blur_
╰──────────────╯
╭──────────────╮
║➣ *𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🥀 _${usedPrefix}consejo_
║➣° ඬ⃟🥀 _${usedPrefix}fraseromantica_
║➣° ඬ⃟🥀 _${usedPrefix}historiaromantica_
╰──────────────╯
╭──────────────╮
║➣ *𝐑𝐀𝐍𝐃𝐎𝐌/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟👾 _${usedPrefix}cristianoronaldo_
║➣° ඬ⃟👾 _${usedPrefix}messi_
║➣° ඬ⃟👾 _${usedPrefix}meme_
║➣° ඬ⃟👾 _${usedPrefix}itzy_
║➣° ඬ⃟👾 _${usedPrefix}blackpink_
║➣° ඬ⃟👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
║➣° ඬ⃟👾 _${usedPrefix}lolivid_
║➣° ඬ⃟👾 _${usedPrefix}loli_
║➣° ඬ⃟👾 _${usedPrefix}navidad_
║➣° ඬ⃟👾 _${usedPrefix}ppcouple_
║➣° ඬ⃟👾 _${usedPrefix}wpmontaña_
║➣° ඬ⃟👾 _${usedPrefix}pubg_
║➣° ඬ⃟👾 _${usedPrefix}wpgaming_
║➣° ඬ⃟👾 _${usedPrefix}wpaesthetic_
║➣° ඬ⃟👾 _${usedPrefix}wpaesthetic2_
║➣° ඬ⃟👾 _${usedPrefix}wprandom_
║➣° ඬ⃟👾 _${usedPrefix}wallhp_
║➣° ඬ⃟👾 _${usedPrefix}wpvehiculo_
║➣° ඬ⃟👾 _${usedPrefix}wpmoto_
║➣° ඬ⃟👾 _${usedPrefix}coffee_
║➣° ඬ⃟👾 _${usedPrefix}pentol_
║➣° ඬ⃟👾 _${usedPrefix}caricatura_
║➣° ඬ⃟👾 _${usedPrefix}ciberespacio_
║➣° ඬ⃟👾 _${usedPrefix}technology_
║➣° ඬ⃟👾 _${usedPrefix}doraemon_
║➣° ඬ⃟👾 _${usedPrefix}hacker_
║➣° ඬ⃟👾 _${usedPrefix}planeta_
║➣° ඬ⃟👾 _${usedPrefix}randomprofile_
║➣° ඬ⃟👾 _${usedPrefix}neko_
║➣° ඬ⃟👾 _${usedPrefix}waifu_
║➣° ඬ⃟👾 _${usedPrefix}akira_
║➣° ඬ⃟👾 _${usedPrefix}akiyama_
║➣° ඬ⃟👾 _${usedPrefix}anna_
║➣° ඬ⃟👾 _${usedPrefix}asuna_
║➣° ඬ⃟👾 _${usedPrefix}ayuzawa_
║➣° ඬ⃟👾 _${usedPrefix}boruto_
║➣° ඬ⃟👾 _${usedPrefix}chiho_
║➣° ඬ⃟👾 _${usedPrefix}chitoge_
║➣° ඬ⃟👾 _${usedPrefix}deidara_
║➣° ඬ⃟👾 _${usedPrefix}erza_
║➣° ඬ⃟👾 _${usedPrefix}elaina_
║➣° ඬ⃟👾 _${usedPrefix}eba_
║➣° ඬ⃟👾 _${usedPrefix}emilia_
║➣° ඬ⃟👾 _${usedPrefix}hestia_
║➣° ඬ⃟👾 _${usedPrefix}hinata_
║➣° ඬ⃟👾 _${usedPrefix}inori_
║➣° ඬ⃟👾 _${usedPrefix}isuzu_
║➣° ඬ⃟👾 _${usedPrefix}itachi_
║➣° ඬ⃟👾 _${usedPrefix}itori_
║➣° ඬ⃟👾 _${usedPrefix}kaga_
║➣° ඬ⃟👾 _${usedPrefix}kagura_
║➣° ඬ⃟👾 _${usedPrefix}kaori_
║➣° ඬ⃟👾 _${usedPrefix}keneki_
║➣° ඬ⃟👾 _${usedPrefix}kotori_
║➣° ඬ⃟👾 _${usedPrefix}kurumi_
║➣° ඬ⃟👾 _${usedPrefix}madara_
║➣° ඬ⃟👾 _${usedPrefix}mikasa_
║➣° ඬ⃟👾 _${usedPrefix}miku_
║➣° ඬ⃟👾 _${usedPrefix}minato_
║➣° ඬ⃟👾 _${usedPrefix}naruto_
║➣° ඬ⃟👾 _${usedPrefix}nezuko_
║➣° ඬ⃟👾 _${usedPrefix}sagiri_
║➣° ඬ⃟👾 _${usedPrefix}sasuke_
║➣° ඬ⃟👾 _${usedPrefix}sakura_
║➣° ඬ⃟👾 _${usedPrefix}cosplay_
╰──────────────╯
╭──────────────╮
║➣ *𝐌𝐄𝐍𝐔 +𝟏𝟖/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🔞 _${usedPrefix}pack_
║➣° ඬ⃟🔞 _${usedPrefix}pack2_
║➣° ඬ⃟🔞 _${usedPrefix}pack3_
║➣° ඬ⃟🔞 _${usedPrefix}videoxxx_
║➣° ඬ⃟🔞 _${usedPrefix}tiktokxxx_
║➣° ඬ⃟🔞 _${usedPrefix}tetas_
║➣° ඬ⃟🔞 _${usedPrefix}booty_
║➣° ඬ⃟🔞 _${usedPrefix}ecchi_
║➣° ඬ⃟🔞 _${usedPrefix}furro_
║➣° ඬ⃟🔞 _${usedPrefix}imagenlesbians_
║➣° ඬ⃟🔞 _${usedPrefix}panties_
║➣° ඬ⃟🔞 _${usedPrefix}pene_
║➣° ඬ⃟🔞 _${usedPrefix}porno_
║➣° ඬ⃟🔞 _${usedPrefix}porno2_
║➣° ඬ⃟🔞 _${usedPrefix}randomxxx_
║➣° ඬ⃟🔞 _${usedPrefix}pechos_
║➣° ඬ⃟🔞 _${usedPrefix}yaoi_
║➣° ඬ⃟🔞 _${usedPrefix}yaoi2_
║➣° ඬ⃟🔞 _${usedPrefix}yuri_
║➣° ඬ⃟🔞 _${usedPrefix}yuri2_
║➣° ඬ⃟🔞 _${usedPrefix}trapito_
║➣° ඬ⃟🔞 _${usedPrefix}hentai_
║➣° ඬ⃟🔞 _${usedPrefix}nsfwloli_
║➣° ඬ⃟🔞 _${usedPrefix}nsfworgy_
║➣° ඬ⃟🔞 _${usedPrefix}nsfwfoot_
║➣° ඬ⃟🔞 _${usedPrefix}nsfwass_
║➣° ඬ⃟🔞 _${usedPrefix}nsfwbdsm_
║➣° ඬ⃟🔞 _${usedPrefix}nsfwcum_
║➣° ඬ⃟🔞 _${usedPrefix}nsfwero_
║➣° ඬ⃟🔞 _${usedPrefix}nsfwfemdom_
║➣° ඬ⃟🔞 _${usedPrefix}nsfwglass_
╰──────────────╯
╭──────────────╮
║➣ *𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒/>*
║➣ *- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🎤 _${usedPrefix}bass_
║➣° ඬ⃟🎤 _${usedPrefix}blown_
║➣° ඬ⃟🎤 _${usedPrefix}deep_
║➣° ඬ⃟🎤 _${usedPrefix}earrape_
║➣° ඬ⃟🎤 _${usedPrefix}fast_
║➣° ඬ⃟🎤 _${usedPrefix}fat_
║➣° ඬ⃟🎤 _${usedPrefix}nightcore_
║➣° ඬ⃟🎤 _${usedPrefix}reverse_
║➣° ඬ⃟🎤 _${usedPrefix}robot_
║➣° ඬ⃟🎤 _${usedPrefix}slow_
║➣° ඬ⃟🎤 _${usedPrefix}smooth_
║➣° ඬ⃟🎤 _${usedPrefix}tupai_
╰──────────────╯
╭──────────────╮
║➣ *𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟📳 _${usedPrefix}start_
║➣° ඬ⃟📳 _${usedPrefix}next_
║➣° ඬ⃟📳 _${usedPrefix}leave_
╰──────────────╯
╭──────────────╮
║➣ *𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🔍 _${usedPrefix}stickersearch *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}xnxxsearch *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}animeinfo *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}google *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}letra *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}wikipedia *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}ytsearch *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}apkdone *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}apkgoogle *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}apkmody *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}apkshub *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}happymod *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}hostapk *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}revdl *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}toraccino *<texto>*_
║➣° ඬ⃟🔍 _${usedPrefix}uapkpro *<texto>*_
╰──────────────╯
╭──────────────╮
║➣ *𝐀𝐔𝐃𝐈𝐎𝐒/>* 
║➣ *- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
║➣° ඬ⃟🔊 _Te diagnostico con gay_
║➣° ඬ⃟🔊 _A nadie le importa_
║➣° ඬ⃟🔊 _Fiesta del admin_
║➣° ඬ⃟🔊 _Fiesta del administrador_ 
║➣° ඬ⃟🔊 _Vivan los novios_
║➣° ඬ⃟🔊 _Feliz cumpleaños_
║➣° ඬ⃟🔊 _Noche de paz_
║➣° ඬ⃟🔊 _Buenos dias_
║➣° ඬ⃟🔊 _Buenos tardes_
║➣° ඬ⃟🔊 _Buenos noches_
║➣° ඬ⃟🔊 _Audio hentai_
║➣° ඬ⃟🔊 _Chica lgante_
║➣° ඬ⃟🔊 _Feliz navidad_
║➣° ඬ⃟🔊 _Vete a la vrg_
║➣° ඬ⃟🔊 _Pasa pack Bot_
║➣° ඬ⃟🔊 _Atencion grupo_
║➣° ඬ⃟🔊 _Marica quien_
║➣° ඬ⃟🔊 _Murio el grupo_
║➣° ඬ⃟🔊 _Oh me vengo_
║➣° ඬ⃟🔊 _tio que rico_
║➣° ඬ⃟🔊 _Viernes_
║➣° ඬ⃟🔊 _Baneado_
║➣° ඬ⃟🔊 _Sexo_
║➣° ඬ⃟🔊 _Hola_
║➣° ඬ⃟🔊 _Un pato_
║➣° ඬ⃟🔊 _Nyanpasu_
║➣° ඬ⃟🔊 _Te amo_
║➣° ඬ⃟🔊 _Yamete_
║➣° ඬ⃟🔊 _Bañate_
║➣° ඬ⃟🔊 _Es puto_
║➣° ඬ⃟🔊 _La biblia_
║➣° ඬ⃟🔊 _Onichan_
║➣° ඬ⃟🔊 _Mierda de Bot_
║➣° ඬ⃟🔊 _Siuuu_
║➣° ඬ⃟🔊 _Epico_
║➣° ඬ⃟🔊 _Shitpost_
║➣° ඬ⃟🔊 _Rawr_
║➣° ඬ⃟🔊 _UwU_
║➣° ඬ⃟🔊 _:c_
║➣° ඬ⃟🔊 _a_
╰──────────────╯
╭──────────────╮
║➣ *𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟🛠️ _${usedPrefix}afk *<motivo>*_
║➣° ඬ⃟🛠️ _${usedPrefix}ocr *<responde a imagen>*_
║➣° ඬ⃟🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
║➣° ඬ⃟🛠️ _${usedPrefix}calc *<operacion math>*_
║➣° ඬ⃟🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
║➣° ඬ⃟🛠️ _${usedPrefix}whatmusic *<responde a un audio>*_
║➣° ඬ⃟🛠️ _${usedPrefix}qrcode *<texto>*_
║➣° ඬ⃟🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
║➣° ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
║➣° ඬ⃟🛠️ _${usedPrefix}styletext *<texto>*_
║➣° ඬ⃟🛠️ _${usedPrefix}traducir *<texto>*_
║➣° ඬ⃟🛠️ _${usedPrefix}nowa *<numero>*_
╰──────────────╯
╭──────────────╮
*𝐑𝐏𝐆 - 𝐋𝐈𝐌𝐈𝐓𝐄𝐒 - 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟💵 _${usedPrefix}balance_
║➣° ඬ⃟💵 _${usedPrefix}claim_
║➣° ඬ⃟💵 _${usedPrefix}lb_
║➣° ඬ⃟💵 _${usedPrefix}levelup_
║➣° ඬ⃟💵 _${usedPrefix}myns_
║➣° ඬ⃟💵 _${usedPrefix}perfil_
║➣° ඬ⃟💵 _${usedPrefix}work_
║➣° ඬ⃟💵 _${usedPrefix}minar_
║➣° ඬ⃟💵 _${usedPrefix}buy_
║➣° ඬ⃟💵 _${usedPrefix}buyall_
║➣° ඬ⃟💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
║➣° ඬ⃟💵 _${usedPrefix}verificar_
║➣° ඬ⃟💵 _${usedPrefix}unreg *<numero de serie>*_
╰──────────────╯
╭──────────────╮
║➣ *𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟👽 _${usedPrefix}sticker *<responder a imagen o video>*_
║➣° ඬ⃟👽 _${usedPrefix}sticker *<enlace / link / url>*_
║➣° ඬ⃟👽 _${usedPrefix}s *<responder a imagen o video>*_
║➣° ඬ⃟👽 _${usedPrefix}s *<enlace / link / url>*_
║➣° ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
║➣° ඬ⃟👽 _${usedPrefix}scircle *<responder a imagen>*_
║➣° ඬ⃟👽 _${usedPrefix}sremovebg *<responder a imagen>*_
║➣° ඬ⃟👽 _${usedPrefix}semoji *<tipo> <emoji>*_
║➣° ඬ⃟👽 _${usedPrefix}attp *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}attp2 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}attp3 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}ttp *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}ttp2 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}ttp3 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}ttp4 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}ttp5 *<texto>*_
║➣° ඬ⃟👽 _${usedPrefix}pat *<@tag>*_
║➣° ඬ⃟👽 _${usedPrefix}slap *<@tag>*_
║➣° ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_
║➣° ඬ⃟👽 _${usedPrefix}dado_
║➣° ඬ⃟👽 _${usedPrefix}wm *<packname> <author>*_
║➣° ඬ⃟👽 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
║➣° ඬ⃟👽 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
╰──────────────╯
╭──────────────╮
║➣ *𝐎𝐖𝐍𝐄𝐑 𝐘 𝐌𝐎𝐃𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➣° ඬ⃟👑 _${usedPrefix}cajafuerte_
║➣° ඬ⃟👑 _${usedPrefix}enable *restrict*_
║➣° ඬ⃟👑 _${usedPrefix}disable *restrict*_
║➣° ඬ⃟👑 _${usedPrefix}enable *autoread*_
║➣° ඬ⃟👑 _${usedPrefix}disable *autoread*_
║➣° ඬ⃟👑 _${usedPrefix}enable *public*_
║➣° ඬ⃟👑 _${usedPrefix}disable *public*_
║➣° ඬ⃟👑 _${usedPrefix}enable *pconly*_
║➣° ඬ⃟👑 _${usedPrefix}disable *pconly*_
║➣° ඬ⃟👑 _${usedPrefix}enable *gconly*_
║➣° ඬ⃟👑 _${usedPrefix}disable *gconly*_
║➣° ඬ⃟👑 _${usedPrefix}enable *anticall*_
║➣° ඬ⃟👑 _${usedPrefix}disable *anticall*_
║➣° ඬ⃟👑 _${usedPrefix}enable *antiprivado*_
║➣° ඬ⃟👑 _${usedPrefix}disable *antiprivado*_
║➣° ඬ⃟👑 _${usedPrefix}enable *antitraba*_
║➣° ඬ⃟👑 _${usedPrefix}disable *antitraba*_
║➣° ඬ⃟👑 _${usedPrefix}spamgp *<link>*
║➣° ඬ⃟👑 _${usedPrefix}msg *<texto>*_
║➣° ඬ⃟👑 _${usedPrefix}banchat_
║➣° ඬ⃟👑 _${usedPrefix}unbanchat_
║➣° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
║➣° ඬ⃟👑 _${usedPrefix}unbanuser *<@tag>*_
║➣° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
║➣° ඬ⃟👑 _${usedPrefix}banlist_
║➣° ඬ⃟👑 _${usedPrefix}bc *<texto>*_
║➣° ඬ⃟👑 _${usedPrefix}bcchats *<texto>*_
║➣° ඬ⃟👑 _${usedPrefix}bcgc *<texto>*_
║➣° ඬ⃟👑 _${usedPrefix}añadirdiamantes *<@tag>* *<cantidad>*_
║➣° ඬ⃟👑 _${usedPrefix}añadirxp *<@tag>* *<cantidad>*_
║➣° ඬ⃟👑 _${usedPrefix}añadirtokens *<@tag>* *<cantidad>*_
║➣° ඬ⃟👑 _${usedPrefix}cleartpm_
║➣° ඬ⃟👑 _${usedPrefix}restart_
║➣° ඬ⃟👑 _${usedPrefix}update_
║➣° ඬ⃟👑 _${usedPrefix}traba1_ 
║➣° ඬ⃟👑 _${usedPrefix}addprem *<@tag>*_
║➣° ඬ⃟👑 _${usedPrefix}delprem *<@tag>*_
║➣° ඬ⃟👑 _${usedPrefix}listprem_
╰──────────────╯
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://instagram.com/matiass.zzz', '𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼', 'wa.me/595985958156', '𝙽° 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁', [
['𝙱𝙾𝚃🤖', 'bot'],
['𝙲𝚁𝙴𝙰𝙳𝙾𝚁🥵', '/owner'],
['𝙿𝙸𝙽𝙶🚀', '/ping'],
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help= ['menu', 'help', '?', 'mcmpto']
handler.tags = ['main']
handler.command = /^(menucompleto|menucomp|menucmpto)$/i
handler.exp = 50
handler.fail = null
export default handler 

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
