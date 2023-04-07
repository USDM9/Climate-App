import { useEffect, useState } from 'react'
import { Loading } from './Loading'
import styles from './weatherApp.module.css'
import { WeatherForm } from './WeatherForm'
import { WeatherMainInfo } from './WeatherInfo'

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadinfo()
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name}`
  }, [weather])

  const loadinfo = async (city = 'london') => {
    try {
      const request = await fetch(`${import.meta.env.VITE_REACT_APP_URL}&key=${import.meta.env.VITE_API_KEY}&q=${city}`)

      const json = await request.json()

      setTimeout(() => {
        setWeather(json)
      }, 300)
    } catch (error) {

    }
  }

  const handleChangeCity = (city) => {
    setWeather(null)
    loadinfo(city)
  }
  console.log(weather)
  return (
    <main className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}

    </main>
  )
}
