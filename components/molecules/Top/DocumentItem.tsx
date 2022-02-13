import Image from "next/image";
import React from "react";
import { Tooltip } from "@components/molecules/Tooltip/Tooltip";

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
            <div className="mx-2">
                <Tooltip tooltipText={props.title}>
                    <a href={props.url} aria-label={props.title} target="_blank" rel="noreferrer noopener">
                        <Image
                            src={props.imagePath}
                            alt="document-icon"
                            width={props.imageSize}
                            height={props.imageSize}
                        />
                    </a>
                </Tooltip>
            </div>
        </>
    );
};

DocumentItem.defaultProps = {
    imageSize: 65,
};

export default DocumentItem;
