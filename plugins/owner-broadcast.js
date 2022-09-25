import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `*╔══❰ 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '𝙀𝙎𝙏𝙀 𝙀𝙎 𝙐𝙉 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝐎𝐖𝐍𝐄𝐑 🤖', '.owner'],['💎 𝐃𝐎𝐍𝐀𝐑 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ᴛᴏᴅᴏs ʟᴏs ᴄʜᴀᴛs',
body: 'ʙʏ ᴛʜᴇ ᴋɪɴɢ - ʙᴏᴛ', 
sourceUrl: `https://instagram.com/matiass.zzz`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝐌𝐞𝐧𝐬𝐚𝐣𝐞 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐚 𝐭𝐨𝐝𝐨𝐬 𝐥𝐨𝐬 𝐜𝐡𝐚𝐭𝐬*\n\n*𝐍𝐎𝐓𝐀: 𝐄𝐬 𝐩𝐨𝐬𝐢𝐛𝐥𝐞 𝐪𝐮𝐞 𝐭𝐞𝐧𝐠𝐚 𝐟𝐚𝐥𝐥𝐚𝐬 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐲 𝐞𝐥 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐧𝐨 𝐬𝐞 𝐞𝐧𝐯𝐢𝐞 𝐚 𝐭𝐨𝐝𝐨𝐬 𝐥𝐨𝐬 𝐜𝐡𝐚𝐭𝐬, 𝐝𝐢𝐬𝐜𝐮𝐥𝐩𝐞 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐨*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler
