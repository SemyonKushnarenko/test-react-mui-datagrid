import { useQuery } from "@tanstack/react-query";
import { FilmsService } from "../../services/films-service";

export const useGetFilms = () =>
    useQuery({
        queryKey: ["GET_FILMS"],
        queryFn: () => FilmsService.getFilms(),
        staleTime: 1000 * 60 * 5,
    });