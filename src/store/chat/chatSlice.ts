
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit'
import { sendMessageToAI } from '../../api'
import { v4 as uuidv4 } from 'uuid'
import { RootState } from '../../store'
import { ChatState } from './../models'
import {
  cleanCurrenChat,
  createNewChat,
  createUserMessage,
  createUIMessage,
  addMessageToChat,
  addChatData,
  deleteArchiveChat,
  seeArchiveChat,
  archiveCurrentChat
} from './chatUtils'


const initialState: ChatState = {
  chatHistory: [],
  currentChat: createNewChat(),
  messagesToRender: [],
  status: 'idle',
  error: '',
  pendingCardId: '',
}

export const OdamaMessage = createAsyncThunk(
  'chats/sendMessageToAI',
  async (content: string, { getState }) => {
    const state = getState() as RootState
    const { chats: { currentChat } } = state

    const previousMessages = currentChat.messages
      .map((e) => e.message?.content && e.message)
      .filter(Boolean)

    const messages = [...previousMessages, { role: 'user', content: content }]
    const response = await sendMessageToAI(messages)

    return response.data
  }
)

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    userMessage: (state, action: PayloadAction<{ content: string, role: string }>) => {
      state.pendingCardId = uuidv4()

      const userMessage = createUserMessage(action.payload)

      if (action.payload.role === 'system') {
        archiveCurrentChat(state)
        cleanCurrenChat(state)
      }
      if (state.currentChat.messages.length === 0) {
        addChatData(state, userMessage)
      }
      addMessageToChat(state, userMessage)
      addMessageToChat(state, { id: state.pendingCardId })
    },
    startNewChat: (state) => {
      archiveCurrentChat(state)
      cleanCurrenChat(state)
    },
    removeArchiveChat: (state, action: PayloadAction<{ chatId: string }>) => {
      deleteArchiveChat(state, action)
    },
    openArchiveChat: (state, action: PayloadAction<{ chatId: string }>) => {
      archiveCurrentChat(state)
      cleanCurrenChat(state)
      seeArchiveChat(state, action)
      deleteArchiveChat(state, action)
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(OdamaMessage.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(OdamaMessage.fulfilled, (state, action: PayloadAction<any>) => {
        const UIMessage = createUIMessage(action)
        state.currentChat.messages = state.currentChat.messages.map(
          (msg) => msg.id === state.pendingCardId ? UIMessage : msg
        )
        state.status = 'succeeded'
      })
      .addCase(
        OdamaMessage.rejected,
        (state, action: PayloadAction<SerializedError>) => {
          state.error = action.payload.message || ''
          state.currentChat.messages = state.currentChat.messages.filter(
            (msg) => msg.id !== state.pendingCardId
          )
          state.status = 'failed'
        }
      )
  },
})

export const { userMessage, startNewChat, removeArchiveChat, openArchiveChat } = chatsSlice.actions

export default chatsSlice.reducer
