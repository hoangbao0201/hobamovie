import Link from "next/link"
import { ReactNode } from "react"

interface WrapperLayout {
    children: ReactNode
}

export const WrapperLayout = ({ children } : WrapperLayout) => {

    return (
        <div className="w-full my-4">
            <div className="grid max-w-5xl px-4 py-4 mx-auto min-h-full dark:bg-slate-800">
                
                { children }

            </div>
        </div>
    )
}