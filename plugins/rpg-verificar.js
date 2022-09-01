import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐀 𝐓𝐔 𝐄𝐃𝐀𝐃",
	rows: [
	    {title: "Años Random", rowId: '.reg ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "ADULTO",
	rows: [
	    {title: "30 Años", rowId: '.reg ' + namae + '.30 '},
	    {title: "29 Años", rowId: '.reg ' + namae + '.29 '},
	    {title: "28 Años", rowId: '.reg ' + namae + '.28 '},
	{title: "27 Años", rowId: '.reg ' + namae + '.27 '},
	{title: "26 Años", rowId: '.reg ' + namae + '.26 '},
	{title: "25 Años", rowId: '.reg ' + namae + '.25 '},
	{title: "24 Años", rowId: '.reg ' + namae + '.24 '},
	{title: "23 Años", rowId: '.reg ' + namae + '.23 '},
	{title: "22 Años", rowId: '.reg ' + namae + '.22 '},
	{title: "21 Años", rowId: '.reg ' + namae + '.21 '}
	]
    },
    {
	title: "JOVEN",
	rows: [
	    {title: "20 Años", rowId: '.reg ' + namae + '.20 '},
	    {title: "19 Años", rowId: '.reg ' + namae + '.19 '},
	    {title: "18 Años", rowId: '.reg ' + namae + '.18 '},
	{title: "17 Años", rowId: '.reg ' + namae + '.17 '},
	{title: "16 Años", rowId: '.reg ' + namae + '.16 '},
	{title: "15 Años", rowId: '.reg ' + namae + '.15 '},
	{title: "14 Años", rowId: '.reg ' + namae + '.14 '},
	{title: "13 Años", rowId: '.reg ' + namae + '.13 '},
	{title: "12 Años", rowId: '.reg ' + namae + '.12 '},
	{title: "11 Años", rowId: '.reg ' + namae + '.11 '},
	{title: "10 Años", rowId: '.reg ' + namae + '.10 '},
	{title: "9 Años", rowId: '.reg ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `*Por favor selecciona tu edad pulsando el boton...*\n*Tu nombre:* ${conn.getName(m.sender)}\n*Quieres poner otro mombre?* Escribe *${usedPrefix + command} TuNombre.TusAños*`,
  footer: global.wm,
  title: "━━━━「 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 」━━━━",
  buttonText: "𝐏𝐔𝐋𝐒𝐀 𝐀𝐐𝐔𝐈",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `*[💬] Ya estás registrado*\n*Quieres volver a registrarte?* ${usedPrefix}unreg <NUMERO SN>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, m)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacío (Letras)'
  if (!age) throw 'La edad no puede estar vacía (Numeros)'
  age = parseInt(age)
  if (age > 30) throw 'Uy, q viejo .____. '
  if (age < 5) throw 'Los bebes no saben escribir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  m.reply(`
━━━━ 「 *𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐃𝐎* 」━━━━

╭─• 〘 INFO 〙
│✧ *Nombre:* ${name}
│✧ *Edad:* ${age} Años
│✧ *SN:* ${sn}
▣──────···
`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify|verificar|reg(ister)?)$/i

export default handler
