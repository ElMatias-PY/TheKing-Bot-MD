import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐦𝐚𝐬 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐝𝐞 𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤*', m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let Mystic = `
*𝐔𝐒𝐔𝐀𝐑𝐈𝐎:* ${json.result.username}
*𝐍𝐎𝐌𝐁𝐑𝐄:* ${json.result.nickname}
*𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒:* ${json.result.followers}
*𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐒:* ${json.result.followings}
*𝐋𝐈𝐊𝐄𝐒:* ${json.result.likes}
*𝐕𝐈𝐃𝐄𝐎𝐒:* ${json.result.video}
*𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍:* ${json.result.bio}
`.trim()
conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false)
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐫𝐫𝐨𝐫, 𝐧𝐨 𝐬𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐨 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐝𝐨*'
}}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.register = true
export default handler
