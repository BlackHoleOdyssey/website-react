import type {ProjectData} from '../Types/model';

export const mockGame : ProjectData[] = [
    {
        id: 1,
        title: "Tou'Shout",
        status: "released",
        description: "Tou'Shout is a bullet hell with a retro theme. You play as a spaceship that has to dodge bullets from enemies (space stations). ",
        coverImage: `${import.meta.env.BASE_URL}games/toushout-cover.png`,
        screenshot: [
            `${import.meta.env.BASE_URL}games/toushout-cover.png`,
            `${import.meta.env.BASE_URL}games/toushout-cover.png`
        ],
        genre: ['Bullet Hell', 'Shoot \'em up'],
        releaseDate: "Dec 13, 2023",
        platformBadge: `${import.meta.env.BASE_URL}icons/itchio-badge-color.svg`,
        platformLogo: `${import.meta.env.BASE_URL}icons/itchio-white.svg`,
        link: "https://cedricoo.itch.io/toushout-by-cedrico"
    },
    {
        id: 2,
        title: "Castle : Defender Assault",
        status: "released",
        description: "Castle Defender : Assault is a tower defense like game where you have to protect your tower against skeleton attacks. ",
        coverImage: `${import.meta.env.BASE_URL}games/cda-cover.png`,
        screenshot: [
            `${import.meta.env.BASE_URL}games/cda-cover.png`,
            `${import.meta.env.BASE_URL}games/cda-cover.png`
        ],
        genre: ['Tower Defense'],
        releaseDate: "Sep 05, 2025",
        platformBadge: `${import.meta.env.BASE_URL}icons/itchio-badge-color.svg`,
        platformLogo: `${import.meta.env.BASE_URL}icons/itchio-white.svg`,
        link: "https://robineau.itch.io/castle-defender-assault"
    }
]

export const mockPackage : ProjectData[] = [
    {
        id: 1,
        title: "Scene Reference",
        status: "released",
        description: "Scene Reference is a Unity package that replaces scene references by name or index with GUIDs, eliminating broken references when scenes are renamed or reorganized. The registry updates automatically whenever your Build Settings change, and is fully configured from the Project Settings.",
        coverImage: `${import.meta.env.BASE_URL}packages/scene-reference-cover.png`,
        screenshot: [
            `${import.meta.env.BASE_URL}packages/scene-reference-cover.png`
        ],
        releaseDate: "Apr 25, 2026",
        platformBadge: `${import.meta.env.BASE_URL}icons/github-lockup-white.svg`,
        link: "https://github.com/BlackHoleOdyssey/SceneReference"
    }
]