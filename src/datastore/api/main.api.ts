import { MainContent } from '@/datastore/models/maincontent.model'
import { mainContent } from '@/datastore/constants/endpoints'
import { get } from '@/datastore/utils/api-utils'
import { parseJSON } from '@/common/utils/mapper-utils'

async function getMainContent() {
  const { data, error } = await get(mainContent)

  return {
    data: data ? parseJSON<MainContent>(data?.attributes) : data,
    isLoading: !error && !data,
    isError: error,
  }
}

export { getMainContent }
