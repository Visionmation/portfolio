"use client"

import { useState, useRef, useEffect } from "react"
import { X, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Sample video data - replace with your actual videos
const videos = [

  // Landscape videos (2)
  {
    id: 11,
    type: "landscape",
    title: "event",
    category: "Documentary",
    thumbnail: "/2.jpg",
    videoUrl: "/22.mp4",
  },
  {
    id: 12,
    type: "landscape",
    title: "hamar bilaspur",
    category: "Advertising",
    thumbnail: "/1.jpg",
    videoUrl: "11.mp4",
  },
  {
    id: 1,
    type: "portrait",
    title: "Product Showcase",
    category: "Social Media",
    thumbnail: "/x1.png",
    videoUrl: "/3.mp4",
  },
  {
    id: 2,
    type: "portrait",
    title: "Commercial Ad",
    category: "Commercial",
    thumbnail: "/44.jpg",
    videoUrl: "4.mp4",
  },
  {
    id: 3,
    type: "portrait",
    title: "Commercial Ad",

    category: "Travel",
    thumbnail: "/55.jpg",
    videoUrl: "5.mp4",
  },
  {
    id: 4,
    type: "portrait",
    title: "event",

    category: "Fashion",
    thumbnail: "/66.jpg",
    videoUrl: "6.mp4",
  },
  {
    id: 5,
    type: "portrait",
    title: "travel",

    category: "Lifestyle",
    thumbnail: "/77.jpg",
    videoUrl: "7.mp4",
  },
  {
    id: 6,
    type: "portrait",
    title: "travel",
    
    category: "Fitness",
    thumbnail: "/x2.png",
    videoUrl: "8.mp4",
  },
  {
    id: 7,
    type: "portrait",
    title: "travel",

    category: "Music",
    thumbnail: "/99.jpg",
    videoUrl: "9.mp4",
  },

]

// Categories for filtering
const categories = ["All", ...Array.from(new Set(videos.map((video) => video.category)))].sort()

export function VideoGrid() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const filteredVideos = videos

  useEffect(() => {
    // Reset video refs array when filtered videos change
    videoRefs.current = videoRefs.current.slice(0, filteredVideos.length)
  }, [filteredVideos])

  return (
    <section id="work" className="py-20 px-4 bg-gradient-to-b from-white to-sky-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 font-heading bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Featured Work
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated collection of my finest video editing projects, showcasing versatility across platforms and
            styles.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 50,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-lg ${
                video.type === "landscape" ? "sm:col-span-2" : ""
              }`}
              onClick={() => setSelectedVideo(video)}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div
                className={`${video.type === "landscape" ? "aspect-video" : "aspect-[9/16]"} w-full overflow-hidden`}
              >
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2 inline-block">
                    {video.category}
                  </span>
                  <h3 className="text-white font-bold text-xl mb-1">{video.title}</h3>
                  
                  <div className="flex items-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 inline-flex items-center justify-center">
                      <Play size={16} className="text-white" />
                    </div>
                    <span className="ml-2 text-white/90 text-sm">Play video</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedVideo(null)}
            ></motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className={`relative z-10 max-w-5xl w-full ${
                selectedVideo.type === "portrait" ? "max-h-[85vh] aspect-[9/16]" : "max-h-[85vh] aspect-video"
              }`}
            >
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -left-4 -top-4 z-20 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedVideo(null)
                }}
                aria-label="Close video"
              >
                <X size={24} />
              </motion.button>
              <video src={selectedVideo.videoUrl} controls autoPlay className="w-full h-full rounded-lg shadow-2xl">
                Your browser does not support the video tag.
              </video>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
              >
                
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
