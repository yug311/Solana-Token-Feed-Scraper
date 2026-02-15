const FIVE_MINUTES = 5 * 60 * 1000;

const InstagramHandles = {
  // Chaotic / Meme-Worthy / Unhinged Brands (these go viral fastest—savage replies, absurdity, roasts, trends)
  chaotic_fun_brands: [
    "@duolingo",           // The king of chaos—owl threats, fake deaths, viral roasts
    "@nutterbutter",       // Surreal fever-dream posts, distorted horror-humor
    "@scrubdaddy",         // Smiling sponge drops music vids, dark humor
    "@chipotle",           // Collabs, absurd challenges, Gen Z bait
    "@sourpatchkids",      // Sour/sweet chaotic energy
    "@liquiddeath",        // Edgy canned water, death metal vibes, meme marketing
    "@ryanair",            // Hostile savage airline roasts (famous for unhinged replies)
    "@wendys",             // Classic roast master, savage comebacks
    "@dennys",             // Late-night diner absurdity
    "@barkbox",            // Dog chaos memes
    "@totinos",            // Gamer/pizza roll ironic memes
    "@glossier",           // Beauty with meme undertones
    "@sweetgreen",         // Food trend absurdity
    "@dominos",            // Pizza memes and collabs
    "@mcdonalds",          // Massive reach + occasional chaotic drops
    "@burgerking",         // Roast battles with Wendy's etc.
    "@popeyes",            // Chicken wars virality
    "@tacobell",           // Late-night weird food memes
    "@oreo",              // Playful cookie memes, collaborations
    "@oldspice",          // Absurd humor ads
    "@moonpie",           // Weird, philosophical snack posts
    "@steakumm",          // Existential meat memes
    "@gushers",           // Fun, nostalgic candy chaos
    "@poprocks",          // Explosive, fun content
    "@drpepper",          // Quirky flavor drops
    "@memezar",           // Pure meme aggregator, viral potential
    "@epicfunnypage",     // Funny videos and memes
    "@fuckjerry",         // Classic meme page
    "@sarcasm_only",      // Sarcastic humor
    "@daquan",            // Relatable memes
    "@thefatjewish",      // Celebrity roasts and absurdity


  ],

  // Major Consumer / Food / Everyday Brands (huge reach, product drops/launches = meme fuel)
  major_consumer_brands: [
    "@nike",               // ~300M, sneaker drops, athlete drama
    "@cocacola",           // Iconic, holiday/viral campaigns
    "@starbucks",          // Seasonal drops, customer memes
    "@mcdonalds",
    "@burgerking",
    "@kfc",
    "@subway",
    "@pepsi",
    "@redbull",            // Extreme sports virality
    "@monsterenergy",
    "@netflix",            // Show memes, finsta-style (@netflix2 if exists, but main is huge)
    "@disney",
    "@spotify",
    "@apple",
    "@samsung",
    "@playstation",
    "@xbox",
    "@adidas",            // Sneaker culture, athlete endorsements
    "@amazon",            // Product launches, Prime deals
    "@google",            // Tech innovations, doodles
    "@microsoft",         // Software updates, gaming
    "@ubereats",          // Food delivery memes
    "@doritos",           // Bold flavors, challenges
    "@pringles",          // Stackable fun
    "@gopro",             // Adventure content
    "@lego",              // Creative builds
    "@dove",              // Body positivity campaigns
    "@gymshark",          // Fitness hype
    "@canva",             // Design tools, user creations
    "@benandjerrys",      // Ice cream flavors with social commentary
    "@hellofresh",        // Meal kit trends


  ],

  // Luxury / Fashion Brands (hype drops, flex posts, absurd fashion = instant memes)
  luxury_fashion_brands: [
    "@chanelofficial",
    "@louisvuitton",
    "@gucci",
    "@dior",
    "@prada",
    "@balenciaga",         // King of weird/ugly fashion memes
    "@versace",
    "@hermes",
    "@miu_miu",
    "@loewe",
    "@jacquemus",
    "@skims",              // Kim K empire, body-posi virality
    "@fashionnova",
    "@zara",
    "@h&m",
    "@vintag",
    "@supreme"             // Streetwear drops = FOMO memes
  ],

  // Other High-Impact / Viral-Prone Categories
  others_high_viral: [
    // Science / Space / Tech (mind-blowing visuals, Elon chaos)
    "@nasa",               // Space drops, aliens? memes
    "@spacex",             // Rocket fails/launches = viral gold
    "@tesla",              // Elon posts cross-post virality
    "@elonmusk",           // If he has IG—pure chaos potential (or related)
    
    // Nature / World / Exploration (stunning + weird = shareable)
    "@natgeo",             // ~280M, animal fails, disasters
    "@natgeotravel",
    "@natgeoanimals",
    "@bbcearth",
    "@discovery",
    
    // Government / Official / Global (statements, announcements = controversy/memes)
    "@whitehouse",
    "@potus",
    "@flotus",
    "@un",
    "@who",
    "@nasa",                // Overlap but gov-adjacent
    "@fbi",
    "@cia",                 // Conspiracy bait
    
    // Misc Viral Machines (MrBeast empire, random high-engagement)
    "@instagram",          // Meta-level irony
    "@taylorswift",        // Drama drops
    "@mrbeast"             // Giveaways = community hype
  ],

    // Government Officials / Politicians / World Leaders (statements = chaos)
  politicians_gov: [
    "@narendramodi",       // Most-followed politician
    "@barackobama",
    "@realdonaldtrump",    // If active/variants
    "@aoc",                // Alexandria Ocasio-Cortez - viral takes
    "@kamalaharris",
    "@whitehouse",
    "@potus",
    "@flotus",
    "@un",                 // United Nations
    "@who"                 // World Health Org - pandemic-era memes
  ],

    // Crypto / Solana / Memecoin Related (direct hype machines)
  crypto_memecoin: [
    "@pumpdotfun",
    "@solana",
    "@official_bonk_inu",
    "@binance",            // If they post big news
    "@coinbase",
    "@bitcoin",           // BTC official-ish
    "@ethereum",          // ETH community
    "@cryptocom",         // Exchange promos
    "@timothyronaldd",    // Crypto educator
    "@vitalikbuterin",    // ETH founder (if on IG)
    "@rogerkver",         // Bitcoin Cash advocate
    "@cdixon",            // a16z crypto
    "@balajis",           // Network state visionary
    "@cryptocurrency",    // General crypto news
    "@bitcoinmagazine",   // BTC news
  ],

    finance_adjacent: [
    // Finance News / Publications (market updates, economic news = viral during crashes/booms)
    "@bloombergbusiness",  // Bloomberg: Global finance news, market data
    "@cnbc",               // CNBC: Business news, stock alerts
    "@wsj",                // Wall Street Journal: In-depth finance reporting
    "@forbes",             // Forbes: Billionaires, investing tips
    "@financialtimes",     // Financial Times: International business
    "@theeconomist",       // The Economist: Global economic analysis
    "@reuters",            // Reuters: Breaking finance news
    "@businessinsider",    // Business Insider: Tech-finance crossovers
    "@yahoofinance",       // Yahoo Finance: Stock quotes, personal finance
    "@marketwatch",        // MarketWatch: Real-time market updates
    "@barrons_online",     // Barron's: Investment insights
    "@investopedia",       // Investopedia: Educational finance content// Financial Institutions / Banks / Asset Managers (announcements, tips = hype during earnings)
    "@blackrock",          // BlackRock: ETFs, investment strategies
    "@fidelityinvestments",// Fidelity: Retirement, investing advice
    "@vanguardgroup",      // Vanguard: Index funds, low-cost investing
    "@goldmansachs",       // Goldman Sachs: Banking, markets
    "@jpmorgan",           // JPMorgan: Global banking, economic reports
    "@morganstanley",      // Morgan Stanley: Wealth management
    "@citigroup",          // Citi: Consumer banking, global finance
    "@bankofamerica",      // Bank of America: Personal finance tips
    "@wellsfargo",         // Wells Fargo: Banking services

    // Stock Exchanges / Regulatory (listings, regulations = viral events)
    "@nyse",               // New York Stock Exchange: Bell rings, IPOs
    "@nasdaq",             // Nasdaq: Tech stocks, market opens
    "@secgov",             // SEC: Investor protection, crypto regs
    "@federalreserve",     // Federal Reserve: Interest rates, policy  ],


    ],
};

