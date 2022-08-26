import { artworkTypes, artworks } from '@/datastore/constants/endpoints'
import { get } from '@/datastore/utils/api-utils'
import { parseJSON } from '@/common/utils/mapper-utils'
import { ArtworkType } from '@/models/artworktype.model'
import { Artwork } from '@/models/artwork.model'

async function getArtworkTypes(showInHome: boolean = false, includeImages: boolean = false) {
    const { data, error } = await get(artworkTypes)

    return {
        data: data ? parseJSON<ArtworkType>(data?.attributes) : data,
        isLoading: !error && !data,
        isError: error,
    }
}

async function getArtworks(type: string, includeImages: boolean = false) {
    const { data, error } = await get(artworks)

    return {
        data: data ? parseJSON<Artwork>(data?.attributes) : data,
        isLoading: !error && !data,
        isError: error,
    }
}

export { getArtworkTypes, getArtworks }