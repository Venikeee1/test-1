const articleApi = {
    fetchArticles() {
        return fetch('path-to-api').then(result => result.json())
    }
}

class ArticlesApiService {
    constructor(page) {
        this.page = page
    }

    fetchArticles() {
        articleApi.fetchUsers().then(({articles}) => {
            this.increment()
            return articles;
        })
    }

    increment() {
        this.page += 1;
    }
}

export default ArticlesApiService;