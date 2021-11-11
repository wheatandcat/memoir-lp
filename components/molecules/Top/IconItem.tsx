import Image from "next/image";
import React from "react";

type Props = {
    imagePath: string;
    title: string;
    description: string;
};

const IconItem: React.FC<Props> = (props) => {
    return (
        <>
            <div className="flex justify-center items-center p-3 w-16 h-16 bg-primary-600 rounded-full">
                <Image src={props.imagePath} alt="icon" width={50} height={50} />
            </div>
            <div className="p-2">
                <div className="text-lg leading-snug text-center">{props.title}</div>
                <div className="pt-2 text-xs leading-snug text-center">{props.description}</div>
            </div>
        </>
    );
};

export default IconItem;
