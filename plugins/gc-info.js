let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」*\n
*𝐈𝐃𝐄𝐍𝐓𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎:* 
${groupMetadata.id}

*𝐍𝐎𝐌𝐁𝐑𝐄:* 
${groupMetadata.subject}

*𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍:* 
${groupMetadata.desc?.toString() || '𝐒𝐈𝐍 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍'}

*𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐏𝐀𝐑𝐓𝐈𝐂𝐈𝐏𝐀𝐍𝐓𝐄𝐒:*
${participants.length} Participantes

*𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎:* 
@${owner.split('@')[0]}

*𝐀𝐃𝐌𝐈𝐍𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎:*
${listAdmin}

*𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀𝐒:*
—◉ 𝐖𝐄𝐋𝐂𝐎𝐌𝐄: ${welcome ? '✅' : '❌'}
—◉ 𝐃𝐄𝐓𝐄𝐂𝐓: ${detect ? '✅' : '❌'} 
—◉ 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊: ${antiLink ? '✅' : '❌'} 
—◉ 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ 𝐌𝐎𝐃𝐎 𝐇𝐎𝐑𝐍𝐘: ${modohorny ? '✅' : '❌'} 
—◉ 𝐀𝐔𝐓𝐎𝐒𝐓𝐈𝐂𝐊𝐄𝐑: ${autosticker ? '✅' : '❌'} 
—◉ 𝐀𝐔𝐃𝐈𝐎𝐒: ${audios ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
