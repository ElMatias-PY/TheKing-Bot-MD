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
*ใ๐ ๐๐ข๐๐ _${username}_ ๐ๅฝก*
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐ก๐ฆ๐๐ช

โญโโโโโโโโโโโโโโโฎ
โโค *๐๐๐๐ +๐๐/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค เถฌโ๐ _${usedPrefix}pack_
โโค เถฌโ๐ _${usedPrefix}pack2_
โโค เถฌโ๐ _${usedPrefix}pack3_
โโค เถฌโ๐ _${usedPrefix}videoxxx_
โโค เถฌโ๐ _${usedPrefix}tiktokxxx_
โโค เถฌโ๐ _${usedPrefix}tetas_
โโค เถฌโ๐ _${usedPrefix}booty_
โโค เถฌโ๐ _${usedPrefix}ecchi_
โโค เถฌโ๐ _${usedPrefix}furro_
โโค เถฌโ๐ _${usedPrefix}imagenlesbians_
โโค เถฌโ๐ _${usedPrefix}panties_
โโค เถฌโ๐ _${usedPrefix}pene_
โโค เถฌโ๐ _${usedPrefix}porno_
โโค เถฌโ๐ _${usedPrefix}porno2_
โโค เถฌโ๐ _${usedPrefix}randomxxx_
โโค เถฌโ๐ _${usedPrefix}pechos_
โโค เถฌโ๐ _${usedPrefix}yaoi_
โโค เถฌโ๐ _${usedPrefix}yaoi2_
โโค เถฌโ๐ _${usedPrefix}yuri_
โโค เถฌโ๐ _${usedPrefix}yuri2_
โโค เถฌโ๐ _${usedPrefix}trapito_
โโค เถฌโ๐ _${usedPrefix}hentai_
โโค เถฌโ๐ _${usedPrefix}nsfwloli_
โโค เถฌโ๐ _${usedPrefix}nsfworgy_
โโค เถฌโ๐ _${usedPrefix}nsfwfoot_
โโค เถฌโ๐ _${usedPrefix}nsfwass_
โโค เถฌโ๐ _${usedPrefix}nsfwbdsm_
โโค เถฌโ๐ _${usedPrefix}nsfwcum_
โโค เถฌโ๐ _${usedPrefix}nsfwero_
โโค เถฌโ๐ _${usedPrefix}nsfwfemdom_
โโค เถฌโ๐ _${usedPrefix}nsfwglass_
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
handler.command = /^(menunsfw|menuhot|menuhorny|nsfwmenu|menu+18)$/i
handler.exp = 85
handler.register = true
export default  handler
