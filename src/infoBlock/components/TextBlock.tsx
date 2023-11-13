import React, { ReactNode } from "react";

interface Props {
    title: string;
    content: ReactNode;
}

function TextBlock(props: Props) {
    const { title, content } = props;
    return (
        <>
            <div className="inner-box">
                <div className="text-sm font-bold my-2">{title}</div>
                <div className="text-sm">{content}</div>
            </div>
        </>
    );
}

export default TextBlock;
