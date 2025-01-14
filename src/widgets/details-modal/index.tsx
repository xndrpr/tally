import { CloseButton, DetailModalSC, Header, Overview, Poster, Title } from "./styled";
import { useAtom } from "jotai";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import React from "react";
import { currentMovieAtom } from "@/shared/atoms/current-movie.atom";
import { useClickOutside } from "@/shared/hooks/use-click-outside";
import CrossIcon from "@assets/icons/cross.svg?react";

export const DetailsModal = () => {
    const [currentMovie, setCurrentMovie] = useAtom(currentMovieAtom);

    const closeModal = () => setCurrentMovie(null);

    const ref = React.useRef<HTMLDivElement>(null);
    useClickOutside(ref, closeModal);

    return (
        <AnimatePresence>
            {currentMovie && (
                <motion.div
                    ref={ref}
                    initial={{
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "calc(100vh - 68px)",
                        transform: "translateY(100%) scale(0.9)",
                        opacity: 0,
                        overflow: "hidden",
                    }}
                    animate={{
                        transform: "translateY(0%) scale(1)",
                        opacity: 1,
                    }}
                    exit={{ opacity: 0, transform: "translateY(100%) scale(0.9)" }}
                >
                    <DetailModalSC
                        $image={`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}
                    >
                        <CloseButton onClick={closeModal}>
                            <CrossIcon />
                        </CloseButton>
                        <Header>
                            <Poster
                                src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`}
                                alt="Poster"
                            />
                            <Title>{currentMovie.title}</Title>
                        </Header>
                        <Overview>{currentMovie.overview}</Overview>
                    </DetailModalSC>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
