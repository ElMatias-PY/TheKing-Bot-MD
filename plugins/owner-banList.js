let handler = async (m, { conn }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)

    m.reply(`
β­βγ πππ¦π§ππ¦ ππ ππππ§π¦ πππ‘πππππ¦ γ
β ππΎππ°π»: ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
β ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
β ${jid}
`.trim()).join('\n') : ''}
β°ββββ

β­βγ πππ¦π§ππ¦ ππ π£ππ₯π¦π’π‘ππ¦ πππ‘ππππππ¦ γ
β ππΎππ°π»: ${users.length} User${users ? '\n' + users.map(([jid], i) => `
β ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
β ${jid}
`.trim()).join('\n') : ''}
β°ββββ
`.trim())
}
handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i

export default handler
