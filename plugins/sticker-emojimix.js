import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import fs from "fs"
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw '*[โ๐๐๐๐โ] ๐๐ฅ ๐ฎ๐ฌ๐จ ๐๐ ๐๐ฌ๐ญ๐ ๐๐จ๐ฆ๐๐ง๐๐จ ๐๐๐๐ ๐ฌ๐๐ซ #emojimix <emoji 1>&<emoji 2>*\n*๐๐ฃ๐๐ฆ๐ฉ๐ฅ๐จ:*\n*#emojimix ๐คจ&๐ฃ*'
let [emoji1, emoji2] = text.split`&`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}}
handler.help = ['emojimix'].map(v => v + ' emot1|emot2>')
handler.tags = ['fun']
handler.command = /^(emojimix)$/i
export default handler
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})
