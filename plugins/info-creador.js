let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*โโ ๐๐ฅ ๐ง๐ฎ๐ฆ๐๐ซ๐จ ๐๐ ๐ฆ๐ข ๐๐ซ๐๐๐๐จ๐ซ ๐๐ฌ wa.me/595985958156*
`.trim()   
let buttonMessage= {
'document': { url: `https://instagram.com/matiass.zzz` },
'mimetype': `application/${document}`,
'fileName': `ใ  ๐ฏ๐๐๐๐ ๐พ๐๐๐๐ ใ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://instagram.com/matiass.zzz',
'mediaType': 2,
'previewType': 'pdf',
'title': 'แดส แดแดแดแดส สแดแด แดแด แดกสแดแดsแดแดแดโฉ',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://instagram.com/matiass.zzz' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '๐๐๐๐'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '๐๐๐๐๐'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;๐ด๐๐๐๐๐ ๐;;;\nFN:๐ด๐๐๐๐๐ ๐\nORG:๐ด๐๐๐๐๐ ๐\nTITLE:\nitem1.TEL;waid=595985958156:+595 985 958 156\nitem1.X-ABMati:๐ด๐๐๐๐๐ ๐\nX-WA-BIZ-DESCRIPTION:[โ] แดแดษดแดแดแดแดแด แด แดsแดแด ษดแดแด แดแดสแด แดแดsแดs ษชแดแดแดสแดแดษดแดแดs.\nX-WA-BIZ-NAME:๐ฉ๐๐๐๐ ๐ด๐๐๐๐๐ ๐\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Matias ๐', contacts: [{ vcard }] }}, {quoted: m})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
