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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ ๐ฆ๐ง๐๐๐๐๐ฅ๐ฆ 

โญโโโโโโโโโโโโโโโฎ
โโค *๐ฆ๐ง๐๐๐๐๐ฅ๐ฆ/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค ๐ฝ _${usedPrefix}sticker *<responder a imagen o video>*_
โโค ๐ฝ _${usedPrefix}sticker *<enlace / link / url>*_
โโค ๐ฝ _${usedPrefix}s *<responder a imagen o video>*_
โโค ๐ฝ _${usedPrefix}s *<enlace / link / url>*_
โโค ๐ฝ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
โโค ๐ฝ _${usedPrefix}scircle *<responder a imagen>*_
โโค ๐ฝ _${usedPrefix}sremovebg *<responder a imagen>*_
โโค ๐ฝ _${usedPrefix}semoji *<tipo> <emoji>*_
โโค ๐ฝ _${usedPrefix}attp *<texto>*_
โโค ๐ฝ _${usedPrefix}attp2 *<texto>*_
โโค ๐ฝ _${usedPrefix}attp3 *<texto>*_
โโค ๐ฝ _${usedPrefix}ttp *<texto>*_
โโค ๐ฝ _${usedPrefix}ttp2 *<texto>*_
โโค ๐ฝ _${usedPrefix}ttp3 *<texto>*_
โโค ๐ฝ _${usedPrefix}ttp4 *<texto>*_
โโค ๐ฝ _${usedPrefix}ttp5 *<texto>*_
โโค ๐ฝ _${usedPrefix}pat *<@tag>*_
โโค ๐ฝ _${usedPrefix}slap *<@tag>*_
โโค ๐ฝ _${usedPrefix}kiss *<@tag>*_
โโค ๐ฝ _${usedPrefix}dado_
โโค ๐ฝ _${usedPrefix}wm *<packname> <author>*_
โโค ๐ฝ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
โโค ๐ฝ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
โฐโโโโโโโโโโโโโโโฏ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ ๐๐๐๐ ๐๐๐๐๐๐ ๐๏ธ', '.menu'],
['๐ฅต ๐๐๐๐๐๐๐ ๐ฅต', '.menu'],
['๐ฎ ๐๐๐๐๐ ๐ฎ', '.donar']
], m)
}}
handler.help = ['menustickers']
handler.tags = ['main']
handler.command = /^(menusticker|menustickers)$/i
handler.fail = null
handler.register = true
export default  handler
