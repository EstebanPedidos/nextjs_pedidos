import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';

//pages/_app.js
//import { useEffect } from "react"
function MyApp({ Component, pageProps }) {
 /* useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])*/

  return (
    <ThemeProvider  theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp