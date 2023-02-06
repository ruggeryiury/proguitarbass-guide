interface TuningsList {
    name: string
    artist: string
    guitar_diff?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    bass_diff?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    guitar_tuning?: number[]
    bass_tuning?: number[]
    guitar_transpose?: number
    bass_transpose?: number
}

export const OnDiscTunings: TuningsList[] = [
    {
        name: 'Rehab',
        artist: 'Amy Winehouse',
        guitar_diff: 0,
        bass_diff: 3,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Caught in a Mosh',
        artist: 'Anthrax',
        guitar_diff: 6,
        bass_diff: 6,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'One Armed Scissor',
        artist: 'At the Drive-In',
        guitar_diff: 3,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Beast and the Harlot',
        artist: 'Avenged Sevenfold',
        guitar_diff: 6,
        bass_diff: 6,
        guitar_tuning: [-2, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0]
    },
    {
        name: 'Rock Lobster',
        artist: 'The B-52\'s',
        guitar_diff: 1,
        bass_diff: 2,
        guitar_tuning: [0, 0, 0, 0, -2, -7],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -4
    },
    {
        name: 'Good Vibrations (Live)',
        artist: 'The Beach Boys',
        guitar_diff: 1,
        bass_diff: 2,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'In a Big Country',
        artist: 'Big Country',
        guitar_diff: 6,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Heart of Glass',
        artist: 'Blondie',
        guitar_diff: 3,
        bass_diff: 2,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Get Up, Stand Up',
        artist: 'Bob Marley and the Wailers',
        guitar_diff: 0,
        bass_diff: 3,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'False Alarm',
        artist: 'The Bronx',
        guitar_diff: 2,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: '25 or 6 to 4',
        artist: 'Chicago',
        guitar_diff: 6,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Just Like Heaven',
        artist: 'The Cure',
        guitar_diff: 5,
        bass_diff: 0,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Space Oddity',
        artist: 'David Bowie',
        guitar_diff: 1,
        bass_diff: 6,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Foolin\'',
        artist: 'Def Leppard',
        guitar_diff: 4,
        bass_diff: 2,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Smoke on the Water',
        artist: 'Deep Purple',
        guitar_diff: 4,
        bass_diff: 6,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Whip It',
        artist: 'Devo',
        guitar_diff: 1,
        bass_diff: 1,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Rainbow in the Dark',
        artist: 'Dio',
        guitar_diff: 6,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Walk of Life',
        artist: 'Dire Straits',
        guitar_diff: 3,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'China Grove',
        artist: 'The Doobie Brothers',
        guitar_diff: 5,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Break on Through (to the Other Side)',
        artist: 'The Doors',
        guitar_diff: 1,
        bass_diff: 3,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'King George',
        artist: 'Dover',
        guitar_diff: 3,
        bass_diff: 3,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'The Killing Moon',
        artist: 'Echo & The Bunnymen',
        guitar_diff: 3,
        bass_diff: 0,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Saturday Night\'s Alright for Fighting',
        artist: 'Elton John',
        guitar_diff: 5,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Midlife Crisis',
        artist: 'Faith No More',
        guitar_diff: 0,
        bass_diff: 1,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Hey Man Nice Shot',
        artist: 'Filter',
        guitar_diff: 3,
        bass_diff: 3,
        guitar_tuning: [-2, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0]
    },
    {
        name: 'Yoshimi Battles the Pink Robots, Pt. 1',
        artist: 'The Flaming Lips',
        guitar_diff: 0,
        bass_diff: 0,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Cold as Ice',
        artist: 'Foreigner',
        guitar_diff: 5,
        bass_diff: 1,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Radar Love',
        artist: 'Golden Earring',
        guitar_diff: 5,
        bass_diff: 3,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Killing Loneliness',
        artist: 'H.I.M.',
        guitar_diff: 4,
        bass_diff: 1,
        guitar_tuning: [-2, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0],
        guitar_transpose: -2,
        bass_transpose: -2
    },
    {
        name: 'The Power of Love',
        artist: 'Huey Lewis and the News',
        guitar_diff: 5,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Viva la Resistance',
        artist: 'Hypernova',
        guitar_diff: 3,
        bass_diff: 2,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Oh My God',
        artist: 'Ida Maria',
        guitar_diff: 3,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Need You Tonight',
        artist: 'INXS',
        guitar_diff: 2,
        bass_diff: 1,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -1,
        bass_transpose: -1
    },
    {
        name: 'Centerfold',
        artist: 'The J. Geils Band',
        guitar_diff: 2,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'I Got You (I Feel Good)',
        artist: 'James Brown',
        guitar_diff: 2,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Been Caught Stealing',
        artist: 'Jane\'s Addiction',
        guitar_diff: 5,
        bass_diff: 3,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Crosstown Traffic',
        artist: 'The Jimi Hendrix Experience',
        guitar_diff: 6,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -1,
        bass_transpose: -1
    },
    {
        name: 'I Live Rock N\' Roll',
        artist: 'Joan Jett & The Blackhearts',
        guitar_diff: 0,
        bass_diff: 0,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Imagine',
        artist: 'John Lennon',
        bass_diff: 0,
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Me Enamora',
        artist: 'Juanes',
        guitar_diff: 2,
        bass_diff: 6,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0]
    },
    {
        name: 'Free Bird',
        artist: 'Lynyrd Skynyrd',
        guitar_diff: 6,
        bass_diff: 6,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Oye Mi Amor',
        artist: 'Maná',
        guitar_diff: 5,
        bass_diff: 1,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'The Beautiful People',
        artist: 'Marilyn Manson',
        guitar_diff: 0,
        bass_diff: 0,
        guitar_tuning: [-2, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0]
    },
    {
        name: 'Combat Baby',
        artist: 'Metric',
        guitar_diff: 3,
        bass_diff: 6,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Outer Space',
        artist: 'The Muffs',
        guitar_diff: 1,
        bass_diff: 2,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Sister Christian',
        artist: 'Night Ranger',
        guitar_diff: 2,
        bass_diff: 0,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Crazy Train',
        artist: 'Ozzy Osbourne',
        guitar_diff: 6,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Misery Business',
        artist: 'Paramore',
        guitar_diff: 4,
        bass_diff: 3,
        guitar_tuning: [-2, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0]
    },
    {
        name: 'Llama',
        artist: 'Phish',
        guitar_diff: 6,
        bass_diff: 6,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Lasso',
        artist: 'Phoenix',
        guitar_diff: 4,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Don\'t Stand So Close to Me',
        artist: 'The Police',
        guitar_diff: 5,
        bass_diff: 1,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Antibodies',
        artist: 'Poni Hoax',
        guitar_diff: 1,
        bass_diff: 6,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -1,
    },
    {
        name: 'Something Bigger, Something Brighter',
        artist: 'Pretty Girls Make Graves',
        guitar_diff: 4,
        bass_diff: 2,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Jerry Was a Race Car Driver',
        artist: 'Primus',
        guitar_diff: 5,
        bass_diff: 6,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Bohemian Rhapsody',
        artist: 'Queen',
        guitar_diff: 6,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'No One Knows',
        artist: 'Queens of the Stone Age',
        guitar_diff: 5,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -4,
        bass_transpose: -4
    },
    {
        name: 'Du Hast',
        artist: 'Rammstein',
        guitar_diff: 1,
        bass_diff: 1,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'I Wanna Be Sedated',
        artist: 'Ramones',
        guitar_diff: 0,
        bass_diff: 0,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Last Dance',
        artist: 'The Raveonettes',
        guitar_diff: 0,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Portions for Foxes',
        artist: 'Rilo Kiley',
        guitar_diff: 4,
        bass_diff: 2,
        guitar_tuning: [-2, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0]
    },
    {
        name: 'Don\'t Bury Me... I\'m Still Not Dead',
        artist: 'Riverboat Gamblers',
        guitar_diff: 2,
        bass_diff: 0,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'The Look',
        artist: 'Roxette',
        guitar_diff: 3,
        bass_diff: 2,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Before I Forget',
        artist: 'Slipknot',
        guitar_diff: 4,
        bass_diff: 6,
        guitar_tuning: [-2, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0]
    },
    {
        name: 'Walking on the Sun',
        artist: 'Smash Mouth',
        guitar_diff: 1,
        bass_diff: 1,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -1,
        bass_transpose: -1
    },
    {
        name: 'Stop Me If You Think You\'ve Heard This One Before',
        artist: 'The Smiths',
        guitar_diff: 2,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Living in America',
        artist: 'The Sounds',
        guitar_diff: 0,
        bass_diff: 1,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'In the Meantime',
        artist: 'Spacehog',
        guitar_diff: 5,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Fly Like an Eagle',
        artist: 'Steve Miller Band',
        guitar_diff: 1,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Plush',
        artist: 'Stone Temple Pilots',
        guitar_diff: 4,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'This Bastard\'s Life',
        artist: 'Swingin\' Utters',
        guitar_diff: 3,
        bass_diff: 3,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: '20th Century Boy',
        artist: 'T. Rex',
        guitar_diff: 2,
        bass_diff: 4,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Everybody Wants to Rule the World',
        artist: 'Tears for Fears',
        guitar_diff: 4,
        bass_diff: 0,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0],
        guitar_transpose: 1,
        bass_transpose: 1
    },
    {
        name: 'The Con',
        artist: 'Tegan and Sara',
        guitar_diff: 2,
        bass_diff: 3,
        guitar_tuning: [0, -2, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: 1
    },
    {
        name: 'Dead End Friends',
        artist: 'Them Crooked Vultures',
        guitar_diff: 6,
        bass_diff: 5,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Humanoid',
        artist: 'Tokio Hotel',
        guitar_diff: 4,
        bass_diff: 3,
        guitar_tuning: [-2, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -3
    },
    {
        name: 'I Need to Know',
        artist: 'Tom Petty and the Heartbreakers',
        guitar_diff: 2,
        bass_diff: 2,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Get Free',
        artist: 'The Vines',
        guitar_diff: 1,
        bass_diff: 2,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0]
    },
    {
        name: 'Low Rider',
        artist: 'WAR',
        guitar_diff: 0,
        bass_diff: 1,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Werewolves of London',
        artist: 'Warren Zevon',
        guitar_diff: 2,
        bass_diff: 0,
        guitar_tuning: [0, -2, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'The Hardest Button to Button',
        artist: 'The White Stripes',
        guitar_diff: 0,
        bass_diff: 1,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Here I Go Again',
        artist: 'Whitesnake',
        guitar_diff: 4,
        bass_diff: 2,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0]
    },
    {
        name: 'I Can See for Miles',
        artist: 'The Who',
        guitar_diff: 3,
        bass_diff: 3,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Roundabout',
        artist: 'Yes',
        guitar_diff: 6,
        bass_diff: 6,
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    }
]

