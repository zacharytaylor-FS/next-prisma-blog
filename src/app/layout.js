import '../styles/globals.css'
import { Providers } from './provider'
export default function RootLayout({children}) {
    return (
        <html lang='en' className='dark'>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}