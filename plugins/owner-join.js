let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝐋𝐢𝐧𝐤 𝐞𝐫𝐫𝐨𝐧𝐞𝐨 𝐨 𝐟𝐚𝐥𝐭𝐚𝐧𝐭𝐞*\n*👉🏻 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐞𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐮𝐧 𝐠𝐫𝐮𝐩𝐨*\n\n*𝐄𝐣𝐞𝐦𝐩𝐥𝐨:*\n*#join https://chat.whatsapp.com/IK6dNVgswuI51Zn7KBCqDh*\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝐍𝐨 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐚 𝐧𝐢𝐧𝐠𝐮𝐧 𝐦𝐞𝐧𝐬𝐚𝐣𝐞, 𝐩𝐮𝐞𝐝𝐞 𝐜𝐚𝐮𝐬𝐚𝐫 𝐢𝐧𝐭𝐞𝐫𝐟𝐞𝐫𝐞𝐧𝐜𝐢𝐚, 𝐞𝐬𝐜𝐫𝐢𝐛𝐚𝐥𝐨 𝐮𝐧𝐢𝐜𝐚𝐦𝐞𝐧𝐭𝐞 𝐜𝐨𝐦𝐨 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐧𝐮𝐞𝐯𝐨*'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐍𝐮𝐞𝐯𝐚 𝐬𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐝𝐞𝐥 𝐁𝐨𝐭 𝐩𝐚𝐫𝐚 𝐮𝐧 𝐠𝐫𝐮𝐩𝐨 [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ 𝐍𝐮𝐦𝐞𝐫𝐨 𝐝𝐞𝐥 𝐬𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐧𝐭𝐞:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ 𝐋𝐢𝐧𝐤 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐝𝐨𝐧𝐝𝐞 𝐬𝐞 𝐬𝐨𝐥𝐢𝐜𝐢𝐭𝐚 𝐞𝐥 𝐁𝐨𝐭:* ' + link, jid)

await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐥𝐢𝐧𝐤 𝐝𝐞 𝐬𝐮 𝐠𝐫𝐮𝐩𝐨 𝐟𝐮𝐞 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐚 𝐦𝐢 𝐨𝐰𝐧𝐞𝐫*\n\n*👉🏻 𝐒𝐮 𝐠𝐫𝐮𝐩𝐨 𝐞𝐬𝐭𝐚𝐫𝐚 𝐞𝐧 𝐞𝐯𝐚𝐥𝐮𝐚𝐜𝐢𝐨𝐧 𝐲 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐝𝐞𝐜𝐢𝐝𝐢𝐫𝐚 𝐬𝐢 𝐦𝐞 𝐚𝐠𝐫𝐞𝐠𝐚 𝐨 𝐧𝐨*\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝐀𝐥𝐠𝐮𝐧𝐚𝐬 𝐝𝐞 𝐥𝐚𝐬 𝐫𝐚𝐳𝐨𝐧𝐞𝐬 𝐩𝐨𝐫 𝐥𝐚 𝐜𝐮𝐚𝐥 𝐬𝐮 𝐬𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐫𝐞𝐜𝐡𝐚𝐳𝐚𝐝𝐚 𝐬𝐨𝐧:*\n*1.- 𝐄𝐥 𝐁𝐨𝐭 𝐞𝐬𝐭𝐚 𝐬𝐚𝐭𝐮𝐫𝐚𝐝𝐨*\n*2.- 𝐄𝐥 𝐁𝐨𝐭 𝐬𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐨 𝐩𝐫𝐞𝐯𝐢𝐚𝐦𝐞𝐧𝐭𝐞 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨*\n*3.- 𝐄𝐥 𝐥𝐢𝐧𝐤 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐟𝐮𝐞 𝐫𝐞𝐬𝐭𝐚𝐛𝐥𝐞𝐜𝐢𝐝𝐨*\n*4.-𝐌𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐧𝐨 𝐦𝐞 𝐚𝐠𝐫𝐞𝐠𝐚 𝐚 𝐠𝐫𝐮𝐩𝐨𝐬*\n\n*👉🏻 𝐓𝐞 𝐞𝐧 𝐜𝐮𝐞𝐧𝐭𝐚 𝐪𝐮𝐞 𝐭𝐮 𝐬𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐩𝐚𝐫𝐚 𝐮𝐧𝐢𝐫 𝐞𝐥 𝐁𝐨𝐭 𝐚 𝐭𝐮 𝐠𝐫𝐮𝐩𝐨 𝐩𝐮𝐞𝐝𝐞 𝐭𝐚𝐫𝐝𝐚𝐫 𝐡𝐨𝐫𝐚𝐬 𝐨 𝐝𝐢𝐚𝐬 𝐞𝐧 𝐬𝐞𝐫 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐢𝐝𝐚, 𝐭𝐞𝐧 𝐩𝐚𝐜𝐢𝐞𝐧𝐜𝐢𝐚*')}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|nuevogrupo$/i
handler.register = true
export default handler
