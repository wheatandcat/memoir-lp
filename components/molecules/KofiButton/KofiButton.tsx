import React, { memo } from "react";
import styles from "./KofiButton.module.css";

type Props = {
    username: string;
    label: string;
    backgroundColor?: string;
};

const KofiButton: React.FC<Props> = ({ username, label, backgroundColor = "#29abe0" }) => {
    return (
        <div className={styles.container} style={{ "--kofi-background-color": backgroundColor } as React.CSSProperties}>
            <a
                className={styles.button}
                href={`https://ko-fi.com/${username}`}
                target="_blank"
                rel="noreferrer noopener external"
            >
                <span className={styles.imageContainer}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.image} src="https://storage.ko-fi.com/cdn/cup-border.png" alt="" />
                </span>
                <span className={styles.text}>{label}</span>
            </a>
        </div>
    );
};

export default memo(KofiButton);
