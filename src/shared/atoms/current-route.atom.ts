import { atom } from "jotai";

export type CurrenRoute = "discover" | "track" | "plan" | "me";

export const currentRouteAtom = atom("discover");
