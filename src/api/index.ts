import axios, { AxiosResponse } from 'axios'
import { API_CONFIG } from './config'

const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_CONFIG.API_KEY}`,
  },
})

export const sendMessageToAI = async (
  messages: Array<object>
): Promise<AxiosResponse> => {
  try {
    const res = await axiosInstance.post('/completions', {
      model: API_CONFIG.MODEL,
      messages: messages,
      max_tokens: 1000
    })
    return res
  } catch (error) {
    console.error('Error al enviar el mensaje:', error)
  }
}
