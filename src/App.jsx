import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loader from './components/ui/Loader/Loader'
import Home from './pages/Home'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
])

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader visible={loading} />
      <RouterProvider router={router} />
    </>
  )
}
