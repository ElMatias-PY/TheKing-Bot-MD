import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐚𝐥𝐠𝐮𝐧𝐚 𝐜𝐚𝐧𝐜𝐢𝐨𝐧 𝐩𝐚𝐫𝐚 𝐛𝐮𝐬𝐜𝐚𝐫*`
try {
let res = await fetch(`https://hadi-api.herokuapp.com/api/soundcloud/play?query=${text}`)
let json = await res.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.result.download}`)).text()
let soundcloudt = `❒═══❬ 𝐒𝐎𝐔𝐍𝐃𝐂𝐋𝐎𝐔𝐃 ❭═══╾❒
┬
├‣✨ *𝐓𝐈𝐓𝐔𝐋𝐎:* ${json.result.title}
┴
┬
├‣💚 *𝐔𝐑𝐋 𝐃𝐈𝐑𝐄𝐂𝐓𝐎:* ${shortUrl}\n┴\n\n*- 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚖𝚞𝚜𝚒𝚌𝚊...*\n\n_𝚃𝙷𝙴 𝙺𝙸𝙽𝙶 - 𝙱𝙾𝚃_`
conn.sendFile(m.chat, json.result.thumbnail, '', soundcloudt, m)
conn.sendFile(m.chat, json.result.download, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐫𝐫𝐨𝐫, 𝐧𝐨 𝐬𝐞 𝐥𝐨𝐠𝐫𝐨 𝐛𝐮𝐬𝐜𝐚𝐫 𝐥𝐚 𝐜𝐚𝐧𝐜𝐢𝐨𝐧  𝐨 𝐥𝐚 𝐩𝐚𝐠𝐢𝐧𝐚 𝐝𝐞 𝐚𝐲𝐮𝐝𝐚 𝐩𝐚𝐫𝐚 𝐛𝐮𝐬𝐜𝐚𝐫 𝐥𝐚 𝐜𝐚𝐧𝐜𝐢𝐨𝐧 𝐞𝐬𝐭𝐚 𝐜𝐚𝐢𝐝𝐚, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐯𝐮𝐞𝐥𝐯𝐚 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐦𝐚𝐬 𝐭𝐚𝐫𝐝𝐞*'
}}
handler.command = /^(soundcloud|scloud|clouds|souncd|cdsound|cover)$/i
export default handler
