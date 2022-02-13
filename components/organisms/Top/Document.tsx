import Image from "next/image";
import DocumentItem from "@components/molecules/Top/DocumentItem";

const Document = () => {
    return (
        <div className="flex flex-col justify-center items-center p-20 mb-8 bg-white-300">
            <div className="text-3xl leading-snug text-center">開発関連資料</div>

            <div className="flex justify-center items-center my-5 w-full md:w-4/5 ">
                <div className="flex flex-col justify-center items-center w-1/3">
                    <div className="py-3">Code & Design</div>
                    <div className="flex items-center">
                        <DocumentItem
                            imagePath="/images/github.svg"
                            title="GitHub"
                            urlName="https://github.com/wheatandcat"
                            url="https://github.com/wheatandcat/memoir"
                        />
                        <DocumentItem
                            imagePath="/images/figma.svg"
                            title="Figma"
                            urlName="https://www.figma.com/file"
                            url="https://www.figma.com/file/cLruhS5vc5IQsvqoXYSyP8/memoir?node-id=1149%3A379"
                        />
                        <DocumentItem
                            imagePath="/images/expo.svg"
                            title="Expo"
                            urlName="https://expo.dev/@wheatandcat"
                            url="https://expo.dev/@wheatandcat/memoir"
                            imageSize={45}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-1/3">
                    <div className="py-3">Development log</div>
                    <div className="flex items-center">
                        <DocumentItem
                            imagePath="/images/zenn.svg"
                            title="Zenn"
                            urlName="https://zenn.dev/wheatandcat/scraps/"
                            url="https://zenn.dev/wheatandcat/scraps/78d2c5aa4c9435"
                            imageSize={55}
                        />
                        <DocumentItem
                            imagePath="/images/blog.svg"
                            title="開発ブログ"
                            urlName="https://www.wheatandcat.me/"
                            url="https://www.wheatandcat.me/"
                            imageSize={45}
                        />
                        <DocumentItem
                            imagePath="/images/memoir-icon.svg"
                            title="開発ドキュメント"
                            urlName="https://memoir-handbook-dot-memoir-review.an.r.appspot.com/#/"
                            url="https://memoir-handbook-dot-memoir-review.an.r.appspot.com/#/"
                            imageSize={45}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-1/3">
                    <div className="py-3">MediaKit</div>
                    <div className="flex items-center">
                        <DocumentItem
                            imagePath="/images/media-kit.svg"
                            title="メディアキット"
                            urlName="https://www.wheatandcat.me/"
                            url="https://www.wheatandcat.me/"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Document;
