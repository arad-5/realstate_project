import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com';

export const fetchAPI = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key':
                '01c4a186a9msh0afb58d0496820dp1f15bfjsn3d696be80943',
        },
    });

    return data;
};
