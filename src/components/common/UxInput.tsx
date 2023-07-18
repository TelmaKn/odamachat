import React, { useState, ChangeEvent, FormEvent } from 'react'
import { SendIcon } from '../../assets/icons/Send'
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'

interface UxInputProps {
  onSubmit?: (value: string) => void
}

const UxInput: React.FC<UxInputProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    value.length && onSubmit && onSubmit(value)
    setValue('')
  }

  return (
    <Stack w="100%">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            focusBorderColor="primary"
            onChange={handleChange}
            pr="4.5rem"
            value={value}
          />
          <InputRightElement w="40px">
            <Button p={0} pr="20px" variant="icon" type="submit">
              <SendIcon onClick={handleSubmit} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Stack>
  )
}

export default UxInput
