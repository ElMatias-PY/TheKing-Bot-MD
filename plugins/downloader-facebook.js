import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[โ๐๐๐๐โ] ๐๐ง๐ ๐ซ๐๐ฌ๐ ๐ฎ๐ง ๐๐ง๐ฅ๐๐๐ ๐๐ ๐๐๐๐๐๐จ๐จ๐ค, ๐๐ฃ๐๐ฆ๐ฉ๐ฅ๐จ: ${usedPrefix + command}* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl`
try {
m.reply(`*[โ] แดแดsแดแดสษขแดษดแดแด sแด แด ษชแดแดแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด แดแดส าแดแด แดส, แดsแดแด แดสแดแดแดsแด แดแดแดแดแด แดแดสแดส แดษดแดสแด 2 ส 10 แดษชษดแดแดแดs แดแดแดแดษดแดษชแดษดแดแด แดแด สแด แดแดสแดแดษชแดษด แดแดส แด ษชแดแดแด...*`)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*๐ฐ๐๐๐ธ ๐ด๐๐๐ฐ ๐๐ ๐๐ธ๐ณ๐ด๐พ*' }, { quoted: m })
} catch (e) {
m.reply('*[โ๐๐๐๐โ]๐๐ซ๐ซ๐จ๐ซ, ๐ฏ๐ฎ๐๐ฅ๐ฏ๐ ๐ ๐ข๐ง๐ญ๐๐ง๐ญ๐๐ซ๐ฅ๐จ*\n\n*- ๐๐จ๐ซ๐ซ๐จ๐๐จ๐ซ๐ ๐ช๐ฎ๐ ๐๐ฅ ๐ฅ๐ข๐ง๐ค ๐ฌ๐๐ ๐ฌ๐ข๐ฆ๐ข๐ฅ๐๐ซ ๐:*\n*โ* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl')
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.register = true
export default handler
