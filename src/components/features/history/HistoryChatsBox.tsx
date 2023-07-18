import React from "react"
import { Card, CardBody, CardHeader, Divider, Text } from "@chakra-ui/react"
import HistoryMessage from "./HistoryChat"
import { AppDispatch } from "../../../store"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import {
  removeArchiveChat,
  openArchiveChat
} from "../../../store/chat/chatSlice"

const HistorySearchFeature = () => {
  const dispatch: AppDispatch = useDispatch()
  const { featuresShow } = useSelector((state: RootState) => state.core)
  const { chatHistory } = useSelector((state: RootState) => state.chats)
  const reverseChat = [...chatHistory].reverse()

  const openChat = (chatId: string) => {
    dispatch(openArchiveChat({ chatId }))
  }

  const deleteChat = (chatId: string) => {
    dispatch(removeArchiveChat({ chatId }))
  }

  return (
    featuresShow && (
      <Card p="18px">
        <CardHeader p={0}>
          <Text variant="tit2">Historial de Búsquedas</Text>
        </CardHeader>
        <Divider />
        <CardBody p="16px 3px">
          {reverseChat.map(chat => (
            <HistoryMessage
              key={chat.id}
              title={chat.title}
              timeLeft={`Hoy, quedan ${chat.timeLeft} hs.`}
              onCheck={() => openChat(chat.id)}
              onClose={() => deleteChat(chat.id)}
            />
          ))}
        </CardBody>
      </Card>
    )
  )
}

export default HistorySearchFeature
