import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Cristianoronaldo")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Siiiuuuuuu*", author, url, [['⚽ 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo']
handler.tags = ['internet']
handler.command = /^(cristianoronaldo)$/i
export default handler
