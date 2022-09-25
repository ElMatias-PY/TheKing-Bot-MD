import { tmpdir } from 'os'
import path, { join } from 'path'
import {
readdirSync,
statSync,
unlinkSync,
existsSync,
readFileSync,
watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {

conn.reply(m.chat, '*[ ✔ ] 𝐀𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐝𝐞 𝐥𝐚 𝐜𝐚𝐫𝐩𝐞𝐭𝐚 𝐓𝐌𝐏 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨𝐬 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨!!*', m)

const tmp = [tmpdir(), join(__dirname, '../tmp')]
const filename = []
tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
return filename.map(file => {
const stats = statSync(file)
unlinkSync(file)
})}
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp|cleartemp)$/i
handler.rowner = true
export default handler
