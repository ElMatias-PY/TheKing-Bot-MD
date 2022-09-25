let handler = async (m, { conn, participants }) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw `𝐄𝐬𝐭𝐚 𝐫𝐞𝐬𝐭𝐫𝐢𝐧𝐠𝐢𝐝𝐨 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨\n#enable restrict | #disable restrict\n𝐄𝐥 𝐩𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨 𝐝𝐞𝐛𝐞 𝐚𝐜𝐭𝐢𝐯𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨`
  if (!m.mentionedJid[0] && !m.quoted) throw '𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐚 𝐮𝐧𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐩𝐚𝐫𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫𝐥𝐨'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = m.chat.split`-`[0]
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
  m.reply(`𝐒𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐨 𝐚 𝐥𝐚 𝐩𝐞𝐫𝐫𝐚 𝐝𝐞 *@${user.split('@')[0]}*`, null, { mentions: [user] })
}

handler.help = ['kick']
handler.tags = ['adm']
handler.command = /^(kick|echar|hechar)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
