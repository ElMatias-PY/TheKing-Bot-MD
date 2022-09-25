import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐍𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐜𝐚𝐧𝐜𝐢𝐨𝐧 𝐟𝐚𝐥𝐭𝐚𝐧𝐭𝐞, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐦𝐚𝐬 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞/𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐥𝐚 𝐜𝐚𝐧𝐜𝐢𝐨𝐧*\n\n*—◉ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨, 𝐥𝐨 𝐩𝐮𝐝𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫 𝐞𝐥 𝐚𝐮𝐝𝐢𝐨/𝐯𝐢𝐝𝐞𝐨, 𝐢𝐧𝐭𝐞𝐧𝐭𝐞 𝐜𝐨𝐧 𝐨𝐭𝐫𝐨 𝐧𝐨𝐦𝐛𝐫𝐞/𝐭𝐢𝐭𝐮𝐥𝐨*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
*◉— 𝐏𝐋𝐀𝐘 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓 —◉*

📌 *𝐓𝐈𝐓𝐔𝐋𝐎:* ${title}
📇 *𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍:* ${description}
📆 *𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐃𝐎:* ${publishedTime}
⌚ *𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:* ${durationH}
👀 *𝐕𝐈𝐒𝐓𝐀𝐒:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['𝐀𝐔𝐃𝐈𝐎', `${usedPrefix}yta.2 ${url}`],
['𝐕𝐈𝐃𝐄𝐎', `${usedPrefix}ytv.2 ${url}`]
], m)
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐫𝐫𝐨𝐫, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐯𝐮𝐞𝐥𝐯𝐚 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨*')
console.log(e)
}}
handler.command = /^play3|playdoc?$/i
handler.register = true
export default handler
