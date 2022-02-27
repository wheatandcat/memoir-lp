import Link from "next/link";
import React from "react";

type LinkItem = {
    label: string;
    url: string;
    app: boolean;
};

type Props = {
    title: string;
    linkItems: LinkItem[];
};

const LinkItems: React.FC<Props> = (props) => {
    return (
        <div className="my-4 mx-8 sm:mx-16 leading-loose">
            <div>
                <div className="text-xl">{props.title}</div>
            </div>
            <div className="pt-2 text-sm leading-8">
                {props.linkItems.map((v) => {
                    if (v.app) {
                        return (
                            <Link key={v.label} href={v.url} passHref>
                                <a>{v.label}</a>
                            </Link>
                        );
                    }

                    return (
                        <div key={v.label}>
                            <a href={v.url} target="_blank" rel="noreferrer noopener">
                                {v.label}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LinkItems;
