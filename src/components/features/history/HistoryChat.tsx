import React, { useState, MouseEvent } from "react"
import { Card, Stack, Text, Flex, Button } from "@chakra-ui/react"
import { SearchIcon } from "../../../assets/icons/Search"
import { TimeIcon } from "../../../assets/icons/Time"
import { CheckIcon } from "../../../assets/icons/Check"
import { CloseIcon } from "../../../assets/icons/CloseIcon"
import { TrashIcon } from "../../../assets/icons/TrashIcon"

interface HistoryMessageProps {
  title: string
  timeLeft: string
  onCheck: () => void
  onClose: () => void
}

const HistoryMessage: React.FC<HistoryMessageProps> = ({
  title,
  timeLeft,
  onCheck,
  onClose
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleCheckButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    onCheck()
  }

  const handleCloseButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    onClose()
  }

  return (
    <Card mb="5px" p="10px 20px" _hover={{ bg: "hover3" }}>
      <Flex
        align="center"
        justifyContent="space-between"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Flex align="center" gap="13px">
          <SearchIcon />
          <Stack gap="1px">
            <Text noOfLines={1} variant="tit3">
              {title}
            </Text>
            <Flex gap="1px" align="center">
              <TimeIcon fontSize="13px" boxSize="18px" />
              <Text variant="small">{timeLeft}</Text>
            </Flex>
          </Stack>
        </Flex>
        <Flex justifyContent="flex-end" w="80px">
          {isHovered ? (
            <>
              <Button p={0} variant="icon" onClick={handleCheckButtonClick}>
                <CheckIcon />
              </Button>
              <Button p={0} variant="icon" onClick={handleCloseButtonClick}>
                <CloseIcon />
              </Button>
            </>
          ) : (
            <Button p={0} variant="icon">
              <TrashIcon />
            </Button>
          )}
        </Flex>
      </Flex>
    </Card>
  )
}

export default HistoryMessage
