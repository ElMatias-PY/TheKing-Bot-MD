
import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 \n\n📌 Ejemplo :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    m.react(rwait)
    const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `✅ 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾`, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/
handler.register = true
export default handler
