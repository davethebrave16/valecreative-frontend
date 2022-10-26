export type Artwork = {
    id: number
    title: string
    description: string
    year: number
    technique: string
    size: string
    originalPicture: string
    thumbnailPicture: string | undefined
    smallPicture: string | undefined
    mediumPicture: string | undefined
    largePicture: string | undefined
    type: string
    typeId: number
}