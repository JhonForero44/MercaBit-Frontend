import axios from 'axios'

const API_URL = 'http://localhost:3000'

export const obtenerProductosActivos = async () => {
  const token = localStorage.getItem('token')

  const response = await axios.get(`${API_URL}/api/subastas/activas`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}

export const obtenerProductos = async () => {
  const token = localStorage.getItem('token')

  const response = await axios.get(`${API_URL}/api/subastas/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}

export const obtenerProductosPorID = async (id) => {
  const token = localStorage.getItem('token')

  const response = await axios.get(`${API_URL}/api/subastas/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}
