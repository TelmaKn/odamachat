import React from "react"
import Layout from "../components/layout/Layout"
import PrompInputBox from "../components/features/promp/PrompInputBox"
import ArchiveChatsBox from "../components/features/history/HistoryChatsBox"
import { Stack } from "@chakra-ui/react"
import ChatBox from "../components/features/chat/ChatBox"

const Home = () => {
  return (
    <Layout>
      <Stack>
        <PrompInputBox />
        <ArchiveChatsBox />
      </Stack>
      <ChatBox />
    </Layout>
  )
}

export default Home
