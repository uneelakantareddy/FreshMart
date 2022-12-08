import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { NavLink } from 'react-router-dom'
import FiltersData from '../Layout/FiltersData'
import './FreshmartData.scss'

const FreshmartData = () => {
  const [freshmartData, setFreshmartData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios
      .get('https://freshmart-92e8c-default-rtdb.firebaseio.com/items.json')
      .then((response) => {
        const fetechedData = []
        for (let key in response.data) {
          fetechedData.push({ ...response.data[key] })
        }
        setFreshmartData(fetechedData)
        setLoading(true)
      })
  }, [])

  if (loading === false) {
    return <h1 className="loader">Loading...</h1>
  }

  return (
    <React.Fragment>
      {<FiltersData freshmartdata={freshmartData} />}
      {/* {<ContentDisplay freshmartData={freshmartData} />} */}
    </React.Fragment>
  )
}

export default FreshmartData
