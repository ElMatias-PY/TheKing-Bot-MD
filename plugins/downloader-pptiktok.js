import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐝𝐞 𝐚𝐥𝐠𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] 𝐀𝐪𝐮𝐢 𝐞𝐬𝐭𝐚 𝐥𝐚 𝐟𝐨𝐭𝐨 𝐝𝐞 𝐩𝐞𝐫𝐟𝐢𝐥 𝐝𝐞 ${text}*`, m, false)}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|pptiktok)$/i
handler.register = true
export default handler
