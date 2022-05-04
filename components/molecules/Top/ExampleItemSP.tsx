import React from "react";
import styles from "../../../styles/Home.module.css";

type Props = {};

const ExampleItem: React.FC<Props> = () => {
    return (
        <>
            <div className={styles.section1}>
                <div className="pb-6 text-2xl leading-relaxed">毎日に自信がないあなたへ</div>
                <div className="text-sm leading-relaxed">
                    ごはんを食べた、水を飲んだ、散歩をした…。
                    <br />
                    まずはどんな小さなことでも構いません、memoirに記録してみてください。一日の終わりには、たくさんのタスクをこなしたことに気がつくでしょう。
                    <br /> <br />
                    あなたはなまけているわけではありません、ただ忙しすぎるだけなのです。 <br />
                    さあ、完了したタスクの山を定期的に見返して、自分の努力を讃えましょう！
                </div>
            </div>
            <div className={styles.section2}>
                <div className="pb-6 text-2xl leading-relaxed">
                    今年のよかった出来事を
                    <br />
                    ジャンルごとに表示
                </div>
                <div className="text-sm leading-relaxed">
                    ソート機能を使えば
                    <br /> ・ユーザー
                    <br />
                    ・カテゴリ <br />
                    ・グッドorバッド <br />
                    で完了したタスクをまとめて表示することができます。 <br />
                    今月はどんなドラマや映画を観たっけ？ <br />
                    思い出したいときはmemoirにおまかせ！
                </div>
            </div>
            <div className={styles.section3}>
                <div className="pb-6 text-2xl leading-relaxed">
                    いつどこで何してたの？ <br />
                    質問にうんざりしている
                    <br />
                    あなたへ
                </div>
                <div className="text-sm leading-relaxed">
                    共有機能を使えば、いつどこで何をしたのかリアルタイムでシェアできます。
                    <br />
                    <div className="py-1" />
                    誰がいつどんなタスクをやったか確認できれば、 相手の不安や心配はどんどん消えてしまうことでしょう！{" "}
                    <br />
                    {false && (
                        <>
                            <div className="py-1" />
                            おや？毎回文字を打って記録するのが面倒？ <br /> <div className="py-1" />
                            ランチや昼休み、お散歩の時間など、ルーチンをカスタム登録することもできます。 <br />
                        </>
                    )}
                    <div className="py-1" />
                    時間になったら通知を飛ばしますので、タスクを完了したか教えてください。 <br />
                    <div className="py-1" />
                    わたしたちが代わりに登録しておきます！
                </div>
            </div>
        </>
    );
};

export default ExampleItem;
