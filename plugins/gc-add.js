import fetch from 'node-fetch'
/**
 * @type {import('@adiwajshing/baileys')}
 */
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] 𝐄𝐥 𝐨𝐰𝐧𝐞𝐫 𝐭𝐢𝐞𝐧𝐞 𝐫𝐞𝐬𝐭𝐫𝐢𝐧𝐠𝐢𝐝𝐨 (𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝 / 𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝐞𝐥 𝐮𝐬𝐨 𝐝𝐞 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨*'
try {
  let _participants = participants.map(user => user.jid)
  let users = (await Promise.all(
    text.split(',')
      .map(v => v.replace(/[^0-9]/g, ''))
      .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
      .map(async v => [
        v,
        await conn.onWhatsApp(v + '@s.whatsapp.net')
      ])
  )).filter(v => v[1]).map(v => v[0] + '@c.us')
  let response = await conn.query({
        tag: 'iq',
        attrs: {
            type: 'set',
            xmlns: 'w:g2',
            to: m.chat,
        },
        content: users.map(jid => ({
            tag: 'add',
            attrs: {},
            content: [{ tag: 'participant', attrs: { jid } }]
}))})
    const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
    const add = getBinaryNodeChild(response, 'add')
    const participant = getBinaryNodeChildren(add, 'participant')
    for (const user of participant.filter(item => item.attrs.error == 403)) {
        const content = getBinaryNodeChild(user, 'add_request')
        const invite_code = content.attrs.code
        const invite_code_exp = content.attrs.expiration
        let teks = `*[❗𝐈𝐍𝐅𝐎❗] 𝐍𝐨 𝐟𝐮𝐞 𝐩𝐨𝐬𝐢𝐛𝐥𝐞 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐞𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐪𝐮𝐞 𝐢𝐧𝐠𝐫𝐞𝐬𝐨𝐬, 𝐞𝐬𝐭𝐨 𝐩𝐮𝐞𝐝𝐞 𝐨𝐜𝐮𝐫𝐫𝐢𝐫 𝐩𝐨𝐫𝐪𝐮𝐞 𝐞𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐞𝐬𝐭𝐞 𝐦𝐚𝐥, 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚  𝐬𝐚𝐥𝐢𝐝𝐨 𝐫𝐞𝐜𝐢𝐞𝐧𝐭𝐞𝐦𝐞𝐧𝐭𝐞 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐨 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐡𝐚𝐲𝐚 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐝𝐨 𝐬𝐮 𝐩𝐫𝐢𝐯𝐚𝐜𝐢𝐝𝐚𝐝 𝐝𝐞 𝐠𝐫𝐮𝐩𝐨𝐬, 𝐭𝐞 𝐚𝐜𝐨𝐧𝐬𝐞𝐣𝐚𝐦𝐨𝐬  𝐞𝐧𝐯𝐢𝐚𝐫𝐥𝐞 𝐥𝐚 𝐢𝐧𝐯𝐢𝐭𝐚𝐜𝐢𝐨𝐧 𝐦𝐚𝐧𝐮𝐚𝐥𝐦𝐞𝐧𝐭𝐞 un!!*`
        m.reply(teks, null, {
        mentions: conn.parseMention(teks)
})}
} catch (e) {
throw m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐍𝐨 𝐟𝐮𝐞 𝐩𝐨𝐬𝐢𝐛𝐥𝐞 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐞𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐪𝐮𝐞 𝐢𝐧𝐠𝐫𝐞𝐬𝐨𝐬, 𝐞𝐬𝐭𝐨 𝐩𝐮𝐞𝐝𝐞 𝐨𝐜𝐮𝐫𝐫𝐢𝐫 𝐩𝐨𝐫𝐪𝐮𝐞 𝐞𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐞𝐬𝐭𝐞 𝐦𝐚𝐥, 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚  𝐬𝐚𝐥𝐢𝐝𝐨 𝐫𝐞𝐜𝐢𝐞𝐧𝐭𝐞𝐦𝐞𝐧𝐭𝐞 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐨 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐡𝐚𝐲𝐚 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐝𝐨 𝐬𝐮 𝐩𝐫𝐢𝐯𝐚𝐜𝐢𝐝𝐚𝐝 𝐝𝐞 𝐠𝐫𝐮𝐩𝐨𝐬, 𝐭𝐞 𝐚𝐜𝐨𝐧𝐬𝐞𝐣𝐚𝐦𝐨𝐬  𝐞𝐧𝐯𝐢𝐚𝐫𝐥𝐞 𝐥𝐚 𝐢𝐧𝐯𝐢𝐭𝐚𝐜𝐢𝐨𝐧 𝐦𝐚𝐧𝐮𝐚𝐥𝐦𝐞𝐧𝐭𝐞!!*')}
}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
