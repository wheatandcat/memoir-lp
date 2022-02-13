import React, { ReactNode } from "react";

type Props = {
    title: ReactNode;
    description: ReactNode;
};

const ExampleItem: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col sm:flex-row p-8 mt-10 w-full max-w-4xl bg-white-300 sm:rounded-xl">
            <div className="sm:w-3/5">
                <div className="pb-6 text-2xl leading-relaxed">{props.title}</div>
                <div className=" text-xs leading-relaxed">{props.description}</div>
            </div>
            <div className="px-8 sm:w-2/5">イラスト</div>
        </div>
    );
};

export default ExampleItem;
