import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'π²π·πΈπ²π° π²πππ΄', wm, json.result.female, [['π πππππππππ π', `/${command}`]], m)
conn.sendButton(m.chat, 'π²π·πΈπ²πΎ π²πππ΄', wm, json.result.male, [['π πππππππππ π', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
export default handler
