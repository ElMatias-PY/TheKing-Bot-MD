let handler  = async (m, { conn, usedPrefix, command }) => {
let res = "https://api.zacros.my.id/asupan/loli"
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['🔄 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🔄', `/${command}`]], m)}
handler.help = ['lolivid']
handler.tags = ['random']
handler.command = /^(lolivid|lolivideos|lolívid)$/i
export default handler
