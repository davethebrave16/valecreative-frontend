export type ArtworkTypeArrayItem = {
    id: number
    attributes: ArtworkTypeArrayItem1
}

export type ArtworkTypeArrayItem1 = {
    title: string
    picture: ArtworkTypeArrayItem2
}

export type ArtworkTypeArrayItem2 = {
    data: ArtworkTypeArrayItem3
}

export type ArtworkTypeArrayItem3 = {
    id: number
    attributes: ArtworkTypeArrayItem4
}

export type ArtworkTypeArrayItem4 = {
    url: string
}