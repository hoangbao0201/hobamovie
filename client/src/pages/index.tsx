import { GetServerSideProps } from "next";
import { ReactNode } from "react";

import dataFake from "@/dataFake.json"

import { MainLayout } from "@/components/Layouts/MainLayout";
import { WrapperLayout } from "@/components/Layouts/WrapperLayout";
import { CardLayout } from "@/components/Layouts/CardLayout";
import { PaginationLayout } from "@/components/Layouts/PaginationLayout";
import { useRouter } from "next/router";


interface HomePageProps {
    page: number
}

const HomePage = ({ page } : HomePageProps) => {
    const router = useRouter()

    const handlePageChange = (page : number) => {
        // const url = `?page=${page}`
        router.push(`?page=${String(page)}`)
    };
    
    return (
        <main>
            <WrapperLayout>
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mb-6">
                    {
                        dataFake.map(item => {
                            return <CardLayout data={item}/>
                        })
                    }
                </div>

                <div className="flex justify-center my-5">
                    <PaginationLayout countPage={20} currentPage={page || 1} handleChangePage={handlePageChange}/>
                </div>
            </WrapperLayout>
        </main>
    );
};

export default HomePage;

HomePage.getLayout = (page: ReactNode) => {
    return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps : GetServerSideProps = async (context) => {

    const { page = 1 } = context.query

    return {
        props: {
            page: Number(page) || 1
        }
    }
}