import { getArtworks, getArtworkTypes } from "@/api/gallery.api"
import { getHowItWorks, getMainContent, getProductValues } from "@/api/main.api"

async function initialize() {
    const allData = await Promise.all([
        getMainContent(true),
        getProductValues(),
        getHowItWorks(),
        getArtworkTypes(true, true)
    ])
    return allData
}

async function getGallery() {
    const allData = await Promise.all([
        getMainContent(),
        getArtworks(undefined, true)
    ])
    return allData
}

export { initialize, getGallery }