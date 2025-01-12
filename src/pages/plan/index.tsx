import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { currentRouteAtom } from "@/shared/atoms/current-route.atom";
import { BasePage } from "@/shared/ui/base-page/styled";
import { NavigationBar } from "@/widgets/navigation-bar";

export const PlanPage = () => {
    const setRoute = useSetAtom(currentRouteAtom);

    useEffect(() => {
        setRoute("plan");
    }, []);

    return (
        <BasePage>
            <NavigationBar />
        </BasePage>
    );
};
