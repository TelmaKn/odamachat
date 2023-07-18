import React from 'react'
import { AppDispatch, RootState } from '../../../store'
import { Card, CardBody, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { OdamaMessage, userMessage } from '../../../store/chat/chatSlice'
import UxInput from '../../common/UxInput'

const PrompFeature = () => {
  const dispatch: AppDispatch = useDispatch()

  const { featuresShow } = useSelector((state: RootState) => state.core)

  const sendMessage = async (value: string) => {
    dispatch(userMessage({ content: value, role: 'system' }))
    dispatch(OdamaMessage(value))
  }

  return (
    featuresShow && (
      <Card p="26px 36px 36px">
        <CardBody p={0}>
          <Text mb="10px" variant="tit2">
            Sistema
          </Text>
          <Text mb="30px" variant="par2">
            Para conseguir una respuesta adecuada a tus necesidades, escribe un
            prompt para el sistema
          </Text>
          <UxInput onSubmit={sendMessage} />
        </CardBody>
      </Card>
    )
  )
}

export default PrompFeature
