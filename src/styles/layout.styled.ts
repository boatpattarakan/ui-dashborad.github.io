import { Spin } from 'antd'
import styled from 'styled-components'

export const ContainerBody = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`

export const CustomSpin = styled(Spin)`
  i {
    background-color: white !important;
  }
`
