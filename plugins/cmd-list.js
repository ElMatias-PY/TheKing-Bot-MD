let handler = async (m, { conn }) => {
conn.reply(m.chat, `
*< 𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 / 𝐓𝐞𝐱𝐭𝐨𝐬 𝐚𝐬𝐢𝐠𝐧𝐚𝐝𝐨𝐬 />*

${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}.-*\n*𝐂𝐎𝐃𝐈𝐆𝐎:* ${value.locked ? `*(𝐛𝐥𝐨𝐪𝐮𝐞𝐚𝐝𝐨)* ${key}` : key}\n*𝐂𝐎𝐌𝐀𝐍𝐃𝐎/𝐓𝐄𝐗𝐓𝐎* ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])})
}
handler.command = ['listcmd', 'cmdlist']
handler.rowner = true
export default handler
