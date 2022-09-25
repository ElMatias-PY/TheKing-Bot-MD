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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢𝗦 
╭──────────────╮
║➤ *𝗚𝗥𝗨𝗣𝗢𝗦/>* 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 💎 _${usedPrefix}add *<numero>*_
║➤ 💎 _${usedPrefix}kick *<@tag>*_
║➤ 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
║➤ 💎 _${usedPrefix}promote *<@tag>*_
║➤ 💎 _${usedPrefix}demote *<@tag>*_
║➤ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
║➤ 💎 _${usedPrefix}demote *<@tag>*_
║➤ 💎 _${usedPrefix}infogroup_
║➤ 💎 _${usedPrefix}link_
║➤ 💎 _${usedPrefix}setname *<texto>*_
║➤ 💎 _${usedPrefix}setdesc *<texto>*_
║➤ 💎 _${usedPrefix}invocar *<texto>*_
║➤ 💎 _${usedPrefix}setwelcome *<texto>*_
║➤ 💎 _${usedPrefix}setbye *<texto>*_
║➤ 💎 _${usedPrefix}hidetag *<texto>*_
║➤ 💎 _${usedPrefix}fantasmas_
║➤ 💎 _${usedPrefix}destraba_
╰──────────────╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓𝐀𝐒 🗒️', '.menu'],
['🥵 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 🥵', '.owner'],
['📮 𝐃𝐎𝐍𝐀𝐑 📮', '.donar']
], m)
}}
handler.help = ['menugp']
handler.tags = ['main']
handler.command = /^(menugrupos|menugrupo|memugrupos|menugrupos|menugp|memugp|comandosgrupo)$/i
handler.fail = null
handler.register = true
export default  handler
