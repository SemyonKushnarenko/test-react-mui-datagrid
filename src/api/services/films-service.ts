import { PaginatedFilms, PaginationParams } from "../../types";
import { axiosClient } from "../client/axios-client";
import { FilmsEndpoints } from "../endpoints";

export class FilmsService {
    static async getFilms(params?: PaginationParams): Promise<PaginatedFilms> {
      const queryParams = params
        ? new URLSearchParams({
            page: params.page.toString(),
            limit: params.limit.toString(),
          }).toString()
        : '';
        
      const response = await axiosClient.get(FilmsEndpoints.getAll(queryParams));
      return response.data;
    }
}