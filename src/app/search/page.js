"use server"
import styles from "@/app/page.module.css";
import JsonViewer from "@/components/JsonViewer";

export default async function getReferenceNumber({searchParams} ) {

    const referenceNumber = await searchParams?.referenceNumber;
    if (referenceNumber) {
        const results = await fetch(`https://api.propeco.io/properties/${referenceNumber}`, {
            headers: {
                "x-api-key": "b1a94f01-c673-4cf8-b83a-09357b942b77"
            },
        });
        const data = await results.json();
        const stringData = JSON.stringify(data);
        console.log(stringData)
        return (
            <div className={styles.page}>
                <main className={styles.main}>
                    <JsonViewer data = {data} />
                </main>
            </div>
        )
    }
    else {
        return (
            <p> No Search Found</p>
        )
    }
}
