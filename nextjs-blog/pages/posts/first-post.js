import Link from "next/link";

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>

            { /* "Head" => Componente do ReactJs, usado para alterar facilmente o head da pagina sem necessitar de reescrever a maior parte do codigo  */ }
            <Head>
                <title>First Post</title>

                { /* "Script" => Componente do NextJs, otimiza e executa quando scripts sao requisitados e executados */ }
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload" /* "strategy" => Controla quando o script de terceiros deve ser carregado */
                    onLoad={() => { /* "onLoad" => Usado para executar codigo JS imediatamente apos o script terminar de carregar */
                        console.log("Script carregado com sucesso, window.FB esta disponivel")
                    }}
                />
            </Head>

            <h1>First Post</h1>

            <h2>
                { /* "Link" => Componente do NextJs, usado para alternar entre paginas ou rotas da aplicacao */ }
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}