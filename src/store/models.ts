export interface Message {
  message?: { content: string; role: string }
  created?: string
  id: string
}

export interface CurrentChat {
  id: string
  title: string
  messages: Array<Message>
  date: string,
  timeLeft: number
}

export interface ChatState {
  chatHistory: Array<CurrentChat>
  currentChat: CurrentChat
  messagesToRender: Array<Message>
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string
  pendingCardId: string
}
