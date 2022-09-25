const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './+18.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ミ💖 𝗛𝗢𝗟𝗔 _${username}_ 💖彡*
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪

╭──────────────╮
║➤ *𝐌𝐄𝐍𝐔 +𝟏𝟖/>*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ ඬ⃟🔞 _${usedPrefix}pack_
║➤ ඬ⃟🔞 _${usedPrefix}pack2_
║➤ ඬ⃟🔞 _${usedPrefix}pack3_
║➤ ඬ⃟🔞 _${usedPrefix}videoxxx_
║➤ ඬ⃟🔞 _${usedPrefix}tiktokxxx_
║➤ ඬ⃟🔞 _${usedPrefix}tetas_
║➤ ඬ⃟🔞 _${usedPrefix}booty_
║➤ ඬ⃟🔞 _${usedPrefix}ecchi_
║➤ ඬ⃟🔞 _${usedPrefix}furro_
║➤ ඬ⃟🔞 _${usedPrefix}imagenlesbians_
║➤ ඬ⃟🔞 _${usedPrefix}panties_
║➤ ඬ⃟🔞 _${usedPrefix}pene_
║➤ ඬ⃟🔞 _${usedPrefix}porno_
║➤ ඬ⃟🔞 _${usedPrefix}porno2_
║➤ ඬ⃟🔞 _${usedPrefix}randomxxx_
║➤ ඬ⃟🔞 _${usedPrefix}pechos_
║➤ ඬ⃟🔞 _${usedPrefix}yaoi_
║➤ ඬ⃟🔞 _${usedPrefix}yaoi2_
║➤ ඬ⃟🔞 _${usedPrefix}yuri_
║➤ ඬ⃟🔞 _${usedPrefix}yuri2_
║➤ ඬ⃟🔞 _${usedPrefix}trapito_
║➤ ඬ⃟🔞 _${usedPrefix}hentai_
║➤ ඬ⃟🔞 _${usedPrefix}nsfwloli_
║➤ ඬ⃟🔞 _${usedPrefix}nsfworgy_
║➤ ඬ⃟🔞 _${usedPrefix}nsfwfoot_
║➤ ඬ⃟🔞 _${usedPrefix}nsfwass_
║➤ ඬ⃟🔞 _${usedPrefix}nsfwbdsm_
║➤ ඬ⃟🔞 _${usedPrefix}nsfwcum_
║➤ ඬ⃟🔞 _${usedPrefix}nsfwero_
║➤ ඬ⃟🔞 _${usedPrefix}nsfwfemdom_
║➤ ඬ⃟🔞 _${usedPrefix}nsfwglass_
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
handler.command = /^(menunsfw|menuhot|menuhorny|nsfwmenu|menu+18)$/i
handler.exp = 85
handler.register = true
export default  handler
