const toxicRegex = /puto|puta|putos|putas|pvto|pvta|pvtos|pvtas|put@|put@s|gay|gei|gey|gays|geis|geys|gil|giles|perra|perro|perras|perros|estupido|estupida|estúpido|estúpida|estúpidos|estúpidas|estupidas|estupidos|carajo|imbécil|imbecil|imbéciles|imbeciles|porno|pija|pene|pija|poronga|coño|tetas|teta|tetitas|tetita|putito|putita|putitas|putitos|mierda|mierdas|verga|vergas|concha|csrm|ptm|hdp|hdps|gilipolla|coños|culo|culos|cvlo|cvlos|penes|fucking|whores|bitch|Fool|stupid|follar|follarse|cogerse|coger|idiota|idiotas|semen|bts|kuno|kunno/i

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
       if (!(user.warn >= 3)) await m.reply(`${user.warn == 1 ? `𝑬𝒚🤬 *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, 𝒅𝒆𝒄𝒊𝒓 𝒍𝒂 𝒑𝒂𝒍𝒂𝒃𝒓𝒂 (${isToxic}) 𝒆𝒔𝒕𝒂 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐 𝒆𝒏 𝒆𝒔𝒕𝒆 𝑩𝒐𝒕\n\n*ADVERTENCIA*\n *${user.warn}/3*`, false, { mentions: [m.sender] })
    }
    
    if (user.warn >= 3) {
       user.warn = 0
       await m.reply(`𝑬𝒚🤬 *@${m.sender.split`@`[0]}*, 𝒔𝒖𝒑𝒆𝒓𝒂𝒔𝒕𝒆 𝒍𝒂𝒔 3 𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂, 𝒂𝒉𝒐𝒓𝒂 𝒔𝒆𝒓𝒂𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
