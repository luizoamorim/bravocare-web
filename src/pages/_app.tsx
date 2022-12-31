import "../../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { IShiftView } from "../data";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer />
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3333/shifts`);
    const data: IShiftView[] = await res.json();

    return { pageProps: { data } };
}
