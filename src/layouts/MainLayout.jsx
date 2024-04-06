import { Outlet } from "react-router-dom"
import Header from "./Header"
import CartContextProvider from "../context/CartContextProvider"

export default function MainLayout() {

    return (
        <>
            <CartContextProvider>
                <Header />
                <Outlet />
            </CartContextProvider>
            
        </>
    )
}