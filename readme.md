# __Example__
This example code will generate a music card image and save it.
```js
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
```

# __Output__
This is the **classic** output of musicard.
![classic](https://cdn.is-a.fun/madebytragic/musicard.png)


# Projects
|  Sr.  |            Name            |  Platform  |
|:-----:|:--------------------------:|:----------:|
| **1** | [Reedroux Music Bot](https://reedroux.biz/) | discord.js |