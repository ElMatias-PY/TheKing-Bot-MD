let handler = async (m, { conn, text }) => {

 let who
 if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
 else who = false
 if (!text) throw `A quien quieres bloquear?`
 if (!who) throw '𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐚 𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐥𝐨 𝐛𝐥𝐨𝐪𝐮𝐞𝐞!!!'
 let user = `${who.split("@s.whatsapp.net")[0]}` + '@c.us'
    await conn.updateBlockStatus(user, 'block')
  conn.reply(m.chat, `𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐛𝐥𝐨𝐪𝐮𝐞𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨!!!`, m)
}
handler.help = ['block <@user>']
handler.tags = ['owner']
handler.command = /^block$/i
handler.owner = true

export default handler
