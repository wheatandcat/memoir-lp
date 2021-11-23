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

const Footer = () => {
    return (
        <div>
            <div>
                <span className={styles.logo}>
                    <Image src="/logo2.svg" alt="Logo" width={128} height={37} />
                </span>
            </div>
            <div className="flex justify-around">
                <>
                <div>
                    <LinkItems {...download} />
                    <LinkItems {...service} />
                </div>
                <div>
                    <LinkItems {...download} />
                </div>
                <div>
                    <LinkItems {...download} />
                </div>
                <div>
                    <LinkItems {...download} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
