export interface VideoModel {
    id: string;
    avatar: string;
    title: string;
    thumbnailUrl: string;
    author: string;
    videoUrl: string;
    description: string;
    category: string;
}

export const VideoSampleList: VideoModel[] = [
    {
        id: "1",
        avatar: './assets/img/c-logo.jpg',
        title: "Big Buck Bunny",
        thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        author: "Vlc Media Player",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        category: "funny"
    },
    {
        id: "2",
        avatar: './assets/img/c-logo.jpg',
        title: "The first Blender Open Movie from 2006",
        thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        author: "Blender Inc.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        description: "Song : Raja Raja Kareja Mein Samaja",
        category: "shorts"
    },
    {
        id: "3",
        avatar: './assets/img/c-logo.jpg',
        title: "Galaxy S24 Ultra: Official Introduction Film | Samsung",
        thumbnailUrl: "https://i.ytimg.com/vi/3hPoEmlBQdY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-tnjoPSXyRhmfMcp7Opatw0_Xsw",
        author: "Samsung",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Galaxy AI is finally here. Check out this epic demo of all that you can do with the first Galaxy AI phone – the new S24 Ultra.",
        category: "technology"
    },
    {
        id: "4",
        avatar: './assets/img/c-logo.jpg',
        title: "A Guided Tour of Apple Vision Pro",
        thumbnailUrl: "https://i.ytimg.com/vi/Vb0dG-2huJE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_mmW5dEXYqoQmigATDMonAid1TA",
        author: "Apple",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Apple Vision Pro is here. Experience what it's like to use Apple's first ever spatial computer.",
        category: "technology"
    },
    {
        id: "5",
        avatar: './assets/img/c-logo.jpg',
        title: 'NewJeans (뉴진스) \'Super Shy\' Official MV',
        thumbnailUrl: "https://i.ytimg.com/vi/ArmDp-zijuc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEM94IxWekQBbD4awEKbgt3q11Sw",
        author: "HYBE LABELS",
        videoUrl: "https://iv.ggtyler.dev/latest_version?id=ArmDp-zijuc&itag=22",
        description: 'NewJeans (뉴진스) \'Super Shy\' Official MV',
        category: "music"
    },
    {
        id: "6",
        avatar: './assets/img/c-logo.jpg',
        title: "JENNIE - 'You & Me (Jazz ver.)' LIVE CLIP",
        thumbnailUrl: "https://i.ytimg.com/vi/ZgLlabyz7oY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiandNbRYG-XtaV7G4jP-E1Kyxsg",
        author: "BLACKPINK",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "You & Me Jazz ver.",
        category: "music"
    },
    {
        id: "7",
        avatar: './assets/img/c-logo.jpg',
        title: 'The Rabbit R1 Is the Weirdest CES Gadget',
        thumbnailUrl: "https://i.ytimg.com/vi/dKbT0iFia0I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxWs8Z3gOschHPJDL600ysGzrZLQ",
        author: "WVFRM Podcast",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "It's CES time! That means crazy gadgets and funny stories.",
        category: "podcast"
    },
    {
        id: "8",
        avatar: './assets/img/c-logo.jpg',
        title: "Marvel's Spider-Man 2 - Be Greater. Together. Trailer I PS5 Games",
        thumbnailUrl: "https://i.ytimg.com/vi/nq1M_Wc4FIc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChzu1ZrOk0QOPPufgAPO8aqwUNfg",
        author: "PlayStation",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for the PS5 console.",
        category: "gaming"
    },
    {
        id: "9",
        avatar: './assets/img/c-logo.jpg',
        title: 'Welcome to Angular\'s renaissance — angular.dev',
        thumbnailUrl: "https://i.ytimg.com/vi/mVjYG9TSN88/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoVjAP&rs=AOn4CLCHurO9aoICBSpfe6Zr30OuBwevKA",
        author: "Angular",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Welcome to the new home of Angular developers.",
        category: "trends"
    },
    {
        id: "10",
        avatar: './assets/img/c-logo.jpg',
        title: 'The Race to Create \'the iPhone of AI\' is Heating Up!',
        thumbnailUrl: "https://i.ytimg.com/vi/Rqh6fhcAqpw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzTyr7t03eETFV0c35rKj4iL5cfQ",
        author: "ColdFusion",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "It seems that we're entering the age of AI hardware, will it flourish? or will this just be a short-lived footnote in technology history.",
        category: "news"
    },
    {
        id: "11",
        avatar: './assets/img/c-logo.jpg',
        title: '[By Jeans] \'Sarah Kang - once in a moon\' Cover by HANNI | NewJeans',
        thumbnailUrl: "https://i.ytimg.com/vi/RdHR1cZZUR0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBBj2TlVEKVd_CCOYv_2QKyrtccuw",
        author: "NewJeans",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: '[By Jeans] \'Sarah Kang - once in a moon\' Cover by HANNI | NewJeans',
        category: "music"
    },
    {
        id: "12",
        avatar: './assets/img/c-logo.jpg',
        title: "NewJeans (뉴진스) The 38th GOLDEN DISC AWARDS Dance Practice",
        thumbnailUrl: "https://i.ytimg.com/vi/8FpaiZrVoho/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUfqmJ1wHFu-aX4X4oazMVCPhIjQ",
        author: "NewJeans",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "NewJeans (뉴진스) The 38th GOLDEN DISC AWARDS Dance Practice",
        category: "music"
    },
    {
        id: "13",
        avatar: './assets/img/c-logo.jpg',
        title: 'DRIFT // Team Deathmatch Map Trailer - VALORANT',
        thumbnailUrl: "https://i.ytimg.com/vi/p_EbnbEqnVM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZ3iEsyhiP31UdnLCnSIQMHX3K6g",
        author: "Valorant",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Welcome to paradise, Agents.",
        category: "gaming"
    },
    {
        id: "14",
        avatar: './assets/img/c-logo.jpg',
        title: "EYES ON ME // Episode 7: Act III Kickoff - VALORANT",
        thumbnailUrl: "https://i.ytimg.com/vi/ann7WuNd1SM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZBu7b4JOD3zKFKnZHTwNfkjFKXA",
        author: "Valorant",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Get in the zone with Chinese Duelist Iso, add some ice to your collection with a new Battlepass and Event Pass, then seize greatness with the Valiant Hero skinline and new Premier Stage in the last act of EVOLUTION.",
        category: "gaming"
    },
    {
        id: "15",
        avatar: './assets/img/c-logo.jpg',
        title: 'TAKE THE LEAD // Episode 8: Act I Kickoff - VALORANT',
        thumbnailUrl: "https://i.ytimg.com/vi/iq4A2z6rUxQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMl7AlNBV_4urVYRwhW9e1SrNwTw",
        author: "Valorant",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "No looking back. Step it up with the new double-barrel sniper Outlaw, flex your style with a new Battlepass, and make it rain with",
        category: "gaming"
    },
    {
        id: "16",
        avatar: './assets/img/c-logo.jpg',
        title: 'GODS ft. NewJeans (뉴진스) (Official Music Video) | Worlds 2023 Anthem - League of Legends',
        thumbnailUrl: "https://i.ytimg.com/vi/C3GouGa0noM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhed_CuDQPMCG8DWw7UjgaGUcNiA",
        author: "Leauge of Legends",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "This is the story of an unbreakable spirit and the unbending heart of a champion.",
        category: "gaming"
    },

    // // 1st DUPLICATE - NO SPIDERMAN DATA
    {
        id: "17",
        avatar: './assets/img/c-logo.jpg',
        title: "Big Buck Bunny",
        thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        author: "Vlc Media Player",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        category: "funny"
    },
    {
        id: "18",
        avatar: './assets/img/c-logo.jpg',
        title: "The first Blender Open Movie from 2006",
        thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        author: "Blender Inc.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        description: "Song : Raja Raja Kareja Mein Samaja",
        category: "shorts"
    },
    {
        id: "19",
        avatar: './assets/img/c-logo.jpg',
        title: "Galaxy S24 Ultra: Official Introduction Film | Samsung",
        thumbnailUrl: "https://i.ytimg.com/vi/3hPoEmlBQdY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-tnjoPSXyRhmfMcp7Opatw0_Xsw",
        author: "Samsung",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Galaxy AI is finally here. Check out this epic demo of all that you can do with the first Galaxy AI phone – the new S24 Ultra.",
        category: "technology"
    },
    {
        id: "20",
        avatar: './assets/img/c-logo.jpg',
        title: "A Guided Tour of Apple Vision Pro",
        thumbnailUrl: "https://i.ytimg.com/vi/Vb0dG-2huJE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_mmW5dEXYqoQmigATDMonAid1TA",
        author: "Apple",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Apple Vision Pro is here. Experience what it's like to use Apple's first ever spatial computer.",
        category: "technology"
    },
    {
        id: "21",
        avatar: './assets/img/c-logo.jpg',
        title: 'NewJeans (뉴진스) \'Super Shy\' Official MV',
        thumbnailUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        author: "HYBE LABELS",
        videoUrl: "https://iv.ggtyler.dev/latest_version?id=ArmDp-zijuc&itag=22",
        description: 'NewJeans (뉴진스) \'Super Shy\' Official MV',
        category: "music"
    },
    {
        id: "22",
        avatar: './assets/img/c-logo.jpg',
        title: "JENNIE - 'You & Me (Jazz ver.)' LIVE CLIP",
        thumbnailUrl: "https://i.ytimg.com/vi/ZgLlabyz7oY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiandNbRYG-XtaV7G4jP-E1Kyxsg",
        author: "BLACKPINK",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "You & Me Jazz ver.",
        category: "music"
    },
    {
        id: "23",
        avatar: './assets/img/c-logo.jpg',
        title: 'The Rabbit R1 Is the Weirdest CES Gadget',
        thumbnailUrl: "https://i.ytimg.com/vi/dKbT0iFia0I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxWs8Z3gOschHPJDL600ysGzrZLQ",
        author: "WVFRM Podcast",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "It's CES time! That means crazy gadgets and funny stories.",
        category: "podcast"
    },
    {
        id: "24",
        avatar: './assets/img/c-logo.jpg',
        title: 'Welcome to Angular\'s renaissance — angular.dev',
        thumbnailUrl: "https://i.ytimg.com/vi/mVjYG9TSN88/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoVjAP&rs=AOn4CLCHurO9aoICBSpfe6Zr30OuBwevKA",
        author: "Angular",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Welcome to the new home of Angular developers.",
        category: "trends"
    },
    {
        id: "25",
        avatar: './assets/img/c-logo.jpg',
        title: 'The Race to Create \'the iPhone of AI\' is Heating Up!',
        thumbnailUrl: "https://i.ytimg.com/vi/Rqh6fhcAqpw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzTyr7t03eETFV0c35rKj4iL5cfQ",
        author: "ColdFusion",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "It seems that we're entering the age of AI hardware, will it flourish? or will this just be a short-lived footnote in technology history.",
        category: "news"
    },
    {
        id: "26",
        avatar: './assets/img/c-logo.jpg',
        title: '[By Jeans] \'Sarah Kang - once in a moon\' Cover by HANNI | NewJeans',
        thumbnailUrl: "https://i.ytimg.com/vi/RdHR1cZZUR0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBBj2TlVEKVd_CCOYv_2QKyrtccuw",
        author: "NewJeans",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: '[By Jeans] \'Sarah Kang - once in a moon\' Cover by HANNI | NewJeans',
        category: "music"
    },
    {
        id: "27",
        avatar: './assets/img/c-logo.jpg',
        title: "NewJeans (뉴진스) The 38th GOLDEN DISC AWARDS Dance Practice",
        thumbnailUrl: "https://i.ytimg.com/vi/8FpaiZrVoho/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUfqmJ1wHFu-aX4X4oazMVCPhIjQ",
        author: "NewJeans",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "NewJeans (뉴진스) The 38th GOLDEN DISC AWARDS Dance Practice",
        category: "music"
    },
    {
        id: "28",
        avatar: './assets/img/c-logo.jpg',
        title: 'DRIFT // Team Deathmatch Map Trailer - VALORANT',
        thumbnailUrl: "https://i.ytimg.com/vi/p_EbnbEqnVM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZ3iEsyhiP31UdnLCnSIQMHX3K6g",
        author: "Valorant",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Welcome to paradise, Agents.",
        category: "gaming"
    },
    {
        id: "29",
        avatar: './assets/img/c-logo.jpg',
        title: "EYES ON ME // Episode 7: Act III Kickoff - VALORANT",
        thumbnailUrl: "https://i.ytimg.com/vi/ann7WuNd1SM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZBu7b4JOD3zKFKnZHTwNfkjFKXA",
        author: "Valorant",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Get in the zone with Chinese Duelist Iso, add some ice to your collection with a new Battlepass and Event Pass, then seize greatness with the Valiant Hero skinline and new Premier Stage in the last act of EVOLUTION.",
        category: "gaming"
    },
    {
        id: "30",
        avatar: './assets/img/c-logo.jpg',
        title: 'TAKE THE LEAD // Episode 8: Act I Kickoff - VALORANT',
        thumbnailUrl: "https://i.ytimg.com/vi/iq4A2z6rUxQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMl7AlNBV_4urVYRwhW9e1SrNwTw",
        author: "Valorant",
        videoUrl: "https://playtube.pk/watch?v=iq4A2z6rUxQ",
        description: "No looking back. Step it up with the new double-barrel sniper Outlaw, flex your style with a new Battlepass, and make it rain with",
        category: "gaming"
    },
    {
        id: "31",
        avatar: './assets/img/c-logo.jpg',
        title: 'GODS ft. NewJeans (뉴진스) (Official Music Video) | Worlds 2023 Anthem - League of Legends',
        thumbnailUrl: "https://i.ytimg.com/vi/C3GouGa0noM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhed_CuDQPMCG8DWw7UjgaGUcNiA",
        author: "Leauge of Legends",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "This is the story of an unbreakable spirit and the unbending heart of a champion.",
        category: "gaming"
    },
]