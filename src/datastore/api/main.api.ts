import { MainContent } from '@/datastore/models/maincontent.model'
import { ProductValue } from '@/datastore/models/productvalue.model'
import { HowItWorks } from '@/datastore/models/hiw.model'
import { mainContent, homeValues, homeHiw } from '@/datastore/constants/endpoints'
import { get, addImageBaseUrl } from '@/datastore/utils/api-utils'
import { parseJSON } from '@/common/utils/mapper-utils'

async function getMainContent(includeImages: boolean = false) {
  const { data, error } = await get(mainContent + (includeImages ? '?populate=*' : ''))
  const result: MainContent = data ? parseJSON<MainContent>(data?.attributes) : data
  result.headerImageUrl = addImageBaseUrl(data?.attributes.headerImage.data.attributes.url)
  result.contactImageUrl = addImageBaseUrl(data?.attributes.contactImage.data.attributes.url)

  return {
    data: result,
    isLoading: !error && !data,
    isError: error,
  }
}

async function getProductValues() {
  const { data, error } = await get(homeValues)

  return {
    data: data ? parseJSON<ProductValue>(data?.attributes) : data,
    isLoading: !error && !data,
    isError: error,
  }
}

async function getHowItWorks() {
  const { data, error } = await get(homeHiw)

  return {
    data: data ? parseJSON<HowItWorks>(data?.attributes) : data,
    isLoading: !error && !data,
    isError: error,
  }
}

export { getMainContent, getProductValues, getHowItWorks }
