export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px',
            textAlign: 'center',
          }}>
          <p>header</p>
        </header>
        {children}
        <footer style={{
          backgroundColor: '#333',
          color: '#fff',
          padding: '10px',
          textAlign: 'center',
        }}><p>footer</p></footer>
      </body>
    </html>
  )
}