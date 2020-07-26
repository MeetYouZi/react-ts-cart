import React, { useMemo} from 'react'
import { Typography } from 'antd'
import { CartItem } from './index'

interface Props {
  item: CartItem,
  checked: boolean
}
const ItemCard = React.memo((props: Props) => {
  console.log('cart item rerender')
  const { item, checked } = props
  const { name, price } = item

  const onWrapCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
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
