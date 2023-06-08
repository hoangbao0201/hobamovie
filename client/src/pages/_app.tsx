import useScrollRestoration from "@/hook/useScrollRestoration";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Fragment, ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithlayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps, router }: AppPropsWithlayout) {


    useScrollRestoration(router);

    const getLayout =
        Component.getLayout ||
        ((page) => {
            return <Fragment>{page}</Fragment>;
        });

    return <>{getLayout(<Component {...pageProps} />)}</>;
}
