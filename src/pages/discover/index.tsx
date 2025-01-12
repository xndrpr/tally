import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { currentRouteAtom } from "@/shared/atoms/current-route.atom";
import { BasePage } from "@/shared/ui/base-page/styled";
import { NavigationBar } from "@/widgets/navigation-bar";

export const DiscoverPage = () => {
    const setRoute = useSetAtom(currentRouteAtom);

    useEffect(() => {
        setRoute("discover");
    }, []);

    return (
        <BasePage>
            <NavigationBar />
        </BasePage>
    );
};
