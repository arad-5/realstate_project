import axios from 'axios'

export const baseURL = 'https://bayut.p.rapidapi.com'

export const fetchAPI = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'd5cbf0ca58mshf20cb6727c5ad8cp15c308jsn4396ee0afee2',
        },
    })

    return data
}
