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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐จ๐๐๐ข๐ฆ

 โญโโโโโโโโโโโโโโโฎ
โโค *๐ ๐๐ก๐จ ๐๐จ๐๐๐ข๐ฆ/>* 
โโค *_Escirbe las siguientes palabras sin el prefijo_* (#, /, *, .)
_(๐ผ๐๐ ๐๐๐ ๐๐๐๐๐๐๐)_
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโค ๐ _Quien es tu sempai botsito 7w7_
โโค ๐ _Te diagnostico con gay_
โโค ๐ _A nadie le importa_
โโค ๐ _Fiesta del admin_
โโค ๐ _Fiesta del administrador_ 
โโค ๐ _Vivan los novios_
โโค ๐ _Feliz cumpleaรฑos_
โโค ๐ _Noche de paz_
โโค ๐ _Buenos dias_
โโค ๐ _Buenos tardes_
โโค ๐ _Buenos noches_
โโค ๐ _Oye mami, yo se que te gusta el pipi_
โโค ๐ _5 dame tu cosita captados en cรกmara_
โโค ๐ _Ay mi madre el bicho_
โโค ๐ _Mucha paja_
โโค ๐ _Me cago en ti_
โโค ๐ _Hola causas_
โโค ๐ _Manito_
โโค ๐ _Audio hentai_
โโค ๐ _Chica lgante_
โโค ๐ _Feliz navidad_
โโค ๐ _Vete a la vrg_
โโค ๐ _Pasa pack Bot_
โโค ๐ _Atencion grupo_
โโค ๐ _Marica quien_
โโค ๐ _Murio el grupo_
โโค ๐ _Oh me vengo_
โโค ๐ _tio que rico_
โโค ๐ _Viernes_
โโค ๐ _Baneado_
โโค ๐ _Sexo_
โโค ๐ _Hola_
โโค ๐ _Un pato_
โโค ๐ _Nyanpasu_
โโค ๐ _Te amo_
โโค ๐ _Yamete_
โโค ๐ _Baรฑate_
โโค ๐ _Es puto_
โโค ๐ _La biblia_
โโค ๐ _Onichan_
โโค ๐ _Mierda de Bot_
โโค ๐ _Siuuu_
โโค ๐ _Epico_
โโค ๐ _Shitpost_
โโค ๐ _Rawr_
โโค ๐ _UwU_
โโค ๐ _:c_
โโค ๐ _a_
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
handler.command = /^(menuaudio|menuaudios|memuaudios|memuaudio|audios)$/i
handler.fail = null
handler.register = true
export default  handler
