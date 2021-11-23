import React from "react";

type LinkItem = {
    label: string;
    url: string;
};

type Props = {
    title: string;
    linkItems: LinkItem[];
};

const LinkItems: React.FC<Props> = (props) => {
    return (
        <div className="my-4 mx-16 leading-loose">
            <div>
                <div className="text-lg">{props.title}</div>
            </div>
            <div className="text-xs leading-7">
                {props.linkItems.map((v) => (
                    <div key={v.label}>{v.label}</div>
                ))}
            </div>
        </div>
    );
};

export default LinkItems;
