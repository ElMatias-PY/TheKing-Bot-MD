import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[โ๐๐๐๐โ] ๐๐จ๐ฌ ๐๐จ๐ฆ๐๐ง๐๐จ๐ฌ +๐๐ ๐๐ฌ๐ญ๐๐ง ๐๐๐ฌ๐๐๐ญ๐ข๐ฏ๐๐๐จ๐ฌ ๐ฉ๐๐ซ๐ ๐๐ฌ๐ญ๐ ๐ ๐ซ๐ฎ๐ฉ๐จ, ๐ฌ๐ข ๐๐ซ๐๐ฌ ๐๐๐ฆ๐ข๐ง ๐ฉ๐ฎ๐๐๐๐ฌ ๐๐๐ญ๐ข๐ฏ๐๐ซ๐ฅ๐จ ๐ฎ๐ฌ๐๐ง๐๐จ ๐๐ฅ ๐๐จ๐ฆ๐๐ง๐๐จ #enable modohorny*'
if (!text) throw `*[โ๐๐๐๐โ] ๐๐ฃ๐๐ฆ๐ฉ๐ฅ๐จ ๐๐ ๐ฎ๐ฌ๐จ ๐๐๐ฅ ๐๐จ๐ฆ๐๐ง๐๐จ ${usedPrefix + command} Follando con mi prima*`
try {
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `๐ฉ๐ถ๐ฑ๐ฒ๐ผ๐ ๐ฟ๐ฒ๐น๐ฎ๐ฐ๐ถ๐ผ๐ป๐ฎ๐ฑ๐ผ๐ ๐๐จ๐ง: ${args.join(" ")}`
const sections = [{
title: `โกโโขโคโโฃโโโโข`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '๐๐ฅ๐ข๐ฃ๐ ๐ฎ๐ง๐ ๐จ๐ฉ๐๐ข๐จ๐ง ๐ฒ ๐ฉ๐ซ๐๐๐ข๐จ๐ง๐ ๐๐ง๐ฏ๐ข๐๐ซ',
title: " ใ ๐ฉ๐๐๐๐ข๐ฆ ๐ฅ๐๐๐๐๐๐ข๐ก๐๐๐ข๐ฆ ใ",
buttonText: "[โฆ ๐๐๐๐๐๐๐๐๐๐ โฆ]",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: 'โง ๐๐๐ฅ๐๐๐๐ข๐จ๐ง๐ ๐๐ฌ๐ญ๐๐ฌ ๐จ๐ฉ๐๐ข๐จ๐ง ๐ฉ๐๐ซ๐ ๐๐๐ฌ๐๐๐ซ๐ ๐๐ซ ๐๐ฌ๐ญ๐ ๐ฏ๐ข๐๐๐จ โง', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[โ๐๐๐๐โ] ๐๐ซ๐ซ๐จ๐ซ, ๐ฉ๐จ๐ซ ๐๐๐ฏ๐จ๐ซ ๐ฏ๐ฎ๐๐ฅ๐ฏ๐ ๐ ๐ข๐ง๐ญ๐๐ง๐ญ๐๐ซ๐ฅ๐จ*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
handler.exp = 100
handler.limit = 2
export default handler
