import React, { useState } from 'react'

export const Input = ({ placeholder, name }) => {
  const [value, setValue] = useState('')

  return (
    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} name={name} />
  )
}
