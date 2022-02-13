import Image from "next/image";
import IconItem from "@components/molecules/Top/IconItem";

const Description = () => {
    return (
        <div className="flex flex-row justify-center px-10 bg-white-600 rounded-xl">
            <div className="mt-12 mb-1 w-full md:w-3/5">
                <div className="text-2xl md:text-3xl leading-snug">
                    タスクを記録して可視化する、
                    <br />
                    行動ログのメモアプリです。
                </div>
                <div className="py-5 text-xs md:text-sm leading-relaxed">
                    「それで、今週何やったっけ」と思ったことはありませんか？
                    <br />
                    忙しく毎日を過ごしていると、細かいタスクはどんどん忘れられてしまいます。
                    <br />
                    何もしていない気がしたら、ぜひmemoirで細かいタスクを記録してください。
                    <br />
                    実はたくさんのタスクをこなしていることが、きっとわかるはずです！
                </div>
                <div className="my-8">
                    <div className="flex items-center mb-8">
                        <IconItem
                            imagePath="/images/bell.png"
                            title={<>ふりかえりリマインダー機能</>}
                            description={<>あなたはどんな一週間を過ごしたでしょう？</>}
                        />
                    </div>
                    <div className="flex items-center mb-8">
                        <IconItem
                            imagePath="/images/task.png"
                            title={<>ユーザー間でタスク共有が可能</>}
                            description={<>かんたん共有、非表示・解除もお手軽。</>}
                        />
                    </div>
                    <div className="flex items-center mb-8">
                        <IconItem
                            imagePath="/images/doc.png"
                            title={<>画像変換可能、かんたんシェア</>}
                            description={<>タスクを画像にして一覧化、SNSやブログ、日記アプリにペタリ！</>}
                        />
                    </div>
                </div>
            </div>
            <div className="pl-16 mt-5 w-2/5">
                <Image src="/images/app_screen_01.svg" alt="app_screen" width={782 / 3} height={1584 / 3} />
            </div>
        </div>
    );
};

export default Description;
