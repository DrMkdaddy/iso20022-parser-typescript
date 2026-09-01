export interface RapidApiConfig {
  apiKey?: string;
  baseUrl?: string;
  rapidApiHost?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  meta?: {
    latency_ms: number;
    version: string;
  };
}

export class Iso20022ParserClient {
  private apiKey: string;
  private baseUrl: string;
  private rapidApiHost: string;

  constructor(config: RapidApiConfig = {}) {
    this.apiKey = config.apiKey || (typeof process !== 'undefined' ? process.env?.RAPIDAPI_KEY || '' : '');
    this.baseUrl = config.baseUrl || (this.apiKey ? 'https://iso20022-parser.p.rapidapi.com' : 'https://iso20022-parser.alph4nir.workers.dev');
    this.rapidApiHost = config.rapidApiHost || 'iso20022-parser.p.rapidapi.com';
  }

  async request<T = any>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {})
    };

    if (this.apiKey) {
      headers['x-rapidapi-key'] = this.apiKey;
      headers['x-rapidapi-host'] = this.rapidApiHost;
    }

    const response = await fetch(url, {
      ...options,
      headers
    });

    return await response.json();
  }

  async getHealth() {
    return this.request('/health', { method: 'GET' });
  }

  async validate(payload: Record<string, any>) {
    return this.request('/api/v1/validate', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }
}

function toPascalCase(str: string) {
  return str.replace(/(^\w|-\w)/g, clearAndUpper);
}
function clearAndUpper(text: string) {
  return text.replace(/-/, "").toUpperCase();
}

export default Iso20022ParserClient;
