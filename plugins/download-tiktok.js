import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `✳️ 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺k\n\n 📌 Ejemplo : ${usedPrefix + command} https://vm.tiktok.com/ZMNqyusVD/?k=1`
if (!args[0].match(/tiktok/gi)) throw `❎ v𝚅𝙴𝚁𝙸𝙵𝙸𝚀𝚄𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙻𝙸𝙽𝙺 𝚂𝙴𝙰 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺`

    const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    //const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
   const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '[ ⚠️ ] 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾'
    m.react(rwait)
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
┌─⊷ TIKTOK
▢ *𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${nickname} ${description ? `\n▢ *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${description}` : ''}
└───────────
`.trim(), m)

m.react(done)
}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = ['tiktok', 'tiktoknowm', 'tiktokdl'] 
handler.register = true
export default handler
