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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗟𝗢𝗚𝗢𝗦

┏━━━━━━━━━━━━━┓
┃ *<𝗟𝗢𝗚𝗢𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┣ ඬ⃟🖍️ _${usedPrefix}simpcard *<@tag>*_
┣ ඬ⃟🖍️ _${usedPrefix}hornycard *<@tag>*_
┣ ඬ⃟🖍️ _${usedPrefix}lolice *<@tag>*_
┣ ඬ⃟🖍️ _${usedPrefix}ytcomment *<texto>*_
┣ ඬ⃟🖍️ _${usedPrefix}itssostupid_
┣ ඬ⃟🖍️ _${usedPrefix}pixelar_
┣ ඬ⃟🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙻𝙸𝚂𝚃𝙰𝚂 🗒️', '.menu'],
['🥵 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 🥵', '.owner'],
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menulogo|menulogos|memulogos|memulogo)$/i
handler.fail = null
handler.register = true
export default  handler
