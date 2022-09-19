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
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝑬𝒚, 𝑨𝒏𝒕𝒊𝒍𝒊𝒏𝒌 𝒆𝒔𝒕𝒂 𝒂𝒄𝒕𝒊𝒗𝒐, 𝒑𝒆𝒓𝒐 𝒆𝒓𝒆𝒔 𝒖𝒏 𝒂𝒅𝒎𝒊𝒏, 𝒔𝒂𝒍𝒗𝒂𝒅𝒐 𝒎𝒊 𝒓𝒆𝒚😎!!!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝑯𝒂𝒔𝒕𝒂 𝒍𝒂 𝒗𝒊𝒔𝒕𝒂 𝒑𝒆𝒓𝒓𝒂👋, ${await this.getName(m.sender)} 𝒓𝒐𝒎𝒑𝒊𝒔𝒕𝒆 𝒍𝒂𝒔 𝒓𝒆𝒈𝒍𝒂𝒔 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒚 𝒂𝒉𝒐𝒓𝒂 𝒔𝒆𝒓𝒂𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐...!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝑬𝒍 𝑩𝒐𝒕 𝒏𝒐 𝒆𝒔 𝒂𝒅𝒎𝒊𝒏, 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒓 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒔 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐!!!*'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝑬𝒍 𝒑𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 𝒅𝒆𝒍 𝑩𝒐𝒕 𝒏𝒐 𝒕𝒊𝒆𝒏𝒆 𝒂𝒄𝒕𝒊𝒗𝒂𝒅𝒐𝒔 𝒍𝒂𝒔 𝒓𝒆𝒔𝒕𝒓𝒊𝒄𝒄𝒊𝒐𝒏𝒆𝒔 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝒄𝒐𝒏𝒕𝒂𝒄𝒕𝒆 𝒄𝒐𝒏 𝒆𝒍 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒍𝒐 𝒉𝒂𝒃𝒊𝒍𝒊𝒕𝒆!!!*')
}
return !0
}
