import Navbar from "@/app/components/Navbar";
import DataProvider from "./context/datas";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/Footer";
config.autoAddCss = false;

export const metadata={
  title:"OnShop",
  description:"Business Website"
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <DataProvider>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </DataProvider>
        
        </body>
    </html>
  )
}
