import { useState } from 'react'
import styles from './weatherForm.module.css'

export const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState('')

  const handleChange = (e) => {
    const value = e.target.value

    if (value !== '') {
      setCity(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onChangeCity(city)
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input className={styles.input} type='text' onChange={handleChange} />
    </form>
  )
}
