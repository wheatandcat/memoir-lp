import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import IconItem from "@components/molecules/Top/IconItem";

const Description = () => {
    const matches = useMediaQuery("only screen and (min-width: 640px)");

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-center px-0 sm:px-10 mx-6 sm:mx-0 sm:bg-white-600 rounded-2xl">
                <div className="relative mt-2 sm:mt-12 mb-1 w-full md:w-3/5">
                    <div className="mb-10 sm:mb-0 text-2xl md:text-3xl leading-snug text-center sm:text-left">
                        タスクを記録して{!matches && <br />}可視化する、
                        <br />
                        行動ログのメモアプリです。
                    </div>
                    {!matches && (
                        <div className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Image src="/images/app_screen_01.svg" alt="app_screen" width={782 / 5} height={1584 / 5} />
                        </div>
                    )}

                    {matches && (
                        <div className="py-5 text-xs md:text-sm leading-relaxed">
                            「それで、今週何やったっけ」と思ったことはありませんか？
                            <br />
                            忙しく毎日を過ごしていると、細かいタスクはどんどん忘れられてしまいます。
                            <br />
                            何もしていない気がしたら、ぜひmemoirで細かいタスクを記録してください。
                            <br />
                            実はたくさんのタスクをこなしていることが、きっとわかるはずです！
                        </div>
                    )}

                    <div className="pt-52 sm:pt-0 pb-2 sm:pb-0 sm:my-8 mt-52 bg-white-300 sm:bg-transparent rounded-2xl">
                        <div className="flex flex-col sm:flex-row items-center mb-8">
                            <IconItem
                                imagePath="/images/bell.png"
                                title={matches ? <>ふりかえりリマインダー機能</> : <>リマインダー機能</>}
                                description={<>あなたはどんな一週間を過ごしたでしょう？</>}
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center mb-8">
                            <IconItem
                                imagePath="/images/task.png"
                                title={
                                    matches ? (
                                        <>ユーザー間でタスク共有が可能</>
                                    ) : (
                                        <>
                                            ユーザー間で
                                            <br />
                                            タスク共有が可能
                                        </>
                                    )
                                }
                                description={<>かんたん共有、非表示・解除もお手軽。</>}
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center mb-8">
                            <IconItem
                                imagePath="/images/doc.png"
                                title={
                                    matches ? (
                                        <>画像変換可能、かんたんシェア</>
                                    ) : (
                                        <>
                                            画像変換可能、
                                            <br />
                                            かんたんシェア
                                        </>
                                    )
                                }
                                description={<>タスクを画像にして一覧化、SNSやブログ、日記アプリにペタリ！</>}
                            />
                        </div>
                    </div>
                </div>
                {matches && (
                    <div className="pl-16 mt-5 w-2/5">
                        <Image src="/images/app_screen_01.svg" alt="app_screen" width={782 / 3} height={1584 / 3} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Description;
