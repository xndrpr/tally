import { Content, Layout } from "./styled";
import { Title } from "./ui/title";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CurrentRoute, currentRouteAtom } from "@/shared/atoms/current-route.atom";
import { NavigationBar } from "@/widgets/navigation-bar";

export const BasePage = ({ children }: { children: React.ReactNode }) => {
    const setRoute = useSetAtom(currentRouteAtom);
    const path = useLocation().pathname;

    useEffect(() => {
        setRoute(path === "/" ? "movies" : (path.slice(1) as CurrentRoute));
    }, []);

    return (
        <Layout>
            <Title />
            <Content>{children}</Content>
            <NavigationBar />
        </Layout>
    );
};
