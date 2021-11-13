import Image from "next/image";
import IconItem from "@components/molecules/Top/IconItem";

const Promotion = () => {
    return (
        <div className="flex flex-col justify-center items-center p-16 my-8 bg-white-900 rounded-xl">
            <div className="text-3xl leading-snug text-center">
                広告は一切なし、 <br />
                機能はすべて無料で使えます
            </div>
            <br />
            <div className="text-sm leading-6 text-center">
                memoirは技術的な成長を目的に個人が開発・デザインしています。
                <br />
                スポンサーは随時募集しています、お問い合わせからご連絡ください。 <br />
                *2022年1月現在
            </div>
            <div className="flex pt-10 mt-4">
                <div className="mr-5">
                    <Image src="/images/ios.svg" alt="iOS" width={180} height={50} />
                </div>
                <div>
                    <Image src="/images/android.svg" alt="Android" width={180} height={50} />
                </div>
            </div>
        </div>
    );
};

export default Promotion;
