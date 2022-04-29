import React, { ReactNode } from "react";
import styles from "../../../styles/Home.module.css";

type Props = {
    title: ReactNode;
    description: ReactNode;
    color: string;
};

const ExampleItem: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col sm:flex-row pl-8 mt-10 w-full max-w-4xl bg-white-300 sm:rounded-xl">
            <div className="py-8 sm:w-3/5">
                <div className="pb-6 text-2xl leading-relaxed">{props.title}</div>
                <div className=" text-xs leading-relaxed">{props.description}</div>
            </div>
            <div className="relative px-8 sm:w-2/5">
                <div className={`${styles.triangle1} sm:rounded-r-xl bg-${props.color}-200`} />
                <div className={`${styles.triangle2} sm:rounded-r-xl bg-${props.color}-400`} />
            </div>
        </div>
    );
};

export default ExampleItem;
