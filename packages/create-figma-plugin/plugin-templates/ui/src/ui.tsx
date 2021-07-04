import {
  Button,
  Columns,
  Container,
  render,
  Text,
  TextboxNumeric,
  VerticalSpace
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { CloseHandler, CreateRectanglesHandler } from './types'

function Plugin() {
  const [count, setCount] = useState<number | null>(5)
  const [countString, setCountString] = useState('5')
  const handleCreateRectanglesClick = useCallback(
    function () {
      if (count !== null) {
        emit<CreateRectanglesHandler>('CREATE_RECTANGLES', count)
      }
    },
    [count]
  )
  const handleCloseClick = useCallback(function () {
    emit<CloseHandler>('CLOSE')
  }, [])
  return (
    <Container>
      <VerticalSpace space="large" />
      <Text muted>Count</Text>
      <VerticalSpace space="small" />
      <TextboxNumeric
        onNumericValueInput={setCount}
        onValueInput={setCountString}
        value={countString}
      />
      <VerticalSpace space="extraLarge" />
      <Columns space="extraSmall">
        <Button fullWidth onClick={handleCreateRectanglesClick}>
          Create
        </Button>
        <Button fullWidth onClick={handleCloseClick} secondary>
          Close
        </Button>
      </Columns>
      <VerticalSpace space="small" />
    </Container>
  )
}

export default render(Plugin)
