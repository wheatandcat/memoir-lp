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
            <div className="flex justify-center items-center p-3 w-16 h-16 bg-primary-600 rounded-full">
                <Image src={props.imagePath} alt="icon" width={35} height={35} />
            </div>
            <div className="py-2 px-3">
                <div className="text-lg leading-snug">{props.title}</div>
                <div className="pt-1 text-xs leading-snug">{props.description}</div>
            </div>
        </>
    );
};

export default IconItem;
