import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
await conn.sendMessage(m.chat, { react: { text: 'β°', key: m.key } })
  if (!text) await conn.sendMessage(m.chat, { react: { text: 'β', key: m.key } }), `*[βππππβ] ππππππ ππ ππ πππππππ ππππππππ, πππ πππππ πππππππ ππ πππππππ πππ ππ ππππππ/ππππππ ππ ππ πππππππ*\n\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*.play Duki Rockstar*`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) await conn.sendMessage(m.chat, { react: { text: 'β', key: m.key } }), `*[βππππβ] ππ ππππππ, ππ ππππ πππππππππ ππ πππππ/πππππ, πππππππ πππ ππππ ππππππ /ππππππ*`
  try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
await conn.sendMessage(m.chat, { react: { text: 'β', key: m.key } }), await conn.sendHydrated(m.chat, `
π *ππππππ:* ${title}
π *πππππππππππ:* ${description}
π *πππππππππ:* ${publishedTime}
β *ππππππππ:* ${durationH}
π *ππππππ:* ${viewH}
`.trim(), author, thumbnail, `${url}`, 'πππ»', null, null, [
['πππππ', `${usedPrefix}yta ${url}`],
['πππππ', `${usedPrefix}ytv ${url}`],
['πππ ππππππππππ', `${usedPrefix}playlist ${text}`]  
], m)
}catch(e){
await conn.sendMessage(m.chat, { react: { text: 'β', key: m.key } }), `*[βππππβ] πππππ, ππππππ π ππππππππππ*`
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.register = true
export default handler
