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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ ๐๐๐ฆ๐๐๐ฅ๐๐๐ฆ

โญโโโโโโโโโโโโโโโฎ
โโค *๐๐๐๐๐๐๐๐๐/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค ๐ฅ _${usedPrefix}facebook *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}instagram *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}mediafire *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}instagram *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}gitclone *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}stickerpack *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}gdrive *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}tiktok *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}xnxxdl *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}xvideosdl *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}ytmp3 *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}ytmp4 *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}play.1 *<texto / enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}play.2 *<texto / enlace / link / url>*_
โโค ๐ฅ _${usedPrefix}play *<texto>*_
โโค ๐ฅ _${usedPrefix}playdoc *<texto>*_
โโค ๐ฅ _${usedPrefix}playlist *<texto>*_
โโค ๐ฅ _${usedPrefix}playlist2 *<texto>*_
โโค ๐ฅ _${usedPrefix}spotify *<texto>*_
โโค ๐ฅ _${usedPrefix}ringtone *<texto>*_
โโค ๐ฅ _${usedPrefix}soundcloud *<texto>*_
โโค ๐ฅ _${usedPrefix}imagen *<texto>*_
โโค ๐ฅ _${usedPrefix}pinteret *<texto>*_
โโค ๐ฅ _${usedPrefix}wallpaper *<texto>*_
โโค ๐ฅ _${usedPrefix}wallpaper2 *<texto>*_
โโค ๐ฅ _${usedPrefix}pptiktok *<nombre de usuario>*_
โโค ๐ฅ _${usedPrefix}igstalk *<nombre de usuario>*_
โโค ๐ฅ _${usedPrefix}igstory *<nombre de usuario>*_
โโค ๐ฅ _${usedPrefix}tiktokstalk *<nombre de usuario>*_
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
handler.command = /^(menudescargas|menudedescargas|descargasmenu|download)$/i
handler.register = true
export default  handler
