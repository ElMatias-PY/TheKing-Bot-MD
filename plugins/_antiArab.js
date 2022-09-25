/* Creditos a https://github.com/FG98F */

let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`𝐄𝐲, 𝐥𝐨𝐬 𝐧𝐮𝐦𝐞𝐫𝐨𝐬 𝐟𝐚𝐤𝐞𝐬 𝐧𝐨 𝐞𝐬𝐭𝐚𝐧 𝐩𝐞𝐫𝐦𝐢𝐭𝐢𝐝𝐨𝐬 𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐩𝐚𝐫𝐚 𝐞𝐯𝐢𝐭𝐚𝐫 𝐬𝐩𝐚𝐦\n\n𝐇𝐚𝐬𝐭𝐚 𝐥𝐚 𝐩𝐫𝐨𝐱𝐢𝐦𝐚 👋🏻`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('234' || '234')) {
global.db.data.users[m.sender].banned = true
m.reply(`𝐄𝐲, 𝐥𝐨𝐬 𝐧𝐮𝐦𝐞𝐫𝐨𝐬 𝐟𝐚𝐤𝐞𝐬 𝐧𝐨 𝐞𝐬𝐭𝐚𝐧 𝐩𝐞𝐫𝐦𝐢𝐭𝐢𝐝𝐨𝐬 𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐩𝐚𝐫𝐚 𝐞𝐯𝐢𝐭𝐚𝐫 𝐬𝐩𝐚𝐦\n\n𝐇𝐚𝐬𝐭𝐚 𝐥𝐚 𝐩𝐫𝐨𝐱𝐢𝐦𝐚 👋🏻`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('1' || '1')) {
global.db.data.users[m.sender].banned = true
m.reply(`𝐄𝐲, 𝐥𝐨𝐬 𝐧𝐮𝐦𝐞𝐫𝐨𝐬 𝐟𝐚𝐤𝐞𝐬 𝐧𝐨 𝐞𝐬𝐭𝐚𝐧 𝐩𝐞𝐫𝐦𝐢𝐭𝐢𝐝𝐨𝐬 𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐩𝐚𝐫𝐚 𝐞𝐯𝐢𝐭𝐚𝐫 𝐬𝐩𝐚𝐦\n\n𝐇𝐚𝐬𝐭𝐚 𝐥𝐚 𝐩𝐫𝐨𝐱𝐢𝐦𝐚 👋🏻`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
 
if (m.sender.startsWith('91' || '91')) {
global.db.data.users[m.sender].banned = true
m.reply(`𝐄𝐲, 𝐥𝐨𝐬 𝐧𝐮𝐦𝐞𝐫𝐨𝐬 𝐟𝐚𝐤𝐞𝐬 𝐧𝐨 𝐞𝐬𝐭𝐚𝐧 𝐩𝐞𝐫𝐦𝐢𝐭𝐢𝐝𝐨𝐬 𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐩𝐚𝐫𝐚 𝐞𝐯𝐢𝐭𝐚𝐫 𝐬𝐩𝐚𝐦\n\n𝐇𝐚𝐬𝐭𝐚 𝐥𝐚 𝐩𝐫𝐨𝐱𝐢𝐦𝐚 👋🏻`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}  
 
}}
export default handler
