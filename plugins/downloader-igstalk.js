import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐝𝐞 𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐝𝐞 𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦, 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${usedPrefix + command} luisitocomunica*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`
${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 
*${followingH}* 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐒
*${postsH}* 𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐂𝐈𝐎𝐍𝐄𝐒 
*𝐁𝐈𝐎:* ${description}
`.trim())
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk)$/i
handler.register = true
export default handler
