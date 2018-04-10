class Github {
  constructor() {
    this.client_id = '2bea65b591be2dbea6bd';
    this.client_secret = 'fbe95504f34f986d823679d1dcc0ada8f8cfde76';
    this.repos_count = 5; // limit the num of latest repos
    this.repos_sort = 'created: asc'; // put repos in asc order
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
