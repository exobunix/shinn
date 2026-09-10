export interface MemoryItem {
  id: string;
  src: string;
  caption: string;
  date: string;
  alt: string;
  category: "moments" | "places" | "smiles" | "favorites";
  rotation?: number;
}

export interface StoryItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  message: string;
  image: string;
  icon: string;
}

export interface LoveCardItem {
  id: string;
  title: string;
  shortQuote: string;
  expandedMessage: string;
  tag: string;
  icon: string;
  image: string;
}

export interface BollywoodSongItem {
  id: string;
  title: string;
  artist: string;
  movieOrAlbum: string;
  youtubeId: string;
  cover: string;
  duration: string;
  tag: string;
}

export interface DateNightMovieItem {
  id: string;
  title: string;
  year: string;
  genre: string;
  tagline: string;
  note: string;
  emoji: string;
}

export interface HangingPhotoItem {
  id: string;
  image: string;
  word: string;
  rotation: number;
  stringLength: number; // height in px
}

export interface ShayariItem {
  id: string;
  hindi: string;
  translation: string;
  mood: string;
  photo: string;
}

export interface InteractiveHeartStep {
  text: string;
  subtext: string;
  photo: string;
  word: string;
}

export interface StarWish {
  id: string;
  x: number;
  y: number;
  size: number;
  wish: string;
  glowColor: string;
}

export interface VideoReelItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  url: string;
  poster: string;
}

