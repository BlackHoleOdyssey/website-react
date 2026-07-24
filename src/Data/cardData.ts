import type {HomeCard} from '../Types/model';

export const mockGame : HomeCard[] = [
    {
        id: 1,
        title: "Tou'Shout",
        subtitle: "Release",
        coverImage: `${import.meta.env.BASE_URL}games/toushout-cover.png`,
        platform: "Itch.io"
    },
    {
        id: 2,
        title: "Castle : Defender Assault",
        subtitle: "Development",
        coverImage: `${import.meta.env.BASE_URL}games/cda-cover.png`,
        platform: "Itch.io"
    },
    {
        id: 3,
        title: "Rider",
        subtitle: "Prototype",
        coverImage: `${import.meta.env.BASE_URL}games/rider-cover.png`,
        platform: "Steam"
    },
]

export const mockPackage : HomeCard[] = [
    {
        id: 1,
        title: "Scene Reference",
        subtitle: "Create SceneReference type on Unity to load scene with SceneAsset",
        coverImage: `${import.meta.env.BASE_URL}packages/scene-reference-cover.png`,
        platform: "Unity"
    }
]