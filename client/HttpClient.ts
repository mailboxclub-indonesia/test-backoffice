import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { Store } from "./Store";

export class HttpClient {
  protected authorization: string | null = null;
  protected instance: AxiosInstance;

  constructor(baseUrl: string) {
    this.instance = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.setupInterceptors();
  }

  public setAuthorization(token: string): void {
    this.authorization = `Bearer ${token}`;
  }

  public getAuthorization(): string | null {
    return this.authorization;
  }

  private setupInterceptors(): void {
    // Request interceptor (e.g., to add authorization tokens)
    this.instance.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] = `Bearer ${Store.token}`;
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );

    // Response interceptor (e.g., to handle responses globally)
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }

  // Error handling
  private handleError(error: AxiosError): any {
    // You can implement error handling logic here
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error(
        `Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`,
      );
    } else if (error.request) {
      // No response was received from the server
    } else {
      // Something else triggered the error
      console.error("Error", error.message);
    }
    return Promise.reject(error);
  }

  // Generic GET method
  public async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.get(url);
      return response.data;
    } catch (error) {
      return this.handleError(error as AxiosError);
    }
  }

  // Generic POST method
  public async post<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.post(url, data);
      return response.data;
    } catch (error) {
      return this.handleError(error as AxiosError);
    }
  }

  // Generic PUT method
  public async put<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.put(url, data);
      return response.data;
    } catch (error) {
      return this.handleError(error as AxiosError);
    }
  }

  // Generic DELETE method
  public async delete<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.delete(url);
      return response.data;
    } catch (error) {
      return this.handleError(error as AxiosError);
    }
  }
}
