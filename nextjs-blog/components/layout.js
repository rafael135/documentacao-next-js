import styles from "./layout.module.css";

import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Rafael";
export const siteTitle = "Site Next.js para praticar";

export default function Layout({children, home}) { // "home" => Parametro booleano devolvido ao Layout indicando se esta na pagina inicial
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />

                <meta
                    name="Description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta 
                    property="og:image"
                    content={`https://og-image.vercel.app/
                        ${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={styles.header}>
                {/* Se "home" for true, exibo uma imagem um pouco maior com o nome do usuario, se for false, exibo uma imagem menor com o nome um pouco menor */}
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""
                        />
                        <h1 className={utilStyles.heading2xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>

                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )
                }
            </header>

            <main>{children}</main>
            
            {/* Se "home" for false, exibo um botao para retornar a pagina principal */}
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}