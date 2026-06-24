import React from 'react'

const List = () => {
    const fruits=
    [
        {name: "apple", id:1},
        {name: "grape", id:2},
        {name: "peach", id:3},
        {name: "orange", id:4},
    ]
    const meva=mevalar.map(meva=> <li>{meva.name}</li>)
  return (
    <ul>
        {meva}
    </ul>
  )
}

export default List