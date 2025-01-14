import { css } from "@emotion/react";

export const globalStyles = css`
    @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: Inter, sans-serif;
    }

    :root {
        color: #fff;
        background: #0f0f0f;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    ::-webkit-scrollbar-track {
        background: #000;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
