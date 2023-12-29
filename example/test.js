(async () => {
    const { musicCard } = require("musicard");
    const fs = require("fs");

    const card = new musicCard()
        .setName("GHEA INDRAWARI")
        .setAuthor("HITS RECORD")
        .setColor("auto")
        .setTheme("classic")
        .setBrightness(50)
        .setRequester((song?.requester as User).username.toUpperCase())
        .setThumbnail("https://static.qobuz.com/images/covers/ga/ua/rmk2cpqliuaga_600.jpg")

    const cardBuffer = await card.build();

    fs.writeFileSync(`musicard.png`, cardBuffer);
    console.log("Done!");
})()