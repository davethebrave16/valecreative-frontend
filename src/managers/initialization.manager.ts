import { getHowItWorks, getMainContent, getProductValues } from "@/api/main.api"

async function initialize() {
    const allData = await Promise.all([
        getMainContent(true),
        getProductValues(),
        getHowItWorks()
    ])
    return allData
}

export { initialize }