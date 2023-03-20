import "@/styles/globals.css";
import AuthContextProvider from "@/store/auth-context";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
