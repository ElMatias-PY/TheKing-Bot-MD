import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐮𝐧 𝐥𝐢𝐧𝐤 𝐝𝐞 𝐆𝐢𝐭𝐡𝐮𝐛, 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${usedPrefix + command} https://github.com/BrunoSobrino/TheMystic-Bot-MD*`
if (!regex.test(args[0])) throw '*[❗𝐈𝐍𝐅𝐎❗]𝐋𝐢𝐧𝐤 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨!*'
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐬𝐩𝐞𝐫𝐨 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐞𝐧 𝐥𝐨 𝐪𝐮𝐞 𝐞𝐧𝐯𝐢𝐨 𝐬𝐮 𝐚𝐫𝐜𝐡𝐢𝐯𝐨, 𝐬𝐢 𝐞𝐬𝐭𝐞 𝐧𝐨 𝐞𝐬 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐩𝐮𝐞𝐝𝐞 𝐝𝐞𝐛𝐞𝐫𝐬𝐞 𝐚 𝐪𝐮𝐞 𝐞𝐥 𝐫𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐢𝐨 𝐞𝐬 𝐦𝐮𝐲 𝐩𝐞𝐬𝐚𝐝𝐨*`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone/i
handler.register = true
export default handler
