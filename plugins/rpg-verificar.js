import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `*[โ๐๐๐๐โ]๐๐๐ฒ, ๐ฒ๐ ๐๐ฌ๐ญ๐๐ฌ ๐ซ๐๐ ๐ข๐ฌ๐ญ๐ซ๐๐๐จ*\n\n*๐๐ฎ๐ข๐๐ซ๐๐ฌ ๐ช๐ฎ๐ข๐ญ๐๐ซ ๐ญ๐ฎ ๐ซ๐๐ ๐ข๐ฌ๐ญ๐ซ๐จ? ๐ฎ๐ฌ๐ ๐๐ฅ ๐๐จ๐ฆ๐๐ง๐๐จ ${usedPrefix}unreg <numero de serie>*\n\n*๐๐ข ๐ง๐จ ๐ซ๐๐๐ฎ๐๐ซ๐๐จ ๐ฌ๐ฎ ๐ง๐ฎ๐ฆ๐๐ซ๐จ ๐๐ ๐ฌ๐๐ซ๐ข๐ ๐ฉ๐ฎ๐๐๐๐ฌ ๐ฎ๐ฌ๐๐ซ ๐๐ฅ ๐๐จ๐ฆ๐๐ง๐๐จ ${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = Math.floor(Math.random() * 41)
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `โโ โโโโโโโโโโโโ โ โ
โใ ๐๐๐๐๐๐๐๐๐๐๐ ใ
โฃโ โโโโโโโโโโโโ โ โ
โ *๐๐๐๐๐๐:* ${name}
โ *๐๐๐๐:* ${age} aรฑos
โ *๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐:* 
โ ${sn}
โโ โโโโโโโโโโโโ โ โ`
let author = global.author
conn.sendButton(m.chat, caption, `๐๐ฎ ๐ง๐ฎ๐ฆ๐๐ซ๐จ ๐๐ ๐ฌ๐๐ซ๐ข๐ ๐ญ๐ ๐ฌ๐๐ซ๐ฏ๐ข๐ซ๐ ๐ฌ๐ข ๐ช๐ฎ๐ข๐๐ซ๐๐ฌ ๐ช๐ฎ๐ข๐ญ๐๐ซ ๐ญ๐ฎ ๐ซ๐๐ ๐ข๐ฌ๐ญ๐ซ๐จ ๐๐ง ๐๐ฅ ๐๐จ๐ญ\n${author}`, [['ยกยก๐๐๐๐๐ ๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐๐!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler
