let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "✨ | 𝐖𝐄𝐋𝐂𝐎𝐌𝐄", description: "𝐀𝐂𝐓𝐈𝐕𝐀 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀 𝐋𝐀 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐀 𝐄𝐍 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | 𝐌𝐎𝐃𝐎 𝐏𝐔𝐁𝐋𝐈𝐂𝐎", description: "𝐄𝐋 𝐁𝐎𝐓 𝐒𝐄 𝐕𝐔𝐄𝐋𝐕𝐄 𝐏𝐔𝐁𝐈𝐂𝐎 𝐘/𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎", rowId: `${usedPrefix + command} public`},
{title: "🥵 | 𝐌𝐎𝐃𝐎 𝐇𝐎𝐑𝐍𝐘", description: "𝙰𝐀𝐂𝐓𝐈𝐕𝐀 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀 𝐋𝐎𝐒 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 +𝟏𝟖", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊", description: "𝐀𝐍𝐓𝐈 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀 𝐄𝐋 𝐀𝐍𝐓𝐈 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐃𝐄 𝐆𝐑𝐔𝐏𝐎𝐒 𝐃𝐄 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝟸", description: "𝐀𝐂𝐓𝐈𝐕𝐀 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀 𝐄𝐋 𝐀𝐍𝐓𝐈 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐐𝐔𝐄 𝐈𝐍𝐈𝐂𝐈𝐄𝐍 𝐄𝐍 𝐇𝐓𝐓𝐏𝐒", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | 𝐃𝐄𝐓𝐄𝐂𝐓", description: "𝐀𝐂𝐓𝐈𝐕𝐀 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀 𝐋𝐀𝐒 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎𝐍𝐄𝐒 𝐃𝐄 𝐌𝐎𝐃𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎𝐍 𝐃𝐄 𝐔𝐍 𝐆𝐑𝐔𝐏𝐎", rowId: `${usedPrefix + command} detect`},      
{title: "❗ | 𝐑𝐄𝐒𝐓𝐑𝐈𝐂𝐓", description: "𝐀𝐂𝐓𝐈𝐕𝐀 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀 𝐋𝐀𝐒 𝐑𝐄𝐒𝐓𝐑𝐈𝐂𝐂𝐈𝐎𝐍𝐄𝐒 𝐏𝐀𝐑𝐀 𝐒𝐀𝐂𝐀𝐑 𝐆𝐄𝐍𝐓𝐄𝐒 𝐃𝐄 𝐆𝐑𝐔𝐏𝐎𝐒", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | 𝐀𝐔𝐓𝐎𝐑𝐄𝐀𝐃", description: "𝐌𝐀𝐑𝐂𝐀𝐑 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀𝐌𝐄𝐍𝐓𝐄 𝐋𝐀 𝐂𝐎𝐍𝐕𝐄𝐑𝐒𝐀𝐂𝐈𝐎𝐍𝐄𝐒 𝐂𝐎𝐌𝐎 𝐋𝐄𝐈𝐃𝐎", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | 𝐀𝐔𝐃𝐈𝐎𝐒", description: "𝐀𝐂𝐓𝐈𝐕𝐀 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀 𝐋𝐎𝐒 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒 𝐒𝐈𝐍 𝐏𝐑𝐄𝐅𝐈𝐉𝐎", rowId: `${usedPrefix + command} audios`},
{title: "👾 | 𝐀𝐔𝐓𝐎𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒", description: "𝐂𝐎𝐍𝐕𝐈𝐄𝐑𝐓𝐄 𝐓𝐎𝐃𝐀𝐒 𝐋𝐀𝐒 𝐅𝐎𝐓𝐎𝐒, 𝐕𝐈𝐃𝐄𝐎𝐒 𝐎 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐄𝐍𝐕𝐈𝐀𝐃𝐎𝐒 𝐄𝐍 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | 𝐏𝐂𝐎𝐍𝐋𝐘", description: "𝐄𝐋 𝐁𝐎𝐓 𝐒𝐎𝐋𝐎 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄𝐑𝐀 𝐀 𝐋𝐎𝐒 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐒𝐈 𝐄𝐒 𝐄𝐍 𝐔𝐍 𝐂𝐇𝐀𝐓 𝐏𝐑𝐈𝐕𝐀𝐃𝐎", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | 𝐆𝐂𝐎𝐍𝐋𝐘", description: "𝐄𝐋 𝐁𝐎𝐓 𝐒𝐎𝐋𝐎 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄𝐑𝐀 𝐀 𝐋𝐎𝐒 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐒𝐈 𝐄𝐒 𝐄𝐍 𝐔𝐍 𝐆𝐑𝐔𝐏𝐎", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | 𝐀𝐍𝐓𝐈𝐕𝐈𝐄𝐖𝐎𝐍𝐂𝐄", description: "𝐀𝐂𝐓𝐈𝐕𝐀 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀 𝐄𝐋 𝐀𝐍𝐓𝐈 𝐕𝐄𝐑 𝐔𝐍𝐀 𝐒𝐎𝐋𝐀 𝐕𝐄𝐙", rowId: `${usedPrefix + command} antiviewonce`},
{title: "📵 | 𝐀𝐍𝐓𝐈𝐋𝐋𝐀𝐌𝐀𝐃𝐀𝐒", description: "𝐄𝐋 𝐁𝐎𝐓 𝐁𝐋𝐎𝐐𝐔𝐄𝐀 𝐀 𝐋𝐀𝐒 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐒 𝐐𝐔𝐄 𝐋𝐄 𝐇𝐀𝐆𝐀𝐍 𝐋𝐋𝐀𝐌𝐀𝐃𝐀 𝐎 𝐕𝐈𝐃𝐄𝐎𝐋𝐋𝐀𝐌𝐀𝐃𝐀𝐒", rowId: `${usedPrefix + command} anticall`},
{title: "💬 | 𝐀𝐍𝐓𝐈𝐏𝐑𝐈𝐕𝐀𝐃𝐎", description: "𝐄𝐋 𝐁𝐎𝐓 𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐑𝐀 𝐀 𝐋𝐀𝐒 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐒 𝐐𝐔𝐄 𝐋𝐄 𝐄𝐒𝐂𝐑𝐈𝐁𝐀𝐍 𝐀𝐋 𝐏𝐑𝐈𝐕𝐀𝐃𝐎", rowId: `${usedPrefix + command} antiprivado`},
{title: "🤬 | 𝐀𝐍𝐓𝐈𝐓𝐎𝐗𝐈𝐂", description: "𝐀𝐂𝐓𝐈𝐕𝐀 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀 𝐋𝐀𝐒 𝐌𝐀𝐋𝐀𝐒 𝐏𝐀𝐋𝐀𝐁𝐑𝐀𝐒", rowId: `${usedPrefix + command} antitoxic`},
{title: "🕸️ | 𝐀𝐍𝐓𝐈𝐓𝐑𝐀𝐁𝐀𝐒", description: "𝐀𝐂𝐓𝐈𝐕𝐀 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀 𝐄𝐋 𝐀𝐍𝐓𝐈 𝐓𝐑𝐀𝐁𝐀", rowId: `${usedPrefix + command} antitraba`},
{title: "👎🏻 | 𝐀𝐍𝐓𝐈𝐅𝐀𝐊𝐄𝐒", description: "𝐀𝐋 𝐄𝐍𝐕𝐈𝐀𝐑 𝐔𝐍 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐔𝐍 𝐍𝐔𝐌𝐄𝐑𝐎 𝐅𝐀𝐊𝐄, 𝐄𝐋 𝐁𝐎𝐓 𝐋𝐎 𝐄𝐋𝐈𝐌𝐈𝐍𝐀", rowId: `${usedPrefix + command} antiarabes`},  
]}, ]
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `┏━━━━━━━━━━━━━┓
┣ ඬ⃟ℹ️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiarabes*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiarabes*_
┗━━━━━━━━━━━━━┛`,
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type} 
🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? '𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨' : '𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨'}
📣 𝐏𝐀𝐑𝐀: ${isAll ? '𝐄𝐒𝐓𝐄 𝐁𝐎𝐓' : isUser ? '' : '𝐄𝐒𝐓𝐄 𝐂𝐇𝐀𝐓'}`, author, null, [[`${isEnable ? '✖️ 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 ✖️' : '✔️ 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 ✔️'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`], ['𝐌𝐄𝐍𝐔', '#menu']], m)}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i
handler.rowner = true
export default handler
