import React, { useMemo} from 'react'
import { Typography } from 'antd'
import { CartItem } from './index'

interface Props {
  item: CartItem,
  index: number,
  checked: boolean,
  onCheckedChange: OnCheckedChange<CartItem>
}

export type OnCheckedChange<T> = (cartItem: CartItem, index: number, b: boolean) => any

const ItemCard = React.memo((props: Props) => {
  console.log('cart item rerender')
  const { item, index, checked, onCheckedChange } = props
  const { name, price } = item

  const onWrapCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    onCheckedChange(item, index, checked)
  }

  return (
    <div className="item-card">
      <div className="checkbox-wrap">
        <input
          type="checkbox"
          checked={checked}
          onChange={onWrapCheckedChange}
        />
      </div>
      <p className="item-info">
        {name} <Typography.Text mark>${price}</Typography.Text>
      </p>
    </div>
  )
})

export default ItemCard
