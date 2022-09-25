import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 +𝟏𝟖 𝐞𝐬𝐭𝐚𝐧 𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨𝐬 𝐩𝐚𝐫𝐚 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨, 𝐬𝐢 𝐞𝐫𝐞𝐬 𝐚𝐝𝐦𝐢𝐧 𝐩𝐮𝐞𝐝𝐞𝐬 𝐚𝐜𝐭𝐢𝐯𝐚𝐫𝐥𝐨 𝐮𝐬𝐚𝐧𝐝𝐨 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 #enable modohorny*'
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐣𝐞𝐦𝐩𝐥𝐨 𝐝𝐞 𝐮𝐬𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${usedPrefix + command} Follando con mi prima*`
try {
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `𝗩𝗶𝗱𝗲𝗼𝘀 𝗿𝗲𝗹𝗮𝗰𝗶𝗼𝗻𝗮𝗱𝗼𝘀 𝐜𝐨𝐧: ${args.join(" ")}`
const sections = [{
title: `ⓡⓔⓢⓤⓛⓣⓐⓓⓞⓢ`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '𝐄𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 𝐲 𝐩𝐫𝐞𝐜𝐢𝐨𝐧𝐞 𝐄𝐧𝐯𝐢𝐚𝐫',
title: " 『 𝗩𝗜𝗗𝗘𝗢𝗦 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡𝗔𝗗𝗢𝗦 』",
buttonText: "[♦ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 ♦]",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: '⇧ 𝐒𝐞𝐥𝐞𝐜𝐜𝐢𝐨𝐧𝐚 𝐞𝐬𝐭𝐚𝐬 𝐨𝐩𝐜𝐢𝐨𝐧 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐞𝐬𝐭𝐞 𝐯𝐢𝐝𝐞𝐨 ⇧', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐫𝐫𝐨𝐫, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐯𝐮𝐞𝐥𝐯𝐚 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
handler.exp = 100
handler.limit = 2
export default handler
