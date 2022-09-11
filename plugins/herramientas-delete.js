import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 👑', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 - 𝐁𝐨𝐭-𝐌𝐃', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
let texto = `[ ⚠️ ] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴`
	
if (!m.quoted) return await conn.sendButton(m.chat, wm, texto, img5, [['𝗠 𝗘 𝗡 𝗨', '/menu']], m, dos.getRandom())
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['delete']
handler.tags = ['group']
handler.command = /^eliminar|del(ete)?$/i

handler.group = false
handler.admin = true
handler.botAdmin = true

export default handler
