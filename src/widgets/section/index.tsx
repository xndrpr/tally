import { SectionSC, SectionTitle } from "./styled";

interface Props {
    title: string;
    children: React.ReactNode;
}

export const Section = ({ title, children }: Props) => {
    return (
        <SectionSC>
            <SectionTitle>{title}</SectionTitle>
            <div>{children}</div>
        </SectionSC>
    );
};
