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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ ๐๐ฅ๐จ๐ฃ๐ข๐ฆ 
โญโโโโโโโโโโโโโโโฎ
โโค *๐๐ฅ๐จ๐ฃ๐ข๐ฆ/>* 
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค ๐ _${usedPrefix}grupo *<abrir / cerrar>*_
โโค ๐ _${usedPrefix}promote *<@tag>*_
โโค ๐ _${usedPrefix}demote *<@tag>*_
โโค ๐ _admins *<texto>*_ (๐ข๐ ๐ ๐ ๐๐ ๐๐๐๐๐๐๐)
โโค ๐ _${usedPrefix}demote *<@tag>*_
โโค ๐ _${usedPrefix}infogroup_
โโค ๐ _${usedPrefix}link_
โโค ๐ _${usedPrefix}setname *<texto>*_
โโค ๐ _${usedPrefix}setdesc *<texto>*_
โโค ๐ _${usedPrefix}invocar *<texto>*_
โโค ๐ _${usedPrefix}setwelcome *<texto>*_
โโค ๐ _${usedPrefix}setbye *<texto>*_
โโค ๐ _${usedPrefix}hidetag *<texto>*_
โโค ๐ _${usedPrefix}fantasmas_
โโค ๐ _${usedPrefix}destraba_
โฐโโโโโโโโโโโโโโโฏ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ ๐๐๐๐ ๐๐๐๐๐๐ ๐๏ธ', '.menu'],
['๐ฅต ๐๐๐๐๐๐๐ ๐ฅต', '.owner'],
['๐ฎ ๐๐๐๐๐ ๐ฎ', '.donar']
], m)
}}
handler.help = ['menugp']
handler.tags = ['main']
handler.command = /^(menugrupos|menugrupo|memugrupos|menugrupos|menugp|memugp|comandosgrupo)$/i
handler.fail = null
handler.register = true
export default  handler
