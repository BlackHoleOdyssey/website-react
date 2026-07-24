import type {Game} from '../Types/model';

export const mockGame : Game[] = [
    {
        id: 1,
        title: "Tou'Shout",
        subtitle: "Release",
        coverImage: `${import.meta.env.BASE_URL}games/toushout-cover.png`
    },
    {
        id: 2,
        title: "Castle : Defender Assault",
        subtitle: "Development",
        coverImage: `${import.meta.env.BASE_URL}games/cda-cover.png`
    },
    {
        id: 3,
        title: "Rider",
        subtitle: "Prototype",
        coverImage: `${import.meta.env.BASE_URL}games/rider-cover.png`
    },
]