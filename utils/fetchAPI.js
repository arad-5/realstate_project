import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com';

export const fetchAPI = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key':
                'd29eaf4539mshe174e53d45b4985p14e53fjsna839bf2d6994',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        },
    });

    return data;
};
