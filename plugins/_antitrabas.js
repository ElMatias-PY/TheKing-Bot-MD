//
//By @Matias || https://github.com/ElMatias-PY/
//
import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    let name = await conn.getName(m.sender)
    let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝚃𝚑𝚎 𝙺𝚒𝚗𝚐 - 𝙱𝚘𝚝-𝙼𝙳', 'jpegThumbnail': null}}}
    if (chat.antiTraba && m.text.length > 1200) { //Cantidad máxima de caracteres aceptados en un mensaje//
    	if (isAdmin) return conn.sendMessage(m.chat, { text: `*_El administrador_* @${m.sender.split("@")[0]} *_acaba de enviar un texto que contiene muchos caracteres_* -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : '"_No soy administrador, no puedo hacer nada_* :/'}`, author, ['[ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝚃𝚁𝙰𝙱𝙰𝚂 ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin && bot.restrict) {
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `*_Marcar el chat como leido ✓_*\n${"\n".repeat(600)}\n=> *El número:* *wa.me/${m.sender.split("@")[0]}*\n=> *Alias*:* *${name}*\n[ ! ] *_Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos_*"`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] *_Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!_*')
    }
    return !0
}