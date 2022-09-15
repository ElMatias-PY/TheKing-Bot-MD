/* Creditos a https://github.com/FG98F */

let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`❎ Ey, Anti fakes está activo para evitar spam\n\nHasta la próxima`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('234' || '234')) {
global.db.data.users[m.sender].banned = true
m.reply(`❎ Ey, Anti fakes está activo para evitar spam\n\nHasta la próxima`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('1' || '1')) {
global.db.data.users[m.sender].banned = true
m.reply(`❎ Ey, Anti fakes está activo para evitar spam\n\nHasta la próxima`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
 
if (m.sender.startsWith('91' || '91')) {
global.db.data.users[m.sender].banned = true
m.reply(`❎ Ey, Anti fakes está activo para evitar spam\n\nHasta la próxima`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}  
 
}}
export default handler
