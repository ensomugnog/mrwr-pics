import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 1-L_PQrOtJ3jV_7S43lt2XfCyE6GJhTaFiQOx8sbAxU'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;