export const metadata = {
  title: "GrammyAi"
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{
        margin:0,
        background:"#000",
        color:"#fff",
        fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto"
      }}>
        {children}
      </body>
    </html>
  )
}