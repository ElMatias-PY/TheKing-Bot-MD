export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *[❗𝐈𝐍𝐅𝐎❗] 𝐃𝐞𝐣𝐚𝐬𝐭𝐞 𝐝𝐞 𝐞𝐬𝐭𝐚𝐫 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐨 (𝙰𝙵𝙺)${user.afkReason ? '𝐝𝐞𝐬𝐩𝐮𝐞𝐬 𝐝𝐞 𝐞𝐬𝐭𝐚𝐫 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐨 (𝙰𝙵𝙺) 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨: ' + user.afkReason : ''}*
  
  *—◉ 𝐓𝐢𝐞𝐦𝐩𝐨 𝐝𝐞 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝 (𝙰𝙵𝙺): ${(new Date - user.afk).toTimeString()}*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*[❗] 𝐍𝐨 𝐥𝐨 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞𝐬*

*—◉ 𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐪𝐮𝐞 𝐮𝐬𝐭𝐞𝐝 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐨 𝐞𝐬𝐭𝐚 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐨 (𝙰𝙵𝙺)*      
*—◉ ${reason ? '𝐌𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝 (𝙰𝙵𝙺): ' + reason : '𝐌𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝 (𝙰𝙵𝙺): _𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐧𝐨 𝐝𝐢𝐣𝐨 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝'}*
*—◉ 𝐓𝐢𝐞𝐦𝐩𝐨 𝐭𝐫𝐚𝐧𝐬𝐜𝐮𝐫𝐫𝐢𝐝𝐨 𝐝𝐞 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝 (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
