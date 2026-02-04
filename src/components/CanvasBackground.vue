<template>
  <div class="fixed inset-0 z-0 pointer-events-none">
    <canvas ref="canvasRef" v-show="isActive" class="w-full h-full block"></canvas>
    <div v-if="isActive" class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  isActive: Boolean // Menerima status Dark Mode dari App.vue
})

const canvasRef = ref(null)
let ctx = null, animationFrameId = null, width = 0, height = 0
let stars = [], meteors = [], atmosphereOffset = 0

// --- CLASSES ---
class Star {
  constructor() { this.reset(true) }
  reset(initial = false) {
    this.x = Math.random() * width; this.y = initial ? Math.random() * height : -10
    this.size = Math.random() * 1.2 + 0.3; this.baseAlpha = Math.random() * 0.7 + 0.3
    this.pulseSpeed = Math.random() * 0.01 + 0.002; this.pulseOffset = Math.random() * Math.PI * 2
    this.color = Math.random() > 0.85 ? '100, 220, 255' : '255, 255, 255'
    const speedBase = Math.random() * 0.15 + 0.05; this.speedX = -speedBase * 0.3; this.speedY = speedBase        
  }
  update() {
    this.x += this.speedX; this.y += this.speedY
    if (this.x < -10) { this.x = width + 10; this.y = Math.random() * height }
    if (this.y > height + 10) { this.y = -10; this.x = Math.random() * width }
  }
  draw() {
    const pulse = Math.sin(Date.now() * 0.001 * this.pulseSpeed * 100 + this.pulseOffset)
    const alpha = this.baseAlpha + (pulse * 0.2) 
    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${this.color}, ${Math.max(0, alpha)})`; ctx.fill()
    if (this.baseAlpha > 0.8) { ctx.shadowBlur = 8; ctx.shadowColor = `rgba(${this.color}, 0.5)` } 
    else { ctx.shadowBlur = 0 }
  }
}

class Meteor {
  constructor() { this.reset() }
  reset() {
    this.x = Math.random() * width + 300; this.y = -200; this.len = Math.random() * 300 + 200; 
    this.speed = Math.random() * 3 + 7; this.size = Math.random() * 0.8 + 0.5; this.active = false; this.wait = Math.random() * 300 
  }
  update() {
    if (this.wait > 0) { this.wait--; return }
    this.active = true; this.x -= this.speed; this.y += this.speed
    if (this.x < -this.len || this.y > height + this.len) { this.reset(); this.wait = Math.random() * 400 + 200 }
  }
  draw() {
    if (!this.active) return
    const tailX = this.x + this.len; const tailY = this.y - this.len
    const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); gradient.addColorStop(0.05, 'rgba(0, 240, 255, 0.8)'); gradient.addColorStop(1, 'rgba(0, 100, 255, 0)') 
    ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(tailX, tailY); ctx.strokeStyle = gradient; ctx.lineWidth = this.size; ctx.lineCap = 'round'; ctx.stroke()
    ctx.beginPath(); ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.shadowBlur = 30; ctx.shadowColor = 'rgba(0, 200, 255, 1)'; ctx.fill(); ctx.shadowBlur = 0
  }
}

// --- ENGINE ---
const drawAtmosphere = () => {
    atmosphereOffset += 0.05 
    const grad1 = ctx.createRadialGradient(width*0.8, height*0.8, 0, width*0.8, height*0.8, width*0.6)
    grad1.addColorStop(0, `rgba(0, 50, 150, ${0.05 + Math.sin(atmosphereOffset*0.01)*0.02})`); grad1.addColorStop(1, 'transparent'); ctx.fillStyle = grad1; ctx.fillRect(0,0,width,height)
    const grad2 = ctx.createRadialGradient(width*0.2, height*0.2, 0, width*0.2, height*0.2, width*0.5)
    grad2.addColorStop(0, `rgba(0, 200, 255, ${0.03 + Math.cos(atmosphereOffset*0.015)*0.01})`); grad2.addColorStop(1, 'transparent'); ctx.fillStyle = grad2; ctx.fillRect(0,0,width,height)
}

const animate = () => {
  if (!props.isActive) return
  ctx.clearRect(0, 0, width, height); drawAtmosphere(); stars.forEach(s => { s.update(); s.draw() }); meteors.forEach(m => { m.update(); m.draw() }); animationFrameId = requestAnimationFrame(animate)
}

const initCanvas = () => {
  if (!canvasRef.value) return
  const canvas = canvasRef.value; ctx = canvas.getContext('2d'); width = window.innerWidth; height = window.innerHeight; canvas.width = width; canvas.height = height
  stars = Array.from({ length: 250 }, () => new Star()); meteors = Array.from({ length: 3 }, () => new Meteor()); animate()
}

const handleResize = () => {
    width = window.innerWidth; height = window.innerHeight; if (canvasRef.value) { canvasRef.value.width = width; canvasRef.value.height = height }
    stars = Array.from({ length: 250 }, () => new Star())
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  if (props.isActive) initCanvas()
})
onUnmounted(() => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', handleResize) })
watch(() => props.isActive, (val) => { if (val) setTimeout(initCanvas, 100); else cancelAnimationFrame(animationFrameId) })
</script>

