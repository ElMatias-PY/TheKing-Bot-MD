let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\nāā ${await conn.getName(jid)}\nā¤ ${jid} [${chat?.metadata?.read_only ? 'šš šššššššššššš' : 'šššššššššššš'}]\n\n`
m.reply(`*šš¢š¬š­š šš š š«š®š©šØš¬ šš§ š„šØ šŖš®š šš¬š­š šš„ ššØš­:*
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos)$/i
export default handler
