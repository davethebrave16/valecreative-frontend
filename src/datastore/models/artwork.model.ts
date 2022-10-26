export type Artwork = {
    id: number
    title: string
    description: string
    year: number
    technique: string
    size: string
    originalPicture: string
    thumbnailPicture: string | null
    smallPicture: string | null
    mediumPicture: string | null
    largePicture: string | null
    type: string
    typeId: number
}