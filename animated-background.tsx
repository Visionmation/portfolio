"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const circles: {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number
      opacity: number
    }[] = []

    const createCircles = () => {
      const circleCount = Math.min(Math.floor(window.innerWidth / 100), 15)

      for (let i = 0; i < circleCount; i++) {
        const radius = Math.random() * 100 + 50
        circles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          color: getRandomColor(),
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.2 + 0.1,
        })
      }
    }

    const getRandomColor = () => {
      const colors = [
        "rgba(45, 212, 191, opacity)", // teal-400
        "rgba(6, 182, 212, opacity)", // cyan-500
        "rgba(14, 165, 233, opacity)", // sky-500
        "rgba(56, 189, 248, opacity)", // sky-400
        "rgba(34, 211, 238, opacity)", // cyan-400
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient circles
      circles.forEach((circle) => {
        ctx.beginPath()

        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)

        gradient.addColorStop(0, circle.color.replace("opacity", (circle.opacity * 0.7).toString()))
        gradient.addColorStop(1, circle.color.replace("opacity", "0"))

        ctx.fillStyle = gradient
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        circle.x += circle.vx
        circle.y += circle.vy

        // Bounce off edges
        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      circles.length = 0
      createCircles()
    }

    createCircles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 opacity-30 dark:opacity-20" aria-hidden="true" />
  )
}
