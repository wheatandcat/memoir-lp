import ExampleItem from "@components/molecules/Top/ExampleItem";
import ExampleItemSP from "@components/molecules/Top/ExampleItemSP";

const Example = () => {
    return (
        <div className="flex flex-col justify-center items-center p-0 sm:p-16 pt-8">
            <div className="text-4xl sm:text-3xl leading-relaxed text-center">
                たとえば、 <br className="block sm:hidden" />
                こんな使い方
            </div>
            <div className="hidden sm:block w-full max-w-3xl">
                <ExampleItem
                    title={
                        <>
                            毎日がなんとなく
                            <br />
                            過ぎていくあなたへ
                        </>
                    }
                    description={
                        <>
                            ごはんを食べた、水を飲んだ、散歩をした…。
                            <br />
                            まずはどんな小さなことでも構いません、memoirに記録してみてください。
                            <br />
                            一日の終わりには、たくさんのタスクをこなしたことに気がつくでしょう。
                            <br />
                            あなたはなまけているわけではありません、ただ忙しすぎるだけなのです。
                            <br />
                            <br />
                            さあ、完了したタスクの山を定期的に見返して、自分の努力を讃えましょう！
                        </>
                    }
                    color="green"
                />
                <ExampleItem
                    title={
                        <>
                            今年のよかった出来事を
                            <br />
                            ジャンルごとに表示
                        </>
                    }
                    description={
                        <>
                            ソート機能を使えば <br />
                            ・ユーザー <br />
                            ・カテゴリ <br />
                            ・グッド or バッド <br />
                            で完了したタスクをまとめて表示することができます。 <br />
                            今月はどんなドラマや映画を観たっけ？ <br />
                            思い出したいときはmemoirにおまかせ！
                        </>
                    }
                    color="red"
                />
                <ExampleItem
                    title={
                        <>
                            どんなタスクをどのぐらい？
                            <br />
                            作業を可視化してシェア
                        </>
                    }
                    description={
                        <>
                            共有機能を使えば、いつどこで何をしたのかリアルタイムでシェアできます。
                            <br />
                            誰がいつどんなタスクをやったか確認できれば、
                            <br />
                            相手の不安や心配はどんどん消えることでしょう！
                            <br />
                            {false && (
                                <>
                                    おや？毎回文字を打って記録するのが面倒？
                                    <br />
                                    ランチや昼休み、お散歩の時間など、ルーチンをカスタム登録することもできます。
                                </>
                            )}
                            <br />
                            時間になったら通知を飛ばしますので、タスクを完了したか教えてください。
                            <br />
                            わたしたちが代わりに登録しておきます。
                        </>
                    }
                    color="blue"
                />
            </div>
            <div className="block sm:hidden">
                <ExampleItemSP />
            </div>
        </div>
    );
};

export default Example;
