import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐮𝐧 𝐞𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤, 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${usedPrefix + command}* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl`
try {
m.reply(`*[❗] ᴅᴇsᴄᴀʀɢᴀɴᴅᴏ sᴜ ᴠɪᴅᴇᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴛᴇ ᴘʀᴏᴄᴇsᴏ ᴘᴜᴇᴅᴇ ᴅᴜʀᴀʀ ᴇɴᴛʀᴇ 2 ʏ 10 ᴍɪɴᴜᴛᴏs ᴅᴇᴘᴇɴᴅɪᴇɴᴅᴏ ᴅᴇ ʟᴀ ᴅᴜʀᴀᴄɪᴏɴ ᴅᴇʟ ᴠɪᴅᴇᴏ...*`)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾*' }, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗]𝐄𝐫𝐫𝐨𝐫, 𝐯𝐮𝐞𝐥𝐯𝐚 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨*\n\n*- 𝐂𝐨𝐫𝐫𝐨𝐛𝐨𝐫𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐥𝐢𝐧𝐤 𝐬𝐞𝐚 𝐬𝐢𝐦𝐢𝐥𝐚𝐫 𝐚:*\n*◉* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl')
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.register = true
export default handler
