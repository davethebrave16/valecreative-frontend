import { about } from '@/datastore/constants/endpoints'
import { get } from '@/datastore/utils/api-utils'
import { parseJSON } from '@/common/utils/mapper-utils'
import { About } from '@/datastore/models/about.model'

async function getAbout() {
    const { data, error } = await get(about)
  
    return {
      data: data ? parseJSON<About>(data?.attributes) : data,
      isLoading: !error && !data,
      isError: error,
    }
  }

  export { getAbout }