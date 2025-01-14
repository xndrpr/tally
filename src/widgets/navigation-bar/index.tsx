import { Link, Links, NavigationBarSC } from "./styled";
import { useAtomValue } from "jotai";
import { currentRouteAtom } from "@/shared/atoms/current-route.atom";
import MoviesIcon from "@assets/icons/movie.svg?react";
import TvShowsIcon from "@assets/icons/tv-show.svg?react";

interface Tab {
    key: string;
    label: string;
    icon: JSX.Element;
    href: string;
}

export const NavigationBar = () => {
    const tabs: Tab[] = [
        {
            key: "movies",
            label: "Movies",
            icon: <MoviesIcon />,
            href: "/",
        },
        {
            key: "tv-shows",
            label: "TV Shows",
            icon: <TvShowsIcon />,
            href: "/tv-shows",
        },
    ];
    const currentRoute = useAtomValue(currentRouteAtom);

    return (
        <NavigationBarSC>
            <Links $columns={tabs.length}>
                {tabs.map(({ key, label, icon, href }) => (
                    <Link href={href} key={key} $isActive={currentRoute === key}>
                        {icon}
                        {label}
                    </Link>
                ))}
            </Links>
        </NavigationBarSC>
    );
};
