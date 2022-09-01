let handler = async (m, { conn }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)

    m.reply(`
╭─「 𝗟𝗜𝗦𝗧𝗔𝗦 𝗗𝗘 𝗖𝗛𝗔𝗧𝗦 𝗕𝗔𝗡𝗘𝗔𝗗𝗔𝗦 」
│ 𝚃𝙾𝚃𝙰𝙻: ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│ ${jid}
`.trim()).join('\n') : ''}
╰────

╭─「 𝗟𝗜𝗦𝗧𝗔𝗦 𝗗𝗘 𝗣𝗘𝗥𝗦𝗢𝗡𝗔𝗦 𝗕𝗔𝗡𝗗𝗘𝗔𝗗𝗔𝗦 」
│ 𝚃𝙾𝚃𝙰𝙻: ${users.length} User${users ? '\n' + users.map(([jid], i) => `
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│ ${jid}
`.trim()).join('\n') : ''}
╰────
`.trim())
}
handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i

export default handler
