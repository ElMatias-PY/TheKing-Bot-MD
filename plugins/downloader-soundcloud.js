import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[āššššā] šš§š š«šš¬š šš„ š§šØš¦šš«š šš šš„š š®š§š ššš§šš¢šØš§ š©šš«š šš®š¬ššš«*`
try {
let res = await fetch(`https://hadi-api.herokuapp.com/api/soundcloud/play?query=${text}`)
let json = await res.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.result.download}`)).text()
let soundcloudt = `āāāāā¬ šššššššššš ā­āāāā¾ā
ā¬
āā£āØ *šššššš:* ${json.result.title}
ā“
ā¬
āā£š *ššš ššššššš:* ${shortUrl}\nā“\n\n*- š“ššššššš šššššš...*\n\n_šš·š“ šŗšøš½š¶ - š±š¾š_`
conn.sendFile(m.chat, json.result.thumbnail, '', soundcloudt, m)
conn.sendFile(m.chat, json.result.download, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
throw '*[āššššā] šš«š«šØš«, š§šØ š¬š š„šØš š«šØ šš®š¬ššš« š„š ššš§šš¢šØš§  šØ š„š š©šš š¢š§š šš šš²š®šš š©šš«š šš®š¬ššš« š„š ššš§šš¢šØš§ šš¬š­š ššš¢šš, š©šØš« šššÆšØš« šÆš®šš„šÆš š š¢š§š­šš§š­šš«š„šØ š¦šš¬ š­šš«šš*'
}}
handler.command = /^(soundcloud|scloud|clouds|souncd|cdsound|cover)$/i
export default handler
