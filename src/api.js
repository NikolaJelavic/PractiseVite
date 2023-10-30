import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID -Qnq5lcxexSUapUq3P2j8DxeCaz0JLA6IpjR-xIwoLA'
        },
        params:{
            query: term
        }
    });
    console.log(response.data.results);
    return response.data.results;
};

export default searchImages;