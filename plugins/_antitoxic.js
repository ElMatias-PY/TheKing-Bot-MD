const toxicRegex = /puto|puta||||||||rata|gei|gay|feo|fea|Gil|gilipolla|perra|perro|prra|prro|imbécil|bobo|boba|aborto|abortó|pene|teta|culo|maricon|culiao|callate|callese|porno|sexo|follar|me vale vrg|chupame la verga|chipame la vrg|marica|estupido|imbecil|rctmre|mrd|verga|vrga/i

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
       if (!(user.warn >= 3)) await m.reply(`${user.warn == 1 ? `Ey Puta🤬 *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, decir la palabra (${isToxic}) está prohibido en este bot *${user.warn}/3* advertencia`, false, { mentions: [m.sender] })
    }
    
    if (user.warn >= 3) {
       user.warn = 0
       await m.reply(`Ey Puta🤬 *@${m.sender.split`@`[0]}*, superaste las 3 advertencias y serás bloqueado y eliminado del grupo por Puta`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
