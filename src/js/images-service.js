// const baseUrl = 'https://restcountries.eu/rest/v2/all';
export default {
    page: 1,
    query: '',
    fetchImages(query) {
        const options = {
            headers: {
                Autorization: '17463048-1bad905815e37f05ce3b4d0af',
            }
        }
        const requestParams = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${options.headers.Autorization}`
        return fetch(requestParams)
        .then(response => {
            this.incrementPage()
            return response.json()
        }

        ).catch(error => {})
    },
    get searchQuery() {
        return this.query;
    },
    set searchQuery(string) {
        this.query = string;
    },
    incrementPage() {
        this.page += 1
    },
    resetPage() {
        this.page = 1;
    }
}
