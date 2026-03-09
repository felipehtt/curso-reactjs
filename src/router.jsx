
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";


export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    )

}
