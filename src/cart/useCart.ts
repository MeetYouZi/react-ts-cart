import React, {useState} from 'react'

type CheckedMap = {
  [key: string]: boolean
}

export const useChecked = () => {
  const [ CheckedMap, setCheckedMap ] = useState({})
  return { CheckedMap }
}
