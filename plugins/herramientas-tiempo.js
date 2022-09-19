import axios from "axios"

let handler = async (m, { args }) => {
  if (!args[0]) throw "𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙳𝙾𝙽𝙳𝙴 𝚀𝚄𝙸𝙴𝚁𝙰𝚂 𝚅𝙴𝚁 𝚂𝚄 𝚃𝙸𝙴𝙼𝙿𝙾"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "°C"
    const Minimum_Temperature = res.data.main.temp_min + "°C"
    const Maximum_Temperature = res.data.main.temp_max + "°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `「 📍 」 𝙿𝚁𝙾𝚅𝙸𝙽𝙲𝙸𝙰 : ${name}\n「 🎑」 𝙿𝙰𝙸𝚂: ${Country}\n「 🌤️ 」 𝚃𝙸𝙴𝙼𝙿𝙾: ${Weather}\n「 🌡️ 」𝚃𝙴𝙼𝙿𝙴𝚁𝙰𝚃𝚄𝚁𝙰: ${Temperature}\n「 ❄️ 」 𝚃𝙴𝙼𝙿𝙴𝚁𝙰𝚃𝚄𝚁𝙰 𝙼𝙸𝙽𝙸𝙼𝙰: ${Minimum_Temperature}\n「 ♨️ 」 𝚃𝙴𝙼𝙿𝙴𝚁𝙰𝚃𝚄𝚁𝙰 𝙼𝙰𝚇𝙸𝙼𝙰: ${Maximum_Temperature}\n「 💦 」 𝙷𝚄𝙼𝙴𝙳𝙰𝙳: ${Humidity}\n「 🌬️ 」   𝚅𝙸𝙴𝙽𝚃𝙾: ${Wind}
  `

    m.reply(wea)
  } catch (e) {
    return "[ ⚠️ ] 𝙴𝚁𝚁𝙾𝚁, 𝙻𝙾𝙲𝙰𝙻𝙸𝙳𝙰𝙳 𝙽𝙾 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙰!!!"
  }
}

handler.help = ['weather']
handler.tags = ['tools']

handler.command = /^(tiempo|weather)$/i
handler.exp = 100
handler.register = true
export default handler
