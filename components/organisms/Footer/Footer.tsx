import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import LinkItems from "@components/molecules/Footer/LinkItems";

const download = {
    title: "Download",
    linkItems: [
        {
            label: "Apple Store",
            url: "",
        },
        {
            label: "Play Store",
            url: "",
        },
    ],
};

const service = {
    title: "Service",
    linkItems: [
        {
            label: "ヘルプ",
            url: "",
        },
    ],
};

const development = {
    title: "Development",
    linkItems: [
        {
            label: "GitHub",
            url: "https://github.com/wheatandcat/memoir",
        },
        {
            label: "Figma",
            url: "https://www.figma.com/file/cLruhS5vc5IQsvqoXYSyP8/memoir?node-id=1149%3A379",
        },
        {
            label: "Expo",
            url: "https://expo.dev/@wheatandcat/memoir",
        },
    ],
};

const document = {
    title: "Document",
    linkItems: [
        {
            label: "Blog",
            url: "https://www.wheatandcat.me/",
        },
    ],
};

const rules = {
    title: "Rules",
    linkItems: [
        {
            label: "memoirとは",
            url: "",
        },
        {
            label: "利用規約",
            url: "",
        },
        {
            label: "プライパシーポリシー",
            url: "",
        },
    ],
};

const Footer = () => {
    return (
        <div className="container mx-auto">
            <div>
                <span className={styles.logo}>
                    <Image src="/logo2.svg" alt="Logo" width={128} height={37} />
                </span>
            </div>
            <div className="flex flex-wrap justify-start sm:justify-around mt-5">
                <div>
                    <LinkItems {...download} />
                    <LinkItems {...service} />
                </div>
                <div>
                    <LinkItems {...development} />
                </div>
                <div>
                    <LinkItems {...document} />
                </div>
                <div>
                    <LinkItems {...rules} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
