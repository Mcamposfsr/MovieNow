import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import CardsPageProvider from '@/contexts/CardsContext/CardsProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <CardsPageProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CardsPageProvider>
)
