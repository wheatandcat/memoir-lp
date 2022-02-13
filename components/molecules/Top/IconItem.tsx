import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
    imagePath: string;
    title: ReactNode;
    description: ReactNode;
};

const IconItem: React.FC<Props> = (props) => {
    return (
        <>
            <div className="flex sm:hidden justify-center items-center p-3 w-14 sm:w-16 h-14 sm:h-16 bg-primary-600 rounded-full">
                <Image src={props.imagePath} alt="icon" width={30} height={30} />
            </div>
            <div className="hidden sm:flex justify-center items-center p-3 w-14 sm:w-16 h-14 sm:h-16 bg-primary-600 rounded-full">
                <Image src={props.imagePath} alt="icon" width={35} height={35} />
            </div>
            <div className="py-4 sm:py-2 px-3">
                <div className="text-2xl sm:text-lg leading-snug text-center sm:text-left">{props.title}</div>
                <div className="hidden sm:block pt-1 text-xs leading-snug">{props.description}</div>
            </div>
        </>
    );
};

export default IconItem;
