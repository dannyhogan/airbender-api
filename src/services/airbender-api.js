const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const airbenderApi = {
    getAirbenders(search, searchPrefix) {
        let url = URL;

        const searchParams = new URLSearchParams();
        searchParams.set(searchPrefix, search);
        const query = searchParams.toString();
        url = `${URL}?${query}`;
            
        return fetch(url)
            .then(response => response.json());
    }
};

export default airbenderApi;