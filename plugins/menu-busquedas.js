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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ ๐๐จ๐ฆ๐ค๐จ๐๐๐๐ฆ 

โญโโโโโโโโโโโโโโโฎ
โโค *๐๐๐๐๐๐๐๐๐๐/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค ๐ _${usedPrefix}stickersearch *<texto>*_
โโค ๐ _${usedPrefix}xnxxsearch *<texto>*_
โโค ๐ _${usedPrefix}animeinfo *<texto>*_
โโค ๐ _${usedPrefix}google *<texto>*_
โโค ๐ _${usedPrefix}letra *<texto>*_
โโค ๐ _${usedPrefix}wikipedia *<texto>*_
โโค ๐ _${usedPrefix}ytsearch *<texto>*_
โโค ๐ _${usedPrefix}apkdone *<texto>*_
โโค ๐ _${usedPrefix}apkgoogle *<texto>*_
โโค ๐ _${usedPrefix}apkmody *<texto>*_
โโค ๐ _${usedPrefix}apkshub *<texto>*_
โโค ๐ _${usedPrefix}happymod *<texto>*_
โโค ๐ _${usedPrefix}hostapk *<texto>*_
โโค ๐ _${usedPrefix}revdl *<texto>*_
โโค ๐ _${usedPrefix}toraccino *<texto>*_
โโค ๐ _${usedPrefix}uapkpro *<texto>*_
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
handler.command = /^(menubusquedas|buscadores|busquedamenu)$/i
handler.register = true
export default  handler
