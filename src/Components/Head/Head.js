import Head from 'next/head';

export default function Heads({title , description}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
        </>
    )
}