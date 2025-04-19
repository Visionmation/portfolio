"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube, Instagram, Video, Film, Plane, Award } from "lucide-react"

const experienceData = [
  {
    icon: <Youtube className="h-8 w-8 text-red-500 mb-2" />,
    title: "YouTube Content",
    description: "Long-form video editing with engaging storytelling",
    content:
      "Specialized in creating compelling YouTube videos that maintain viewer engagement throughout longer durations. My editing approach focuses on strategic pacing, narrative structure, and seamless transitions that keep audiences watching until the end. I've worked with content creators across various niches including tech reviews, lifestyle vlogs, and educational content.",
    stats: "50+ videos edited",
  },
  {
    icon: <Instagram className="h-8 w-8 text-purple-500 mb-2" />,
    title: "Instagram & Social Media",
    description: "Short-form, high-impact content for maximum engagement",
    content:
      "Expert in crafting attention-grabbing short-form videos optimized for social media algorithms and audience retention. I create scroll-stopping content with dynamic transitions, text animations, and trend-aware editing techniques. My work has helped brands and creators increase engagement rates by up to 300% through strategic video editing approaches tailored to platform-specific requirements.",
  },
  {
    icon: <Video className="h-8 w-8 text-blue-500 mb-2" />,
    title: "Promotional Videos",
    description: "Compelling brand and product promotions",
    content:
      "Creating promotional videos that effectively communicate brand messages and drive audience action through strategic editing techniques. I focus on highlighting product benefits, creating emotional connections, and incorporating clear calls-to-action. My promotional videos have contributed to successful product launches and marketing campaigns across various industries.",
   
  },
  {
    icon: <Film className="h-8 w-8 text-amber-500 mb-2" />,
    title: "Commercial Advertisements",
    description: "High-quality ads for various platforms",
    content:
      "Producing polished commercial content that captures attention and conveys key messages within tight timeframes. I understand the importance of brand consistency, target audience psychology, and platform-specific requirements when editing commercial advertisements. My work includes TV commercials, digital ads, and pre-roll content for major brands.",

  },
  {
    icon: <Plane className="h-8 w-8 text-teal-500 mb-2" />,
    title: "Travel & Documentary",
    description: "Immersive travel content that tells a story",
    content:
      "Transforming raw travel footage into captivating visual stories that transport viewers and showcase destinations in their best light. I specialize in creating narrative-driven travel content with cinematic color grading, dynamic pacing, and emotional storytelling techniques. My travel edits have helped tourism boards and travel creators build engaged audiences through compelling visual storytelling.",
    stats: "10+ travel series",
  },
  {
    icon: <Award className="h-8 w-8 text-yellow-500 mb-2" />,
    title: "Creative Editing",
    description: "Artistic and experimental video projects",
    content:
      "Pushing the boundaries of conventional editing with creative and experimental approaches. I explore unique visual styles, innovative transitions, and artistic expressions through video editing. These projects allow me to continuously evolve my craft and bring fresh perspectives to commercial work. My creative edits have been featured in film festivals and digital showcases.",
   
  },
]

export function Experience() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-b from-white to-sky-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 font-heading bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Expertise & Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            With 3 years of professional experience, I've developed specialized skills across various video editing
            domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                type: "spring",
                stiffness: 50,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
            >
              <Card className="border-teal-200 dark:border-teal-900 h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-teal-400 dark:hover:border-teal-700">
                <CardHeader className="pb-2">
                  {item.icon}
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-hidden">
                    <p className="text-gray-600 dark:text-gray-400 transition-all duration-300">
                      {activeCard === index ? item.content : item.content.substring(0, 100) + "..."}
                    </p>
                    <div className="mt-4 text-sm font-semibold text-teal-600 dark:text-teal-400">{item.stats}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
