import { createRoot } from 'react-dom/client'
import { WeatherApp } from './components/WeatherApp'
import '../index.css'
const root = createRoot(document.getElementById('app'))

root.render(
  <WeatherApp />
)
