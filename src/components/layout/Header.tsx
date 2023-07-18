import React from 'react'
import { AppDispatch, RootState } from '../../store'
import { ChevronIcon } from '../../assets/icons/Chevron'
import { handleFeaturesShow } from '../../store/coreSlice'
import { MenuIcon } from '../../assets/icons/Menu'
import { SettingIcon } from '../../assets/icons/Setting'
import { Stack, Button, Flex } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const dispatch: AppDispatch = useDispatch()
  const { featuresShow } = useSelector((state: RootState) => state.core)
  const handleBackClick = () => {
    dispatch(handleFeaturesShow(false))
  }

  const handleMenuClick = () => {
    dispatch(handleFeaturesShow(!featuresShow))
  }

  return (
    <Stack
      bgColor="primary"
      direction="row"
      justifyContent="space-between"
      p="19px 41px 16px"
    >
      <Flex gap="13px">
        <Button aria-label="Atrás" gap="4px" onClick={handleBackClick}>
          <ChevronIcon /> Atrás
        </Button>
        <Button aria-label="Menú" onClick={handleMenuClick}>
          <MenuIcon />
        </Button>
      </Flex>
      <Button aria-label="Configuración" onClick={() => { }}>
        <SettingIcon />
      </Button>
    </Stack>
  )
}

export default Header
