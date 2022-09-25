const items = [
    'limit', 'exp',
]
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('𝐄𝐬𝐭𝐚𝐬 𝐡𝐚𝐜𝐢𝐞𝐧𝐝𝐨 𝐮𝐧𝐚 𝐭𝐫𝐚𝐧𝐬𝐟𝐞𝐫𝐞𝐧𝐜𝐢𝐚')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `𝐔𝐬𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 
*${usedPrefix + command}*  [tipo] [cantidad] [@user]
📌 𝐄𝐣𝐞𝐦𝐩𝐥𝐨 : ${usedPrefix + command} exp 65 @595985958156


📍 𝐀𝐑𝐓𝐈𝐂𝐔𝐋𝐎𝐒 𝐓𝐑𝐀𝐍𝐒𝐅𝐄𝐑𝐈𝐁𝐋𝐄𝐒
┌──────────────
▢ *limit* = diamante
▢ *exp* = experiencia
└──────────────
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('𝐓𝐚𝐠𝐮𝐞𝐚 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨')
    if (!(who in global.db.data.users)) return m.reply(`𝐔𝐬𝐮𝐚𝐫𝐢𝐨 ${who} 𝐧𝐨 𝐞𝐬𝐭𝐚 𝐞𝐧 𝐥𝐚 𝐝𝐚𝐭𝐚𝐛𝐚𝐬𝐞`)
    if (user[type] * 1 < count) return m.reply(`✳️  *${type}* 𝐈𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞 𝐩𝐚𝐫𝐚 𝐭𝐫𝐚𝐧𝐬𝐟𝐞𝐫𝐢𝐫`)
    let confirm = `
¿𝐄𝐬𝐭𝐚𝐬 𝐬𝐞𝐠𝐮𝐫𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐭𝐫𝐚𝐧𝐬𝐟𝐞𝐫𝐢𝐫 *${count}* ${type} 𝐚  *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

𝐓𝐢𝐞𝐧𝐞𝐬  *60* s
`.trim()
    let c = '𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭'
    conn.sendButton(m.chat, confirm, c, null, [['si'], ['no']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('𝐒𝐞 𝐚𝐜𝐚𝐛𝐨 𝐞𝐥 𝐭𝐢𝐞𝐦𝐩𝐨'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/no?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('𝐂𝐚𝐧𝐜𝐞𝐥𝐚𝐝𝐨')
    }
    if (/si?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`𝐓𝐫𝐚𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐢𝐚 𝐞𝐱𝐢𝐭𝐨𝐬𝐚 𝐝𝐞 \n\n*${count}* *${type}*  𝐚 @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`Error al transferir *${count}* ${type} to *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [tipo] [cantidad] [@tag]')
handler.tags = ['xp']
handler.command = ['payxp', 'transfer', 'darxp'] 
handler.register = true
handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
