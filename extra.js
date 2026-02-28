const FIVE_MINUTES = 5 * 60 * 1000;
const FIFTEEN_MINUTES = 15 * 60 * 1000;
const ONE_HOUR = 60 * 60 * 1000;
const SIX_HOURS = 6 * 60 * 60 * 1000;
const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

const TIKTOK_CACHE_DURATION = ONE_HOUR; // TikTok data is more volatile, so we cache for 1 hour
const YOUTUBE_CACHE_DURATION = SIX_HOURS; // YouTube data can also change frequently, so we cache for 1 hour
const TWITTER_CACHE_DURATION = ONE_HOUR; // Twitter data can change rapidly, so we cache for 1 hour
const INSTAGRAM_CACHE_DURATION = ONE_HOUR; // Instagram data can also change frequently, so we cache for 1 hour

const TIKTOK_MAX_PASSED_TIME = FIFTEEN_MINUTES;
const YOUTUBE_MAX_PASSED_TIME = SIX_HOURS;
const TWITTER_MAX_PASSED_TIME = FIVE_MINUTES;
const INSTAGRAM_MAX_PASSED_TIME = FIFTEEN_MINUTES;

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

  chaotic_fun_brands: [
    "@burgerking",
    "@chipotle",
    "@dominos",
    "@duolingo",
    "@nutterbutter",
    "@oreo",
    "@popeyes",
    "@ryanair",
    "@scrubdaddy",
    "@tacobell",
    "@totinos",
    "@wendys",
  ],

  major_consumer_brands: [
    "@adidas",
    "@amazon",
    "@amd",
    "@anthropicai",
    "@apple",
    "@canva",
    "@cocacola",
    "@disney",
    "@doritos",
    "@gemini",
    "@google",
    "@gymshark",
    "@hellofresh",
    "@hp",
    "@hulu",
    "@intel",
    "@ikea",
    "@kfc",
    "@lego",
    "@mcdonalds",
    "@microsoft",
    "@nike",
    "@netflix",
    "@nvidia",
    "@openai",
    "@pepsi",
    "@playstation",
    "@redbull",
    "@samsung",
    "@spotify",
    "@spacex",
    "@subway",
    "@tesla",
    "@ubereats",
    "@xbox",
  ],

  finance_accounts: [
    "@a16z",
    "@bankofamerica",
    "@blackrock",
    "@charles_schwab",
    "@citigroup",
    "@fidelity",
    "@goldmansachs",
    "@jpmorgan",
    "@morganstanley",
    "@paypal",
    "@schwab",
    "@sequoia",
    "@vanguard_group",
    "@wellsfargo",
  ],

  others_high_viral: [
    "@bbcearth",
    "@billgates",
    "@briantracy",
    "@catturd2",
    "@cia",
    "@discovery",
    "@elonmusk",
    "@fbi",
    "@garyvee",
    "@jeffbezos",
    "@lexfridman",
    "@mrbeast",
    "@nasa",
    "@natgeo",
    "@natgeoanimals",
    "@natgeotravel",
    "@naval",
    "@pmarca",
    "@popsci",
    "@sama",
    "@satyanadella",
    "@sundarpichai",
    "@taylorswift13",
    "@tim_cook",
    "@un",
    "@who",
    "@worldandscience",
    "@x",
  ],

  politicians_gov: [
    "@aoc",
    "@barackobama",
    "@billclinton",
    "@borisjohnson",
    "@berniesanders",
    "@brunolemaire",
    "@donaldjtrumpjr",
    "@emmanuelmacron",
    "@flotus",
    "@gabrielboric",
    "@gavinnewsom",
    "@giorgiameloni",
    "@gouvernementfr",
    "@guillermolasso",
    "@hillaryclinton",
    "@joeBiden",
    "@kamalaharris",
    "@lawrencewongst",
    "@luizlula",
    "@michealmartintd",
    "@narendramodi",
    "@nayibbukele",
    "@nicolasmaduro",
    "@potus",
    "@realdonaldtrump",
    "@speakerpelosi",
    "@speakerjohnson",
    "@whitehouse",
  ],

  crypto_memecoin: [
    "@a1lon9",
    "@balajis",
    "@binance",
    "@bitcoin",
    "@bitcoinmagazine",
    "@blknoiz06",
    "@coinbase",
    "@coindesk",
    "@cointelegraph",
    "@cryptocom",
    "@cryptocurrency",
    "@cz_binance",
    "@ethereum",
    "@mert",
    "@official_bonk_inu",
    "@pumpdotfun",
    "@saylor",
    "@SBF_FTX",
    "@solana",
    "@timothyronaldd",
    "@toly",
    "@vitalikbuterin",
    "@worldlibertyfi"
  ],

  news_outlets: [
    "@abcnews",
    "@aljazeera",
    "@ap",
    "@axios",
    "@bbcnews",
    "@bbcworld",
    "@bleacherreport",
    "@bloomberg",
    "@breakoutstocks",
    "@business",
    "@businessinsider",
    "@buzzfeed",
    "@cbsnews",
    "@cnbc",
    "@cnn",
    "@dailymail",
    "@deltaone",
    "@dexerto",
    "@economist",
    "@espn",
    "@financialtimes",
    "@forbes",
    "@foxbusiness",
    "@fortunemagazine",
    "@foxnews",
    "@guardian",
    "@hollywoodreporter",
    "@investingcom",
    "@latimes",
    "@markets",
    "@mlb",
    "@msnbc",
    "@nba",
    "@nbcnews",
    "@newsweek",
    "@nfl",
    "@nhl",
    "@npr",
    "@nytimes",
    "@politico",
    "@reuters",
    "@rollingstone",
    "@skynews",
    "@sportscenter",
    "@stocktwits",
    "@techcrunch",
    "@theatlantic",
    "@thebabylonbee",
    "@theeconomist",
    "@thehill",
    "@theonion",
    "@thewrap",
    "@time",
    "@tradingview",
    "@usatoday",
    "@variety",
    "@verge",
    "@vice",
    "@washingtonpost",
    "@wired",
    "@wsj",
    "@wsjmarkets",
    "@yahoofinance",
    "@ynewswire",
  ],
};