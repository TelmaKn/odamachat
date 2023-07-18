import React from 'react'
import { Box, Card, Divider, Flex, Text } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../../common/Loading.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import '../../../styles/styles.css'

interface Message {
  status?: string
  created?: string
  message?: {
    role?: string
    content?: string
  }
}

interface MessageType { message?: Message }

const MessageChatBox: React.FC<MessageType> = ({ message }) => {
  const messageIsLoading = !message?.message
  const apiMessage = messageIsLoading || message?.message?.role === 'assistant'
  const userColor = apiMessage ? 'primary' : 'tertiary'
  const userName = apiMessage ? 'OdamaChat' : 'User'

  return (
    <Card mb="20px" p="24px 27px">
      <Flex align="flex-end" gap="12px">
        <Text color={userColor} variant="tit3">{userName}</Text>
        {messageIsLoading ? <Box className="dot-typing" /> : <Text variant="small">{message?.created}</Text>}
      </Flex>
      {!messageIsLoading && (
        <>
          <Divider />
          <Box lineHeight='1.563rem' >
            <ReactMarkdown className='text' children={message?.message?.content} remarkPlugins={[remarkGfm]} components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={darcula}
                    language={match[1]}
                    PreTag="div"

                  />
                ) : (
                  <code {...props} className='markdown'>
                    {children}
                  </code>
                )
              }
            }} />
          </Box>


        </>
      )}
    </Card>
  )
}

export default MessageChatBox
