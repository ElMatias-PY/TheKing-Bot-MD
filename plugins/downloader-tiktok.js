
import fetch from 'node-fetch'

import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤 𝐟𝐚𝐥𝐭𝐚𝐧𝐭𝐞, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐢𝐧𝐠𝐫𝐞𝐬𝐞 𝐮𝐧 𝐥𝐢𝐧𝐤 𝐝𝐞 𝐚𝐥𝐠𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤*\n\n*—◉ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMFd19s7W/*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨, 𝐢𝐧𝐠𝐫𝐞𝐬𝐞 𝐮𝐧 𝐥𝐢𝐧𝐤 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤*\n\n*—◉ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMFd19s7W/*`
let texto = `*[❗] @${m.sender.split`@`[0]} 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐞𝐧 𝐥𝐨 𝐪𝐮𝐞 𝐞𝐧𝐯𝐢𝐨 𝐬𝐮 𝐯𝐢𝐝𝐞𝐨*`
try {
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'ᴛʜᴇ ᴋɪɴɢ - ʙᴏᴛ', body: null, thumbnail: imagen1, sourceUrl: 'https://instagram.com/matiass.zzz' }, mentionedJid: [m.sender] }}}, { quoted: m })
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
let meta = await getInfo(url).catch(_ => {})
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let buttons = [{ buttonText: { displayText: '𝐀𝐔𝐃𝐈𝐎' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: '_ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ_', footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: m })
} catch {
try {
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: '𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭', body: null, thumbnail: imagen1, sourceUrl: 'https://instagram.com/matiass.zzz' }, mentionedJid: [m.sender] }}}, { quoted: m })
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let buttons = [{ buttonText: { displayText: '𝐀𝐔𝐃𝐈𝐎' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: url}, caption: '_𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭', footer: await shortUrl(url), buttons }, { quoted: m })
} catch {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨, 𝐨𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐚𝐥 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐬𝐮 𝐯𝐢𝐝𝐞𝐨*')  

}}}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
export default handler
async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}
