import './globals.css'
import Main from '@/Component/Main'


export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
       <Main/>
        {children}</body>
    </html>
  )
}
