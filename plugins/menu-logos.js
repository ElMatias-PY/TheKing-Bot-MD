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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ ๐๐ข๐๐ข๐ฆ
โญโโโโโโโโโโโโโโโฎ
โโค *๐ผ๐ฝ๐ผโ๐๐๐ ๐๐๐พ๐๐/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค ๐๏ธ _${usedPrefix}logos *<efecto> <texto>*_
โโค ๐๏ธ _${usedPrefix}logocorazon *<texto>*_
โโค ๐๏ธ _${usedPrefix}logochristmas *<texto>*_
โโค ๐๏ธ _${usedPrefix}simpcard *<@tag>*_
โโค ๐๏ธ _${usedPrefix}hornycard *<@tag>*_
โโค ๐๏ธ _${usedPrefix}lolice *<@tag>*_
โโค ๐๏ธ _${usedPrefix}ytcomment *<texto>*_
โโค ๐๏ธ _${usedPrefix}phmaker *<opcion><responder a imagen>*_
โโค ๐๏ธ _${usedPrefix}itssostupid_
โโค ๐๏ธ _${usedPrefix}pixelar_
โโค ๐๏ธ _${usedPrefix}blur_
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
handler.command = /^(menuefectos|efectoslogos|efectosdelogos|logosefectos|logodeefecto)$/i
handler.exp = 85
handler.register = true
export default  handler
