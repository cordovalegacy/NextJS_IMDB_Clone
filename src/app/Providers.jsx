"use client" //client side rendering directive

import { ThemeProvider } from "next-themes" //downloaded via npm (uses contextAPI)


const Providers = ({ children }) => { {/*we wrapped all components in this in layout.jsx*/}
    return (
        <ThemeProvider enableSystem={true} attribute="class"> {/*custom attributes used with ThemeProvider*/}
            <div className="dark:bg-gray-700 dark:text-gray-200 bg-gray-200 text-gray-800">
                {children} {/*props.children (all components wrapped by Providers.jsx)*/}
            </div>
        </ThemeProvider>
    )
}

export default Providers