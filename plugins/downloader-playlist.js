/* Created by https://github.com/BrunoSobrino */
       /* Diseรฑo by Yameko-Bot V1*/

import yts from "yt-search"
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*[โ๐๐๐๐โ] ๐๐จ๐ฆ๐๐ซ๐ ๐๐ ๐ฅ๐ ๐๐๐ง๐๐ข๐จ๐ง ๐๐๐ฅ๐ญ๐๐ง๐ญ๐, ๐ฉ๐จ๐ซ ๐๐๐ฏ๐จ๐ซ ๐ข๐ง๐ ๐ซ๐๐ฌ๐ ๐๐ฅ ๐๐จ๐ฆ๐๐ง๐๐จ ๐ฆ๐๐ฌ ๐๐ฅ ๐ง๐จ๐ฆ๐๐ซ๐/๐ญ๐ข๐ญ๐ฎ๐ฅ๐จ ๐๐ ๐ฅ๐ ๐๐๐ง๐๐ข๐จ๐ง*\n\n*โโ ๐๐ฃ๐๐ฆ๐ฉ๐ฅ๐จ:*\n*${usedPrefix + command} Begin you*`    
try {
let search = await yts(args.join(" "))
let listSerch = []
let listSerch2 = []
let listSerch3 = []
let listSerch4 = []
let teskd = `๐๐ฎ๐ฌ๐ข๐๐ ๐ซ๐๐ฅ๐๐๐ข๐จ๐ง๐๐๐ ๐๐จ๐ง: ${args.join(" ")}`
const sections = [{
title: `|๏ผ๏ผ๏ผ๏ผ๏ผ{ ๏ผก๏ผต๏ผค๏ผฉ๏ผฏ }๏ผ๏ผ๏ผ๏ผ๏ผ|`,
rows: listSerch },
{              
title: `|๏ผ๏ผ๏ผ๏ผ๏ผ{ ๏ผถ๏ผฉ๏ผค๏ผฅ๏ผฏ }๏ผ๏ผ๏ผ๏ผ๏ผ|`,
rows: listSerch2 },
{              
title: `|๏ผ๏ผ{ ๏ผค๏ผฏ๏ผฃ๏ผต๏ผญ๏ผฅ๏ผฎ๏ผด๏ผฏ  ๏ผญ๏ผฐ๏ผ }๏ผ๏ผ|`,
rows: listSerch3 },
{              
title: `|๏ผ๏ผ{ ๏ผค๏ผฏ๏ผฃ๏ผต๏ผญ๏ผฅ๏ผฎ๏ผด๏ผฏ  ๏ผญ๏ผฐ๏ผ }๏ผ๏ผ|`,
rows: listSerch4 }]
const listMessage = {
text: teskd,
footer: '๐๐ฅ๐ข๐ฃ๐ ๐ฎ๐ง๐ ๐จ๐ฉ๐๐ข๐จ๐ง ๐ฒ ๐ฉ๐ซ๐๐๐ข๐จ๐ง๐ ๐๐ง๐ฏ๐ข๐๐ซ',
title: " ใ ๐ ๐จ๐ฆ๐๐๐ ๐ฅ๐๐๐๐๐๐ข๐ก๐๐๐ ใ",
buttonText: "[โฆ ๐๐๐๐๐๐๐๐๐๐ โฆ]",
sections}
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listSerch2.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listSerch3.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listSerch4.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[โ๐๐๐๐โ] ๐๐ซ๐ซ๐จ๐ซ, ๐ฉ๐จ๐ซ ๐๐๐ฏ๐จ๐ซ ๐ฏ๐ฎ๐๐ฅ๐ฏ๐ ๐ ๐ข๐ง๐ญ๐๐ง๐ญ๐๐ซ๐ฅ๐จ ๐๐จ๐ง ๐จ๐ญ๐ซ๐จ ๐ง๐จ๐ฆ๐๐ซ๐*')
}}
handler.command = /^playlist|playlist2$/i
handler.register = true
export default handler
