
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import Eventos from "./pages/eventos";
import VarEstado from "./pages/varEstado";


export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/varEstado" element={<VarEstado />}/>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    )

}
