let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝐄𝐲, 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐞𝐬𝐭𝐚 𝐚𝐜𝐭𝐢𝐯𝐨, 𝐩𝐞𝐫𝐨 𝐞𝐫𝐞𝐬 𝐮𝐧 𝐚𝐝𝐦𝐢𝐧, 𝐬𝐚𝐥𝐯𝐚𝐝𝐨 𝐦𝐢 𝐫𝐞𝐲😎!!!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝐇𝐚𝐬𝐭𝐚 𝐥𝐚 𝐯𝐢𝐬𝐭𝐚 𝐩𝐞𝐫𝐫𝐚👋, ${await this.getName(m.sender)} 𝐫𝐨𝐦𝐩𝐢𝐬𝐭𝐞 𝐥𝐚𝐬 𝐫𝐞𝐠𝐥𝐚𝐬 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐲 𝐬𝐞𝐫𝐚𝐬 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨...!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐁𝐨𝐭 𝐧𝐨 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧, 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐬!!!*'}`, author, ['𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐌𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞 𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨 𝐥𝐚𝐬 𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐜𝐢𝐨𝐧𝐞𝐬 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐞 𝐜𝐨𝐧 𝐞𝐥 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐥𝐨 𝐡𝐚𝐛𝐢𝐥𝐢𝐭𝐞!!!*')
}
return !0
}
