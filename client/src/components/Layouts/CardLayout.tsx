import Image from "next/image";
import { useState } from "react";

import Link from "next/link";
import { imageCard } from "@/constants/data";
import { iconShowEye } from "../../../public/icons";

interface CardLayout {
    data: any
}

export const CardLayout = ({ data }: CardLayout) => {
    const [expanded, setExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsError(true);
        setIsLoading(false);
    };  

    return (
        <Link
            href="/"
            className="group rounded-md overflow-hidden dark:bg-slate-900 hover:shadow-md dark:hover:shadow-slate-600"
        >
            <div className="overflow-hidden flex items-center justify-center">
                {/* {
                    (isLoading || isError) ? <h1 className="font-semibold uppercase text-2xl">HOBANOVEL</h1> : (
                        
                    )
                } */}

                <Image
                    width={300}
                    height={400}
                    alt="image card"
                    src={data.url || imageCard}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    className="w-full max-h-60 object-cover block transition-all ease-in-out group-hover:scale-105"
                />
                
            </div>
            <div className="my-2 px-2">
                <h1 className="text-center line-clamp-2">
                    Lãnh Chúa Cầu Sinh: Từ Tàn Tạ Tiểu Viện Bắt Đầu Công Lược
                </h1>
                <div className="flex justify-center items-center">
                    {/* <RemoveRedEyeIcon sx={{ fontSize: 17 }} /> */}
                    <i className="w-4 h-3 block dark:fill-white">{iconShowEye}</i>
                    <span className="ml-2">503.881</span>
                </div>
            </div>
        </Link>
    );
};
