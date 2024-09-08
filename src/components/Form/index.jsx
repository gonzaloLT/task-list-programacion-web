import React from 'react'

function Form() {

  return (
    <form action="" onSubmit={e => e.preventDefault}>
        <input type="text" />
        <input type="submit" />
    </form>
  )
}

export default Form;