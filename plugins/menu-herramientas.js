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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ ๐๐๐ฅ๐ฅ๐๐ ๐๐๐ก๐ง๐๐ฆ 

โญโโโโโโโโโโโโโโโฎ
โโค *๐๐๐๐๐๐๐๐๐๐๐๐/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค ๐ ๏ธ _${usedPrefix}afk *<motivo>*_
โโค ๐ ๏ธ _${usedPrefix}ocr *<responde a imagen>*_
โโค ๐ ๏ธ _${usedPrefix}acortar *<enlace / link / url>*_
โโค ๐ ๏ธ _${usedPrefix}calc *<operacion math>*_
โโค ๐ ๏ธ _${usedPrefix}del *<respondre a mensaje del Bot>*_
โโค ๐ ๏ธ _${usedPrefix}whatmusic *<responde a un audio>*_
โโค ๐ ๏ธ _${usedPrefix}qrcode *<texto>*_
โโค ๐ ๏ธ _${usedPrefix}readmore *<texto1| texto2>*_
โโค ๐ ๏ธ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
โโค ๐ ๏ธ _${usedPrefix}styletext *<texto>*_
โโค ๐ ๏ธ _${usedPrefix}traducir *<texto>*_
โโค ๐ ๏ธ _${usedPrefix}nowa *<numero>*_
โโค ๐ ๏ธ _${usedPrefix}repetir *<texto>*_
โโค ๐ ๏ธ _${usedPrefix}repetir2 *<texto>*_
โโค ๐ ๏ธ _${usedPrefix}tiempo *<localidad>*_
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
handler.command = /^(menuherramientas|menuherra|memuherramientas|menuherramientas|menรบherramientas)$/i
handler.fail = null
handler.register = true
export default  handler
