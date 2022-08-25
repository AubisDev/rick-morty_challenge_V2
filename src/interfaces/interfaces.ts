
export interface CardsContextProps {
    character: Character;
}

export interface Character {
    name: string;
    color: string;
    image: string;
    gender?: string;
    status?: string;
    species?: string;
    type?: string;
    origin?: {
        name: string;
    }
}


export interface SeasonData {
    title: string;
    image: string;
}