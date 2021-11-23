import Image from "next/image";
import React from "react";

type Props = {
    imagePath: string;
    title: string;
    url: string;
    urlName: string;
    imageSize?: number;
};

const DocumentItem: React.FC<Props> = (props) => {
    return (
        <>
            <div className="flex justify-center items-center w-20">
                <Image src={props.imagePath} alt="document-icon" width={props.imageSize} height={props.imageSize} />
            </div>
            <div className="flex flex-col justify-center items-start w-44">
                <div className="pl-4 text-base sm:text-2xl md:text-lg">{props.title}</div>
                <div className="hidden sm:block pl-4 text-sm">
                    <a href={props.url}>{props.urlName}</a>
                </div>
            </div>
        </>
    );
};

DocumentItem.defaultProps = {
    imageSize: 65,
};

export default DocumentItem;
