export class Iso20022ParserClient {
  constructor(config = {}) {
    this.apiKey = config.apiKey || (typeof process !== 'undefined' ? process.env?.RAPIDAPI_KEY || '' : '');
    this.rapidApiHost = config.rapidApiHost || 'iso-20022-financial-message-parser-validator.p.rapidapi.com';
    this.baseUrl = config.baseUrl || `https://${this.rapidApiHost}`;
  }

  async request(endpoint, options = {}) {
    if (!this.apiKey) {
      return {
        success: false,
        error: 'RapidAPI API key is required. Obtain a key at: https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/iso-20022-financial-message-parser-validator',
        code: 'MISSING_API_KEY',
        subscribe_url: 'https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/iso-20022-financial-message-parser-validator'
      };
    }

    const cleanBase = this.baseUrl.replace(/\/+$/, '');
    const cleanPath = endpoint.replace(/^\/+/, '');
    const url = `${cleanBase}/${cleanPath}`;

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.rapidApiHost,
      ...(options.headers || {})
    };

    try {
      const response = await fetch(url, { ...options, headers });
      const data = await response.json();
      return data;
    } catch (err) {
      return {
        success: false,
        error: err?.message || 'Network request failed',
        code: 'NETWORK_ERROR',
        subscribe_url: 'https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/iso-20022-financial-message-parser-validator'
      };
    }
  }

  async getHealth() {
    return this.request('/health', { method: 'GET' });
  }

  async validate(payload) {
    return this.request('/api/v1/validate', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }
}

export default Iso20022ParserClient;
