import TicTacToe from '../lib/tictactoe.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*[❗] 𝐀𝐮𝐧 𝐞𝐬𝐭𝐚𝐬 𝐞𝐧 𝐮𝐧𝐚 𝐩𝐚𝐫𝐭𝐢𝐝𝐚*'
if (!text) throw `*[❗] 𝐒𝐞 𝐫𝐞𝐪𝐮𝐢𝐞𝐫𝐞 𝐩𝐨𝐧𝐞𝐫 𝐮𝐧 𝐧𝐨𝐦𝐛𝐫𝐞 𝐚 𝐥𝐚 𝐬𝐚𝐥𝐚 𝐝𝐞 𝐣𝐮𝐞𝐠𝐨𝐬*\n\n*—◉ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨*\n*◉ ${usedPrefix + command} PVP*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
await m.reply('*[🕹️] 𝐈𝐧𝐢𝐜𝐢𝐚 𝐞𝐥 𝐣𝐮𝐞𝐠𝐨, 𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐬𝐞 𝐡𝐚 𝐮𝐧𝐢𝐝𝐨 𝐚 𝐥𝐚 𝐬𝐚𝐥𝐚*')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = `
🎮 𝐓𝐑𝐄𝐒 𝐄𝐍 𝐑𝐀𝐘𝐀 🎮

❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}

        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}

𝐓𝐮𝐫𝐧𝐨 𝐝𝐞 @${room.game.currentTurn.split('@')[0]}
`.trim()
if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: m })
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
if (text) room.name = text     
let imgplay = `https://cope-cdnmed.agilecontent.com/resources/jpg/8/9/1590140413198.jpg`
conn.sendButton(m.chat, `*🕹 𝐓𝐑𝐄𝐒 𝐄𝐍 𝐑𝐀𝐘𝐀 🎮*\n\n*◉ 𝐄𝐬𝐩𝐞𝐫𝐚𝐧𝐝𝐨 𝐚𝐥 𝐬𝐞𝐠𝐮𝐧𝐝𝐨 𝐣𝐮𝐠𝐚𝐝𝐨𝐫*\n*◉ 𝐏𝐚𝐫𝐚 𝐛𝐨𝐫𝐫𝐚𝐫 𝐨 𝐬𝐚𝐥𝐢𝐫𝐬𝐞 𝐝𝐞 𝐥𝐚 𝐬𝐚𝐥𝐚 𝐮𝐬𝐞𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${usedPrefix}delttt*`, wm, imgplay, [['𝐔𝐍𝐈𝐑𝐒𝐄 𝐀 𝐋𝐀 𝐒𝐀𝐋𝐀', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
handler.register = true
handler.exp = 70
export default handler
