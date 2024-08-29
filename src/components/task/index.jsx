import React from 'react'
import Input from '../input'
import Button from '../button'

function Task({task}) {
  return (
    <li>
      <Input tipo={'checkbox'}></Input>
      <span>{task}</span>
      <Button title={<i className="fa-solid fa-trash"></i>}></Button>
    </li>
  )
}

export default Task