import Image from "next/image";

const Promotion = () => {
    return (
        <div className="flex flex-col justify-center items-center py-48 bg-center bg-no-repeat bg-cover bg-app-background">
            <div className="text-2xl md:text-3xl leading-relaxed text-center text-white-300">
                広告は一切なし、 <br />
                機能はすべて無料で使えます
            </div>
            <br />
            <br />
            <div className="text-xs md:text-sm leading-relaxed text-center text-white-300">
                memoirは技術的な成長を目的に個人が開発・デザインしています。
            </div>

            <div className="flex pt-10 mt-4">
                <div className="mr-5">
                    <a
                        href="https://apps.apple.com/jp/app/memoir/id1613532672"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Apple Store"
                    >
                        <Image src="/images/ios.svg" alt="iOS" width={180} height={50} />
                    </a>
                </div>
                <div>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.wheatandcat.memoir"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Google Play"
                    >
                        <Image src="/images/android.svg" alt="Android" width={180} height={50} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
