const api = {
  async getCharacters(page){
    const options = {
      headers:{
        'Content-Type': 'application/json'
      }
    };
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`
    const results = await fetch(url, options);
    const data = await results.json();
    return data;
  }
}

export default api;