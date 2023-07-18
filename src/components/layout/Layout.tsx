import React, { ReactNode } from "react"
import Header from "./Header"
import { Box, Stack } from "@chakra-ui/react"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box h="calc(100vh - 80px)" p="41px">
        <Stack direction={["column", "column", "column", "row", "row"]}>
          {children}
        </Stack>
      </Box>
    </>
  )
}

export default Layout
