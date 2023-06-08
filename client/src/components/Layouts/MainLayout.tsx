import { ReactNode } from "react"
import { Footer } from "../partials/Footer"
import { Header } from "../partials/Header"


interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout = ({ children } : MainLayoutProps) => {

    return (
        <>
            <Header /> 

            {children}

            <Footer /> 
        </>
    )
}