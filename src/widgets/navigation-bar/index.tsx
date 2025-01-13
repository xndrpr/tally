import { Link, Links } from "./styled";
import { useAtomValue } from "jotai";
import { currentRouteAtom } from "@/shared/atoms/current-route.atom";
import DiscoverIcon from "@assets/icons/discover.svg?react";
import MeIcon from "@assets/icons/me.svg?react";
import PlanIcon from "@assets/icons/plan.svg?react";
import TrackIcon from "@assets/icons/track.svg?react";

export const NavigationBar = () => {
    const currentRoute = useAtomValue(currentRouteAtom);

    return (
        <Links>
            <Link href="/" $isActive={currentRoute === "discover"}>
                <DiscoverIcon />
                Discover
            </Link>
            <Link href="/track" $isActive={currentRoute === "track"}>
                <TrackIcon />
                Track
            </Link>
            <Link href="/plan" $isActive={currentRoute === "plan"}>
                <PlanIcon />
                Plan
            </Link>
            <Link href="/me" $isActive={currentRoute === "me"}>
                <MeIcon />
                Me
            </Link>
        </Links>
    );
};
