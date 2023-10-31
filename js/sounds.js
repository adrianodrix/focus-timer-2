export default function() {
    const forestAudio = new Audio("./sounds/Floresta.wav")
    const rainAudio = new Audio("./sounds/Chuva.wav")
    const coffeeShopAudio = new Audio("./sounds/Cafeteria.wav")
    const fireplaceAudio = new Audio("./sounds/Lareira.wav")

    forestAudio.loop = true
    rainAudio.loop = true
    coffeeShopAudio.loop = true
    fireplaceAudio.loop = true

    return  {
        forestAudio,
        rainAudio,
        coffeeShopAudio,
        fireplaceAudio
    }
}
