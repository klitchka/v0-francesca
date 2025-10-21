"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Fluid blob shapes
    const blobs: Array<{
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      offsetY: number
    }> = []

    // Create sand-colored blobs
    for (let i = 0; i < 8; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 150 + Math.random() * 300,
        color: `rgba(${210 + Math.random() * 20}, ${180 + Math.random() * 20}, ${140 + Math.random() * 20}, 0.3)`,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        offsetY: 0,
      })
    }

    // Create blue circles
    for (let i = 0; i < 4; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 80 + Math.random() * 120,
        color: `rgba(${50 + Math.random() * 50}, ${100 + Math.random() * 50}, ${200 + Math.random() * 55}, 0.25)`,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        offsetY: 0,
      })
    }

    // Create red shapes
    for (let i = 0; i < 3; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 60 + Math.random() * 100,
        color: `rgba(${200 + Math.random() * 55}, ${50 + Math.random() * 50}, ${50 + Math.random() * 50}, 0.25)`,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        offsetY: 0,
      })
    }

    let scrollY = 0
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener("scroll", handleScroll)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw blobs
      blobs.forEach((blob) => {
        // Update position based on scroll
        blob.offsetY = scrollY * 0.3

        // Move blobs
        blob.x += blob.speedX
        blob.y += blob.speedY

        // Bounce off edges
        if (blob.x < -blob.radius || blob.x > canvas.width + blob.radius) {
          blob.speedX *= -1
        }
        if (blob.y - blob.offsetY < -blob.radius || blob.y - blob.offsetY > canvas.height + blob.radius) {
          blob.speedY *= -1
        }

        // Draw blob with gradient
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y - blob.offsetY,
          0,
          blob.x,
          blob.y - blob.offsetY,
          blob.radius,
        )
        gradient.addColorStop(0, blob.color)
        gradient.addColorStop(1, blob.color.replace(/[\d.]+\)$/, "0)"))

        ctx.fillStyle = gradient
        ctx.filter = "blur(40px)"
        ctx.beginPath()
        ctx.arc(blob.x, blob.y - blob.offsetY, blob.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.filter = "none"
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  )
}
