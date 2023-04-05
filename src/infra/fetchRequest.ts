class FetchRequest {
  controller: AbortController;
  signal: AbortSignal;
  baseUrl = '/portal/api';
  constructor() {
    this.controller = new AbortController();
    this.signal = this.controller.signal;
  }
  get fetch() {
    return (input: RequestInfo | URL, init: RequestInit = {}) => {
      const config = { signal: this.signal, ...init };
      return fetch(this.baseUrl + input, config);
    };
  }
  async get(url: RequestInfo | URL) {
    const res = await this.fetch(url);
    return await res.json();
  }
  async post(url: RequestInfo | URL, data: JSON) {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const res = await this.fetch(url, config);
    return await res.json();
  }
  abort() {
    this.controller.abort();
  }
}

export default FetchRequest;