const TikTokHandles = {
  // Chaotic / Meme-Worthy / Unhinged Brands (these go viral fastest—savage replies, absurdity, roasts, trends)
  chaotic_fun_brands: [
    "@duolingo",           // The king of chaos—owl threats, fake deaths, viral roasts
    "@nutterbutter",       // Surreal fever-dream posts, distorted horror-humor
    "@scrubdaddy",         // Smiling sponge drops music vids, dark humor
    "@chipotle",           // Collabs, absurd challenges, Gen Z bait
    "@sourpatchkids",      // Sour/sweet chaotic energy
    "@liquiddeath",        // Edgy canned water, death metal vibes, meme marketing
    "@ryanair",            // Hostile savage airline roasts (famous for unhinged replies)
    "@wendys",             // Classic roast master, savage comebacks
    "@dennysdiner",        // Late-night diner absurdity
    "@barkbox",            // Dog chaos memes
    "@totinos",            // Gamer/pizza roll ironic memes
    "@glossier",           // Beauty with meme undertones
    "@sweetgreen",         // Food trend absurdity
    "@dominos",            // Pizza memes and collabs
    "@mcdonalds",          // Massive reach + occasional chaotic drops
    "@burgerking",         // Roast battles with Wendy's etc.
    "@popeyes",            // Chicken wars virality
    "@tacobell",           // Late-night weird food memes
    "@oreo",               // Playful cookie memes, collaborations
    "@oldspice",           // Absurd humor ads
    "@moonpie",            // Weird, philosophical snack posts
    "@steakumm",           // Existential meat memes
    "@gushers",            // Fun, nostalgic candy chaos
    "@poprocks",           // Explosive, fun content
    "@drpepper",           // Quirky flavor drops
    "@memezar",            // Pure meme aggregator, viral potential
    "@epicfunnypage",      // Funny videos and memes
    "@fuckjerry",          // Classic meme page
    "@sarcasm_only",       // Sarcastic humor
    "@daquan",             // Relatable memes
    "@thefatjewish",       // Celebrity roasts and absurdity
  ],  // Major Consumer / Food / Everyday Brands (huge reach, product drops/launches = meme fuel)
  major_consumer_brands: [
    "@nike",               // ~300M, sneaker drops, athlete drama
    "@cocacola",           // Iconic, holiday/viral campaigns
    "@starbucks",          // Seasonal drops, customer memes
    "@mcdonalds",
    "@burgerking",
    "@kfc",
    "@subway",
    "@pepsi",
    "@redbull",            // Extreme sports virality
    "@monsterenergy",
    "@netflix",            // Show memes, finsta-style (@netflix2 if exists, but main is huge)
    "@disney",
    "@spotify",
    "@apple",
    "@samsung",
    "@playstation",
    "@xbox",
    "@adidas",             // Sneaker culture, athlete endorsements
    "@amazon",             // Product launches, Prime deals
    "@google",             // Tech innovations, doodles
    "@microsoft",          // Software updates, gaming
    "@ubereats",           // Food delivery memes
    "@doritos",            // Bold flavors, challenges
    "@pringles",           // Stackable fun
    "@gopro",              // Adventure content
    "@lego",               // Creative builds
    "@dove",               // Body positivity campaigns
    "@gymshark",           // Fitness hype
    "@canva",              // Design tools, user creations
    "@benandjerrys",       // Ice cream flavors with social commentary
    "@hellofresh",         // Meal kit trends
  ],  // Luxury / Fashion Brands (hype drops, flex posts, absurd fashion = instant memes)
  luxury_fashion_brands: [
    "@chanelofficial",
    "@louisvuitton",
    "@gucci",
    "@dior",
    "@prada",
    "@balenciaga",         // King of weird/ugly fashion memes
    "@versace",
    "@hermes",
    "@miumiu",
    "@loewe",
    "@jacquemus",
    "@skims",              // Kim K empire, body-posi virality
    "@fashionnova",
    "@zara",
    "@hm",
    "@supreme",            // Streetwear drops = FOMO memes
    "@burberry",
    "@marcjacobs",
    "@valentino",
    "@balmain",
    "@fentybeauty",
    "@aritzia",
  ],  // Other High-Impact / Viral-Prone Categories
  others_high_viral: [
    // Science / Space / Tech (mind-blowing visuals, Elon chaos)
    "@nasa",               // Space drops, aliens? memes
    "@spacex",             // Rocket fails/launches = viral gold
    "@tesla",              // Elon posts cross-post virality
    "@neildegrassetyson",  // StarTalk science explanations// Nature / World / Exploration (stunning + weird = shareable)
    "@natgeo",             // ~280M, animal fails, disasters
    "@natgeotravel",
    "@natgeoanimals",
    "@bbcearth",
    "@discovery",

    // Government / Official / Global (statements, announcements = controversy/memes)
    "@whitehouse",
    "@potus",
    "@flotus",
    "@un",
    "@who",
    "@nasa",                // Overlap but gov-adjacent
    "@fbi",
    "@cia",                 // Conspiracy bait

    // Misc Viral Machines (MrBeast empire, random high-engagement)
    "@instagram",          // Meta-level irony
    "@taylorswift",        // Drama drops
    "@mrbeast"             // Giveaways = community hype  ],  // Government Officials / Politicians / World Leaders (statements = chaos)
  ],


  politicians_gov: [
    "@narendramodi",       // Most-followed politician
    "@barackobama",
    "@realdonaldtrump",    // If active/variants
    "@aoc",                // Alexandria Ocasio-Cortez - viral takes
    "@kamalaharris",
    "@whitehouse",
    "@potus",
    "@flotus",
    "@un",             // United Nations
    "@who",    // World Health Org - pandemic-era memes
    "@emmanuelmacron",
    "@nayibbukele",
    "@luizlula",
    "@gustavopetro",
    "@guillermolasso",
    "@nicolasmaduro",
    "@gabrielboric",
    "@giorgiameloni",
    "@michealmartintd",
    "@10downingstreet",
    "@gouvernementfr",
    "@brunolemaire",
    "@lawrencewongst",
    "@zarahsultanamp",
  ], 
  
  // Crypto / Solana / Memecoin Related (direct hype machines)
  crypto_memecoin: [
    "@pumpdotfun",
    "@solana",
    "@official_bonk_inu",
    "@binance",
    "@coinbase",
    "@bitcoin",            // BTC official-ish
    "@ethereum",           // ETH community
    "@cryptocom",          // Exchange promos
    "@timothyronaldd",     // Crypto educator
    "@vitalikbuterin",     // ETH founder (if on TikTok)
    "@rogerkver",          // Bitcoin Cash advocate
    "@cdixon",             // a16z crypto
    "@balajis",            // Network state visionary
    "@cryptocurrency",     // General crypto news
    "@bitcoinmagazine",    // BTC news
    "@cryptomasun",        // Meme coin tutorials and trends
    "@colewherld",         // Crypto and meme coin discussions
    "@farodbb",            // Meme coin buying guides
    "@degenads",           // Meme coin ads and trends
  ],


  finance_adjacent: [
    "@bloombergbusiness",  // Bloomberg news and economic insights
    "@blackrock",          // BlackRock investment firm
    "@cnbc",               // CNBC financial news
    "@wsj",                // Wall Street Journal
    "@financialtimes",     // Financial Times
    "@nyse",               // New York Stock Exchange
    "@nasdaq",             // Nasdaq Stock Market
    "@goldmansachs",       // Goldman Sachs investment bank
    "@jpmorgan",           // JPMorgan Chase
    "@morganstanley",      // Morgan Stanley
    "@fidelity",           // Fidelity Investments
    "@vanguardgroup",      // Vanguard Group
    "@bankofamerica",      // Bank of America
    "@citibank",           // Citibank
    "@wellsfargo",         // Wells Fargo
    "@barclays",           // Barclays
    "@hsbc",               // HSBC
    "@forbes",             // Forbes business and finance
    "@businessinsider",    // Business Insider
    "@reuters",            // Reuters news
    "@yahoofinance",       // Yahoo Finance
    "@wallstreetoasis",    // Wall Street Oasis finance community
    "@etoro",              // eToro trading platform
    "@nubank"              // Nubank digital bank
  ],
};

