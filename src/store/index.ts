import { configureStore } from "@reduxjs/toolkit"
import chatReducer from "./chat/chatSlice"
import coreReducer from "./coreSlice"

export const store = configureStore({
  reducer: {
    chats: chatReducer,
    core: coreReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
