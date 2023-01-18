import React from "react";

type KofiButtonProps = {
    username: string;
    label: string;
    preset?: string;
    backgroundColor?: string;
};

declare module 'react-kofi-button/dist/KofiButton' {
    export default class KofiButton extends React.Component<KofiButtonProps> {}
}