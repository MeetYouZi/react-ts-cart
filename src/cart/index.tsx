import React, { useState } from 'react'
import ItemCard from './itemCard'
import { List, Typography, Divider } from 'antd'

export interface CartItem {
  id: number,
  name: string,
  price: number
}

const Cart: React.FC = () => {

  // const { list, setList } = useState([])

  const data = [
    {id: 0, name: '商品1', price: 200},
    {id: 1, name: '商品2', price: 100},
    {id: 2, name: '商品3', price: 400},
    {id: 3, name: '商品4', price: 400},
    {id: 4, name: '商品5', price: 300},
    {id: 5, name: '商品6', price: 600},
    {id: 6, name: '商品6', price: 600},
    {id: 7, name: '商品6', price: 600},
    {id: 8, name: '商品6', price: 600},
    {id: 9, name: '商品6', price: 600},
  ]

  const checkedAll = false

  const onWrapCheckedAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target,'eee')
  }

  const sumTotal = () => {}

  const checkedMap = {}

  // const sumTotal = (cartItems: CartItem[]) => {
  //   // console.log(cartItems, 'cartItems')
  //   // return cartItems.reduce((sum, cur) => sum + cur.price, 0)
  // }

  const total = sumTotal()

  const Footer = (
    <div className="footer">
      <div className="check-all">
        <input
          checked={checkedAll}
          onChange={onWrapCheckedAllChange}
          type="checkbox"
        />
        全选
      </div>
      <div>
        价格总计 <Typography.Text mark>${total}</Typography.Text>
      </div>
    </div>
  )

  return (
    <>
      <List
        size="small"
        header={<div>Header</div>}
        footer={Footer}
        bordered
        dataSource={data}
        renderItem={item => {
          // const checked = checkedMap[item.id] || false
          return (
            <List.Item>
              <ItemCard item={item} checked={false}></ItemCard>
            </List.Item>
          )
        }}
      />
    </>
  )
}

export default Cart
