let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝑯𝒂𝒔𝒕𝒂 𝒍𝒂 𝒗𝒊𝒔𝒕𝒂 𝒑𝒆𝒓𝒓𝒂 👋, ${await this.getName(m.sender)} 𝒓𝒐𝒎𝒑𝒊𝒔𝒕𝒆 𝒍𝒂𝒔 𝒓𝒆𝒈𝒍𝒂𝒔 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒚 𝒂𝒉𝒐𝒓𝒂 𝒔𝒆𝒓𝒂𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐...!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝑬𝒍 𝑩𝒐𝒕 𝒏𝒐 𝒆𝒔 𝒂𝒅𝒎𝒊𝒏, 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒓 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒔 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐*'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝑬𝒍 𝒑𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 𝒅𝒆𝒍 𝑩𝒐𝒕 𝒏𝒐 𝒕𝒊𝒆𝒏𝒆 𝒂𝒄𝒕𝒊𝒗𝒂𝒅𝒐𝒔 𝒍𝒂𝒔 𝒓𝒆𝒔𝒕𝒓𝒊𝒄𝒄𝒊𝒐𝒏𝒆𝒔  (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝒄𝒐𝒏𝒕𝒂𝒄𝒕𝒆 𝒄𝒐𝒏 𝒆𝒍 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒍𝒐 𝒉𝒂𝒃𝒊𝒍𝒊𝒕𝒆!!!*')
}
return !0
}
