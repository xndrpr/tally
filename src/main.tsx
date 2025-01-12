import { App } from "./app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootElement = document.getElementById("root");
const queryClient = new QueryClient();

if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>,
);
