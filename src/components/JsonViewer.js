"use client"

import dynamic from "next/dynamic";

const PropEcoJSON = dynamic(() => import("react-json-view"), { ssr: false });

const JsonViewer = ({data}) => {
    return (
        <div>
            <PropEcoJSON src={data} theme="monokai" collapsed={1} />
        </div>
    )
}

export default JsonViewer;