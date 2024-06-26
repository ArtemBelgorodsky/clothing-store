import { Button } from '@/components'
import * as Styles from './styles'
import { BuyButtonsProps } from './types'

export function BuyButtons (props: BuyButtonsProps) {
  const { 
    disabled = true,
    onBuy 
  } = props

  return (
    <Styles.Container>
      <Button 
        onClick={onBuy} 
        disabled={disabled} 
        fullWidth
      >Добавить в корзину</Button>
    </Styles.Container>
  )
}