const YouTubeHandles = {
  // Chaotic / Meme-Worthy / Unhinged Brands (these go viral fastest—savage replies, absurdity, roasts, trends)
  chaotic_fun_brands: [
    "@duolingo",           // Language app with chaotic skits, owl memes, viral challenges
    "@nutterbutter",       // Surreal ads, bizarre humor videos
    "@scrubdaddy",         // Fun cleaning product demos, music videos, dark humor
    "@chipotle",           // Food challenges, behind-the-scenes absurdity
    "@sourpatchkids",      // Prank videos, sour/sweet content
    "@liquiddeath",        // Edgy water brand with metal music, extreme sports
    "@ryanair",            // Savage travel tips, roast compilations
    "@wendys",             // Roast battles, fast food memes
    "@dennys",             // Late-night diner stories, weird food experiments
    "@barkbox",            // Dog unboxings, pet chaos
    "@totinos",            // Gaming and pizza roll collabs
    "@glossier",           // Beauty tutorials with meme twists
    "@sweetgreen",         // Healthy food trends, salad hacks
    "@dominos",            // Pizza making fails, challenges
    "@mcdonalds",          // Menu hacks, viral item drops
    "@burgerking",         // Whopper challenges, roast videos
    "@popeyes",            // Chicken sandwich wars content
    "@tacobell",           // Late-night menu items, weird combos
    "@oreo",               // Cookie recipe hacks, collabs
    "@oldspice",           // Absurd commercials, manliness skits
    "@moonpie",            // Snack philosophy, random humor
    "@steakumm",           // Existential cooking tips
    "@gushers",            // Candy explosion challenges
    "@poprocks",           // Fun science experiments with candy
    "@drpepper",           // Flavor taste tests, quirky ads
    "@memezar",            // Meme compilations
    "@epicfunnypage",      // Funny video compilations
    "@fuckjerry",          // Meme and roast videos
    "@sarcasmonly",        // Sarcastic commentary
    "@daquan",             // Relatable meme skits
    "@thefatjewish",       // Celebrity parody videos
  ],
  // Major Consumer / Food / Everyday Brands (huge reach, product drops/launches = meme fuel)
  major_consumer_brands: [
    "@nike",               // Sneaker unboxings, athlete stories
    "@cocacola",           // Holiday ads, viral campaigns
    "@starbucks",          // Drink recipes, seasonal drops
    "@mcdonalds",
    "@burgerking",
    "@kfc",                // Fried chicken challenges
    "@subway",             // Sandwich making tutorials
    "@pepsi",              // Celebrity collabs, challenges
    "@redbull",            // Extreme sports highlights
    "@monsterenergy",      // Gaming and energy drink promos
    "@netflix",            // Show trailers, behind-the-scenes
    "@disney",             // Movie clips, park tours
    "@spotify",            // Playlist curations, artist interviews
    "@apple",              // Product launches, tutorials
    "@samsung",            // Tech reviews, unboxings
    "@playstation",        // Game trailers, playthroughs
    "@xbox",               // Gaming events, updates
    "@adidas",             // Sneaker drops, sports content
    "@amazon",             // Product reviews, Prime deals
    "@google",             // Tech innovations, how-tos
    "@microsoft",          // Software tutorials, gaming
    "@ubereats",           // Food delivery stories
    "@doritos",            // Flavor challenges
    "@pringles",           // Stacking games, ads
    "@gopro",              // Adventure footage
    "@lego",               // Build tutorials
    "@dove",               // Self-care campaigns
    "@gymshark",           // Workout routines
    "@canva",              // Design tutorials
    "@benandjerrys",       // Ice cream recipes, social issues
    "@hellofresh",         // Meal kit cooking demos
  ],
  // Luxury / Fashion Brands (hype drops, flex posts, absurd fashion = instant memes)
  luxury_fashion_brands: [
    "@CHANEL",             // Fashion shows, behind-the-scenes
    "@LouisVuitton",       // Luxury unboxings, travel
    "@gucci",              // Creative campaigns, art collabs
    "@Dior",               // Beauty and fashion tutorials
    "@Prada",              // Runway highlights
    "@BALENCIAGA",         // Weird fashion experiments
    "@Versace",            // Celebrity features
    "@hermes",             // Luxury craftsmanship
    "@miumiu",             // Trendy fashion tips
    "@LOEWE",              // Artistic videos
    "@jacquemus",          // Minimalist fashion
    "@SKIMS",              // Bodywear launches
    "@FashionNova",        // Haul videos
    "@ZARA",               // Lookbook inspirations
    "@hm",                 // Affordable fashion hauls
    "@Supreme",            // Streetwear drops
    "@Burberry",           // Classic fashion stories
    "@MarcJacobs",         // Playful designs
    "@Valentino",          // Red carpet moments
    "@BalmainParis",       // Bold fashion
    "@fenty",              // Beauty tutorials
    "@Aritzia",            // Styling tips
  ],
  // Other High-Impact / Viral-Prone Categories
  others_high_viral: [
    // Science / Space / Tech (mind-blowing visuals, Elon chaos)
    "@NASA",               // Space missions, discoveries
    "@SpaceX",             // Rocket launches, fails
    "@Tesla",              // Car updates, autonomous tech
    "@neildegrassetyson",  // Science explanations

    // Nature / World / Exploration (stunning + weird = shareable)
    "@NatGeo",             // Wildlife documentaries
    "@natgeotravel",       // Travel adventures
    "@natgeowild",         // Animal stories
    "@BBCEarth",           // Nature series
    "@Discovery",          // Exploration docs

    // Government / Official / Global (statements, announcements = controversy/memes)
    "@WhiteHouse",         // Press briefings
    "@POTUS",              // Presidential addresses
    "@FLOTUS",             // First Lady initiatives
    "@unitednations",      // Global issues
    "@WHO",                // Health updates
    "@NASA",               // Overlap
    "@FBI",                // Public service announcements
    "@CIA",                // Historical content

    // Misc Viral Machines (MrBeast empire, random high-engagement)
    "@YouTube",            // Meta content, creator tips
    "@TaylorSwift",        // Music videos, behind-the-scenes
    "@MrBeast"             // Challenges, giveaways
  ],
  // Government Officials / Politicians / World Leaders (statements = chaos)
  politicians_gov: [
    "@narendramodi",       // Speeches, initiatives
    "@BarackObamafoundation", // But main is @barackobama if active
    "@donaldtrump",        // Campaign videos
    "@AOC",                // Policy explanations
    "@KamalaHarris",       // Addresses, interviews
    "@WhiteHouse",
    "@POTUS",
    "@FLOTUS",
    "@unitednations",
    "@WHO",
    "@EmmanuelMacron",     // French politics
    "@nayibbukele",        // El Salvador updates
    "@LulaOficial",        // Brazilian politics
    "@petrogustavo",       // Colombian issues
    "@LassoGuillermo",     // Ecuadorian content
    "@NicolasMaduro",      // Venezuelan speeches
    "@gabrielboric",       // Chilean reforms
    "@GiorgiaMeloni",      // Italian politics
    "@MichealMartinTD",    // Irish government
    "@10DowningStreet",    // UK PM updates
    "@gouvernementFR",     // French gov
    "@BrunoLeMaire",       // Economy talks
    "@LawrenceWongST",     // Singapore finance
    "@zarahsultana",       // UK MP activism
  ],
  // Crypto / Solana / Memecoin Related (direct hype machines)
  crypto_memecoin: [
    "@pumpdotfun",         // Memecoin launches, tutorials
    "@solana",             // Blockchain updates
    "@BonkInu",            // Meme coin promos
    "@Binance",            // Exchange news
    "@Coinbase",           // Crypto education
    "@Bitcoin",            // BTC discussions
    "@ethereum",           // ETH developments
    "@cryptocom",          // Trading tips
    "@timdraper",          // Investor insights (close to timothyronaldd)
    "@VitalikButerin",     // ETH founder talks
    "@rogerver",           // BCH advocacy
    "@cdixon",             // Venture crypto
    "@balajis",            // Future tech predictions
    "@cryptocurrency",     // General news
    "@BitcoinMagazine",    // BTC events
    "@CryptoMasun",        // Meme coin trends
    "@coleworld",          // Crypto discussions (close to colewherld)
    "@FaroDBB",            // Buying guides
    "@DegenAds",           // Ads and trends
  ],

  finance_adjacent: [
    // Financial News and Publications
    "@BloombergTelevision", // Market updates, interviews
    "@CNBC",                // Business news, stock analysis
    "@YahooFinance",        // Live market coverage, expert talks
    "@FoxBusiness",         // Economic news, debates
    "@wsj",                 // In-depth reporting, documentaries
    "@financialtimes",      // Global finance insights
    "@Reuters",             // Breaking news, analysis
    "@BusinessInsider",     // Trends, explainer videos
    // Financial Institutions
    "@BlackRock",           // Investment strategies, ETFs
    "@GoldmanSachs",        // Market insights, career advice
    "@jpmorgan",            // Economic research, banking tips
    "@MorganStanley",       // Wealth management, reports
    "@Fidelity",            // Investing education, tools
    "@Vanguard_Group",      // Index funds, retirement planning
    "@CharlesSchwab",       // Trading tutorials, market commentary
    "@Citi",                // Global banking, economic updates
    // Stock Exchanges and Related
    "@nyse",                // Market openings, company spotlights
    "@NASDAQ",              // Tech stock news, listings
    // Educational/Finance Platforms
    "@Investopedia",        // Tutorials, definitions
    "@themotleyfoolofficial", // Stock picks, advice
    "@MorningstarInc",      // Fund ratings, analysis
    "@SeekingAlphaVideos",  // Investor discussions, earnings calls
  ],


};

