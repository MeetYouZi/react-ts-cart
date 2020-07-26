import React from 'react'
import { Button } from 'antd'
import Cart from './cart'

const App: React.FC = () => {
  return (
    <div className="App">
      <Cart></Cart>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
