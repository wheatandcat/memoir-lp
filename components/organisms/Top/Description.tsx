import IconItem from "@components/molecules/Top/IconItem";

const Description = () => {
    return (
        <div className="flex flex-col md:flex-row p-5 md:p-10 my-8 bg-white-300 rounded-xl">
            <div className="w-full md:w-3/5">
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
                <div className="flex my-8">
                    <div className="flex flex-col items-center w-full md:w-2/5">
                        <IconItem
                            imagePath="/images/bell.png"
                            title={
                                <>
                                    ふりかえり
                                    <br />
                                    リマインダー機能
                                </>
                            }
                            description={
                                <>
                                    あなたはどんな
                                    <br />
                                    一週間を過ごしたでしょう？
                                </>
                            }
                        />
                    </div>
                    <div className="flex flex-col items-center w-full md:w-2/5">
                        <IconItem
                            imagePath="/images/task.png"
                            title={
                                <>
                                    ユーザー間で
                                    <br />
                                    タスク共有が可能
                                </>
                            }
                            description={
                                <>
                                    かんたん共有、
                                    <br />
                                    非表示・解除もお手軽。
                                </>
                            }
                        />
                    </div>
                </div>
                <div className="flex my-8">
                    <div className="flex flex-col items-center w-full md:w-2/5">
                        <IconItem
                            imagePath="/images/doc.png"
                            title={
                                <>
                                    画像変換可能
                                    <br />
                                    物理で保管
                                </>
                            }
                            description={
                                <>
                                    プリントアウトして
                                    <br />
                                    日記にペタリ！
                                </>
                            }
                        />
                    </div>
                    <div className="flex flex-col items-center w-full md:w-2/5">
                        <IconItem
                            imagePath="/images/doc.png"
                            title={
                                <>
                                    画像変換可能
                                    <br />
                                    物理で保管
                                </>
                            }
                            description={
                                <>
                                    プリントアウトして
                                    <br />
                                    日記にペタリ！
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="w-2/5">画像</div>
        </div>
    );
};

export default Description;
