import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles=[
    {
      "source": {
        "id": null,
        "name": "Courrier International"
      },
      "author": null,
      "title": "En Australie, la ruée vers l’or blanc passe par le “corridor du lithium”",
      "description": "Multinationales et magnats australiens de l’industrie minière se disputent le contrôle des gisements de lithium de l’île-continent. L’État d’Australie-Occidentale fournit déjà près de la moitié de cette matière première essentielle à la transition énergétique…",
      "url": "https://www.courrierinternational.com/article/minerais-en-australie-la-ruee-vers-l-or-blanc-passe-par-le-corridor-du-lithium",
      "urlToImage": "https://focus.courrierinternational.com/2024/01/17/0/0/6000/4000/1200/630/60/0/fee3c9a_1705499992990-carbonate-lithium-chili.jpg",
      "publishedAt": "2024-01-27T11:23:02Z",
      "content": "Les vastes étendues désertiques dAustralie-Occidentale, après avoir été des décennies durant le terrain de prédilection des chercheurs dor, de nickel et de fer, sont devenues le grand champ de batail… [+2289 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "techcrunch.com",
      "title": "Tesla to spend $500M to bring its Dojo supercomputer project to Buffalo factory",
      "description": "Tesla will spend $500 million to build one of its so-called “Dojo” supercomputers at its Buffalo, New York factory, the state’s governor Kathy Hochul said Friday during a news conference just days after CEO Elon Musk called the project a “long shot.” Tesla’s …",
      "url": "https://biztoc.com/x/81301e25b98ac902",
      "urlToImage": "https://c.biztoc.com/p/81301e25b98ac902/og.webp",
      "publishedAt": "2024-01-27T11:20:09Z",
      "content": "Tesla will spend $500 million to build one of its so-called Dojo supercomputers at its Buffalo, New York factory, the states governor Kathy Hochul said Friday during a news conference just days after… [+297 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": null,
      "title": "Is Tesla a Millionaire Maker?",
      "description": null,
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_f9b0f7d1-80e7-4106-8f74-376b33093149",
      "urlToImage": null,
      "publishedAt": "2024-01-27T11:14:00Z",
      "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Abertoatedemadrugada.com"
      },
      "author": "Carlos Martins",
      "title": "BYD Tang expande bateria para fazer frente ao Model Y",
      "description": "A BYD expandiu consideravelmente a autonomia do Tang com uma nova bateria, para fazer frente ao Model Y da Tesla.",
      "url": "https://abertoatedemadrugada.com/2024/01/byd-tang-expande-bateria-para-fazer.html",
      "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFXNeOa6UfF5ldKpCnctgaqdqW7cq92awHZWySnIbvH109cAkVwXXvaWVOUIcryckpfXByYHw5SC5MnFFgXoac9ScLxhbF4Y9xE-_A3XlD7K34vY_5TheGGJn9GT8Oonz7CsbvYCXdPMl8wutR-PexaKSg0SjK7lyIFDanzj-ZNZ_77A5dNxXDMo-EgXQq/w1200-h630-p-k-no-nu/BYDtang.jpg",
      "publishedAt": "2024-01-27T11:00:00Z",
      "content": "A BYD expandiu consideravelmente a autonomia do Tang com uma nova bateria, para fazer frente ao Model Y da Tesla.\n\n\nA BYD comercializa o Tang como sendo um \"Model X barato\", que inevitavelmente o col… [+1101 chars]"
    },
    {
      "source": {
        "id": "ansa",
        "name": "ANSA.it"
      },
      "author": null,
      "title": "Governo-Stellantis, giovedì il faccia a faccia al tavolo di Urso",
      "description": "Dopo le polemiche a distanza degli ultimi giorni, il tavolo automotive convocato dal ministro Adolfo Urso per il primo febbraio sarà l'occasione per un faccia a faccia tra Stellantis e il governo. (ANSA)",
      "url": "https://www.ansa.it/piemonte/notizie/2024/01/27/governo-stellantis-giovedi-il-faccia-a-faccia-al-tavolo-di-urso_5a5a66ee-df44-4101-b9a9-88e723a98334.html",
      "urlToImage": "https://www.ansa.it/webimages/img_700/2024/1/27/dacf836e948c95e972f83853dc082db9.jpg",
      "publishedAt": "2024-01-27T10:47:17Z",
      "content": "Dopo le polemiche a distanza degli\r\nultimi giorni, il tavolo automotive convocato dal ministro\r\nAdolfo Urso per il primo febbraio sarà l'occasione per un faccia\r\na faccia tra Stellantis e il governo.… [+1342 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Komputerswiat.pl"
      },
      "author": "Rafał Rudnicki",
      "title": "Elon Musk stracił kilkanaście miliardów dol. Oto dlaczego",
      "description": "Elon Musk pozostaje najbogatszym człowiekiem na świecie, mimo że stracił kilkanaście miliardów dol. w szybkim tempie. Ma to związek ze słabym wynikiem Tesli w ostatnim kwartale.",
      "url": "https://www.komputerswiat.pl/aktualnosci/wydarzenia/elon-musk-stracil-kilkanascie-miliardow-dol-oto-dlaczego/622qkt3",
      "urlToImage": "https://ocdn.eu/pulscms-transforms/1/KgXktkpTURBXy81ZDE1YmFkZDQwZDJmMjFiNmJhNjYzMzBkNzU1MjMxNS5qcGeSlQMACs0GiM0DrJMFzQSwzQJ2",
      "publishedAt": "2024-01-27T10:42:50Z",
      "content": "Elon Musk posiada szereg biznesów, takich jak SpaceX, Tesla czy X (Twitter). Oprócz bycia ich szefem, w samej Tesli posiada 21 proc. udziaów, a wic traci pienidze, kiedy cena akcji Tesli spada.Przed … [+746 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "wsj.com",
      "title": "Why Elon Musk Is Comparing Index Fund Consultants to ISIS",
      "description": "The billionaire worries about the power other shareholders have over Tesla, and the advice they get. #tesla",
      "url": "https://biztoc.com/x/b377f8f410a4e7cd",
      "urlToImage": "https://c.biztoc.com/266/og.png",
      "publishedAt": "2024-01-27T10:42:07Z",
      "content": "The billionaire worries about the power other shareholders have over Tesla, and the advice they get.\r\n#tesla\r\nThis story appeared on wsj.com, 2024-01-27."
    },
    {
      "source": {
        "id": null,
        "name": "Securityaffairs.com"
      },
      "author": "Pierluigi Paganini",
      "title": "Participants earned more than $1.3M at the Pwn2Own Automotive competition",
      "description": "Bug bounty hunters earned more than $1.3 million for hacking Teslas, infotainment systems, and electric vehicle chargers at the Pwn2Own Automotive competition. The Zero Day Initiative’s Pwn2Own Automotive competition has ended, participants demonstrated 49 ze…",
      "url": "https://securityaffairs.com/158202/hacking/pwn2own-automotive-day-three.html",
      "urlToImage": "https://securityaffairs.com/wp-content/uploads/2024/01/image-43.png",
      "publishedAt": "2024-01-27T10:40:01Z",
      "content": "Participants earned more than $1.3M at the Pwn2Own Automotive competition\r\n | A TrickBot malware developer sentenced to 64 months in prison\r\n | Russian Midnight Blizzard APT is targeting orgs worldwi… [+40218 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ScienceAlert"
      },
      "author": "Carol Oliver, The Conversation",
      "title": "People Are Paying Big For Moon Burials And It Could Be Crossing a Concerning Line",
      "description": "When NASA attempted to return to the Moon for the first time in 50 years on January 8, more was at risk than just US$108 million worth of development and equipment.",
      "url": "https://www.sciencealert.com/people-are-paying-big-for-moon-burials-and-it-could-be-crossing-a-concerning-line",
      "urlToImage": "https://www.sciencealert.com/images/2024/01/MoonBurial.jpg",
      "publishedAt": "2024-01-27T10:32:09Z",
      "content": "When NASA attempted to return to the Moon for the first time in 50 years on January 8, more was at risk than just US$108 million worth of development and equipment.\r\nThe agency earned the ire of the … [+5260 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": null,
      "title": "Not even Tesla can dodge the EV sales slowdown",
      "description": null,
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_336aa647-4a12-42ce-807c-c5315daf9f2f",
      "urlToImage": null,
      "publishedAt": "2024-01-27T10:24:52Z",
      "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Faz.net"
      },
      "author": "Christian Müßgens, Henning Peitsmeier, Gustav Theile",
      "title": "Markt für Elektroautos: Preiskampf im Autohaus",
      "description": "Elektroautos werden zu Schnäppchen, seitdem Tesla die Preise gesenkt und die Bundesregierung die Förderung gestrichen hat. Eine gute Nachricht für die Kunden – und ein Problem für etablierte deutsche Hersteller.",
      "url": "https://www.faz.net/aktuell/wirtschaft/elektroautos-von-bmw-tesla-und-vw-werden-zu-schnaeppchen-19475993.html",
      "urlToImage": "https://media1.faz.net/ppmedia/aktuell/3409117900/1.9476465/facebook_teaser/auto-fuer-die-masse-der.jpg",
      "publishedAt": "2024-01-27T10:13:10Z",
      "content": "Der VW-Händler an der Fruchtallee nahe den Hamburger Messehallen setzt seine Elektroautos ins rechte Licht. Ein Leuchtband taucht die Limousine ID.7 in Pastellfarben, erst grün, dann violett und blau… [+3323 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Www.nu.nl"
      },
      "author": "de Volkskrant/Peter de Waard",
      "title": "de Volkskrant | Crises te over, maar de economie lijkt onverwoestbaar",
      "description": "De beurzen staan op recordhoogte, ondanks meerdere crises in de wereld. Eind 2022 verwachtte 85 procent van de economen een recessie in 2023. Nu is die vrees weg. Is de wereldeconomie immuun voor oorlogsgeweld en politieke onrust?",
      "url": "https://www.nu.nl/uit-andere-media/6299296/crises-te-over-maar-de-economie-lijkt-onverwoestbaar.html",
      "urlToImage": "https://media.nu.nl/m/k4ux528audv0_wd1280/crises-te-over-maar-de-economie-lijkt-onverwoestbaar.jpg",
      "publishedAt": "2024-01-27T10:09:50Z",
      "content": "Dit artikel is afkomstig uit de Volkskrant. Elke dag verschijnt een selectie van de beste artikelen uit de kranten en tijdschriften op NU.nl. Daar lees je hier meer over.\r\nHet is oorlog in Oekraïne e… [+7051 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hibridosyelectricos.com"
      },
      "author": "Gonzalo García",
      "title": "De humilde agricultor a millonario: esta es la historia de Wang Chuanfu, el discreto 'Elon Musk' chino",
      "description": "BYD no es, todavía, la marca líder en ventas de coches eléctricos a nivel mundial. A pesar de que parecía que iba a ocurrir, finalmente no ha superado a Tesla en lo que respecta a vehículos de cero emisiones, pero está cerca de conseguirlo. Este año, muchos a…",
      "url": "https://www.hibridosyelectricos.com/coches/humilde-agricultor-millonario-esta-es-historia-wang-chuanfu-discreto-elon-musk-chino_72554_102.html",
      "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/60/35/28/wang-chuanfu-byd-elon-musk-tesla-1_17_2000x1126.jpeg",
      "publishedAt": "2024-01-27T09:55:34Z",
      "content": "BYD no es, todavía, la marca líder en ventas de coches eléctricos a nivel mundial. A pesar de que parecía que iba a ocurrir, finalmente no ha superado a Tesla en lo que respecta a vehículos de cero e… [+5756 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "coingape.com",
      "title": "Cathie Wood’s Ark Invest Adds ARKB Bitcoin ETF Worth $51 Mln This Week; Buys Tesla Shares",
      "description": "Cathie Wood’s asset management firm Ark Invest added additional units of ARK 21Shares Bitcoin ETF (ARKB), increasing its total ARKB purchase this week to $51 million. ARKW has been consistently purging holdings in ProShares Bitcoin Strategy ETF (BITO) since t…",
      "url": "https://biztoc.com/x/8a0c9b20ded65e80",
      "urlToImage": "https://c.biztoc.com/p/8a0c9b20ded65e80/s.webp",
      "publishedAt": "2024-01-27T09:42:20Z",
      "content": "Cathie Woods asset management firm Ark Invest added additional units of ARK 21Shares Bitcoin ETF (ARKB), increasing its total ARKB purchase this week to $51 million. ARKW has been consistently purgin… [+306 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "forbes.com",
      "title": "Bernard Arnault Overtakes Elon Musk As Richest Person In The World",
      "description": "Bernard Arnault, the billionaire chairman and CEO of global luxury goods company LVMH—the entity behind dozens of luxury goods brands like Louis Vuitton and Sephora—is now the richest man in the world, passing Elon Musk. Arnault and his family’s net worth gre…",
      "url": "https://biztoc.com/x/83db4d15957d4883",
      "urlToImage": "https://c.biztoc.com/p/83db4d15957d4883/og.webp",
      "publishedAt": "2024-01-27T09:42:07Z",
      "content": "Bernard Arnault, the billionaire chairman and CEO of global luxury goods company LVMHthe entity behind dozens of luxury goods brands like Louis Vuitton and Sephorais now the richest man in the world,… [+283 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "businessinsider.com",
      "title": "A Tesla owner says he's done driving his Model 3 after the car stopped randomly in the middle of a highway",
      "description": "A Tesla owner said his Model 3 stopped randomly on the highway. picture alliance A Tesla owner said his Model 3 stopped working in the middle of a highway. A Tesla service center said the incident was the result of an issue with a connector to the battery. Te…",
      "url": "https://biztoc.com/x/473c85b07c68d64b",
      "urlToImage": "https://c.biztoc.com/p/473c85b07c68d64b/s.webp",
      "publishedAt": "2024-01-27T09:40:06Z",
      "content": "A Tesla owner said his Model 3 stopped randomly on the highway.picture allianceA Tesla owner said his Model 3 stopped working in the middle of a highway.A Tesla service center said the incident was t… [+279 chars]"
    },
    {
      "source": {
        "id": "focus",
        "name": "Focus"
      },
      "author": "FOCUS online",
      "title": "Gastbeitrag von Rainer Zitelmann - Machen Sie den Test und Sie wissen, wie Ihre Einstellung zu Geld ist!",
      "description": "Was hat mein Kontostand mit mentalen Blockaden zu tun? Mehr als Sie denken! Rainer Zitelmann, der über die „Psychologie der Superreichen“ promoviert hat, zeigt den Zusammenhang.",
      "url": "https://www.focus.de/finanzen/news/gastbeitrag-von-rainer-zitelmann-welche-mentalen-blockaden-hindern-sie-mehr-geld-zu-bekommen_id_259614606.html",
      "urlToImage": "https://p6.focus.de/img/fotos/id_259579509/geldanlage-fin-vt.jpg?im=Crop%3D%280%2C0%2C3463%2C1732%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=442474571a8e6ad31bb5e5c9f0eca7a5a5d59fbd41f419005aa728a86110f632",
      "publishedAt": "2024-01-27T09:33:56Z",
      "content": "<ul><li>\r\nKommentare</li><li>\r\nE-Mail</li><li>\r\nTeilen</li><li>\r\nMehr</li><li>\r\nTwitter</li><li>\r\nDrucken</li><li>\r\nFeedback</li><li>\r\nFehler meldenSie haben einen Fehler gefunden?\r\nBitte markieren S… [+4160 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "gkay@insider.com (Grace Kay)",
      "title": "A Tesla owner says he's done driving his Model 3 after the car stopped randomly in the middle of a highway",
      "description": "The Tesla owner said his Model 3 lost power and lurched to a stop without warning in the middle of a highway.",
      "url": "https://www.businessinsider.com/tesla-model-3-stopped-working-shut-down-while-driving-complaint-2024-1",
      "urlToImage": "https://i.insider.com/65b3d6ff43bb77284ba0c4ec?width=1200&format=jpeg",
      "publishedAt": "2024-01-27T09:31:01Z",
      "content": "Tesla owner James Hanna said his Model 3 lurched to a stop without warning in the middle of a highway.\r\n\"The entire car locked up and I was unable to turn the wheel or even get it back into gear,\" Ha… [+2476 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": null,
      "title": "A Tesla owner says he's done driving his Model 3 after the car stopped randomly in the middle of a highway",
      "description": null,
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_844783dc-38d9-4e64-abdf-3f802ce4fc9b",
      "urlToImage": null,
      "publishedAt": "2024-01-27T09:31:01Z",
      "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Elespanol.com"
      },
      "author": "Gustavo Rivero",
      "title": "Bolsas mundiales: ¿se acabó el fuelle?",
      "description": "Bolsas mundiales: ¿se acabó el fuelle?",
      "url": "https://www.elespanol.com/invertia/opinion/20240127/bolsas-mundiales-acabo-fuelle/828047189_13.html",
      "urlToImage": "https://s1.elespanol.com/2024/01/26/actualidad/827927247_239420194_1706x960.jpg",
      "publishedAt": "2024-01-27T09:22:52Z",
      "content": "Sufrirás recesiones y caídas en las bolsas. Si no entiendes lo que va a pasar, entonces no estás listo (Peter Lynch).Incluso los años buenos exhiben volatilidad, por lo que es importante estar prepar… [+4401 chars]"
    },
    {
      "source": {
        "id": "breitbart-news",
        "name": "Breitbart News"
      },
      "author": "Ian Hanchett, Ian Hanchett",
      "title": "Granholm: Slumping EV Demand Partially Due to Higher Prices, 'Confusing' Tax Incentives",
      "description": "On Friday’s broadcast of CNBC’s “Squawk Box,” Energy Secretary Jennifer Granholm stated that part of the reason for the slowdown in electric vehicle demand is due to the fact that they’re more expensive than gas cars and there’s “a confusing",
      "url": "https://www.breitbart.com/clips/2024/01/27/granholm-slumping-ev-demand-partially-due-to-higher-prices-confusing-tax-incentives/",
      "urlToImage": "https://media.breitbart.com/media/2023/10/GettyImages-1236627157-640x335.jpg",
      "publishedAt": "2024-01-27T09:04:39Z",
      "content": "On Friday’s broadcast of CNBC’s “Squawk Box,” Energy Secretary Jennifer Granholm stated that part of the reason for the slowdown in electric vehicle demand is due to the fact that they’re more expens… [+1837 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Clubic"
      },
      "author": "Rémi Bouvet",
      "title": "Le classement 2023 des meilleurs réseaux de recharge en France et en Belgique, selon Chargemap",
      "description": "En matière de rapport qualité/prix, aucun service ne bat Orléans Métropole en Europe ; pas même Lidl et encore moins Tesla Supercharger. Qu’Elon Musk en prenne de la graine.",
      "url": "https://www.clubic.com/actualite-516799-le-classement-2023-des-meilleurs-reseaux-de-recharge-en-france-et-en-belgique-selon-chargemap.html",
      "urlToImage": "https://pic.clubic.com/v1/images/2186092/raw",
      "publishedAt": "2024-01-27T09:01:00Z",
      "content": "En matière de rapport qualité/prix, aucun service ne bat Orléans Métropole en Europe ; pas même Lidl et encore moins Tesla Supercharger. QuElon Musk en prenne de la graine.\r\nTrois classements distinc… [+2479 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Redakcja Antyweb",
      "title": "Techno sapiens. Człowiek przyszłości pojawi się już za 5 lat",
      "description": "Nieporadna, ludzka, jurysdykcja desperacko próbuje utrzymać w ryzach swoje największe przekleństwo, najważniejsze obecnie dzieło człowieka, wychodowane na własnej piersi, coraz bardziej krnąbrne, uparte i niesforne... - sztuczną inteligencję.\n \n The post Tech…",
      "url": "https://antyweb.pl/techno-sapiens-czlowiek-przyszlosci",
      "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2024/01/yzowfzg22j/czlowiek-z-przyszlosci.jpg",
      "publishedAt": "2024-01-27T09:00:43Z",
      "content": "Artyku jest dzieem Adama Fietkiewicza, którego prac gocinnie publikujemy na amach Antyweb.pl\r\nJu dzi jako ludzko odczuwamy na wasnej skórze wizje sci fiction, o których czytalimy w ksikach i widzieli… [+32841 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Tabletowo.pl"
      },
      "author": "Mateusz Budzeń",
      "title": "Test Abartha 500e. Ten elektryk ma „wydech” i to całkiem głośny",
      "description": "Tym razem na testy wpadł do mnie Abarth 500e. Owszem to samochód elektryczny, ale wyposażony w naprawdę głośny \"wydech\".Przeczytaj pełny artykuł tutaj: Test Abartha 500e. Ten elektryk ma \"wydech\" i to całkiem głośny",
      "url": "https://www.tabletowo.pl/abarth-500e-wydech-test-opinia-czy-warto/",
      "urlToImage": "https://www.tabletowo.pl/wp-content/uploads/2024/01/Abarth-500e-test-IMG_4279.jpg",
      "publishedAt": "2024-01-27T09:00:00Z",
      "content": "Z czym kojarzy si marka Abarth? Uwaam, e przede wszystkim z nieduymi samochodami z maymi silnikami, które jednak potrafi brzmie przyjemnie i gono. Teraz firma oferuje elektryczny model Abarth 500e, k… [+13550 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Auto-moto.com"
      },
      "author": "Julien Jodry",
      "title": "Futur Citroën C5 Aircross (2025) : style, mécaniques, positionnement. Découvrez les premières indiscrétions à son sujet",
      "description": "Toujours resté en retrait par rapport au Peugeot 3008, commercialement parlant, il n’en demeure pas moins un élément clé du succès des Chevrons. 2025 verra son retour en grande pompe, fort de groupes motopropulseurs inédits.",
      "url": "https://www.auto-moto.com/suv/futur-citroen-c5-aircross-2025-style-mecaniques-positionnement-premieres-indiscretions-29413",
      "urlToImage": "https://photos.auto-moto.com/32/2024/01/photo_article/29413/158570/1200-L-futur-citron-c5-aircross-2025-style-mcaniques-positionnement-dcouvrez-les-premires-indiscrtions-son-sujet.webp",
      "publishedAt": "2024-01-27T09:00:00Z",
      "content": "Pas facile pour le C5 Aircross d’exister au sein d’un segment trusté par le Peugeot 3008, depuis bientôt huit ans, malgré ses nombreux atouts. Le sympathique SUV compact de Citroën n’aura jamais fait… [+5124 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Jalopnik"
      },
      "author": "Jalopnik Staff",
      "title": "Tesla Cybertruck's Low Milage, EV Leasing And A New Hyundai Santa Fe In This Week's Car Buying Roundup",
      "description": "When the Tesla Cybertruck officially launched late last year, the company made some promises about its capabilities that seemed absurd and some that seemed a touch more reasonable. We knew from the get-go that its “drag race victory” against the Porsche 911 w…",
      "url": "https://jalopnik.com/tesla-cybertrucks-low-milage-ev-leasing-and-a-new-hyun-1851201000",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/e6d41fb7ae83eb16a3552d6fa82d95c9.jpg",
      "publishedAt": "2024-01-27T09:00:00Z",
      "content": "Everyone knows that cars tend to depreciate the minute you drive them off the dealer lot, potentially losing you thousands in equity from the very first minute you own it. Cars are a bad investment, … [+393 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Feber.se"
      },
      "author": "Frode Wikesjö",
      "title": "Nästa Switch sägs få en 8-tum stor skärm",
      "description": "LCD sådan\n\n\n\n\n\n\nRykten och rapporter om Switch 2 har det funnits många av de senaste åren, men på senare tid har de låtit allt mer konkreta. I veckan kom det en ny rapport som nämnde att Nintendo har konsolen på gång och att den kommer att lanseras senare i å…",
      "url": "https://feber.se/spel/nasta-switch-sags-fa-en-8-tum-stor-skarm/461668/",
      "urlToImage": "https://static.feber.se/article_images/58/05/74/580574.jpg",
      "publishedAt": "2024-01-27T09:00:00Z",
      "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+31276 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": null,
      "title": "Western EV makers underestimated the threat from Chinese rivals like Tesla-slayer BYD: ‘There was a view that it would only be Game of Thrones battles within China’",
      "description": null,
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_be4420aa-2b80-4096-bbe5-9aee545017a0",
      "urlToImage": null,
      "publishedAt": "2024-01-27T09:00:00Z",
      "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "electrek.co",
      "title": "Tesla announces new $500 million Dojo supercomputer coming to New York",
      "description": "Tesla has announced a new $500 million project to build a giant Dojo supercomputer cluster at Gigafactory New York in Bufallo. Dojo is a new supercomputer designed from the ground up by Tesla specifically to train AI with videos. The project suffered signific…",
      "url": "https://biztoc.com/x/3d1cc135cbb2aec1",
      "urlToImage": "https://c.biztoc.com/p/3d1cc135cbb2aec1/og.webp",
      "publishedAt": "2024-01-27T08:46:07Z",
      "content": "Tesla has announced a new $500 million project to build a giant Dojo supercomputer cluster at Gigafactory New York in Bufallo.Dojo is a new supercomputer designed from the ground up by Tesla specific… [+286 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Uol.com.br"
      },
      "author": "Jorge Moraes",
      "title": null,
      "description": "A Apple resolveu mudar os planos e só deve lançar seu carro elétrico em 2028. E por que isso? Rumores indicam que tem a ver com assistência à condução. É que a empresa acabou desistindo de lançar um carro totalmente autônomo.",
      "url": "https://www.uol.com.br/carros/colunas/jorge-moraes/2024/01/27/por-que-apple-mudou-os-planos-e-so-lancara-seu-carro-eletrico-em-2028.htm",
      "urlToImage": "https://conteudo.imguol.com.br/c/parceiros/26/2024/01/25/ai-rendering-of-the-apple-car-1706183549428_v2_615x300.jpg",
      "publishedAt": "2024-01-27T08:35:13Z",
      "content": "As informações sobre a mudança dos planos da Apple são da Bloomberg. Com a alteração na assistência à condução, o veículo da gigante dos iPhones ficaria mais parecido com um Tesla, que já possui esse… [+845 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "benzinga.com",
      "title": "Elon Musk Reacts To Alleged Letter By Ex-FBI Agents On US Facing 'Imminent Danger' From Illegal Immigrants: 'Extremely Concerning'",
      "description": "Tesla Inc. CEO Elon Musk has reiterated his concern about illegal immigrants after billionaire hedge fund manager Bill Ackman shared an alleged letter from former Federal Bureau of Investigation (FBI) executives. What Happened: Reacting to a letter by former …",
      "url": "https://biztoc.com/x/14c65d95b0e02795",
      "urlToImage": "https://c.biztoc.com/p/14c65d95b0e02795/s.webp",
      "publishedAt": "2024-01-27T08:32:07Z",
      "content": "Tesla Inc. CEO Elon Musk has reiterated his concern about illegal immigrants after billionaire hedge fund manager Bill Ackman shared an alleged letter from former Federal Bureau of Investigation (FBI… [+296 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Feber.se"
      },
      "author": "Roger Åberg",
      "title": "Spotify toksågar Apple",
      "description": "En fars enligt Daniel Ek\n\n\n\n\n\n\nIgår berättade Apple hur det nya systemet med App Stores från andra än Apple skulle se ut på iOS. Det var väldigt tydligt att Apple hade mött EU:s regler bara för att de blivit tvingade till det och Apple har skapat ett antal re…",
      "url": "https://feber.se/mobil/spotify-toksagar-apple/461673/",
      "urlToImage": "https://static.feber.se/article_images/58/05/76/580576.jpeg",
      "publishedAt": "2024-01-27T08:30:00Z",
      "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+32703 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "scmp.com",
      "title": "Shanghai offers financing and land-use support to foreign investors, as city commits to meet 5 per cent economic growth in 2024",
      "description": "“We will give more policy guarantees in the areas of land use, energy supply, environmental evaluation and financing, [while] encouraging more foreign companies to invest in green transition, digitalisation and technological innovation,” Gong told a press con…",
      "url": "https://biztoc.com/x/3c249cdcc1519382",
      "urlToImage": "https://c.biztoc.com/p/3c249cdcc1519382/s.webp",
      "publishedAt": "2024-01-27T08:28:11Z",
      "content": "We will give more policy guarantees in the areas of land use, energy supply, environmental evaluation and financing, [while] encouraging more foreign companies to invest in green transition, digitali… [+282 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "finance.yahoo.com",
      "title": "3 things Tesla should do after its market value shrunk $80 billion in a single day, according to Wedbush",
      "description": "None Tesla's earnings disappointed Wall Street, and the company saw a steep sell-off Thursday. • None Wedbush's Dan Ives said there are a few specific things Tesla can do to calm investors. • None He called for an end to price cuts, more clarity on AI, and fo…",
      "url": "https://biztoc.com/x/f7a2d5316b28b761",
      "urlToImage": "https://c.biztoc.com/p/f7a2d5316b28b761/s.webp",
      "publishedAt": "2024-01-27T08:12:06Z",
      "content": "None Tesla's earnings disappointed Wall Street, and the company saw a steep sell-off Thursday.None Wedbush's Dan Ives said there are a few specific things Tesla can do to calm investors.None He calle… [+287 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Hindi.Moneycontrol.com Team, Moneycontrol Hindi",
      "title": "1.3 अरब डॉलर के फंड मैनेजर को 2030 तक टेस्ला के शेयरों में 550% की बढ़ोतरी की उम्मीद",
      "description": "टेस्ला इंक (Tesla Inc) की धीमी ग्रोथ और घटते मुनाफे ने इसे इस साल नैस्डैक 100 पर सबसे कमजोर स्टॉक बना दिया है। फंड मैनेजर डेविड बैरन का कहना है कि यह एक और पैराबोलिक रैली से पहले एलोन मस्क की कंपनी के लिए एक बड़ी चुनौती होगी। इलेक्ट्रिक-वाहन निर्माता ने बुधवा…",
      "url": "https://hindi.moneycontrol.com/news/company/this-1-3-billion-fund-manager-estimate-tesla-shares-to-rise-550-percent-by-2030-1744341.html",
      "urlToImage": "https://images.moneycontrol.com/static-hindinews/2024/01/tesla-1-637x435.jpg",
      "publishedAt": "2024-01-27T08:06:19Z",
      "content": "(Tesla Inc) 100 - \" \" 12% 209 Baron \r\nBaron Focused Growth Fund 2030 1,200 550% (SpaceX) 31 , 18% 28% 500 24% \r\n EV 12 300 183 \r\n, \" 50% ,\" \" 15% 20% 7,000 \"\r\n , \r\n 2023 18 , 38% , 17% \r\n 2 31 1.3 \r\n… [+64 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Insider",
      "title": "This chart shows how Tesla can keep cutting prices and stay ahead of the competition",
      "description": "Continue reading This chart shows how Tesla can keep cutting prices and stay ahead of the competition\nThis chart shows how Tesla can keep cutting prices and stay ahead of the competition originally appeared on Autoblog on Sat, 27 Jan 2024 03:00:00 EST. Please…",
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_8d0c4d86-01b9-4568-89b2-bc5f5f3b6ef4",
      "urlToImage": null,
      "publishedAt": "2024-01-27T08:00:00Z",
      "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hibridosyelectricos.com"
      },
      "author": "Alberto Pérez",
      "title": "Escondido bajo esta sábana se encuentra el coche más barato de esta marca, que competirá con el Tesla Model 3",
      "description": "Ha sido durante la inauguración de las nuevas instalaciones de producción situada en el estado de Arizona a la que la marca bautiza como \"Fase 2\". En dicho acto, Peter Rawlinson, CEO de Lucid Motors, mostró un primer acercamiento a lo que será su tercer model…",
      "url": "https://www.hibridosyelectricos.com/coches/escondido-bajo-esta-sabana-se-encuentra-coche-mas-barato-esta-marca-competira-con-tesla-model-3_72701_102.html",
      "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/61/29/03/lucid-2_17_2000x1126.jpeg",
      "publishedAt": "2024-01-27T08:00:00Z",
      "content": "Ha sido durante la inauguración de las nuevas instalaciones de producción situada en el estado de Arizona a la que la marca bautiza como Fase 2. En dicho acto, Peter Rawlinson, CEO de Lucid Motors, m… [+3199 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Feber.se"
      },
      "author": "Frode Wikesjö",
      "title": "En trailer för Monkey Man",
      "description": "Ny film från Dev Patel och Jordan Peele\n\n\n\n\n\n\n\n\n\n\nHär har vi den första trailern för filmen Monkey Man som är regisserad av Dev Patel och producerad av Jordan Peele. Filmen beksrivs som en John Wick i Mumbai där Dev spelar en snubbe vid namn Kid som infiltrer…",
      "url": "https://feber.se/film/en-trailer-for-monkey-man/461666/",
      "urlToImage": "https://i.ytimg.com/vi/g8zxiB5Qhsc/hqdefault.jpg",
      "publishedAt": "2024-01-27T08:00:00Z",
      "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+33291 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "finance.yahoo.com",
      "title": "Tesla stock will gain 550% and SpaceX's valuation will triple by 2030 under Elon Musk's leadership, top investor says",
      "description": "None Fund manager David Baron broke down his highly bullish views on Elon Musk-led Tesla and SpaceX. • None He told Bloomberg Tesla can soar 550% and SpaceX can triple in valuation by 2030. • None Both companies were the largest holdings in Baron's fund as of…",
      "url": "https://biztoc.com/x/244bf775b842fbe6",
      "urlToImage": "https://c.biztoc.com/p/244bf775b842fbe6/s.webp",
      "publishedAt": "2024-01-27T07:58:07Z",
      "content": "None Fund manager David Baron broke down his highly bullish views on Elon Musk-led Tesla and SpaceX.None He told Bloomberg Tesla can soar 550% and SpaceX can triple in valuation by 2030.None Both com… [+310 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ETF Daily News"
      },
      "author": "MarketBeat News",
      "title": "Tesla (NASDAQ:TSLA) Price Target Cut to $220.00",
      "description": "Tesla (NASDAQ:TSLA – Get Free Report) had its price target reduced by analysts at The Goldman Sachs Group from $255.00 to $220.00 in a research note issued on Thursday, MarketBeat reports. The firm currently has a “neutral” rating on the electric vehicle prod…",
      "url": "https://www.etfdailynews.com/2024/01/27/tesla-nasdaqtsla-price-target-cut-to-220-00/",
      "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
      "publishedAt": "2024-01-27T07:56:46Z",
      "content": "Tesla (NASDAQ:TSLA – Get Free Report) had its price target reduced by analysts at The Goldman Sachs Group from $255.00 to $220.00 in a research note issued on Thursday, MarketBeat reports. The firm c… [+5934 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ETF Daily News"
      },
      "author": "MarketBeat News",
      "title": "Tesla (NASDAQ:TSLA) Price Target Cut to $270.00 by Analysts at Mizuho",
      "description": "Tesla (NASDAQ:TSLA – Get Free Report) had its price objective decreased by stock analysts at Mizuho from $310.00 to $270.00 in a note issued to investors on Thursday, Marketbeat Ratings reports. The firm currently has a “buy” rating on the electric vehicle pr…",
      "url": "https://www.etfdailynews.com/2024/01/27/tesla-nasdaqtsla-price-target-cut-to-270-00-by-analysts-at-mizuho/",
      "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
      "publishedAt": "2024-01-27T07:56:45Z",
      "content": "Tesla (NASDAQ:TSLA – Get Free Report) had its price objective decreased by stock analysts at Mizuho from $310.00 to $270.00 in a note issued to investors on Thursday, Marketbeat Ratings reports. The … [+6176 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ETF Daily News"
      },
      "author": "MarketBeat News",
      "title": "Tesla (NASDAQ:TSLA) Price Target Cut to $200.00",
      "description": "Tesla (NASDAQ:TSLA – Get Free Report) had its target price reduced by Wells Fargo & Company from $223.00 to $200.00 in a note issued to investors on Thursday, Marketbeat reports. The brokerage currently has an “equal weight” rating on the electric vehicle pro…",
      "url": "https://www.etfdailynews.com/2024/01/27/tesla-nasdaqtsla-price-target-cut-to-200-00/",
      "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
      "publishedAt": "2024-01-27T07:56:44Z",
      "content": "Tesla (NASDAQ:TSLA – Get Free Report) had its target price reduced by Wells Fargo &amp; Company from $223.00 to $200.00 in a note issued to investors on Thursday, Marketbeat reports. The brokerage cu… [+5996 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": "echo@echo.msk.ru (эхо москвы), эхо москвы",
      "title": "Ходорковский LIVE: Что делать, если Надеждина не пустят на выборы? ХОДОРКОВСКИЙ и ПАСТУХОВ о плане против Путина (2024-27-01)",
      "description": "Борис Надеждин собрал более 200 тысяч подписей для регистрации на выборы президента России. Однако ЦИК может не пустить антивоенного кандидата на выборы. Кейс Светланы Тихановской в Беларуси может заставить Кремль испугаться такого сопреника для Владимира Пут…",
      "url": "https://www.youtube.com/supported_browsers?next_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9p7YLCmVgCo",
      "urlToImage": null,
      "publishedAt": "2024-01-27T07:47:18Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": {
        "id": null,
        "name": "Fishki.net"
      },
      "author": "https://fishki.net/profile/1729200",
      "title": "Маск требует ввести торговые барьеры против своих китайских конкурентов",
      "description": "Генеральный директор компании Tesla, Илон Маск, заявил, что китайские автопроизводители смогут стать глобальными лидерами в автомобильной индустрии без – Самые лучшие и интересные новости по теме: Byd, Tesla, Илон Маск на развлекательном портале Fishki.net",
      "url": "https://fishki.net/4571729-mask-trebuet-vvesti-torgovye-baryery-protiv-svoih-kitajskih.html",
      "urlToImage": "https://cdn.fishki.net/upload/post/2024/01/27/4571729/be398100a64a57829c04182559eef7e2.jpg",
      "publishedAt": "2024-01-27T07:47:13Z",
      "content": ", , , -.\r\n , , , , , , . , Tesla \" \"\r\n .\r\n , 2025 ."
    },
    {
      "source": {
        "id": null,
        "name": "Diepresse.com"
      },
      "author": "Die Presse",
      "title": "Musk dementiert Bericht über Milliarden-Finanzierung von KI-Firma",
      "description": "„xAI ist nicht auf der Suche nach Kapital“, dementiert Elon Musk - Chef von Tesla, SpaceX und X - einen anderslautenden Medienbericht.",
      "url": "https://www.diepresse.com/18036191/musk-dementiert-bericht-ueber-milliarden-finanzierung-von-ki-firma",
      "urlToImage": "https://img.diepresse.com/public/incoming/83dyec-NEURALINK-TRANSPORT/alternates/DPR_SOCIAL_NACHRICHTEN/NEURALINK-TRANSPORT",
      "publishedAt": "2024-01-27T07:45:09Z",
      "content": "xAI ist nicht auf der Suche nach Kapital, dementiert Elon Musk - Chef von Tesla, SpaceX und X - einen anderslautenden Medienbericht. \r\nElon Musk dementiert einen Medienbericht, wonach seine KI-Firma … [+822 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "benzinga.com",
      "title": "Billionaire Investor Gundlach Foresees Recession, Recommends Cash Over Overvalued Stocks: 'Skip This Last Phase Of The Exuberance Game'",
      "description": "Billionaire investor Jeffrey Gundlach sounded a note of caution, maintaining that despite the “exuberance” in equity markets, a recession seems to be “inevitable.” What Happened: In a conversation with Fox Business Network, Gundlach raised doubts about the cu…",
      "url": "https://biztoc.com/x/85a3668b90a4358d",
      "urlToImage": "https://c.biztoc.com/p/85a3668b90a4358d/s.webp",
      "publishedAt": "2024-01-27T07:22:06Z",
      "content": "Billionaire investor Jeffrey Gundlach sounded a note of caution, maintaining that despite the exuberance in equity markets, a recession seems to be inevitable.What Happened: In a conversation with Fo… [+305 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Haber7.com"
      },
      "author": "Emrullah Koçin",
      "title": "Tesla, ABD'de yaklaşık 200 bin aracını geri çağırıyor",
      "description": "Elektrikli otomobil üreticisi Tesla'nın ekranda arka kameranın görüntülenmesini engelleyen bir yazılım dengesizliği nedeniyle ABD'deki yaklaşık 200 bin aracını geri çağırdığı bildirildi.",
      "url": "https://www.haber7.com/otomobil/haber/3386082-tesla-abdde-yaklasik-200-bin-aracini-geri-cagiriyor",
      "urlToImage": "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2024/04/tesla_abdde_yaklasik_200_bin_aracini_geri_cagiriyor_1706342545_0821.jpg",
      "publishedAt": "2024-01-27T07:12:00Z",
      "content": "ABD Ulusal Karayolu Trafik Güvenlii daresinin (NHTSA) açklamasnda, Tesla'nn yazlm hatas nedeniyle irketin tam otonom 4.0 sistemiyle donatlm 2023 ylna ait belirli Model S, X ve Y araçlarn geri çard ka… [+716 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Haber7.com"
      },
      "author": "Emrullah Koçin",
      "title": "Dünya devleri rotayı Türkiye'ye kırdı! Talep patlaması yaşanıyor",
      "description": "Küresel ticaret 150 yıl öncesine döndü... Kızıldeniz'deki savaş Batı ekonomisini etkilerken Avrupa tedarikte Türklerin kapısını çalmaya başladı.",
      "url": "https://ekonomi.haber7.com/ekonomi/haber/3386082-dunya-devleri-rotayi-turkiyeye-kirdi-talep-patlamasi-yasaniyor",
      "urlToImage": "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2024/04/dunya_devleri_rotayi_turkiyeye_kirdi_talep_patlamasi_yasaniyor_1706339518_6952.jpg",
      "publishedAt": "2024-01-27T07:12:00Z",
      "content": "Kzldeniz'de korsan saldrlarnn ikinci ayna girmesi ve saldrlarn artarak devam edecei beklentilerinin güçlenmesi nedeniyle Avrupa ile Asya arasndaki yük gemisi trafii durma noktasna geldi.\r\n150 yl önce… [+3956 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Techbang.com"
      },
      "author": "KKJ",
      "title": "特斯拉下一代新車型代號「Redwood」曝光，預計2025年開始量產",
      "description": "特斯拉（Tesla）已告知供應商，希望在2025年年中，開始生產一款代號為“紅木”（Redwood）的新型電動車。\n根據路透社引述四名知情人士透露，特斯拉（Tesla）已告知供應商，希望在2025年年中，開始生產一款代號為“紅木”（Redwood）的新型電動車。其中有兩名知情人士表示，該車定位於「緊湊型跨界車」。\n據悉，特斯拉早在去年就開始向供應商發出“Redwood”車型的“報價請求”或招標邀請。當時爆料這款車的生產工作將於2025年6月開始，周量產預計可達10000輛。\n實際上，特斯拉CEO馬斯克先前就說今年…",
      "url": "https://www.techbang.com/posts/112756-teslas-next-generation-new-model-codenamed-redwood-has-been",
      "urlToImage": "https://cdn1.techbang.com/system/excerpt_images/112756/original/5c20cbacd92f10f2f5308c5286ba2249.jpg?1706168435",
      "publishedAt": "2024-01-27T07:00:00Z",
      "content": "Tesla2025Redwood\r\nRedwood2025610000\r\nCEO25000Model QRedwoodModel Q20212.5 (78.3) \r\nNV9X\r\n5500"
    },
    {
      "source": {
        "id": null,
        "name": "Autocar"
      },
      "author": null,
      "title": "Do small car drivers have an unfair reputation?",
      "description": "Do small cars driving slowly bring out the worst in you?\n\n\nPrior riffs on how automotive prejudice can affect us all and why being in a posh car pays dividends\n\nWhat do you think when you come across or drive up behind a newish small car? Something like a Kia…",
      "url": "https://www.autocar.co.uk/opinion/new-cars/do-small-car-drivers-have-unfair-reputation",
      "urlToImage": "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/matt_prior_opinion_4.jpg",
      "publishedAt": "2024-01-27T07:00:00Z",
      "content": "What do you think when you come across or drive up behind a newish small car? Something like a Kia Picanto, MG 3 or Suzuki Swift.\r\nDo you think that there must go a smart person, because compact cars… [+1637 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Feber.se"
      },
      "author": "Frode Wikesjö",
      "title": "WhatsApp verkar få stöd för andra chattjänster",
      "description": "Trillian!?\n\n\n\n\n\n\nWA Beta har rotat runt i den senaste betakoden för iOS-versionen av WhatsApp och där hittat att appen förbereder sig för stöd för chattar med andra meddelandetjänster. WA Beta tolkar det som att dessa chattar då kommer att hamna på en separat…",
      "url": "https://feber.se/internet/whatsapp-verkar-fa-stod-for-andra-chattjanster/461667/",
      "urlToImage": "https://static.feber.se/article_images/58/05/73/580573.jpg",
      "publishedAt": "2024-01-27T07:00:00Z",
      "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+35082 chars]"
    },
    {
      "source": {
        "id": "focus",
        "name": "Focus"
      },
      "author": "Von FOCUS-online-Redakteur Volker Tietz",
      "title": "Kommentar - Wer jetzt ein E-Auto kauft, hat nur eine sinnvolle Option",
      "description": "Wer mit staatlicher Unterstützung ein E-Auto gekauft hat, wurde übers Ohr gehauen. Eine zu steile These? Klärt der Kommentar. Das kurze Fazit: Nein, es gibt gute Gründe für die Argumentation.Von FOCUS-online-Redakteur Volker Tietz",
      "url": "https://www.focus.de/auto/news/wer-jetzt-ein-e-auto-kauft-hat-nur-eine-sinnvolle-option_id_259614290.html",
      "urlToImage": "https://p6.focus.de/img/fotos/id_259614288/eauto-fin-vt.jpg?im=Crop%3D%2840%2C0%2C830%2C415%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=1508c1441b735dff4a6d42a5f6db74384c8e8e118a67308d9e759a216ad9b5a2",
      "publishedAt": "2024-01-27T06:55:52Z",
      "content": "Wer mit staatlicher Unterstützung ein E-Auto gekauft hat, wurde übers Ohr gehauen. Eine zu steile These? Klärt der Kommentar. Das kurze Fazit: Nein, es gibt gute Gründe für die Argumentation.Was ist … [+3370 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Haber7.com"
      },
      "author": "Özgür Gündüz",
      "title": "Avrupa tedarikte Türklerin kapısını çalıyor",
      "description": "Kızıldeniz’de yaşanan korsan saldırıları, Asya ile Avrupa arasındaki ticari gemi trafiğini vurunca, dev firmalar alım için yönünü Türkiye’ye çevirdi. Siparişlerde yüzde 10 artış var",
      "url": "https://ekonomi.haber7.com/ekonomi/haber/3386077-avrupa-tedarikte-turklerin-kapisini-caliyor",
      "urlToImage": "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2024/04/avrupa_tedarikte_turklerin_kapisini_caliyor_1706338324_3162.jpg",
      "publishedAt": "2024-01-27T06:53:00Z",
      "content": "Kzldeniz'de korsan saldrlarnn ikinci ayna girmesi ve saldrlarn artarak devam edecei beklentilerinin güçlenmesi nedeniyle Avrupa ile Asya arasndaki yük gemisi trafii durma noktasna geldi. 150 yl önce … [+3954 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Haber7.com"
      },
      "author": "Özgür Gündüz",
      "title": "150 yıl öncesine dönüldü! Türkiye'nin kapısına dayandılar",
      "description": "Küresel ticaret 150 yıl öncesine döndü. Kızıldeniz'deki savaş Batı ekonomisini etkilerken Avrupa tedarikte Türklerin kapısını çalmaya başladı. Kimya, otomotiv, sağlık gereçleri ve beyaz eşya gibi ürün gruplarında talep patlaması yaşanıyor.",
      "url": "https://ekonomi.haber7.com/ekonomi/haber/3386077-150-yil-oncesine-donuldu-turkiyenin-kapisina-dayandilar",
      "urlToImage": "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2024/04/avrupa_tedarikte_turklerin_kapisini_caliyor_1706338324_3162.jpg",
      "publishedAt": "2024-01-27T06:53:00Z",
      "content": "Kzldeniz'de korsan saldrlarnn ikinci ayna girmesi ve saldrlarn artarak devam edecei beklentilerinin güçlenmesi nedeniyle Avrupa ile Asya arasndaki yük gemisi trafii durma noktasna geldi. 150 yl önce … [+3954 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Meneame.net"
      },
      "author": "Grahml",
      "title": "BYD: de ser objeto de mofa de Elon Musk a superar a Tesla como líder mundial de coches eléctricos",
      "description": "Aunque en términos anuales Tesla continúa siendo el mayor fabricante de vehículos eléctricos, en el último trimestre BYD le superó tras vender 526.000 unidades, frente a las 484.000 de Tesla. La compañía le ha puesto un nombre reconocible a la oleada china en…",
      "url": "https://www.meneame.net/m/tecnolog%C3%ADa/byd-ser-objeto-mofa-elon-musk-superar-tesla-como-lider-mundial",
      "urlToImage": "https://meneame.net/img/logo_meneame_footer.svg",
      "publishedAt": "2024-01-27T06:49:29Z",
      "content": "Musk es objeto de mofa constante y es hiper millonario."
    },
    {
      "source": {
        "id": null,
        "name": "CleanTechnica"
      },
      "author": "Zachary Shahan",
      "title": "Redwood Materials Building Huge Cathode Factory In USA",
      "description": "USA has not been the home of much of the world’s EV battery or battery component production. That has been ... [continued]\nThe post Redwood Materials Building Huge Cathode Factory In USA appeared first on CleanTechnica.",
      "url": "https://cleantechnica.com/2024/01/27/redwood-materials-building-huge-cathode-factory-in-usa/",
      "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/01/Redwood-Materials-cathode-factory-production.png",
      "publishedAt": "2024-01-27T06:21:52Z",
      "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nUSA has not been the home of much of the world’s EV battery or battery component production. That has been do… [+2709 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Www.dn.se"
      },
      "author": "Fredrik Thambert",
      "title": "Här är blockaderna mot Tesla – och så rundar Tesla dem",
      "description": "DN listar hur Tesla har påverkats av fackens stridsåtgärder och hur de har gjort för att runda dem.",
      "url": "https://www.dn.se/ekonomi/har-ar-blockaderna-mot-tesla-och-sa-rundar-tesla-dem/",
      "urlToImage": "https://cached-images.bonnier.news/gcs/bilder/dn-mly/5f4c9108-4e1e-442d-84c6-220a7a8ac811.jpeg?interpolation=lanczos-none&fit=around%7C1024:576&crop=1024:h;center,top&output-quality=80",
      "publishedAt": "2024-01-27T06:10:14Z",
      "content": "Blockad: IF Metalls strejk omfattar cirka 130 bilmekaniker på Teslas serviceverkstäder runt om i landet.\r\nMotdrag: Endast en minoritet av de berörda uppges delta i strejken. Tesla har dessutom satt i… [+2986 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Feber.se"
      },
      "author": "Frode Wikesjö",
      "title": "En trailer för Ricky Stanicky",
      "description": "John Cena spelar låtsaskompis\n\n\n\n\n\n\n\n\n\n\nHär har vi en trailer för komedin Ricky Stanicky som har premiär på Prime Video den 7 mars. Filmen handlar om tre barndomsvänner som hittade på en fjärde kompis, Ricky Stanicky, för att slingra sig ur knipa. Tjugo år ef…",
      "url": "https://feber.se/film/en-trailer-for-ricky-stanicky/461665/",
      "urlToImage": "https://i.ytimg.com/vi/WXpBN_31-Cw/hqdefault.jpg",
      "publishedAt": "2024-01-27T06:00:00Z",
      "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+43907 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nyteknik.se"
      },
      "author": "Felix Björklund",
      "title": "Test: Hur står sig kinesiska utmanaren mot Tesla Model 3?",
      "description": "En kinesisk ”Tesla-look-alike” utan egen karaktär – eller en utmanare som trumfar förebilden? BYD Seal har siktet inställt på Tesla Model 3. Är den bättre än originalet? Ny Teknik har testat.",
      "url": "https://www.nyteknik.se/elbilar/elbilstest-byd-seal-det-har-ar-faktiskt-vasst/4230915",
      "urlToImage": "https://image.nyteknik.se/4231094.jpg?imageId=4231094&x=0&y=15.79&cropw=100&croph=84.21&panox=0&panoy=15.79&panow=100&panoh=84.21&width=1200&height=683",
      "publishedAt": "2024-01-27T06:00:00Z",
      "content": "Ny Teknik bevakar och skriver om ny teknik inom områden som fordons-industri, innovation, digitalisering, bygg, miljö, it och telekom. Ny Teknik skriver också om nya entreprenörer, life science, indu… [+400 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Politiken.dk"
      },
      "author": null,
      "title": "Hustru til SpaceX-ansat i koma sagsøger Elon Musks virksomhed",
      "description": "Reuters dokumenterede og afslørede sidste år mindst 600 ikke tidligere kendte arbejdsulykker i SpaceX.",
      "url": "https://politiken.dk/internationalt/art9735358/Hustru-til-SpaceX-ansat-i-koma-sags%C3%B8ger-Elon-Musks-virksomhed",
      "urlToImage": "https://politiken.dk/incoming/img9735370.6284bi/ALTERNATES/p16x9_960/SpaceX%20Discrimination%20Lawsuit",
      "publishedAt": "2024-01-27T05:59:13Z",
      "content": "Elon Musks rumfartsvirksomhed SpaceX står over for et sagsanlæg, som en ægtefælle til en medarbejder involveret i en arbejdsulykke har rejst. Medarbejderen flækkede kraniet på grund af en dysfunktion… [+1920 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Securitylab.ru"
      },
      "author": "Alexander Antipov",
      "title": "AlphaCodium превзошел AlphaCode: новая эра ИИ-кодирования",
      "description": "Израильский стартап устанавливает новые стандарты в генерации кода.",
      "url": "https://www.securitylab.ru/news/545580.php",
      "urlToImage": "https://www.securitylab.ru/upload/iblock/80a/nxibmr3f6i65fi0kntwhgzdjbrqwes3r.jpg",
      "publishedAt": "2024-01-27T05:33:54Z",
      "content": ".\r\n , AlphaCodium , Google DeepMind AlphaCode ( AlphaCode 2 Gemini), , Twitter .\r\n\" , , !\" - . \" , AlphaCodium - , . AlphaCode DeepMind AlphaCode2, !\"\r\n, Tesla OpenAI, \" \" . \"-\" \"\", .\r\n(LLMs) , , \" \"… [+216 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Aktualne.cz"
      },
      "author": "Jan Matoušek",
      "title": "Elon Musk se děsí čínských aut, chtěl by je zdanit. Před pár lety se jim vysmíval",
      "description": "Elon Musk promluvil o čínské konkurenci. Dělá podle něj dobrá auta, pokud je ale státy nezdaní, zlikvidují zavedené automobilky.",
      "url": "https://zpravy.aktualne.cz/ekonomika/auto/elon-musk-se-desi-cinskych-aut-chtel-by-je-zdanit-pred-par-l/r~47761b0ebc4411eeb1f50cc47ab5f122/",
      "urlToImage": "https://cdn.xsd.cz/original/ee8c977522f6396ea5c08005567765db.jpg",
      "publishedAt": "2024-01-27T05:32:00Z",
      "content": "Slova zakladatele a majitele automobilky Tesla přišla nedlouho poté, co se čínská automobilka BYD stala v posledním čtvrtletí loňského roku celosvětově největším výrobcem elektroaut. Tesle nepomohlo … [+2724 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Onliner.by"
      },
      "author": "Onliner | Кошелек",
      "title": "Комнаты скуки, невыносимые экзамены и возвращение с удаленки. На что идут работодатели, чтобы заставить сотрудников уволиться",
      "description": "Совсем недавно Onlíner рассказывал про одиозную историю, случившуюся в Китае: руководитель компании перевел ее офис в труднодоступную горную местность, где созданные условия труда заставили две трети сотрудников уволиться по собственному желанию, а затем рабо…",
      "url": "https://money.onliner.by/2024/01/27/na-chto-idut-rabotodateli",
      "urlToImage": "https://content.onliner.by/news/1400x5616/d2148c9db15458b951d64e1f6c56f5ba.jpg",
      "publishedAt": "2024-01-27T05:00:19Z",
      "content": "Onlíner , : , , . , , . , . , , , . « » , ?\r\nX\r\n 2022 SpaceX Tesla $44 Twitter. , X. , , , . , . , , : « , Twitter 2.0 , . . ».\r\n , , , .\r\n . , . .\r\n2022 COVID-19 : , , . , , , , , . , 40- . , . , - … [+703 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "medium.datadriveninvestor.com",
      "title": "Here’s What AI says about Cathie Wood’s ARK Invest",
      "description": "I built NexusTrade — An AI-Powered Financial Analysis Tool. Here’s what it says about Cathie Wood’s Ark Invest Objective Financial Analysis on Retail’s Favorite Investor NexusTrade — AI Powered Investing Research In 2020, I rode the Cathie Wood Hype Train, al…",
      "url": "https://biztoc.com/x/709418f7f960e5d1",
      "urlToImage": "https://c.biztoc.com/p/709418f7f960e5d1/s.webp",
      "publishedAt": "2024-01-27T04:58:15Z",
      "content": "I built NexusTrade An AI-Powered Financial Analysis Tool. Heres what it says about Cathie Woods Ark InvestObjective Financial Analysis on Retails Favorite InvestorNexusTrade AI Powered Investing Rese… [+241 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "medium.datadriveninvestor.com",
      "title": "Investing: Tesla is now a car company",
      "description": "Lordy mercy, what has happened to Tesla? The darling of many investors, the innovative Electric Company was founding member of The Magnificent Seven, a group seven tech stocks accounting almost 30% of The S&P 500’s market capitalisation. We discussed Tesla in…",
      "url": "https://biztoc.com/x/b0ba746b885bf663",
      "urlToImage": "https://c.biztoc.com/p/b0ba746b885bf663/s.webp",
      "publishedAt": "2024-01-27T04:58:14Z",
      "content": "Lordy mercy, what has happened to Tesla? The darling of many investors, the innovative Electric Company was founding member of The Magnificent Seven, a group seven tech stocks accounting almost 30% o… [+222 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Drive.com.au"
      },
      "author": "Adam Turner",
      "title": "Is it legal to use Tesla Autopilot in Australia?",
      "description": "Tesla cars are capable of plenty of party tricks, but can you use their Autopilot function on local roads?",
      "url": "https://www.drive.com.au/caradvice/is-it-legal-to-use-tesla-autopilot-in-australia/",
      "urlToImage": "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/cms/uploads/agu0te7fijixjuhuhlw1",
      "publishedAt": "2024-01-27T04:52:00Z",
      "content": "Building on this, Tesla Enhanced Autopilot is a $5100 optional extra in Australia. For highway driving, it adds Auto Lane Change and Navigate on Autopilot. This can actively guide your Tesla from a h… [+154 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Overclockers.ru"
      },
      "author": "Алексей Сычёв",
      "title": "Илон Маск будет тратить сотни миллионов долларов на чипы NVIDIA, но не забудет и про AMD",
      "description": "По крайней мере, в текущем году.",
      "url": "https://overclockers.ru/hardnews/show/131749/ilon-mask-budet-tratit-sotni-millionov-dollarov-na-chipy-nvidia-no-ne-zabudet-i-pro-amd",
      "urlToImage": "https://overclockers.ru/st/images/preview/2uH1QWFIWsQR6oqo.jpg",
      "publishedAt": "2024-01-27T04:31:00Z",
      "content": "Bloomberg, Tesla (Elon Musk) «» .\r\n-, Dojo Tesla $1 . Tesla. $500 NVIDIA. X , Tesla AMD, , , ."
    },
    {
      "source": {
        "id": null,
        "name": "Www.nzz.ch"
      },
      "author": "Auswärtige Autoren (AA)",
      "title": "Autos erobern den Luftraum – wenn die Strasse nicht mehr ausreicht",
      "description": "Immer mehr Firmen kündigen für die nächsten Jahre flugfähige Autos an. Was bisher nur als Spinnerei galt, wird zum Trend, um dem Verkehrschaos zu entkommen.",
      "url": "https://www.nzz.ch/mobilitaet/flugautos-sind-im-kommen-doch-echte-chancen-haben-nur-flugtaxis-ld.1775357",
      "urlToImage": "https://www.nzz.ch/nzz-fb.png",
      "publishedAt": "2024-01-27T04:30:00Z",
      "content": "Verstopfte Strassen, zähflüssiger Verkehr und kaum Parkplätze. Autofahren in der Stadt macht immer weniger Spass. Wer in den Hauptverkehrszeiten mit dem Auto in der Grossstadt unterwegs ist, wünscht … [+9158 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Reuters",
      "title": "Wall St Week Ahead: Fed, earnings and economic data to test US stocks at record highs",
      "description": "The S&P 500 is up nearly 3% since the end of December and stands near record highs, driven in part by expectations of a U.S. economic \"soft-landing\" in which growth remains stable while inflation cools.",
      "url": "https://economictimes.indiatimes.com/markets/stocks/news/wall-st-week-ahead-fed-earnings-and-economic-data-to-test-us-stocks-at-record-highs/articleshow/107179128.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-107179137,width-1200,height-630,imgsize-196408,overlay-etmarkets/photo.jpg",
      "publishedAt": "2024-01-27T04:27:23Z",
      "content": "The U.S. stock market's strong start to the year faces a major test next week in a stretch packed with big tech earnings, the Federal Reserve's monetary policy meeting and the closely-watched employm… [+4630 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "zerohedge.com",
      "title": "Here's Every EV Qualified For US Tax Credits In 2024",
      "description": "Here's Every EV Qualified For US Tax Credits In 2024 This year, the list of qualified electric vehicles (EVs) for U.S. tax credits is relatively small. Many popular models like the Nissan Leaf, Ford Mustang Mach-E, and some Tesla Model 3s are missing - largel…",
      "url": "https://biztoc.com/x/ceadf6f1d82cbab8",
      "urlToImage": "https://c.biztoc.com/p/ceadf6f1d82cbab8/s.webp",
      "publishedAt": "2024-01-27T04:24:06Z",
      "content": "Here's Every EV Qualified For US Tax Credits In 2024\r\nThis year, the list of qualified electric vehicles (EVs) for U.S. tax credits is relatively small.Many popular models like the Nissan Leaf, Ford … [+324 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "3dnews.ru"
      },
      "author": null,
      "title": "Илон Маск заявил, что намерен покупать ускорители AMD для суперкомпьютеров Tesla",
      "description": "На прошедшей квартальной конференции Tesla Илон Маск (Elon Musk) дал понять, что вычислительные ресурсы компании Tesla он собирается развивать как за счёт закупки ускорителей NVIDIA, так и путём развития собственного суперкомпьютера Dojo. Вчера он добавил, чт…",
      "url": "https://3dnews.ru/1099389/ilon-mask-zayavil-chto-nameren-pokupat-uskoriteli-amd-dlya-superkompyuterov-tesla",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/01/27/1099389/amd_musk.jpg",
      "publishedAt": "2024-01-27T04:14:00Z",
      "content": "Tesla (Elon Musk) , Tesla NVIDIA, Dojo. , AMD NVIDIA.\r\n: AMD\r\nAMD, Tesla , NVIDIA $500 . X Tesla AMD, . , AMD Instinct MI300.\r\n Tesla , - FSD v12, , .\r\n, Dojo Tesla $1 . , Dojo , . AMD , ."
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": null,
      "title": "Tesla stock will gain 550% and SpaceX's valuation will triple by 2030 under Elon Musk's leadership, top investor says",
      "description": null,
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_75735ebb-90f2-4de7-825d-aee07f611e08",
      "urlToImage": null,
      "publishedAt": "2024-01-27T04:12:20Z",
      "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sabah.com.tr"
      },
      "author": "Metin CAN",
      "title": "Avrupa tedarikte Türklerin kapısını çalıyor",
      "description": "Kızıldeniz’de yaşanan korsan saldırıları, Asya ile Avrupa arasındaki ticari gemi trafiğini vurunca, dev firmalar alım için yönünü Türkiye’ye çevirdi. Siparişlerde yüzde 10 artış varDevamı için tıklayınız",
      "url": "https://www.sabah.com.tr/ekonomi/avrupa-tedarikte-turklerin-kapisini-caliyor-6802250",
      "urlToImage": "https://iasbh.tmgrup.com.tr/a47532/1200/627/0/51/1280/720?u=https://isbh.tmgrup.com.tr/sbh/2024/01/27/avrupa-tedarikte-turklerin-kapisini-caliyor-1706304119165.jpg",
      "publishedAt": "2024-01-27T04:00:26Z",
      "content": "Kzldeniz'de korsan saldrlarnn ikinci ayna girmesi ve saldrlarn artarak devam edecei beklentilerinin güçlenmesi nedeniyle Avrupa ile Asya arasndaki yük gemisi trafii durma noktasna geldi. 150 yl önce … [+3915 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Reuters",
      "title": "Weak Intel forecast drags SP 500, ends streak of record highs",
      "description": "The S&amp;P 500 declined 0.07% to end the session at 4,890.97 points. The Nasdaq declined 0.36% to 15,455.36 points, while Dow Jones Industrial Average rose 0.16% to 38,109.43 points.",
      "url": "https://www.moneycontrol.com/news/business/markets/weak-intel-forecast-drags-sp-500-ends-streak-of-record-highs-12132551.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2018/12/Wall-Street-770x433.jpg",
      "publishedAt": "2024-01-27T03:54:22Z",
      "content": "The S&amp;P 500 ended a five-session streak of record highs on Friday, with Intel, opens new tab slumping after a bleak revenue forecast, while U.S. economic data showed inflation moderating.\r\nEven a… [+2965 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Reuters",
      "title": "Elon Musk says his AI startup xAI not raising capital",
      "description": "The Financial Times reported xAI was in talks to raise funding at a valuation of $20 billion. The startup is in talks with family offices in Hong Kong and is targeting sovereign wealth funds in the Middle East, according to the FT report, which cited multiple…",
      "url": "https://economictimes.indiatimes.com/tech/technology/elon-musk-says-his-ai-startup-xai-not-raising-capital/articleshow/107178145.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-107178149,width-1200,height-630,imgsize-89556,overlay-ettech/photo.jpg",
      "publishedAt": "2024-01-27T03:02:50Z",
      "content": "Elon Musk said on Friday his artificial intelligence firm xAI was not in talks with investors to secure funding, following a media report earlier in the day on the startup's effort to raise up to $6 … [+1916 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Muywindows.com"
      },
      "author": "Diego López",
      "title": "Por qué falla la orden de regreso a la oficina",
      "description": "Se ha resuelto la cuestión de permitir a los empleados trabajar desde casa. Esta es la nueva normalidad: la opinión. Mike Hopkins, vicepresidente senior de Prime Video y Amazon Studios, dijo recientemente en una reunión interna sobre la regulación de Amazon q…",
      "url": "https://www.muywindows.com/2024/01/27/por-que-falla-la-orden-de-regreso-a-la-oficina/",
      "urlToImage": "https://www.muywindows.com/wp-content/uploads/2024/01/Por-que-falla-la-orden-de-regreso-a-la-oficina.webp.webp",
      "publishedAt": "2024-01-27T02:55:45Z",
      "content": "Se ha resuelto la cuestión de permitir a los empleados trabajar desde casa. Esta es la nueva normalidad: la opinión.Mike Hopkins, vicepresidente senior de Prime Video y Amazon Studios, dijo recientem… [+7860 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": null,
      "title": "3 things Tesla should do after its market value shrunk $80 billion in a single day, according to Wedbush",
      "description": null,
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_39356d64-9f58-4f20-8c6a-d02de7d6f984",
      "urlToImage": null,
      "publishedAt": "2024-01-27T02:54:49Z",
      "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "feedfeeder",
      "title": "Tesla recalling nearly 200,000 vehicles including Models Y, S and X because software glitch can cause backup camera to go dark - KABC-TV",
      "description": "Tesla recalling nearly 200,000 vehicles including Models Y, S and X because software glitch can cause backup camera to go darkKABC-TV Tesla recall: 2023 Model S, X, Y cars to receive OTA software updateUSA TODAY Tesla recalls 200,000 vehicles over rearview ca…",
      "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172875300",
      "urlToImage": null,
      "publishedAt": "2024-01-27T02:53:56Z",
      "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "investors.com",
      "title": "Stock Market Continues To Rally; ASML, Netflix, Tesla, Intel Are Big Earnings Movers: Weekly Review",
      "description": "The market rally continued amid near-perfect economic data. ASML and Netflix were earning winners. Tesla and Intel dived on guidance. The post Stock Market Continues To Rally; ASML, Netflix, Tesla, Intel Are Big Earnings Movers: Weekly Review appeared first o…",
      "url": "https://biztoc.com/x/8591cab6020d6bdc",
      "urlToImage": "https://c.biztoc.com/265/og.png",
      "publishedAt": "2024-01-27T02:42:15Z",
      "content": "The market rally continued amid near-perfect economic data. ASML and Netflix were earning winners. Tesla and Intel dived on guidance.The post Stock Market Continues To Rally; ASML, Netflix, Tesla, In… [+177 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "investors.com",
      "title": "Tesla Bull Removes TSLA From 'Best Ideas' List Until Elon Musk Does These 10 Things",
      "description": "After Tesla suffered its worst one-day percentage loss in over a year, Wedbush analyst Dan Ives outlined several items for Elon Musk to address. The post Tesla Bull Removes TSLA From 'Best Ideas' List Until Elon Musk Does These 10 Things appeared first on Inv…",
      "url": "https://biztoc.com/x/37b1c6472e836674",
      "urlToImage": "https://c.biztoc.com/265/og.png",
      "publishedAt": "2024-01-27T02:42:15Z",
      "content": "After Tesla suffered its worst one-day percentage loss in over a year, Wedbush analyst Dan Ives outlined several items for Elon Musk to address.The post Tesla Bull Removes TSLA From 'Best Ideas' List… [+165 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Zacjohnson.com"
      },
      "author": "Disclaimer and DMCA",
      "title": "William de Warenne Net Worth – How Much is William de Warenne Worth?",
      "description": "William de Warenne, a prominent Norman nobleman from the 11th century, was known not only for his influential status but also for his immense wealth. His net worth, estimated at an astonishing $146 billion (£105bn) in today’s money, made him one of the riches…",
      "url": "https://zacjohnson.com/william-de-warenne-net-worth-2/",
      "urlToImage": "https://0043d976.rocketcdn.me/wp-content/uploads/2024/01/william-de-warenne-net-worth-1.jpg",
      "publishedAt": "2024-01-27T02:19:51Z",
      "content": "William de Warenne, a prominent Norman nobleman from the 11th century, was known not only for his influential status but also for his immense wealth. His net worth, estimated at an astonishing $146 b… [+13463 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Korrespondent.net"
      },
      "author": "1023",
      "title": "Производитель люксовых товаров LVMH увеличил чистую прибыль до рекордной су",
      "description": "Компания сообщила, что возлагает большие надежды на 2024 год \"благодаря партнерству с Олимпийскими и Паралимпийскими играми 2024 года в Париже\".",
      "url": "https://korrespondent.net/business/companies/4659088-proyzvodytel-luiksovykh-tovarov-LVMH-uvelychyl-chystuui-prybyl-do-rekordnoi-su",
      "urlToImage": "https://kor.ill.in.ua/m/1260x900/3181168.png",
      "publishedAt": "2024-01-27T02:13:00Z",
      "content": "LVMH (Louis Vuitton Moet Hennessy) 8% 15,2 . 2022 14,1 . , 26 , LVMH.\r\n20% 17,9 . . 3% 10,9 . . 7% 8,3 . .\r\n26 LVMH Forbes 206,6 , 204,2 . Tesla 12%. \r\n,    . \r\n .net Telegram WhatsApp. https://t.me/… [+23 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Korrespondent.net"
      },
      "author": "1023",
      "title": "Виробник люксових товарів LVMH збільшив чистий прибуток до рекордної суми",
      "description": "Компанія повідомила, що покладає великі надії на 2024 рік \"завдяки партнерству з Олімпійськими та Паралімпійськими іграми 2024 року в Парижі\".",
      "url": "https://ua.korrespondent.net/business/companies/4659088-vyrobnyk-luiksovykh-tovariv-LVMH-zbilshyv-chystyi-prybutok-do-rekordnoi-sumy",
      "urlToImage": "https://kor.ill.in.ua/m/1260x900/3181168.png",
      "publishedAt": "2024-01-27T02:13:00Z",
      "content": "LVMH (Louis Vuitton Moet Hennessy) 8% 15,2 . 2022 14,1 . ', 26 ,  LVMH.\r\n, . \r\n\" , \", - .\r\nLVMH 9%,  42,17 . .\r\n20%, 17,9 . . 3% 10,9 . . 7%, 8,3 . . \r\n, 7%, 6,6 . . \r\n26 LVMH Forbes 206,6 , 204,2 . … [+85 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Demorgen.be"
      },
      "author": "Jan Stevens",
      "title": "Ongelijkheidseconoom Branko Milanovic: ‘Ik weet dat ik vreselijk pessimistisch klink, maar ik kan niet anders. Wat we nu meemaken, is ongezien’",
      "description": "‘Wat een miljonair vertelt zal mij worst wezen.’ Volgens de Amerikaanse econoom Branko Milanovic (70) is inkomensongelijkheid een van de lonten aan...",
      "url": "https://www.demorgen.be/nieuws/ongelijkheidseconoom-branko-milanovic-ik-weet-dat-ik-vreselijk-pessimistisch-klink-maar-ik-kan-niet-anders-wat-we-nu-meemaken-is-ongezien~b9d68e8e/",
      "urlToImage": "https://img.demorgen.be/c193841d0c6e2c41fdb7cfc2d6b8eebca70e6edb/ongelijkheidseconoom-branko-milanovic-ik-weet-dat-ik-vreselijk-pessimistisch-klink-maar-ik-kan-niet-anders-wat-we-nu-meemaken-is-ongezien",
      "publishedAt": "2024-01-27T02:00:38Z",
      "content": "Wat een miljonair vertelt zal mij worst ­wezen. Volgens de Amerikaanse econoom Branko Milanovic (70) is inkomensongelijkheid een van de lonten aan het wereldwijde kruitvat. Een gesprek over de arbeid… [+23103 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Demorgen.be"
      },
      "author": "Jan Stevens",
      "title": "Ongelijkheidseconoom Branko Milanovic: ‘We spreken nu over wapens alsof het snoep is. Op tv wordt gezellig over raketten gekeuveld’",
      "description": "‘Wat een miljonair vertelt zal mij worst wezen.’ Volgens de Amerikaanse econoom Branko Milanovic (70) is inkomensongelijkheid een van de lonten aan...",
      "url": "https://www.demorgen.be/nieuws/ongelijkheidseconoom-branko-milanovic-we-spreken-nu-over-wapens-alsof-het-snoep-is-op-tv-wordt-gezellig-over-raketten-gekeuveld~b9d68e8e/",
      "urlToImage": "https://img.demorgen.be/c193841d0c6e2c41fdb7cfc2d6b8eebca70e6edb/ongelijkheidseconoom-branko-milanovic-we-spreken-nu-over-wapens-alsof-het-snoep-is-op-tv-wordt-gezellig-over-raketten-gekeuveld",
      "publishedAt": "2024-01-27T02:00:38Z",
      "content": "Wat een miljonair vertelt zal mij worst ­wezen. Volgens de Amerikaanse econoom Branko Milanovic (70) is inkomensongelijkheid een van de lonten aan het wereldwijde kruitvat. Een gesprek over de arbeid… [+22612 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Www.gva.be"
      },
      "author": "jvbo",
      "title": "BEURSTIPS. Deze aandelen kan je best kopen, verkopen of houden",
      "description": "Elke week sprokkelen onze reporters enkele beurstips bij elkaar bij tal van beleggingsadviseurs. Welke aandelen zijn goede beleggingen? En welke zeker niet? Vandaag belichten we de beurskoersen van de het Nederlandse ASML, het IJslandse Marel en het Amerikaan…",
      "url": "https://www.gva.be/cnt/dmf20240126_98116545",
      "urlToImage": "https://static.gva.be/Assets/Images_Upload/2024/01/26/93d875b1-c796-43bc-af9c-4e7e5459bf46.png?maxheight=460&maxwidth=629",
      "publishedAt": "2024-01-27T02:00:00Z",
      "content": "Elke week sprokkelen onze reporters enkele beurstips bij elkaar bij tal van beleggingsadviseurs. Welke aandelen zijn goede beleggingen? En welke zeker niet? Vandaag belichten we de beurskoersen van d… [+68 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "cnbc.com",
      "title": "I’ve never gotten as much feedback on any segment in my life",
      "description": "CNBC's Jim Cramer said he's never received more executive feedback on a \"Mad Money\" segment than he has for his Thursday night commentary in which he booted Tesla from the \"Magnificent Seven\" after the electric vehicle maker's disappointing earnings report an…",
      "url": "https://biztoc.com/x/46db2c472dc426b6",
      "urlToImage": "https://c.biztoc.com/p/46db2c472dc426b6/og.webp",
      "publishedAt": "2024-01-27T00:58:09Z",
      "content": "CNBC's Jim Cramer said he's never received more executive feedback on a \"Mad Money\" segment than he has for his Thursday night commentary in which he booted Tesla from the \"Magnificent Seven\" after t… [+283 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "fortune.com",
      "title": "Tesla investors are ‘scratching their heads’ and see ‘no floor’ after shares plummet 26% in monthlong $205 billion swoon",
      "description": "Tesla Inc. investors haven’t had a stretch this bad in a long time. Shares of Elon Musk’s electric-vehicle giant have dropped 26% this month, wiping out $205 billion in market valuation. The stock is on pace to close lower for the sixth straight week, its lon…",
      "url": "https://biztoc.com/x/0d2a158b6b86d21b",
      "urlToImage": "https://c.biztoc.com/p/0d2a158b6b86d21b/og.webp",
      "publishedAt": "2024-01-27T00:44:11Z",
      "content": "Tesla Inc. investors havent had a stretch this bad in a long time.Shares of Elon Musks electric-vehicle giant have dropped 26% this month, wiping out $205 billion in market valuation. The stock is on… [+294 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Twistedsifter.com"
      },
      "author": "Addison Sartino",
      "title": "Girl Moves Spoiled Stepsister’s Items Out Of Shared Room Until She Agrees To Drive Her To School In Her Tesla",
      "description": "There's a lot to unpack here...",
      "url": "http://twistedsifter.com/2024/01/girl-moves-spoiled-stepsisters-items-out-of-shared-room-until-she-agrees-to-drive-her-to-school-in-her-tesla/",
      "urlToImage": "https://twistedsifter.com/wp-content/uploads/2024/01/Teenage-Sister.png",
      "publishedAt": "2024-01-27T00:28:09Z",
      "content": "Stepsibling relationships can be awkward and uncomfortable.\r\nFrom strangers to roommates in an instant.\r\nThis girl took to Reddit to share the story of her and her stepsister.\r\nSo, my dad has been ma… [+2817 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "Earnings call: Gentex reports solid growth and optimistic outlook for 2024",
      "description": "Earnings call: Gentex reports solid growth and optimistic outlook for 2024",
      "url": "https://www.investing.com/news/stock-market-news/earnings-call-gentex-reports-solid-growth-and-optimistic-outlook-for-2024-93CH-3284660",
      "urlToImage": "https://i-invdn-com.investing.com/news/fa8a2f803ea2ddf92359d55091dcde0a_L.jpg",
      "publishedAt": "2024-01-27T00:28:01Z",
      "content": "Gentex Corporation (NASDAQ:GNTX) has reported a strong financial performance for the fourth quarter and full year of 2023, with a notable increase in net sales and gross margins. \r\nThe company's four… [+50762 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Odatv4.com"
      },
      "author": "Odatv",
      "title": "Tesla 200 bin aracını geri çağırıyor",
      "description": "Elektrikli otomobil üreticisi Tesla ekranda arka kameranın görüntülenmesini engelleyen bir yazılım dengesizliği nedeniyle ABD'deki yaklaşık 200 bin aracını geri çağırdı.",
      "url": "https://www.odatv4.com/guncel/tesla-200-bin-aracini-geri-cagiriyor-120024323",
      "urlToImage": "https://img.odatv4.com/rcman/Cw1280h720q95gc/storage/files/images/2024/01/27/tesla-200-bin-aracini-geri-cagiriyor-ub5m.jpg",
      "publishedAt": "2024-01-27T00:14:00Z",
      "content": "Elektrikli otomobil üreticisi Tesla ekranda arka kamerann görüntülenmesini engelleyen bir yazlm dengesizlii nedeniyle ABD'deki yaklak 200 bin aracn geri çard. ABD Ulusal Karayolu Trafik Güvenlii dare… [+883 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "feedfeeder",
      "title": "Stock market today: S&P 500 ends record-setting streak, but stocks notch weekly win - Yahoo Finance",
      "description": "Stock market today: S&P 500 ends record-setting streak, but stocks notch weekly winYahoo Finance Dow Jones Rises As Intel Plunges On Earnings; Cathie Wood Loads Up As Tesla DivesInvestor's Business Daily Intel, American Express, Visa, Spirit Airlines, KLA, We…",
      "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172873724",
      "urlToImage": null,
      "publishedAt": "2024-01-27T00:13:15Z",
      "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "abc7.com",
      "title": "Tesla recalling nearly 200,000 vehicles including Models Y, S and X because software glitch can cause backup camera to go dark",
      "description": "Tesla recalling nearly 200,000 vehicles because software glitch can cause backup camera to go dark Tesla is recalling nearly 200,000 vehicles in the U.S. because the backup camera may not function while the car is in reverse. Tesla is recalling nearly 200,000…",
      "url": "https://biztoc.com/x/96d60a6e908ffd11",
      "urlToImage": "https://c.biztoc.com/p/96d60a6e908ffd11/og.webp",
      "publishedAt": "2024-01-27T00:02:11Z",
      "content": "Tesla recalling nearly 200,000 vehicles because software glitch can cause backup camera to go darkTesla is recalling nearly 200,000 vehicles in the U.S. because the backup camera may not function whi… [+227 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "finance.yahoo.com",
      "title": "Tesla Investors See 'There’s No Floor' After Losing $200 Billion",
      "description": "Tesla Inc. investors haven’t had a stretch this bad in a long time time. • None Putin Sends US Signal on Ukraine Talks, Seeing War Advantage • None One of World’s Richest Doctors Sees Fortune Surge to $12 Billion Shares of Elon Musk’s electric-vehicle giant h…",
      "url": "https://biztoc.com/x/cdb851dc55e37e6c",
      "urlToImage": "https://c.biztoc.com/p/cdb851dc55e37e6c/s.webp",
      "publishedAt": "2024-01-27T00:02:06Z",
      "content": "Tesla Inc. investors havent had a stretch this bad in a long time time.None Putin Sends US Signal on Ukraine Talks, Seeing War AdvantageNone One of Worlds Richest Doctors Sees Fortune Surge to $12 Bi… [+296 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Julie Coleman",
      "title": "Rivian CEO says EV market suffers from a lack of choice",
      "description": "Rivian CEO RJ Scaringe on Friday discussed the electric vehicle market with CNBC's Jim Cramer.",
      "url": "https://www.cnbc.com/2024/01/26/rivian-ceo-says-ev-market-suffers-from-a-lack-of-choice-.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107353378-1704223649943-gettyimages-1895736817-RIVIAN_DELIVERIES.jpeg?v=1704223749&w=1920&h=1080",
      "publishedAt": "2024-01-26T23:59:10Z",
      "content": "Rivian CEO RJ Scaringe on Friday discussed the electric vehicle market with CNBC's Jim Cramer, saying EV automakers need to give consumers a wider variety of models to choose from. \r\n\"What I think we… [+1594 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Noticiasautomotivas.com.br"
      },
      "author": "Ricardo de Oliveira",
      "title": "Elon Musk diz que funcionários dormirão no chão da fábrica para produzir novo carro barato",
      "description": "O novo carro elétrico da Tesla promete ser o mais barato da marca americana, mas não será somente isso. Para Elon Musk, será um novo e complicado desafio, já",
      "url": "https://www.noticiasautomotivas.com.br/elon-musk-diz-que-funcionarios-dormirao-no-chao-da-fabrica-para-produzir-novo-carro-barato/",
      "urlToImage": "https://images.noticiasautomotivas.com.br/img/f/fabrica-tesla.jpeg",
      "publishedAt": "2024-01-26T23:54:08Z",
      "content": "fabrica tesla\r\nO novo carro elétrico da Tesla promete ser o mais barato da marca americana, mas não será somente isso. Para Elon Musk, será um novo e complicado desafio, já que mais tecnologias serão… [+1949 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Electrek"
      },
      "author": "Fred Lambert",
      "title": "Tesla announces new $500 million Dojo supercomputer coming to New York",
      "description": "Tesla has announced a new $500 million project to build a giant Dojo supercomputer cluster at Gigafactory New York in Bufallo.\n\n\n\n more…",
      "url": "https://electrek.co/2024/01/26/tesla-announces-dojo-supercomputer-new-york/",
      "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/10/Screen-Shot-2022-10-01-at-3.10.03-PM.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2024-01-26T23:30:47Z",
      "content": "Tesla has announced a new $500 million project to build a giant Dojo supercomputer cluster at Gigafactory New York in Bufallo.\r\nDojo is a new supercomputer designed from the ground up by Tesla specif… [+1814 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "foxbusiness.com",
      "title": "Tesla's warning, Boeing’s crisis, Bond King Gundlach on markets and the tax season ahead",
      "description": "Elon Musk's Tesla has a turbulent week — Boeing crisis ongoing as CEO Doug Calhoun hits Capitol Hill — Billionaire bond king Jeff Gundlach is skeptical about key economic data points — Layoffs hit Big Tech companies and more may be coming — 4Q GDP sees solid …",
      "url": "https://biztoc.com/x/c6ff76e97068718d",
      "urlToImage": "https://c.biztoc.com/p/c6ff76e97068718d/s.webp",
      "publishedAt": "2024-01-26T23:18:06Z",
      "content": "Elon Musk's Tesla has a turbulent week Boeing crisis ongoing as CEO Doug Calhoun hits Capitol Hill Billionaire bond king Jeff Gundlach is skeptical about key economic data points Layoffs hit Big Tech… [+275 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "wsj.com",
      "title": "The Score: Netflix, United Airlines, Tesla and More Stocks That Defined the Week",
      "description": "Here are some of the major companies whose stocks moved on the week’s news.",
      "url": "https://biztoc.com/x/537a10f4983c7a42",
      "urlToImage": "https://c.biztoc.com/265/og.png",
      "publishedAt": "2024-01-26T23:16:07Z",
      "content": "Here are some of the major companies whose stocks moved on the weeks news.\r\nThis story appeared on wsj.com, 2024-01-26."
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "investorplace.com",
      "title": "The 2 Biggest Winners and Losers of Earnings Season So Far…",
      "description": "We were treated to results from four well-known companies this week... We may not be in the heart of the fourth-quarter earnings season just yet (earnings results will start to come in fast and furious next week). But we were still treated to results from fou…",
      "url": "https://biztoc.com/x/17673105ff5fc559",
      "urlToImage": "https://c.biztoc.com/p/17673105ff5fc559/s.webp",
      "publishedAt": "2024-01-26T23:02:22Z",
      "content": "We were treated to results from four well-known companies this week...We may not be in the heart of the fourth-quarter earnings season just yet (earnings results will start to come in fast and furiou… [+286 chars]"
    }
  ]
  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey- Top headlines</h2>
        
        <div className='row '>
        {  this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItems  title= {element.title ? element.title.slice(0, 45) : ""} description={element.description?element.description.slice(0,40):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
           
            </div>
            
        })}
          
          
        </div>
      </div>
    )
  }
}

export default News
