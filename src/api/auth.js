import axios from 'axios'

export const register = async (data) => {
  const response = await axios.post(
    'http://localhost:8000/api/auth/register',
    data
  )

  return response.data
}