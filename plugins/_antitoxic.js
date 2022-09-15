const toxicRegex = /puto|puta|putas|putos|put@s|pvto|pvta|pvtas|pvtos|gil|giles|hdp|ptm|csdm|marica|maricon|maricones|perra|perro|perras|perros|pinga|pene|verga|poronga|pijas|pija|pene|culo|estupido|estupida|mierdas|mierda|mrd|mrds|bot de mierda|culiao|cvliao|cacahuate|malparida|malparido|malparidas|malparidos|gay|gays|gei|geis|concha|teta|tetas|nalgas|cola|kaka|kk|bobo|boba|bitch|fucking|whores|shit|basura|trash|/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = 'https://i.imgur.com/5Q1MqGD.jpg'
 const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 3)) await conn.sendButton(m.chat,`${user.warn == 1 ? `𝙴𝚈🤬!!! *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, 𝙳𝙴𝙲𝙸𝚁 𝙻𝙰 𝙿𝙰𝙻𝙰𝙱𝚁𝙰 *(${isToxic})* 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾, 𝙽𝙾 𝚂𝙴𝙰𝚂 𝙶𝚁𝙾𝚂𝙴𝚁𝙾(𝙰)🤬`, `*ADVERTENCIA:*\n⚠️ *${user.warn}/3*\n\n${wm}`, img, [
['🔮 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝚃𝙾𝚇𝙸𝙲 🔮', '.disable antitoxic'],
['🔺 𝙼𝙴𝙽𝚄 🔺', '/menu']], false, { mentions: [m.sender] })}

if (user.warn >= 3) {
user.warn = 0
await m.reply(`𝙴𝚈🤬, 𝚃𝙴 𝙻𝙾 𝙰𝙳𝚅𝙴𝚁𝚃𝙸 𝚅𝙰𝚁𝙸𝙰𝚂 𝚅𝙴𝙲𝙴𝚂!!\n*@${m.sender.split`@`[0]}* 𝚂𝚄𝙿𝙴𝚁𝙰𝚂𝚃𝙴 𝙻𝙰𝚂 *3* 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰𝚂 𝚈 𝙰𝙷𝙺𝚁𝙰 𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾`, false, { mentions: [m.sender] })
user.banned = true
await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
