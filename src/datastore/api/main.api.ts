import { MainContent } from '@/datastore/models/maincontent.model'
import { mainContent } from '@/datastore/constants/endpoints'
import { get } from '@/datastore/utils/api-utils'
import { parseJSON, parseJSONArray } from '@/common/utils/mapper-utils'

async function getMainContent() {
  const { data, error } = await get(mainContent)

  return {
    mainContent: data ? parseJSON<MainContent>(data?.data) : data,
    isLoading: !error && !data,
    isError: error,
  }
}

export { getMainContent }
