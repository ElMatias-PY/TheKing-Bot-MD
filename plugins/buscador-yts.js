import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐚𝐥𝐠𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐜𝐚𝐧𝐚𝐥 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞*'
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
📌 *${v.title}* (${v.url})
⌚ 𝙳𝚞𝚛𝚊𝚌𝚒𝚘𝚗: ${v.durationH}
⏲️ 𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚍𝚘 ${v.publishedTime}
👁️ ${v.view} 𝚟𝚒𝚜𝚝𝚊𝚜
`.trim()
case 'channel': return `
📌 *${v.channelName}* (${v.url})
🧑‍🤝‍🧑 _${v.subscriberH} 𝚜𝚞𝚜𝚌𝚛𝚒𝚙𝚝𝚘𝚛𝚎𝚜_
🎥 ${v.videoCount} 𝚟𝚒𝚍𝚎𝚘𝚜
`.trim()
}
}).filter(v => v).join('\n\n========================\n\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
