import React from 'react'
import { PlusIcon } from '../../../assets/icons/Plus'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
} from '@chakra-ui/react'
import MessageChatBox from './ChatMessage'
import UxInput from '../../common/UxInput'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../../store'
import { OdamaMessage, userMessage, startNewChat } from '../../../store/chat/chatSlice'


const ChatBoxFeature = () => {
  const { currentChat } = useSelector((state: RootState) => state.chats)
  const dispatch: AppDispatch = useDispatch()
  const { featuresShow } = useSelector((state: RootState) => state.core)

  const messagesToRender = currentChat.messages.filter(
    (msg) => msg.message?.role !== 'system'
  )

  const sendMessage = async (value: string) => {
    dispatch(userMessage({ content: value, role: 'user' }))
    dispatch(OdamaMessage(value))
  }

  const dispactchStartNewChat = () => {
    dispatch(startNewChat())
  }

  return (
    <>
      <Card maxW={featuresShow && "787px"} w="100%">
        <CardHeader p="11px 34px 14px">
          <Flex align="center" justify="space-between">
            <Text variant="tit2">OdamaChat</Text>
            <Button variant="solid" onClick={dispactchStartNewChat}>
              <PlusIcon />Nueva Búsqueda
            </Button>
          </Flex>
        </CardHeader>
        <CardBody p="30px 34px 0px" bg="bg1">
          {messagesToRender.map((msg) => (
            <MessageChatBox message={msg} key={msg.id} />
          ))}
        </CardBody>
        <CardFooter p="30px 34px 22px">
          <UxInput onSubmit={sendMessage} />
        </CardFooter>
      </Card>
    </>
  )
}

export default ChatBoxFeature