export const SITE_CONFIG = {
  NAME: "Rose",
  MEGHNA_NAME: "Rose", // backwards compatibility
  HERO_HANDWRITTEN: "Hey Rose…",
  HERO_TITLE: "This little world",
  HERO_TITLE_HIGHLIGHT: "is for you, Rose. 🌹",
  HERO_SUBTITLE: "Because some people deserve more than just a message.",
  HERO_SECONDARY: "They deserve an entire little universe blooming just for them.",
  HERO_CTA: "Enter Our Little World ↓",

  // Relationship / Special Memory Counter
  DAYS_COUNT: 823,
  TIMER_HEADING: "And our story continues…",
  TIMER_SUBTITLE: "823 days of unforgettable smiles, laughter, and moments worth keeping forever with Rose.",

  // Hanging photos in hero with sweet one-word tags
  HANGING_PHOTOS: [
    {
      id: "hp-1",
      image: "/images/rose/Image-34333.jpg",
      word: "Blossom 🌹",
      rotation: -3,
      stringLength: 70,
    },
    {
      id: "hp-2",
      image: "/images/rose/Image-19816.jpg",
      word: "Radiant ✨",
      rotation: 2.5,
      stringLength: 95,
    },
    {
      id: "hp-3",
      image: "/images/rose/Image-40001.jpg",
      word: "Royal 👑",
      rotation: -2,
      stringLength: 60,
    },
    {
      id: "hp-4",
      image: "/images/rose/Image-2189.jpg",
      word: "Sweet Joy 🎄",
      rotation: 3,
      stringLength: 90,
    },
    {
      id: "hp-5",
      image: "/images/rose/Image-71773.jpg",
      word: "Magic ❤️",
      rotation: -2.5,
      stringLength: 75,
    },
  ] as HangingPhotoItem[],

  // A Little Message Section
  LOVE_MESSAGE: {
    badge: "A LITTLE MESSAGE FOR ROSE 🌹",
    heading: "Rose, this is for you.",
    body: "There are people who make ordinary moments feel like poetry. People whose name can make you smile without warning. Rose, you are that blooming fragrance in this world—filled with grace, laughter, and a warmth that makes everything feel so gentle. This tiny corner of the internet is simply a collection of feelings, memories, and little things that deserve to be remembered forever.",
    signature: "— made with all my love ❤️",
  },

  // "Our Little Story" timeline
  STORY_ITEMS: [
    {
      id: "story-1",
      title: "The Beginning",
      subtitle: "When our paths first crossed",
      date: "Chapter I",
      message: "And somehow, you became someone special. What started as simple conversations turned into the sweetest part of every single day.",
      image: "/images/rose/Image-21342.jpg",
      icon: "Sparkles",
    },
    {
      id: "story-2",
      title: "The Smiles & Laughter",
      subtitle: "Endless laughter, fairy lights & playful cheer",
      date: "Chapter II",
      message: "The little conversations that stayed longer than expected. That genuine, joyful laughter and sweet holiday spirit that makes everything feel soft and bright.",
      image: "/images/rose/Image-30998.jpg",
      icon: "Heart",
    },
    {
      id: "story-3",
      title: "Timeless Grace",
      subtitle: "Bindi, saree and captivating gazes",
      date: "Chapter III",
      message: "The moments that deserve their own little palace. Every shared story, every quiet look, every glance that needed no words at all.",
      image: "/images/rose/Image-40001.jpg",
      icon: "Camera",
    },
    {
      id: "story-4",
      title: "Today & Beyond",
      subtitle: "Blooming together, writing our sweetest chapters",
      date: "Always",
      message: "Still writing our sweetest story… and with every new sunrise, you give me a hundred more reasons to smile, Rose.",
      image: "/images/rose/Image-34333.jpg",
      icon: "Infinity",
    },
  ] as StoryItem[],

  // Memory Polaroids & Lightbox with all 37 real photos of Rose
  MEMORIES: [
    { id: "mem-1", src: "/images/rose/Image-34333.jpg", caption: "That flower in your hair & sunlit radiance 🌹", date: "Pure Blossom", alt: "Rose with flower in hair under sunlit breeze", category: "favorites", rotation: -3 },
    { id: "mem-2", src: "/images/rose/Image-19816.jpg", caption: "Butterfly grace and an unforgettable charm ✨", date: "Golden Radiance", alt: "Rose portrait highlighting butterfly tattoo and necklace", category: "favorites", rotation: 2 },
    { id: "mem-3", src: "/images/rose/Image-40001.jpg", caption: "Royal elegance in black drape and sweet bindi 👑", date: "Timeless Desi", alt: "Rose in black and gold saree looking upward dreamily", category: "favorites", rotation: -2 },
    { id: "mem-4", src: "/images/rose/Image-2189.jpg", caption: "Festive joy, Santa hat & the cutest playful pout 🎄", date: "Holiday Cheer", alt: "Rose in Santa hat with festive fairy lights", category: "smiles", rotation: 3 },
    { id: "mem-5", src: "/images/rose/Image-30998.jpg", caption: "Gentle hands weaving fairy lights with a rose 🌸", date: "Sweet Moments", alt: "Rose decorating fairy lights with red rose and ribbons", category: "moments", rotation: -2 },
    { id: "mem-6", src: "/images/rose/Image-25538.jpg", caption: "Effortlessly cool, sunny vibes & chic flair 😎", date: "Urban Chic", alt: "Rose in pink top, cargo pants, and stylish sunglasses", category: "moments", rotation: 3 },
    { id: "mem-7", src: "/images/rose/Image-21342.jpg", caption: "Denim jacket, oversized shades & coffee dates ☕", date: "Cafe Romance", alt: "Rose in denim jacket and sunglasses at a cafe", category: "places", rotation: -1 },
    { id: "mem-8", src: "/images/rose/Image-71773.jpg", caption: "Black bangles, sweet glance & a heart of gold 🖤", date: "Midnight Glow", alt: "Rose resting arm with black bangles and warm smile", category: "favorites", rotation: 2 },
    { id: "mem-9", src: "/images/rose/Image-930.jpg", caption: "Soft glow and quiet natural elegance 🌟", date: "Gentle Breeze", alt: "Rose soft candid portrait", category: "moments", rotation: -3 },
    { id: "mem-10", src: "/images/rose/Image-3289.jpg", caption: "A sweet smile that melts every worry away 🍬", date: "Sweet Candor", alt: "Rose cheerful sweet smile", category: "smiles", rotation: 2 },
    { id: "mem-11", src: "/images/rose/Image-7560.jpg", caption: "Golden hour warmth and tranquil calm ☀️", date: "Golden Hour", alt: "Rose basking in golden light", category: "places", rotation: -2 },
    { id: "mem-12", src: "/images/rose/Image-9954.jpg", caption: "Spontaneous laughter that echoes like melody 🎶", date: "Happy Heart", alt: "Rose laughing happily", category: "smiles", rotation: 3 },
    { id: "mem-13", src: "/images/rose/Image-31897.jpg", caption: "Eyes holding an entire constellation of dreams 🌌", date: "Dreamscape", alt: "Rose thoughtful deep expression", category: "moments", rotation: -1 },
    { id: "mem-14", src: "/images/rose/Image-32989.jpg", caption: "Chic and radiant in every single frame 💫", date: "Effortless", alt: "Rose stylish pose", category: "favorites", rotation: 2 },
    { id: "mem-15", src: "/images/rose/Image-34618.jpg", caption: "A glance that makes the heart skip a beat 💖", date: "Sweet Flutter", alt: "Rose tender glance", category: "favorites", rotation: -2 },
    { id: "mem-16", src: "/images/rose/Image-36777.jpg", caption: "Gentle breeze and carefree happiness 🍃", date: "Breeze & Joy", alt: "Rose outdoors feeling the breeze", category: "smiles", rotation: 1 },
    { id: "mem-17", src: "/images/rose/Image-37259.jpg", caption: "Soft whispers and sweet afternoon memories 🧸", date: "Warm Memories", alt: "Rose relaxing afternoon candid", category: "places", rotation: -3 },
    { id: "mem-18", src: "/images/rose/Image-37649.jpg", caption: "Poise, charm, and natural beauty ✨", date: "Pure Charm", alt: "Rose radiant portrait", category: "moments", rotation: 2 },
    { id: "mem-19", src: "/images/rose/Image-38685.jpg", caption: "Pure warmth that fills any room with love ☀️", date: "Sunlit Soul", alt: "Rose warm sunny smile", category: "smiles", rotation: -1 },
    { id: "mem-20", src: "/images/rose/Image-49598.jpg", caption: "A candid second frozen into timeless art 📸", date: "Keepsake", alt: "Rose candid artistic shot", category: "moments", rotation: 3 },
    { id: "mem-21", src: "/images/rose/Image-57616.jpg", caption: "Radiant in colors, glowing from within 🌺", date: "Floral Glow", alt: "Rose colorful aesthetic portrait", category: "favorites", rotation: -2 },
    { id: "mem-22", src: "/images/rose/Image-60268.jpg", caption: "Sweet simplicity that outshines everything else 🤍", date: "Serenity", alt: "Rose soft minimalist aesthetic", category: "moments", rotation: 2 },
    { id: "mem-23", src: "/images/rose/Image-61358.jpg", caption: "Playful energy and unstoppable cheerfulness 🥰", date: "Playful Mood", alt: "Rose cheerful candid pose", category: "smiles", rotation: -3 },
    { id: "mem-24", src: "/images/rose/Image-62658.jpg", caption: "A breath of fresh air and quiet comfort 🕊️", date: "Tranquil Soul", alt: "Rose peaceful candid portrait", category: "places", rotation: 1 },
    { id: "mem-25", src: "/images/rose/Image-63050.jpg", caption: "The cutest expressions that stay in mind all day 💌", date: "Adorable", alt: "Rose cute expression", category: "smiles", rotation: -2 },
    { id: "mem-26", src: "/images/rose/Image-64015.jpg", caption: "Stunning elegance in every single detail 🌹", date: "Rose Aura", alt: "Rose beautiful classic pose", category: "favorites", rotation: 2 },
    { id: "mem-27", src: "/images/rose/Image-68479.jpg", caption: "Peaceful serenity under the open sky 🌤️", date: "Open Skies", alt: "Rose outdoors in peaceful backdrop", category: "places", rotation: -1 },
    { id: "mem-28", src: "/images/rose/Image-71939.jpg", caption: "Soulful gaze that speaks straight to the heart 📖", date: "Poetic Eyes", alt: "Rose expressive soulful eyes", category: "moments", rotation: 3 },
    { id: "mem-29", src: "/images/rose/Image-72884.jpg", caption: "Midnight glamour and breathtaking aura 🖤", date: "Starry Night", alt: "Rose glamorous evening look", category: "favorites", rotation: -2 },
    { id: "mem-30", src: "/images/rose/Image-77388.jpg", caption: "Carefree sunny afternoon happiness 🌻", date: "Sunshine Day", alt: "Rose bright sunny photo", category: "places", rotation: 1 },
    { id: "mem-31", src: "/images/rose/Image-82378.jpg", caption: "Sweetest presence that makes the world softer ☁️", date: "Soft Hug", alt: "Rose sweet gentle smile", category: "smiles", rotation: -3 },
    { id: "mem-32", src: "/images/rose/Image-82880.jpg", caption: "Endless charm and gentle confidence 👑", date: "Queen Energy", alt: "Rose confident lovely portrait", category: "favorites", rotation: 2 },
    { id: "mem-33", src: "/images/rose/Image-85781.jpg", caption: "A laugh that turns any ordinary day into magic ✨", date: "Magic Moment", alt: "Rose spontaneous laugh", category: "smiles", rotation: -1 },
    { id: "mem-34", src: "/images/rose/Image-86595.jpg", caption: "Quiet evening reflection and peaceful thoughts 🌙", date: "Twilight", alt: "Rose calm evening reflection", category: "places", rotation: 2 },
    { id: "mem-35", src: "/images/rose/Image-93833.jpg", caption: "Graceful gestures and timeless beauty 🕊️", date: "Timeless Charm", alt: "Rose graceful candid", category: "moments", rotation: -2 },
    { id: "mem-36", src: "/images/rose/Image-96977.jpg", caption: "Playful sparkle that lights up every room 💫", date: "Sparkle", alt: "Rose playful spark in eyes", category: "smiles", rotation: 1 },
    { id: "mem-37", src: "/images/rose/Image-98914.jpg", caption: "Always, simply, and beautifully Rose ❤️", date: "Forever Yours", alt: "Rose closing romantic portrait", category: "favorites", rotation: -2 },
  ] as MemoryItem[],

  // "Things I Love About You" cards
  LOVE_CARDS: [
    {
      id: "card-1",
      title: "Your Blooming Smile",
      shortQuote: "Like a fresh rose opening in the morning sun.",
      expandedMessage: "Your smile has this effortless warmth that lights up everything. Just like your name, you bring the freshness and vibrant beauty of a blooming rose into every moment we share.",
      tag: "Pure Sunshine 🌹",
      icon: "Smile",
      image: "/images/rose/Image-34333.jpg",
    },
    {
      id: "card-2",
      title: "Your Soulful Eyes",
      shortQuote: "They hold a depth that words could never capture.",
      expandedMessage: "Whenever you look up dreamily with that little bindi on your forehead, there is this tender magic that leaves me spellbound. Your eyes tell a story of kindness, dreams, and quiet warmth.",
      tag: "Endless Depth ✨",
      icon: "Eye",
      image: "/images/rose/Image-40001.jpg",
    },
    {
      id: "card-3",
      title: "Your Butterfly Spirit",
      shortQuote: "Gentle, free, graceful, and always full of life.",
      expandedMessage: "That delicate butterfly on your neck is more than just art—it mirrors your spirit. You carry yourself with such effortless grace, freedom, and elegance wherever you go.",
      tag: "Graceful Butterfly 🦋",
      icon: "Sparkles",
      image: "/images/rose/Image-19816.jpg",
    },
    {
      id: "card-4",
      title: "Your Playful Holiday Joy",
      shortQuote: "Fairy lights, Santa hats, and sweetest laughs.",
      expandedMessage: "Watching you decorate fairy lights, giggle in festive Santa hats, and make cute playful pouts is the purest joy. You turn simple holidays into magical lifelong memories.",
      tag: "Holiday Cheer 🎄",
      icon: "Music",
      image: "/images/rose/Image-2189.jpg",
    },
    {
      id: "card-5",
      title: "Your Effortless Style",
      shortQuote: "Chic shades, cozy jackets, and timeless flair.",
      expandedMessage: "Whether you are rocking oversized sunglasses and a casual jacket or traditional black sarees with bangles, you carry every single look with breathtaking charisma.",
      tag: "Trendsetter 👑",
      icon: "Sparkle",
      image: "/images/rose/Image-25538.jpg",
    },
    {
      id: "card-6",
      title: "Simply Rose",
      shortQuote: "No explanation needed. Just you, beautifully you. ❤️",
      expandedMessage: "You don't have to try to be extraordinary. Just being Rose—with your genuine heart, sweet laughter, warmth, and beautiful soul—is more than enough. You are irreplaceable.",
      tag: "Priceless ❤️",
      icon: "Heart",
      image: "/images/rose/Image-71773.jpg",
    },
  ] as LoveCardItem[],

  // Interactive Tap The Heart with revealed photos of Rose
  INTERACTIVE_HEART: {
    heading: "Tap the heart ❤️",
    subheading: "Every tap reveals a special photo & secret message for Rose!",
    steps: [
      {
        text: "Hey Rose 🌹",
        subtext: "You clicked it! Tap again to see the next sweet surprise unfold...",
        photo: "/images/rose/Image-34333.jpg",
        word: "Blossom!",
      },
      {
        text: "That Playful Cutie 🎄",
        subtext: "Your laughter and holiday sparkle light up my entire world.",
        photo: "/images/rose/Image-2189.jpg",
        word: "Sweet Joy!",
      },
      {
        text: "Royal Desi Grace 👑",
        subtext: "Effortlessly elegant, breathtaking in black saree and that sweet bindi.",
        photo: "/images/rose/Image-40001.jpg",
        word: "Timeless!",
      },
      {
        text: "Butterfly Radiance ✨",
        subtext: "You are truly, deeply special. Just in case nobody reminded you today.",
        photo: "/images/rose/Image-19816.jpg",
        word: "Magic!",
      },
      {
        text: "You Have My Whole Heart! 💖",
        subtext: "Thank you for being Rose and making this world so much sweeter.",
        photo: "/images/rose/Image-71773.jpg",
        word: "Forever ❤️",
      },
    ] as InteractiveHeartStep[],
  },

  // Dedicated Shayari Section for Rose (Hindi & English)
  SHAYARI_SECTION: {
    badge: "दिल की कलम से 📜",
    title: "Shayari for Rose",
    subtitle: "चंद अल्फ़ाज़ जो सिर्फ तुम्हारी नज़ाकत, मुस्कान और सादगी के नाम हैं।",
    shayaris: [
      {
        id: "sh-1",
        hindi: "गुलाब तो बहुत देखे हैं इस गुलशन में हमने,\nमगर तुझ जैसी नज़ाकत किसी पंखुड़ी में कहाँ...\nतेरी एक मुस्कुराहट पे बिखर जाते हैं सारे ग़म,\nरोज़, तुझसे खूबसूरत इस जहाँ में कोई महक कहाँ।",
        translation: "I have seen countless roses in this world, but none carries your delicate grace. At one smile of yours, all sorrows fade away... Rose, nothing in this world blooms as beautifully as you.",
        mood: "गुलाब की नज़ाकत (Rose Fragrance)",
        photo: "/images/rose/Image-34333.jpg",
      },
      {
        id: "sh-2",
        hindi: "जैसे तितली को भाती है गुलाब की हर एक खुशबू,\nवैसे ही हर धड़कन में बसी है सिर्फ तेरी जुस्तजू...\nरोज़, तू वो ख़ूबसूरत दुआ है जो कबूल हुई,\nअब जहाँ भी देखूँ, नज़र आता है सिर्फ तू ही तू।",
        translation: "Just as a butterfly longs for the sweet fragrance of a rose, every heartbeat longs for you. Rose, you are the most cherished blessing that came true.",
        mood: "तितली और गुलाब (Butterfly & Rose)",
        photo: "/images/rose/Image-19816.jpg",
      },
      {
        id: "sh-3",
        hindi: "काले लिबास में वो सादगी, वो माथे की छोटी सी बिंदी,\nतेरी हर अदा पे कुर्बान है ये मेरी ज़िन्दगी...\nना कोई तमन्ना, ना कोई और ख्वाहिश बची,\nबस तेरी हँसी ही है रोज़, मेरे हर दिन की बंदगी।",
        translation: "That effortless grace in black drape, that little bindi upon your brow—every sweet detail of yours captivates my soul. Your laughter, Rose, is my daily prayer.",
        mood: "सादगी और नूर (Elegance & Grace)",
        photo: "/images/rose/Image-40001.jpg",
      },
      {
        id: "sh-4",
        hindi: "रोशनियों के बीच जब तू खिलखिलाती है,\nज़िन्दगी खुद ब खुद मुस्कुराती है...\nतेरी मासूम शरारतें, वो सेंटा हैट की मस्ती,\nरोज़, तेरी ये खुशियाँ ही तो दिल को भाती हैं।",
        translation: "Amidst glowing fairy lights, when you break into sweet laughter, life itself smiles. Your playful festive cheer and innocent joy make my heart dance.",
        mood: "मासूम मुस्कान (Joyful Festive Cheer)",
        photo: "/images/rose/Image-2189.jpg",
      },
      {
        id: "sh-5",
        hindi: "हवाओं में जैसे कोई खुशबू घुल जाती है,\nजब भी लबों पे तेरे नाम की बात आती है...\nएक रोज़ ही तो है जो इस दिल का सुकून है,\nतुझे सोच कर ही रूह को राहत मिल जाती है।",
        translation: "Like sweet fragrance blending into a gentle breeze, whenever your name is whispered, quiet peace fills my heart. You are my serene calm, Rose.",
        mood: "दिल का सुकून (Peace & Serenity)",
        photo: "/images/rose/Image-30998.jpg",
      },
      {
        id: "sh-6",
        hindi: "काँटों की इस दुनिया में तू वो महकता हुआ गुलाब है,\nजिसे खुदा ने बड़ी फुर्सत से तराशा वो ख़्वाब है...\nहाथ थाम के तेरा चलना है उम्र भर,\nरोज़, तेरे साथ हर एक पल बेहिसाब है।",
        translation: "In this rushed world, you are the most fragrant blooming rose, a dream sculpted with love. Walking hand in hand with you forever is my greatest blessing.",
        mood: "हमेशा का साथ (Forever With Rose)",
        photo: "/images/rose/Image-71773.jpg",
      },
    ] as ShayariItem[],
  },

  // "If I could give you anything..."
  SUNSET_WISHES: [
    "I'd give you all the blooming gardens that smell like fresh rain.",
    "All the sunsets that paint the sky in rose-gold and soft lavender.",
    "All the laughs until your cheeks ache and eyes crinkle.",
    "All the cozy coffee dates with warm hugs and endless conversations.",
    "All the roadtrips under starry skies with our favorite songs playing loud.",
    "And every reason for Rose to smile, every single day.",
  ],

  // Split section
  SPLIT_SECTION: {
    heading: "Rose, you make ordinary moments feel like poetry.",
    body: "Maybe that's what makes someone truly special—not the grand, noisy moments, but the quiet way they make the smallest seconds feel worth remembering forever.",
    quote: "For Rose, always & forever. 🌹",
    image: "/images/rose/Image-34333.jpg",
  },

  // Romantic Bollywood & Melodic Playlist (with updated movies!)
  BOLLYWOOD_SONGS: [
    {
      id: "b-song-1",
      title: "Subhanallah",
      artist: "Sreerama Chandra & Shilpa Rao",
      movieOrAlbum: "Yeh Jawaani Hai Deewani",
      youtubeId: "vB-W3uB7Y7o",
      cover: "/images/rose/Image-34333.jpg",
      duration: "4:09",
      tag: "Pure Romance",
    },
    {
      id: "b-song-2",
      title: "Tum Se Hi",
      artist: "Mohit Chauhan & Pritam",
      movieOrAlbum: "Jab We Met",
      youtubeId: "cbTKa_7a_G0",
      cover: "/images/rose/Image-40001.jpg",
      duration: "5:21",
      tag: "Soulful Classic",
    },
    {
      id: "b-song-3",
      title: "Tum Hi Ho",
      artist: "Arijit Singh & Mithoon",
      movieOrAlbum: "Aashiqui 2",
      youtubeId: "IJq0yyWug1k",
      cover: "/images/rose/Image-71773.jpg",
      duration: "4:22",
      tag: "Deep Emotion",
    },
    {
      id: "b-song-4",
      title: "Inthandham",
      artist: "SPB Charan & Vishal Chandrashekhar",
      movieOrAlbum: "Sita Ramam",
      youtubeId: "V_9b5wKzUeU",
      cover: "/images/rose/Image-19816.jpg",
      duration: "3:40",
      tag: "Vintage Melody",
    },
    {
      id: "b-song-5",
      title: "Raataan Lambiyan",
      artist: "Jubin Nautiyal & Asees Kaur",
      movieOrAlbum: "Shershaah",
      youtubeId: "gvyUuxdRdR4",
      cover: "/images/rose/Image-2189.jpg",
      duration: "3:50",
      tag: "Gentle Night",
    },
    {
      id: "b-song-6",
      title: "Pehla Nasha",
      artist: "Udit Narayan & Sadhana Sargam",
      movieOrAlbum: "Jo Jeeta Wohi Sikandar",
      youtubeId: "q6hO1m_W55k",
      cover: "/images/rose/Image-25538.jpg",
      duration: "4:51",
      tag: "First Sweet Feeling",
    },
  ] as BollywoodSongItem[],

  // Cozy Date-Night Cinema & Romantic Movie Watchlist for Rose
  DATE_NIGHT_MOVIES: [
    {
      id: "m-1",
      title: "Yeh Jawaani Hai Deewani",
      year: "2013",
      genre: "Romantic Drama",
      tagline: "Wanderlust, deep talks, and realizing home is a person.",
      note: "For the spontaneous adventures, mountain sunsets, and sweet moments that make you smile.",
      emoji: "🏔️",
    },
    {
      id: "m-2",
      title: "Jab We Met",
      year: "2007",
      genre: "Romantic Comedy",
      tagline: "Where cheerful chaos meets pure, unfiltered love.",
      note: "Because your playful spirit and infectious laughter remind me of the best movie romance ever.",
      emoji: "🚂",
    },
    {
      id: "m-3",
      title: "Titanic",
      year: "1997",
      genre: "Epic Romance",
      tagline: "Jack & Rose — our namesakes with our own sweet forever.",
      note: "The most legendary love story in cinema history, named after the loveliest Rose. 🌹",
      emoji: "🚢",
    },
    {
      id: "m-4",
      title: "Sita Ramam",
      year: "2022",
      genre: "Classic Love Story",
      tagline: "Handwritten letters, timeless devotion, and eternal vows.",
      note: "For love written with patience, elegance, and pure heart.",
      emoji: "💌",
    },
    {
      id: "m-5",
      title: "About Time",
      year: "2013",
      genre: "Heartwarming Romance",
      tagline: "Living every ordinary day with you as if it were the greatest gift.",
      note: "Because every second spent by your side is worth experiencing again and again.",
      emoji: "⏳",
    },
    {
      id: "m-6",
      title: "Barfi!",
      year: "2012",
      genre: "Poetic Romance",
      tagline: "When words fall silent, love speaks through smiles.",
      note: "Pure, tender, and sweetest understanding that needs no spoken language.",
      emoji: "🎈",
    },
  ] as DateNightMovieItem[],

  // Love Letter
  LETTER: {
    recipient: "To: Rose 🌹",
    salutation: "Dear Rose,",
    paragraphs: [
      "I don't know if a website can really capture what someone means to you, but I wanted to try.",
      "So I gathered a few little things here—your radiant smiles, the sparkle in your eyes, festive fairy lights, and a whole universe of feelings.",
      "Just like your name, you bring the sweetest fragrance and warmth into everything around you.",
      "Maybe no words are ever quite enough.",
      "But this little world was built with real love, just for you.",
      "And it will always remain yours. 🌹❤️",
    ],
    closing: "With all my love,",
    signature: "Forever Yours",
  },

  // Starry Night Wishes (Clickable stars in Dream section)
  STAR_WISHES: [
    { id: "star-1", x: 18, y: 22, size: 5, wish: "More golden sunsets and blooming horizons with Rose 🌅", glowColor: "#FFD1DC" },
    { id: "star-2", x: 36, y: 15, size: 6, wish: "More spontaneous laughter until our cheeks ache 😂", glowColor: "#FFE5B4" },
    { id: "star-3", x: 64, y: 20, size: 5, wish: "More cozy coffee dates on quiet rainy afternoons ☕", glowColor: "#E0BBE4" },
    { id: "star-4", x: 84, y: 32, size: 6, wish: "More peaceful mornings where time gently slows down ✨", glowColor: "#FFF1C5" },
    { id: "star-5", x: 26, y: 62, size: 5, wish: "More unscripted roadtrips with loud music and singing 🚗🎶", glowColor: "#FFC6D9" },
    { id: "star-6", x: 72, y: 70, size: 6, wish: "More reasons for Rose to smile every single day 🌹❤️", glowColor: "#FFDFBA" },
    { id: "star-7", x: 50, y: 46, size: 7, wish: "Every wish your sweet heart has ever whispered 🌟", glowColor: "#E2F0CB" },
  ] as StarWish[],

  // Video Section with all 5 video reels of Rose
  VIDEO_SECTION: {
    title: "Rose in Motion",
    quote: "Some people don't just walk into your life—they bring an entire springtime with them. ❤️",
    poster: "/images/rose/Image-34333.jpg",
    videoUrl: "/images/video/Video-40003.mp4",
    reels: [
      {
        id: "reel-1",
        title: "That Spark ✨",
        subtitle: "A glance that lights up everything",
        tag: "Sweet Charm",
        url: "/images/video/Video-40003.mp4",
        poster: "/images/rose/Image-34333.jpg",
      },
      {
        id: "reel-2",
        title: "Festive Cheer 🎄",
        subtitle: "Fairy lights & cheerful smiles",
        tag: "Holiday Joy",
        url: "/images/video/Video-17225.mp4",
        poster: "/images/rose/Image-2189.jpg",
      },
      {
        id: "reel-3",
        title: "Playful Cutie 🥰",
        subtitle: "Innocent laughter & sweet moments",
        tag: "Favorite",
        url: "/images/video/Video-57072.mp4",
        poster: "/images/rose/Image-19816.jpg",
      },
      {
        id: "reel-4",
        title: "Royal Poise 👑",
        subtitle: "Grace woven into every movement",
        tag: "Classic Elegance",
        url: "/images/video/Video-60643.mp4",
        poster: "/images/rose/Image-40001.jpg",
      },
      {
        id: "reel-5",
        title: "Golden Aura ☀️",
        subtitle: "Memories etched forever in heart",
        tag: "Precious",
        url: "/images/video/Video-90721.mp4",
        poster: "/images/rose/Image-71773.jpg",
      },
    ] as VideoReelItem[],
  },

  // Final Surprise
  FINAL_SURPRISE: {
    preText: "Wait… there's one more thing.",
    buttonText: "One last surprise for Rose ❤️",
    revealedTitle: "Rose 🌹",
    subheading: "“You deserve all the sweetest and most beautiful things life has to offer.”",
    body: "Never forget how special, cherished, and truly remarkable you are, Rose.",
    finalQuote: "For Rose,\nbecause the prettiest rose deserves an entire universe to bloom in. 🌹❤️",
    portrait: "/images/rose/Image-34333.jpg",
  },

  // Secret Message (Footer 5-click easter egg)
  SECRET_MESSAGE: {
    heading: "Psst… one more thing, Rose.",
    body: "If you're reading this, you are officially the sweetest person alive. 🌹",
    extra: "You found the secret treasure! Sending you the warmest hug in the whole world.",
  },

  FOOTER: {
    title: "Made especially for Rose 🌹",
    tagline: "A little blooming universe. A lot of love.",
  },
};
