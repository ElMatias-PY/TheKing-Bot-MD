import translate from 'translate-google-api'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐚𝐥𝐠𝐮𝐧 𝐚𝐧𝐢𝐦𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐛𝐮𝐬𝐜𝐚𝐫*`
try {
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
const tld = 'cn'
let resultes = await translate(`${synopsis}`, { tld, to: 'es', })
let animeingfo = `✨ *Titulo:* ${title}
🎆 *Episodios:* ${episodes}
💬 *Transmitido en:* ${type}
💌 *Rating:* ${rated}
❤️ *Score:* ${score}
👥 *Miembros:* ${members}
💚 *Sinopsis:* ${resultes}
🌐 *URL*: ${url}`
conn.sendFile(m.chat, image_url, '', animeingfo, m)
} catch {    
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = `✨ *Titulo:* ${title}
🎆 *Episodios:* ${episodes}
💬 *Transmitido en:* ${type}
💌 *Rating:* ${rated}
❤️ *Score:* ${score}
👥 *Miembros:* ${members}
💚 *Sinopsis:* ${synopsis}
🌐 *URL*: ${url}`
conn.sendFile(m.chat, image_url, '', animeingfo, m)
}}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
export default handler
