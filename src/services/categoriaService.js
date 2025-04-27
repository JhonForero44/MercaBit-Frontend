import axios from 'axios'

const API_URL = 'http://localhost:3000' 

export const obtenerCategorias = async () => {
  const token = localStorage.getItem('token')

  const response = await axios.get(`${API_URL}/api/categorias`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data 
}

export const obtenerProductosPorCategori = async (id) => {
  const token = localStorage.getItem('token')

  const response = await axios.get(`${API_URL}/api/categorias/productos${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}