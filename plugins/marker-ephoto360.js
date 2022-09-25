/*
- Obten mas efectos en https://violetics.pw/api/ephoto360
- Usa la apikey "beta"
*/
let handler = async (m, { conn, args, command }) => { 
let response = args.join(' ').split('|')
if (!args[0]) throw '*[❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐮𝐧 𝐭𝐞𝐱𝐭𝐨*'
try {    
if (command == 'logocorazon') {
conn.reply(m.chat, '*[❗] 𝐄𝐥𝐚𝐛𝐨𝐫𝐚𝐧𝐝𝐨 𝐝𝐢𝐬𝐞ñ𝐨, 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*', m)
let res = `https://violetics.pw/api/ephoto360/heart-flashlight?apikey=beta&text=${response[0]}`
conn.sendFile(m.chat, res, 'error.jpg', null, m)}
if (command == 'logochristmas') {
conn.reply(m.chat, '*[❗] 𝐄𝐥𝐚𝐛𝐨𝐫𝐚𝐧𝐝𝐨 𝐝𝐢𝐬𝐞ñ𝐨, 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*', m)
let res = `https://violetics.pw/api/ephoto360/christmas-snow?apikey=beta&text=${response[0]}`
conn.sendFile(m.chat, res, 'error.jpg', null, m)}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐫𝐫𝐨𝐫, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐯𝐮𝐞𝐥𝐯𝐚 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨*', m)    
}}
handler.command = /^logocorazon|logochristmas/i
export default handler
