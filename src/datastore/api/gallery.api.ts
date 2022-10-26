import { artworkTypes, artworks } from '@/datastore/constants/endpoints'
import { addImageBaseUrl, get } from '@/datastore/utils/api-utils'
import { parseJSONArray } from '@/common/utils/mapper-utils'
import { ArtworkType } from '@/models/artworktype.model'
import { Artwork } from '@/models/artwork.model'
import { ArtworkTypeArrayItem } from '@/models/artworktypearray.model'
import { ArtworkArrayItem } from '@/models/artworkarray.model'

async function getArtworkTypes(showInHome: boolean = false, includeImages: boolean = false) {
    const params = []
    if (showInHome) {
        params.push("filters[showInHome][$eq]=true")
    }
    if (includeImages) {
        params.push("populate=*")
    }
    const { data, error } = await get(artworkTypes + ((params.length > 0) ? ('?' + params.join('&')) : ''))
    const resultArray: ArtworkTypeArrayItem[] = data ? parseJSONArray<ArtworkTypeArrayItem[]>(data) : data
    const results = resultArray.map(item => {
        const element: ArtworkType = {
            id: item.id,
            title: item.attributes.title,
            picture: addImageBaseUrl(item.attributes.picture.data?.attributes.url)
        }
        return element
    })

    return {
        data: results,
        isLoading: !error && !data,
        isError: error,
    }
}

async function getArtworks(type?: string, includeImages: boolean = false) {
    const params = []
    if (type) {
        params.push("filters[type][$eq]=" + type)
    }
    if (includeImages) {
        params.push("populate=*")
    }
    const { data, error } = await get(artworks + ((params.length > 0) ? ('?' + params.join('&')) : ''))
    const resultArray: ArtworkArrayItem[] = data ? parseJSONArray<ArtworkArrayItem[]>(data) : data
    const results = resultArray.map(item => {
        const element: Artwork = {
            id: item.id,
            title: item.attributes.title,
            description: item.attributes.description,
            size: item.attributes.size,
            technique: item.attributes.technique,
            year: item.attributes.year,
            originalPicture: addImageBaseUrl(item.attributes.picture.data?.attributes.url),
            thumbnailPicture: addImageBaseUrl(item.attributes.picture.data?.attributes.formats.thumbnail?.url),
            smallPicture: addImageBaseUrl(item.attributes.picture.data?.attributes.formats.small?.url),
            mediumPicture: addImageBaseUrl(item.attributes.picture.data?.attributes.formats.medium?.url),
            largePicture: addImageBaseUrl(item.attributes.picture.data?.attributes.formats.large?.url),
            type: (item.attributes.type.data) ? item.attributes.type.data.attributes.title : '',
            typeId: (item.attributes.type.data) ? item.attributes.type.data.id : 0
        }
        return element
    })
    return {
        data: results,
        isLoading: !error && !data,
        isError: error,
    }
}

export { getArtworkTypes, getArtworks }