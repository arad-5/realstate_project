import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com';

export const fetchAPI = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '3adba2816amshac27ee04c9dd80bp117ca2jsnc419b820a1cb'
        },
    });

    return data;
};

