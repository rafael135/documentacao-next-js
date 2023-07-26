// Tambem é possível criar um arquivo CSS para aplicar um CSS global
import "../styles/globals.css"; // "globals.css" só pode ser importado em "_app.js"!

// O Arquivo "_app.js" é um componente que encapsula todas as páginas em seu aplicativo
// Você pode usar esse componente para manter o estado ao navegar entre páginas ou para adicionar estilos globais, como estamos fazendo aqui
export default function App({Component, pageProps}) {
    return (
        <Component {...pageProps} />
    );
}