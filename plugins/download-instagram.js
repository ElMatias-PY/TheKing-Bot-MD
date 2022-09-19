
import instagramGetUrl from 'fg-ig'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 \n *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`
    m.react(rwait) 
    let results = (await instagramGetUrl(args[0])).url_list[0]
    conn.sendFile(m.chat, results, 'instagram.mp4', `✅ 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾`, m)
    m.react(done)
}

handler.help = ['instagram <link ig>']
handler.tags = ['dl']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid'] 
handler.register = true
export default handler
