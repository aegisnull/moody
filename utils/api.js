class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  //GET https://data.mongodb-api.com/app/data-osktx/endpoint/stories
  getStories() {
    return fetch(`${this._baseUrl}/stories`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((data) => {
        return data;
      });
  }
}

const api = new Api({
  baseUrl: "https://data.mongodb-api.com/app/data-osktx/endpoint",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
