export interface RapidApiConfig {
  /**
   * RapidAPI Proxy Key ('x-rapidapi-key').
   * Required to authenticate requests via RapidAPI.
   * Obtain your dedicated API key at: https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/iso-20022-financial-message-parser-validator
   */
  apiKey?: string;
  /**
   * Custom endpoint URL override. Defaults to 'https://iso-20022-financial-message-parser-validator.p.rapidapi.com'.
   */
  baseUrl?: string;
  /**
   * RapidAPI Host header. Defaults to 'iso-20022-financial-message-parser-validator.p.rapidapi.com'.
   */
  rapidApiHost?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  subscribe_url?: string;
  upgrade_url?: string;
  meta?: {
    latency_ms: number;
    version: string;
  };
}

export declare class Iso20022ParserClient {
  constructor(config?: RapidApiConfig);
  /**
   * Send an authenticated request to RapidAPI Hub.
   */
  request<T = any>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>>;
  /**
   * Check API health and latency.
   */
  getHealth(): Promise<ApiResponse<{ status: string; timestamp: string }>>;
  /**
   * Validate or parse payload via RapidAPI.
   */
  validate<T = any>(payload: Record<string, any>): Promise<ApiResponse<T>>;
}

export default Iso20022ParserClient;
