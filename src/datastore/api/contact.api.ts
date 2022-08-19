import { messages } from '@/datastore/constants/endpoints'
import { post } from '@/datastore/utils/api-utils'
import { parseJSON } from '@/common/utils/mapper-utils'
import { ContactForm } from '@/models/contactform.model'

async function postContact(name: string, email: string, phone: string, subject: string) {
    const body = { 
        email, 
        senderName: name,
        phone,
        subject,
        message: "prova prova" 
    }
    const { data, error } = await post(messages, body)
  
    return {
      data: data ? parseJSON<ContactForm>(data?.attributes) : data,
      isLoading: !error && !data,
      isError: error,
    }
  }

  export { postContact }