"use client"
import { CartProvider } from "../context/CartContext";

const Provider = ({children}) =>(<CartProvider>{children}</CartProvider>)

export default Provider

