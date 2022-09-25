const xpperlimit = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `
┌─「 *𝐍𝐎𝐓𝐀 𝐃𝐄 𝐏𝐀𝐆𝐎* 」
‣ *𝐂𝐎𝐌𝐏𝐑𝐀 𝐍𝐎𝐌𝐈𝐍𝐀𝐋* : + ${count}💎 
‣ *𝐆𝐀𝐒𝐓𝐀𝐃𝐎* : -${xpperlimit * count} XP
└──────────────`, m)
  } else conn.reply(m.chat, `𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨, 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞𝐬 𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞 𝐗𝐏 𝐩𝐚𝐫𝐚 𝐜𝐨𝐦𝐩𝐫𝐚𝐫  *${count}* 𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬💎`, m)
}
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.command = ['buy', 'buyall'] 

handler.disabled = false

export default handler
