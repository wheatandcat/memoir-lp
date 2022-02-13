import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
    imagePath: string;
    title: ReactNode;
    description: ReactNode;
};

const IconItem: React.FC<Props> = (props) => {
    const matches = useMediaQuery("only screen and (min-width: 640px)");

    return (
        <>
            <div className="flex justify-center items-center p-3 w-14 sm:w-16 h-14 sm:h-16 bg-primary-600 rounded-full">
                <Image src={props.imagePath} alt="icon" width={matches ? 35 : 30} height={matches ? 35 : 30} />
            </div>
            <div className="py-4 sm:py-2 px-3">
                <div className="text-2xl sm:text-lg leading-snug text-center sm:text-left">{props.title}</div>
                {matches && <div className="pt-1 text-xs leading-snug">{props.description}</div>}
            </div>
        </>
    );
};

export default IconItem;
