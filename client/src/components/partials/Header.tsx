import Link from "next/link"


export const Header = () => {

    return (
        <header className="w-full dark:bg-slate-800">
            <div className="max-w-5xl px-4 mx-auto flex items-center h-10">
                
                <Link href="/">
                    <h1>HOBAMOVIE</h1>
                </Link>

            </div>
        </header>
    )
}