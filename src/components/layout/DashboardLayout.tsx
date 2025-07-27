import React, { PropsWithChildren } from 'react'
import Navbar from '../commom/Navbar'
import { StockHeader } from '../commom'

type TDashboardLayout = PropsWithChildren

const DashboardLayout: React.FC<TDashboardLayout> = ({ children }) => {
    return (
        <main>
            <StockHeader/>
            <Navbar/>
            <div>{children}</div>
        </main>
    )
}

export default DashboardLayout