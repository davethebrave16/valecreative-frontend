export type ArtworkArrayItem = {
    id: number
    attributes: ArtworkArrayItem1
}

export type ArtworkArrayItem1 = {
    title: string
    year: number
    description: string
    size: string
    technique: string
    picture: ArtworkArrayItem2
    type: ArtworkArrayItem2
}

export type ArtworkArrayItem2 = {
    data: ArtworkArrayItem3
}

export type ArtworkArrayItem3 = {
    id: number
    attributes: ArtworkArrayItem4
}

export type ArtworkArrayItem4 = {
    url: string
    title: string
    formats: ArtworkArrayItem5
}

export type ArtworkArrayItem5 = {
    large: ArtworkArrayItem6
    small: ArtworkArrayItem6
    medium: ArtworkArrayItem6
    thumbnail: ArtworkArrayItem6
}

export type ArtworkArrayItem6 = {
    url: string
}