const TwitterHandles = {
  // Chaotic / Meme-Worthy / Unhinged Brands (viral roasts, absurdity, trends that spark memes and potential memecoins)
  chaotic_fun_brands: [
    "@duolingo",           // Chaotic language app with viral threats and roasts
    "@nutterbutter",       // Surreal, horror-humor posts
    "@scrubdaddy",         // Dark humor and music drops
    "@chipotle",           // Absurd challenges and Gen Z vibes
    "@sourpatchkids",      // Chaotic sweet/sour energy
    "@liquiddeath",        // Edgy water brand with death metal memes
    "@ryanair",            // Savage airline roasts and hostile replies
    "@wendys",             // Legendary roast battles
    "@dennysdiner",        // Late-night absurdity
    "@barkbox",            // Dog chaos and memes
    "@totinos",            // Ironic gamer memes
    "@glossier",           // Beauty with meme twists
    "@sweetgreen",         // Trendy food absurdity
    "@dominos",            // Pizza collabs and memes
    "@mcdonalds",          // Viral drops and occasional chaos
    "@burgerking",         // Roast wars with competitors
    "@popeyes",            // Chicken sandwich drama
    "@tacobell",           // Weird late-night food memes
    "@oreo",               // Playful collaborations
    "@oldspice",           // Absurd humor
    "@moonpie",            // Philosophical snack absurdity
    "@steakumm",           // Existential meat memes
    "@gushers",            // Nostalgic candy chaos
    "@poprocks",           // Explosive fun
    "@drpepper",           // Quirky flavor memes
    "@memezar",            // Meme aggregator
    "@epicfunnypage",      // Viral funny content
    "@fuckjerry",          // Celebrity roasts
    "@sarcasm_only",       // Sarcastic takes
    "@daquan",             // Relatable absurdity
    "@thefatjewish",       // Humorous chaos
  ],
  // Major Consumer / Food / Everyday Brands (huge reach, drops/launches spark viral memes and coins)
  major_consumer_brands: [
    "@nike",               // Sneaker drops and athlete hype
    "@cocacola",           // Iconic campaigns
    "@starbucks",          // Seasonal viral drops
    "@mcdonalds",          // Viral drops and occasional chaos
    "@burgerking",         // Roast wars with competitors
    "@kfc",                // Chicken sandwich drama
    "@subway",             // Sandwich trends
    "@pepsi",              // Beverage brand virality
    "@redbull",            // Extreme sports virality
    "@monsterenergy",      // Energy drink hype
    "@netflix",            // Show memes and drops
    "@disney",             // Entertainment virality
    "@spotify",            // Music trends and drops
    "@apple",              // Tech innovations and launches
    "@samsung",            // Electronics and mobile
    "@playstation",        // Gaming console updates
    "@xbox",               // Gaming console updates
    "@adidas",             // Streetwear and endorsements
    "@amazon",             // Deals and launches
    "@google",             // Tech innovations
    "@microsoft",          // Gaming and updates
    "@ubereats",           // Delivery memes
    "@doritos",            // Challenges
    "@pringles",           // Fun stacking
    "@gopro",              // Adventure virals
    "@lego",               // Creative builds
    "@dove",               // Campaigns
    "@gymshark",           // Fitness hype
    "@canva",              // Design trends
    "@benandjerrys",       // Flavors with commentary
    "@hellofresh",         // Meal kit trends
  ],
  // Luxury / Fashion Brands (hype drops, flex culture, absurd fashion memes)
  luxury_fashion_brands: [
    "@chanelofficial",
    "@louisvuitton",
    "@gucci",
    "@dior",
    "@prada",
    "@balenciaga",         // Weird fashion meme king
    "@versace",
    "@hermes",
    "@miumiu",
    "@loewe",
    "@jacquemus",
    "@skims",              // Kim K's viral empire
    "@fashionnova",
    "@zara",
    "@hm",
    "@supreme",            // Streetwear FOMO
    "@burberry",
    "@marcjacobs",
    "@valentino",
    "@balmain",
    "@fentybeauty",
    "@aritzia",
  ],

  // Other High-Impact / Viral-Prone Categories (science/space/tech, nature, government, misc viral)
  others_high_viral: [
    // Science / Space / Tech (mind-blowing visuals, launches, Elon chaos)
    "@nasa",               // Space discoveries, alien memes
    "@spacex",             // Rocket launches/fails
    "@tesla",              // EV innovations, cross-virality
    "@neildegrassetyson",  // Science explanations
    // Nature / World / Exploration (stunning visuals, weird animals)
    "@natgeo",             // Animal fails, disasters
    "@natgeotravel",
    "@natgeoanimals",
    "@bbcearth",
    "@discovery",
    // Government / Official / Global (statements, controversies)
    "@whitehouse",
    "@potus",
    "@flotus",
    "@un",
    "@who",
    "@fbi",
    "@cia",                // Conspiracy bait
    // Misc Viral Machines (giveaways, high-engagement)
    "@x",                 // Meta irony (formerly Twitter)
    "@taylorswift13",      // Drama drops
    "@mrbeast",            // Massive giveaways
    "@elonmusk",           // Ultimate viral king
    "@catturd2",           // Conservative viral memes
    "@kalesalad",          // Viral videos and trends
  ],
  // Government Officials / Politicians / World Leaders (statements spark chaos/memes)
  politicians_gov: [
    "@narendramodi",       // Most-followed active leader
    "@barackobama",
    "@realdonaldtrump",
    "@aoc",                // Viral progressive takes
    "@kamalaharris",
    "@whitehouse",
    "@potus",
    "@flotus",
    "@un",
    "@who",
    "@emmanuelmacron",
    "@nayibbukele",
    "@luizlula",
    "@gustavopetro",
    "@guillermolasso",
    "@nicolasmaduro",
    "@gabrielboric",
    "@giorgiameloni",
    "@michealmartintd",
    "@10downingstreet",
    "@gouvernementfr",
    "@brunolemaire",
    "@lawrencewongst",
    "@zarahsultanamp",
    "@joeBiden",
    "@amitshah",
    "@hillaryclinton",
  ],
  // Crypto / Solana / Memecoin Related (hype machines for coins)
  crypto_memecoin: [
    "@pumpdotfun",
    "@solana",
    "@official_bonk_inu",
    "@binance",
    "@coinbase",
    "@bitcoin",
    "@ethereum",
    "@cryptocom",
    "@timothyronaldd",
    "@vitalikbuterin",
    "@rogerkver",
    "@cdixon",
    "@balajis",
    "@cryptocurrency",
    "@bitcoinmagazine",
    "@cryptomasun",
    "@colewherld",
    "@farodbb",
    "@degenads",
    "@blknoiz06",          // Ansem, MOG/WIF caller
    "@larvontrier",        // KeyCat early calls
    "@artschoolreject",    // PopCat
    "@poe_eth",            // PEPE, WIF
    "@thesexoffender",     // PopCat
  ],
  // Finance Accounts (market insights, economic news, potential finance-meme crossovers)
  finance_accounts: [
    "@cnbc",
    "@wsj",
    "@bloomberg",
    "@awealthofcs",        // Ben Carlson, evidence-based investing
    "@morganhousel",       // Psychology of money
    "@lizannsonders",      // Schwab strategist
    "@paulkrugman",        // Economist takes
    "@elerianm",           // Allianz advisor
    "@aswathdamodaran",    // Valuation expert
    "@michaelbatnick",     // Market history
    "@andrewlokenauth",    // Finance education
    "@brianferoldi",       // Stock analysis
    "@benzinga",           // Real-time news
    "@stocktwits",         // Trader community
    "@breakoutstocks",     // Technical alerts
    "@bespokeinvest",      // Data insights
    "@wsjmarkets",         // Market coverage
    "@deltaone",           // Walter Bloomberg, breaking news
    "@theeconomist",       // Global finance
    "@onlycfo",            // CFO perspectives
  ],
  // Right-Leaning Libertarian Accounts (edgy takes, liberty memes, anti-establishment virality)
  libertarian_accounts: [
    "@libertarianism",     // Core libertarian values
    "@solibertarian",      // Libertarian realist
    "@justinamash",        // Libertarian-republican
    "@lpnational",         // Libertarian Party
    "@trhlofficial",       // Redheaded libertarian
    "@ronpaul",            // Liberty icon
    "@randpaul",           // Senator, libertarian views
    "@mises",              // Mises Institute
    "@catoinstitute",      // Policy think tank
    "@reason",             // Libertarian magazine
    "@joerogan",           // Libertarian-leaning discussions
    "@glennbeck",          // Conservative libertarian
    "@peterthiel",         // Tech libertarian
    "@balajis",            // Network state visionary
    "@davidboaz",          // Cato VP
    "@tomgpalmer",         // Atlas Network
    "@lpnh",               // NH Libertarian Party (active)
    "@joejong",            // Tech liberty advocate
    "@nickgillespie",      // Reason editor
    "@kmele",              // Fifth Column podcast
  ],
  // Highly Viral Accounts (massive reach, trendsetters, meme/coin catalysts)
  highly_viral_accounts: [
    "@elonmusk",           // Tech, memes, market moves
    "@x",                 // Meta-level irony
    "@sama",               // Sam Altman, AI visionary
    "@mrbeast",            // Giveaways, challenges
    "@catturd2",           // Conservative virals
    "@kalesalad",          // Videos, memes, news
    "@respectfulmemes",    // Wholesome memes
    "@worldandscience",    // Science virals
    "@popsci",             // Pop science
    "@briantracy",         // Motivational
    "@garyvee",            // Hustle culture
    "@timferriss",         // Productivity hacks
    "@naval",              // Wisdom threads
    "@lexfridman",         // Deep discussions
    "@andrewng",           // AI insights
    "@joepompliano",       // Sports/business cross
    "@codie_sanchez",      // Business acquisition
    "@sweatystartup",      // Real estate trolls
    "@thecoolestcool",     // Marketing tips
    "@nicheladysite",      // SEO niche sites
    "@social_savannah",    // TikTok ads
    "@therahulissar",      // FB ads
  ],
};


