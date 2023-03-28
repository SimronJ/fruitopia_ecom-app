export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <footer className="center mt-5 flex justify-center space-x-4 bg-[#E7E8EF] p-4 text-xs">
        <p>Powered by Next.js, Swell, and Vercel </p>
        <span>|</span>
        <a
          href="https://github.com/SimronJ/fruitopia_ecom-app"
          target="_blank"
          className="font-medium text-green-600"
        >
          Source code
        </a>
        <span>|</span>
        <a
          href="https://github.com/SimronJ"
          target="_blank"
          className="font-medium text-gray-800"
        >
          @SimronJ
        </a>
      </footer>
    </>
  )
}
