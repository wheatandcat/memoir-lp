import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import LinkItems from "@components/molecules/Footer/LinkItems";

const download = {
    title: "Download",
    linkItems: [
        {
            label: "Apple Store",
            url: "",
            app: false,
        },
        {
            label: "Play Store",
            url: "",
            app: false,
        },
    ],
};

const service = {
    title: "Service",
    linkItems: [
        {
            label: "ヘルプ",
            url: "",
            app: false,
        },
    ],
};

const development = {
    title: "Development",
    linkItems: [
        {
            label: "GitHub",
            url: "https://github.com/wheatandcat/memoir",
            app: false,
        },
        {
            label: "Figma",
            url: "https://www.figma.com/file/cLruhS5vc5IQsvqoXYSyP8/memoir?node-id=1149%3A379",
            app: false,
        },
        {
            label: "Expo",
            url: "https://expo.dev/@wheatandcat/memoir",
            app: false,
        },
    ],
};

const document = {
    title: "Document",
    linkItems: [
        {
            label: "Blog",
            url: "https://www.wheatandcat.me/",
            app: false,
        },
    ],
};

const rules = {
    title: "Rules",
    linkItems: [
        {
            label: "利用規約",
            url: "/terms",
            app: true,
        },
        {
            label: "プライパシーポリシー",
            url: "/privacy",
            app: true,
        },
    ],
};

const Footer = () => {
    return (
        <div className="container mx-auto">
            <div>
                <span className={styles.logo}>
                    <Link href="/" passHref>
                        <a>
                            <Image src="/logo2.svg" alt="Logo" width={128} height={37} />
                        </a>
                    </Link>
                </span>
            </div>
            <div className="flex flex-wrap justify-start sm:justify-around mt-5">
                <div>
                    <LinkItems {...download} />
                    {false && <LinkItems {...service} />}
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
