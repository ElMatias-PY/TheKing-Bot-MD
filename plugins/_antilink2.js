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
await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝑯𝒂𝒔𝒕𝒂 𝒍𝒂 𝒗𝒊𝒔𝒕𝒂 𝒑𝒆𝒓𝒓𝒂 👋, ${await this.getName(m.sender)} 𝒓𝒐𝒎𝒑𝒊𝒔𝒕𝒆 𝒍𝒂𝒔 𝒓𝒆𝒈𝒍𝒂𝒔 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒚 𝒂𝒉𝒐𝒓𝒂 𝒔𝒆𝒓𝒂𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐...!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐥 𝐁𝐨𝐭 𝐧𝐨 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧, 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐬*'}`, author, ['𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐌𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞 𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨 𝐥𝐚𝐬 𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐜𝐢𝐨𝐧𝐞𝐬  (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐞 𝐜𝐨𝐧 𝐞𝐥 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐥𝐨 𝐡𝐚𝐛𝐢𝐥𝐢𝐭𝐞!!!*')
}
return !0
}
