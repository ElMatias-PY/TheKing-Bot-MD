let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
conn.reply(m.chat, `
_*Tienes* *${Math.floor(Math.random() * 100)}%* *d probabilidad d follarte a*_ *${text}* 🥵😏
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid }} : {})}
handler.command = /^(pFollar)/i
handler.fail = null
export default handler

