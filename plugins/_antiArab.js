/* Creditos a https://github.com/FG98F */

let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`šš², š„šØš¬ š§š®š¦šš«šØš¬ ššš¤šš¬ š§šØ šš¬š­šš§ š©šš«š¦š¢š­š¢ššØš¬ šš§ šš¬š­š š š«š®š©šØ š©šš«š ššÆš¢š­šš« š¬š©šš¦\n\nššš¬š­š š„š š©š«šØš±š¢š¦š šš»`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('234' || '234')) {
global.db.data.users[m.sender].banned = true
m.reply(`šš², š„šØš¬ š§š®š¦šš«šØš¬ ššš¤šš¬ š§šØ šš¬š­šš§ š©šš«š¦š¢š­š¢ššØš¬ šš§ šš¬š­š š š«š®š©šØ š©šš«š ššÆš¢š­šš« š¬š©šš¦\n\nššš¬š­š š„š š©š«šØš±š¢š¦š šš»`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('1' || '1')) {
global.db.data.users[m.sender].banned = true
m.reply(`šš², š„šØš¬ š§š®š¦šš«šØš¬ ššš¤šš¬ š§šØ šš¬š­šš§ š©šš«š¦š¢š­š¢ššØš¬ šš§ šš¬š­š š š«š®š©šØ š©šš«š ššÆš¢š­šš« š¬š©šš¦\n\nššš¬š­š š„š š©š«šØš±š¢š¦š šš»`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
 
if (m.sender.startsWith('91' || '91')) {
global.db.data.users[m.sender].banned = true
m.reply(`šš², š„šØš¬ š§š®š¦šš«šØš¬ ššš¤šš¬ š§šØ šš¬š­šš§ š©šš«š¦š¢š­š¢ššØš¬ šš§ šš¬š­š š š«š®š©šØ š©šš«š ššÆš¢š­šš« š¬š©šš¦\n\nššš¬š­š š„š š©š«šØš±š¢š¦š šš»`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}  
 
}}
export default handler
