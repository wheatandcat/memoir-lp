import React from "react";

type Props = {};

const url = "https://memoir-app.dev/";
const title = "memoir";
const description = "終わったタスク、積み上げよう。1週間を振り返るアプリ。";
const imgUrl =
    "https://firebasestorage.googleapis.com/v0/b/memoir-review.appspot.com/o/icons%2Fogp.png?alt=media&token=19a07b18-536f-4eff-b7f2-d4613aa2d25d";

const Meta: React.FC<Props> = () => {
    return (
        <>
            <meta name="description" content="" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={imgUrl} />
        </>
    );
};

export default Meta;
