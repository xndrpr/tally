import { Link, Links } from "./styled";
import { useAtomValue } from "jotai";
import { currentRouteAtom } from "@/shared/atoms/current-route.atom";
import DiscoverIcon from "@assets/icons/discover.svg?react";
import MeIcon from "@assets/icons/me.svg?react";
import PlanIcon from "@assets/icons/plan.svg?react";
import TrackIcon from "@assets/icons/track.svg?react";

interface Tab {
    key: string;
    label: string;
    icon: JSX.Element;
    href: string;
}

export const NavigationBar = () => {
    const tabs: Tab[] = [
        {
            key: "discover",
            label: "Discover",
            icon: <DiscoverIcon />,
            href: "/",
        },
        {
            key: "track",
            label: "Track",
            icon: <TrackIcon />,
            href: "/track",
        },
        {
            key: "plan",
            label: "Plan",
            icon: <PlanIcon />,
            href: "/plan",
        },
        {
            key: "me",
            label: "Me",
            icon: <MeIcon />,
            href: "/me",
        },
    ];
    const currentRoute = useAtomValue(currentRouteAtom);

    return (
        <Links>
            {tabs.map(({ key, label, icon, href }) => (
                <Link href={href} key={key} $isActive={currentRoute === key}>
                    {icon}
                    {label}
                </Link>
            ))}
        </Links>
    );
};
