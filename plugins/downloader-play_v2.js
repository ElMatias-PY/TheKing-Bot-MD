import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗𝐈𝐍𝐅𝐎❗] 𝐍𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐜𝐚𝐧𝐜𝐢𝐨𝐧 𝐟𝐚𝐥𝐭𝐚𝐧𝐭𝐞, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐦𝐚𝐬 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐨 𝐞𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐚𝐥𝐠𝐮𝐧𝐚 𝐜𝐚𝐧𝐜𝐢𝐨𝐧 𝐨 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞\n\n*—◉ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:\n#play.1 Good Feeling - Flo Rida*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `*⏰ 𝑆𝑒 𝑒𝑠𝑡𝑎 𝑝𝑟𝑜𝑐𝑒𝑠𝑎𝑛𝑑𝑜 𝑠𝑢 𝑎𝑢𝑑𝑖𝑜...⏰*`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*⏰ 𝑆𝑒 𝑒𝑠𝑡𝑎 𝑝𝑟𝑜𝑐𝑒𝑠𝑎𝑛𝑑𝑜 𝑠𝑢 𝑣𝑖𝑑𝑒𝑜...⏰*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭_`, m)}
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐫𝐫𝐨𝐫, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐯𝐮𝐞𝐥𝐯𝐚 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨*')
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
handler.register = true
export default handler
