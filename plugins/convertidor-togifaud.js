/* ๐๐๐๐๐๐ ๐๐๐ https://github.com/BrunoSobrino */

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*[โ๐๐๐๐โ]๐๐๐ฌ๐ฉ๐จ๐ง๐๐ ๐ ๐ฎ๐ง ๐ฏ๐ข๐๐๐จ ๐ช๐ฎ๐ ๐๐๐ฌ๐๐ ๐๐จ๐ง๐ฏ๐๐ซ๐ญ๐ข๐ซ ๐๐ง ๐ ๐ข๐ ๐๐จ๐ง ๐๐ฎ๐๐ข๐จ*`
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*[โ] ๐๐ฅ ๐ญ๐ข๐ฉ๐จ ๐๐ ๐๐ซ๐๐ก๐ข๐ฏ๐จ ${mime} ๐ง๐จ ๐๐ฌ ๐๐จ๐ซ๐ซ๐๐๐ญ๐จ, ๐ซ๐๐ฌ๐ฉ๐จ๐ง๐๐ ๐ ๐ฎ๐ง ๐ฏ๐ข๐๐๐จ ๐ช๐ฎ๐ ๐๐๐ฌ๐๐ ๐๐จ๐ง๐ฏ๐๐ซ๐ญ๐ข๐ซ ๐๐ง ๐ ๐ข๐ ๐๐จ๐ง ๐๐ฎ๐๐ข๐จ*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '*แดฯแดษช แดsแดแด sแด ษขษชา แดแดษด แดแดแดษชแด, แดส แดสสษชสสแด sแด สแดแดสแดแดแดแดแด แดแดษด แดแดแดษชแด*' }, { quoted: m })}
handler.command = ['togifaud']
export default handler
