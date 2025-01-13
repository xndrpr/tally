import { atom } from "jotai";

export type CurrentRoute = "discover" | "track" | "plan" | "me";

export const currentRouteAtom = atom<CurrentRoute>("discover");
