import { formatDateToLocalTime } from "../../utils/formatDate"
import { v4 as uuidv4 } from "uuid"
import { CurrentChat } from "./../models"

export const formatDate = (action?) => {
  const dateObject = action
    ? new Date(action.payload.created * 1000)
    : new Date()
  return formatDateToLocalTime(dateObject)
}

export const cleanCurrenChat = state => {
  if (state.currentChat.messages.length > 0) {
    state.currentChat = createNewChat()
  }
}
export const archiveCurrentChat = (state) => {
  const containsUIResponse = state.currentChat.messages.some(
    (chat) => chat.message?.role === 'assistant'
  )
  if (containsUIResponse) {
    state.chatHistory = [...state.chatHistory, state.currentChat]
  }
}

export const createNewChat = (): CurrentChat => {
  const createdAt = Date.now()
  let timeLeft = () => 24 - Math.floor((Date.now() - createdAt) / 3600000)
  return {
    id: uuidv4(),
    messages: [],
    title: "",
    date: "",
    timeLeft: timeLeft()
  }
}
export const createUserMessage = actionPayload => {
  return {
    message: {
      content: actionPayload.content,
      role: actionPayload.role
    },
    created: formatDate(),
    id: uuidv4(),

  }
}
export const createUIMessage = action => {
  return {
    message: action.payload.choices[0].message,
    created: formatDate(action),
    id: action.payload.id
  }
}
export const addMessageToChat = (state, message) => {
  state.currentChat.messages.push(message)
}
export const addChatData = (state, userMessage) => {
  state.currentChat.title = userMessage.message.content
  state.currentChat.date = userMessage.created
}
export const seeArchiveChat = (state, action) => {
  state.currentChat = state.chatHistory.find(
    chat => chat.id === action.payload.chatId
  )
}
export const deleteArchiveChat = (state, action) => {
  state.chatHistory = state.chatHistory.filter(
    chat => chat.id !== action.payload.chatId
  )
}
