import React from 'react'

import Navbar from '../pages/Navbar'

const FiltersData = (props) => {
  const totaldata = [{}]
  const fruitsdata = [{}]
  const vegetablesdata = [{}]
  const leafyvegetablesdata = [{}]
  const grainsdata = [{}]

  // console.log(props.freshmartdata)
  props.freshmartdata.map((item) => {
    totaldata.push({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      category: item.category,
      quantity: item.quantity,
    })
    return totaldata
  })

  props.freshmartdata.map((item) => {
    if (item.category === 'fruits') {
      fruitsdata.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        category: item.category,
        quantity: item.quantity,
      })
    }
    return fruitsdata
  })

  props.freshmartdata.map((item) => {
    if (item.category === 'grains') {
      grainsdata.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        category: item.category,
        quantity: item.quantity,
      })
    }
    return grainsdata
  })

  props.freshmartdata.map((item) => {
    if (item.category === 'vegetable') {
      vegetablesdata.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        category: item.category,
        quantity: item.quantity,
      })
    }
    return vegetablesdata
  })

  props.freshmartdata.map((item) => {
    if (item.category === 'leafy vegetables') {
      leafyvegetablesdata.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        category: item.category,
        quantity: item.quantity,
      })
    }
    return leafyvegetablesdata
  })
  totaldata.splice(0, 1)
  fruitsdata.splice(0, 1)
  vegetablesdata.splice(0, 1)
  leafyvegetablesdata.splice(0, 1)
  grainsdata.splice(0, 1)

  return (
    <div>
      <Navbar
        filterdata={{
          totaldata,
          fruitsdata,
          vegetablesdata,
          leafyvegetablesdata,
          grainsdata,
        }}
      />
    </div>
  )
}

export default FiltersData
