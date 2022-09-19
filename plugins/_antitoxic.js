const toxicRegex = /puto|puta|pvto|pvta|putas|putos|put@s|put@|gay|gays|gei|gei|hdp|csrm|hijo puta|hijo de puta|perra|perro|prra|prro|zarra|zorras|imbécil|imbecil||maricon|marica|bicht|crm|semen|pene|porno|pija|pito|poronga|pinga|careverga|verga|vrg|tetas|teta|culo|cvlo|culos|cvlos|mierda|mierdas|mrd|chupa vrg|chupa verga|estúpida|estúpido|estúpidas|estúpidos|imbéciles||imbeciles|bobo|boba|bobos|bobas|kunno|culiaos|culiao|hdps|sorras|concha|/i

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup)
        return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isToxic = toxicRegex.exec(m.text)
    
    if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
       user.warn += 1
       if (!(user.warn >= 3)) await m.reply(`${user.warn == 1 ? `Ey🤬 *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, decir la palabra (${isToxic}) está prohibido en este bot\n\n*[ ⚠️ ] ADVERTENCIA* *${user.warn}/3*`, false, { mentions: [m.sender] })
    }
    
    if (user.warn >= 3) {
       user.warn = 0
       await m.reply(`Ey🤬 *@${m.sender.split`@`[0]}*, superaste las 3 advertencias y ahora serás eliminado de este grupo`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
