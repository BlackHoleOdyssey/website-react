import type {HomeCard} from '../Types/model';

export const mockGame : HomeCard[] = [
    {
        id: 1,
        title: "Tou'Shout",
        subtitle: "Release",
        coverImage: `${import.meta.env.BASE_URL}games/toushout-cover.png`,
        platform: `${import.meta.env.BASE_URL}icons/itchio-badge-color.svg`,
        link: "https://cedricoo.itch.io/toushout-by-cedrico"
    },
    {
        id: 2,
        title: "Castle : Defender Assault",
        subtitle: "Development",
        coverImage: `${import.meta.env.BASE_URL}games/cda-cover.png`,
        platform: `${import.meta.env.BASE_URL}icons/itchio-badge-color.svg`,
        link: "https://robineau.itch.io/castle-defender-assault"
    }
]

export const mockPackage : HomeCard[] = [
    {
        id: 1,
        title: "Scene Reference",
        subtitle: "Create SceneReference type on Unity to load scene with SceneAsset",
        coverImage: `${import.meta.env.BASE_URL}packages/scene-reference-cover.png`,
        platform: `${import.meta.env.BASE_URL}icons/github-lockup-white.svg`,
        link: "https://github.com/BlackHoleOdyssey/SceneReference"
    }
]