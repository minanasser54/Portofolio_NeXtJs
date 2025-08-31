import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaGoogle } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()}  All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/minanasser54"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/mina-nasser-shehata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
              <a
              href="mailto:mina.nasser54@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGoogle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 