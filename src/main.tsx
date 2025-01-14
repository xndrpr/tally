import { App } from "./app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";

const rootElement = document.getElementById("root");
const queryClient = new QueryClient();

if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <SkeletonTheme
                baseColor="#2b2b2b"
                highlightColor="#3e3e3e"
                enableAnimation
                borderRadius={12}
            >
                <App />
            </SkeletonTheme>
        </QueryClientProvider>
    </StrictMode>,
);