export const DLCTunings: TuningsList[] = [
    {
        name: '5 Minutes Alone',
        artist: 'Pantera',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -2,
        bass_transpose: -2
    },
    {
        name: '2112',
        artist: 'Rush',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Aerials',
        artist: 'System of a Down',
        guitar_tuning: [-2, 0, 0, 0, 0, 0],
        bass_tuning: [-2, 0, 0, 0],
        guitar_transpose: -2,
        bass_transpose: -2
    },
    {
        name: 'All Along the Watchtower',
        artist: 'The Jimi Hendrix Experience',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -1,
        bass_transpose: -1
    },
    {
        name: 'Amarath',
        artist: 'Nightwish',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -1,
        bass_transpose: -1
    },
    {
        name: 'American Idiot',
        artist: 'Green Day',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
    },
    {
        name: '...And Justice for All',
        artist: 'Metallica',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
    },
    {
        name: 'Prelude/Angry Young Man',
        artist: 'Billy Joel',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
    },
    {
        name: 'Animal (Live)',
        artist: 'Def Leppard',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -1
    },
    {
        name: 'Ants Marching',
        artist: 'Dave Matthews Band',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Appetite',
        artist: 'The Gracious Few',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0]
    },
    {
        name: 'Audience of One',
        artist: 'Rise Against',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -1,
        bass_transpose: -1
    },
    {
        name: 'Bad Moon Rising',
        artist: 'Creedence Clearwater Revival',
        guitar_tuning: [0, 0, 0, 0, 0, 0],
        bass_tuning: [0, 0, 0, 0],
        guitar_transpose: -2
    }
]