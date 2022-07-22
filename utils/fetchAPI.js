import axios from 'axios'

export const baseURL = 'https://bayut.p.rapidapi.com'

export const fetchAPI = async url => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': process.env.bayutkey,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        },
    })

    return data
}
