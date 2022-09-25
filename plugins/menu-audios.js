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
*ミ💖 𝗛𝗢𝗟𝗔 _${username}_ 💖彡*
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗔𝗨𝗗𝗜𝗢𝗦

 ╭──────────────╮
║➤ *𝗠𝗘𝗡𝗨 𝗔𝗨𝗗𝗜𝗢𝗦/>* 
║➤ *_Escirbe las siguientes palabras sin el prefijo_* (#, /, *, .)
_(𝑼𝒔𝒐 𝒔𝒊𝒏 𝒑𝒓𝒆𝒇𝒊𝒋𝒐)_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ y🔈 _Quien es tu sempai botsito 7w7_
║➤ 🔊 _Te diagnostico con gay_
║➤ 🔊 _A nadie le importa_
║➤ 🔊 _Fiesta del admin_
║➤ 🔊 _Fiesta del administrador_ 
║➤ 🔊 _Vivan los novios_
║➤ 🔊 _Feliz cumpleaños_
║➤ 🔊 _Noche de paz_
║➤ 🔊 _Buenos dias_
║➤ 🔊 _Buenos tardes_
║➤ 🔊 _Buenos noches_
║➤ 🔊 _Audio hentai_
║➤ 🔊 _Chica lgante_
║➤ 🔊 _Feliz navidad_
║➤ 🔊 _Vete a la vrg_
║➤ 🔊 _Pasa pack Bot_
║➤ 🔊 _Atencion grupo_
║➤ 🔊 _Marica quien_
║➤ 🔊 _Murio el grupo_
║➤ 🔊 _Oh me vengo_
║➤ 🔊 _tio que rico_
║➤ 🔊 _Viernes_
║➤ 🔊 _Baneado_
║➤ 🔊 _Sexo_
║➤ 🔊 _Hola_
║➤ 🔊 _Un pato_
║➤ 🔊 _Nyanpasu_
║➤ 🔊 _Te amo_
║➤ 🔊 _Yamete_
║➤ 🔊 _Bañate_
║➤ 🔊 _Es puto_
║➤ 🔊 _La biblia_
║➤ 🔊 _Onichan_
║➤ 🔊 _Mierda de Bot_
║➤ 🔊 _Siuuu_
║➤ 🔊 _Epico_
║➤ 🔊 _Shitpost_
║➤ 🔊 _Rawr_
║➤ 🔊 _UwU_
║➤ 🔊 _:c_
║➤ 🔊 _a_
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
handler.command = /^(menuaudio|menuaudios|memuaudios|memuaudio|audios)$/i
handler.fail = null
handler.register = true
export default  handler
