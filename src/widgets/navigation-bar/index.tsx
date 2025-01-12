import { Layout, Link, Links } from "./styled";
import ReactIcon from "@assets/icons/react.svg?react";

export const NavigationBar = () => {
    return (
        <Layout>
            <ReactIcon />
            <Links>
                <Link href="/">Discover</Link>
                <Link href="/track">Track</Link>
                <Link href="/plan">Plan</Link>
                <Link href="/me">Me</Link>
            </Links>
        </Layout>
    );
};
