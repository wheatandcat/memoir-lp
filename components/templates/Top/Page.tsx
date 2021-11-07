import Image from "next/image";
import Header from "@components/organisms/Header/Header";

const Page = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-around items-center py-10 px-3">
                <div className="text-6xl font-bold tracking-wide leading-tight">
                    終わったタスク、
                    <br />
                    積み上げよう。
                </div>
                <div>
                    <Image src="/main.png" alt="Vercel Logo" width={1568 / 2} height={1298 / 2} />
                </div>
            </div>
        </div>
    );
};

export default Page;
