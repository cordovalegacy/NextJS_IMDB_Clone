"use client"

import { ThemeProvider } from "next-themes"


const Providers = ({ children }) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div className="dark:bg-gray-700 dark:text-gray-200 bg-gray-200 text-gray-800">
                {children}
            </div>
        </ThemeProvider>
    )
}

export default Providers