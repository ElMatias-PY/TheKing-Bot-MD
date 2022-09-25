let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
┌───⊷ 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 ⊶
▢ *𝐍𝐎𝐌𝐁𝐑𝐄:* ${name}
▢ *𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒:* ${global.db.data.users[who].limit}💎
└──────────────
*𝐍𝐎𝐓𝐀:* 
*𝐏𝐮𝐞𝐝𝐞𝐬 𝐜𝐨𝐦𝐩𝐫𝐚𝐫 𝐝𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬 💎 𝐮𝐬𝐚𝐧𝐝𝐨 𝐥𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬*
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
handler.register = true
export default handler
