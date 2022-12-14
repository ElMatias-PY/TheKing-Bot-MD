import TicTacToe from '../lib/tictactoe.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*[â] đđŽđ§ đđŦđ­đđŦ đđ§ đŽđ§đ đŠđđĢđ­đĸđđ*'
if (!text) throw `*[â] đđ đĢđđĒđŽđĸđđĢđ đŠđ¨đ§đđĢ đŽđ§ đ§đ¨đĻđđĢđ đ đĨđ đŦđđĨđ đđ đŖđŽđđ đ¨đŦ*\n\n*ââ đđŖđđĻđŠđĨđ¨*\n*â ${usedPrefix + command} PVP*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
await m.reply('*[đšī¸] đđ§đĸđđĸđ đđĨ đŖđŽđđ đ¨, đŽđ§ đŽđŦđŽđđĢđĸđ¨ đŦđ đĄđ đŽđ§đĸđđ¨ đ đĨđ đŦđđĨđ*')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: 'â',
O: 'â­',
1: '1ī¸âŖ',
2: '2ī¸âŖ',
3: '3ī¸âŖ',
4: '4ī¸âŖ',
5: '5ī¸âŖ',
6: '6ī¸âŖ',
7: '7ī¸âŖ',
8: '8ī¸âŖ',
9: '9ī¸âŖ',
}[v]})
let str = `
đŽ đđđđ đđ đđđđ đŽ

â = @${room.game.playerX.split('@')[0]}
â­ = @${room.game.playerO.split('@')[0]}

        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}

đđŽđĢđ§đ¨ đđ @${room.game.currentTurn.split('@')[0]}
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
conn.sendButton(m.chat, `*đš đđđđ đđ đđđđ đŽ*\n\n*â đđŦđŠđđĢđđ§đđ¨ đđĨ đŦđđ đŽđ§đđ¨ đŖđŽđ đđđ¨đĢ*\n*â đđđĢđ đđ¨đĢđĢđđĢ đ¨ đŦđđĨđĸđĢđŦđ đđ đĨđ đŦđđĨđ đŽđŦđđ§ đđĨ đđ¨đĻđđ§đđ¨ ${usedPrefix}delttt*`, wm, imgplay, [['đđđđđđ đ đđ đđđđ', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
handler.register = true
handler.exp = 70
export default handler
