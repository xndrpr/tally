import { atom } from "jotai";

export type CurrentRoute = "movies" | "tv-shows";

export const currentRouteAtom = atom<CurrentRoute>("movies");
