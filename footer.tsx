"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Youtube, Twitter, Linkedin, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-r from-teal-900 to-cyan-900 dark:from-teal-950 dark:to-cyan-950 text-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 font-heading bg-gradient-to-r from-teal-300 to-cyan-300 text-transparent bg-clip-text">
              Ansh Rajput
            </h3>
            <p className="text-cyan-100 mb-4">
              Professional video editor bringing stories to life through compelling visual content.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-cyan-200 hover:text-white transition-colors hover:scale-110 transform inline-block"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.instagram.com/ansh__3070/"
                className="text-cyan-200 hover:text-white transition-colors hover:scale-110 transform inline-block"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="www.youtube.com/@visionmation"
                className="text-cyan-200 hover:text-white transition-colors hover:scale-110 transform inline-block"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-cyan-200 hover:text-white transition-colors hover:scale-110 transform inline-block"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-cyan-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-cyan-200 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="text-cyan-200 hover:text-white transition-colors">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-cyan-200 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-cyan-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-cyan-200">YouTube Content Editing</li>
              <li className="text-cyan-200">Social Media Videos</li>
              <li className="text-cyan-200">Commercial Advertisements</li>
              <li className="text-cyan-200">Promotional Videos</li>
              <li className="text-cyan-200">Travel & Documentary Editing</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-teal-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyan-300 text-center md:text-left">
            &copy; {new Date().getFullYear()} Ansh Rajput. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-teal-800 hover:bg-teal-700 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
