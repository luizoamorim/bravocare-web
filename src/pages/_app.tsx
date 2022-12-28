import "../../styles/globals.css";

import type { AppProps } from "next/app";
import { ShiftsContextProvider } from "../contexts/ShiftsContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ShiftsContextProvider>
            <Component {...pageProps} />
        </ShiftsContextProvider>
    );
}
