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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ ๐๐ฅ๐๐๐๐ข๐ฅ๐๐ฆ 

โญโโโโโโโโโโโโโโโฎ
โโค *๐๐โ๐ผโ ๐ ๐๐๐ป๐ผโ๐ธ๐ป๐โ๐ผ๐/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค ๐ _${usedPrefix}> *<funcion>*_
โโค ๐ _${usedPrefix}=> *<funcion>*_
โโค ๐ _${usedPrefix}$ *<funcion>*_
โโค ๐ _${usedPrefix}cajafuerte_
โโค ๐ _${usedPrefix}enable *restrict*_
โโค ๐ _${usedPrefix}disable *restrict*_
โโค ๐ _${usedPrefix}enable *autoread*_
โโค ๐ _${usedPrefix}disable *autoread*_
โโค ๐ _${usedPrefix}enable *public*_
โโค ๐ _${usedPrefix}disable *public*_
โโค ๐ _${usedPrefix}enable *pconly*_
โโค ๐ _${usedPrefix}disable *pconly*_
โโค ๐ _${usedPrefix}enable *gconly*_
โโค ๐ _${usedPrefix}disable *gconly*_
โโค ๐ _${usedPrefix}enable *anticall*_
โโค ๐ _${usedPrefix}disable *anticall*_
โโค ๐ _${usedPrefix}enable *antiprivado*_
โโค ๐ _${usedPrefix}disable *antiprivado*_
โโค ๐ _${usedPrefix}enable *antitraba*_
โโค ๐ _${usedPrefix}disable *antitraba*_
โโค ๐ _${usedPrefix}enable *antiarabes*_
โโค ๐ _${usedPrefix}disable *antiarabes*_
โโค ๐ _${usedPrefix}add *numero*_
โโค ๐ _${usedPrefix}kick *<@tag*_
โโค ๐ _${usedPrefix}spamgp *<link>*_
โโค ๐ _${usedPrefix}msg *<texto>*_
โโค ๐ _${usedPrefix}banchat_
โโค ๐ _${usedPrefix}unbanchat_
โโค ๐ _${usedPrefix}banuser *<@tag>*_
โโค ๐ _${usedPrefix}unbanuser *<@tag>*_
โโค ๐ _${usedPrefix}banuser *<@tag>*_
โโค ๐ _${usedPrefix}banlist_
โโค ๐ _${usedPrefix}block *<@tag>*_
โโค ๐ _${usedPrefix}unblock *<@tag>*_
โโค ๐ _${usedPrefix}getplugins *<plugin>*_
โโค ๐ _${usedPrefix}df *<plugin>*_
โโค ๐ _${usedPrefix}bc *<texto>*_
โโค ๐ _${usedPrefix}bcchats *<texto>*_
โโค ๐ _${usedPrefix}bcgc *<texto>*_
โโค ๐ _${usedPrefix}aรฑadirdiamantes *<@tag>* *<cantidad>*_
โโค ๐ _${usedPrefix}aรฑadirxp *<@tag>* *<cantidad>*_
โโค ๐ _${usedPrefix}cleartpm_
โโค ๐ _${usedPrefix}restart_
โโค ๐ _${usedPrefix}update_
โโค ๐ _${usedPrefix}addprem *<@tag>*_
โโค ๐ _${usedPrefix}delprem *<@tag>*_
โโค ๐ _${usedPrefix}listprem_
โโค ๐ _${usedPrefix}listcmd_
โโค ๐ _${usedPrefix}addcmd *<texto> <responder> a sticker/imagen>*_
โโค ๐ _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
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
handler.command = /^(menuowner|menucreador|memuowner|memucreador|omenu|omemu)$/i
handler.fail = null
handler.register = true
export default  handler
