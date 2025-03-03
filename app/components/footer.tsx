export default function Footer() {
  return (
    <footer className="pb-8 mt-16">
      <ul className="font-sm mt-8 flex text-neutral-600 flex-row space-x-4 space-y-0 dark:text-neutral-300">
      <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:devohart@gmail.com"
          >
            <p className="h-7">email</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/devin-hart/"
          >
            <p className="h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/devin-hart/"
          >
            <p className="h-7">linkedin</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
