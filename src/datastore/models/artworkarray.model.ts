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
}