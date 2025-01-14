import { Movie } from "../api/types/movie";
import { atom } from "jotai";

export const currentMovieAtom = atom<Movie | null>(null);
