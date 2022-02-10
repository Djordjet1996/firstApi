class GitHub{
    constructor(){
        this.client_id = 'a1ec403a928dcc83b089';
        this.client_secret = '8dff73f090a8ae381b312c65656906444565acb2';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
             
        }
    }
}