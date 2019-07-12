import './index.scss'

import * as ScrollMagic from 'scrollmagic'
import {TweenMax, TimelineMax, Power4} from 'gsap'
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

const backgroundImg = require('./res/header_back.jpg')

/**
 * canvas
 */

const headerCanvas: HTMLCanvasElement = document.querySelector('#header-image')
let headerCtx: CanvasRenderingContext2D

function* fInverseFluction (frame: number, from: number, to: number, max: number) {
  const waves: Array<(number) => number> = (new Array(to - from)).map((v, i) => (x) => Math.sin(x * (i + 1)) * (max / (i + 1)))
  for(let i = 0; i < to - from; i++){
    yield waves[i](frame)
  }
}

function initCanvas (canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  browserResize(canvas)
  return canvas.getContext('2d')
}

function browserResize (canvas: HTMLCanvasElement): void {
  canvas.setAttribute('width', window.innerWidth.toString())
  canvas.setAttribute('height', window.innerHeight.toString())
}

async function loadImg (imgPath: string): Promise<HTMLImageElement | any> {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = imgPath
    img.onload = () => resolve(img)
    img.onerror = e => reject(e)
  })
}

function headerSizeCulculate (img: HTMLImageElement): any {
  let deviceWidth = window.innerWidth 
  let deviceHeight = window.innerHeight

  let imgWidth = img.width
  let imgHeight = img.height

  let isExtImgHeight = deviceWidth * (imgHeight / deviceHeight) > imgWidth

  console.log(isExtImgHeight)
  let sx, sy, sw, sh, dx = 0, dy = 0, dw = deviceWidth, dh = deviceHeight
  // 画像の高さが余分な場合
  if( !isExtImgHeight ){
    sy = 0
    sh = imgHeight

    sw = deviceWidth * (imgHeight / deviceHeight)
    sx = (imgWidth - sw) / 2

  }else{
    sx = 0
    sw = imgWidth

    sh = deviceHeight * (imgWidth / deviceWidth)
    sy = (imgHeight - sh) / 2

  }


  return {sx, sy, sw, sh, dx, dy, dw, dh}
}

async function appendBackImgToCanvas (ctx: CanvasRenderingContext2D, imgPath: string): Promise<CanvasRenderingContext2D> {
  let img = await loadImg(imgPath)
  let size = headerSizeCulculate(img)
  console.log(size)
  ctx.drawImage(img, size.sx, size.sy, size.sw, size.sh, size.dx, size.dy, size.dw, size.dh)
  return ctx
}

let resizeTimer
window.addEventListener('resize', function (event) {
  if (resizeTimer != null) {
    clearTimeout(resizeTimer);
  }
  resizeTimer = setTimeout(() => {
    headerCtx = initCanvas(headerCanvas)
    appendBackImgToCanvas(headerCtx, backgroundImg)
  }, 200)
})

// exec
headerCtx = initCanvas(headerCanvas)
appendBackImgToCanvas(headerCtx, backgroundImg)

/**
 * easing animation
 */

const controller = new ScrollMagic.Controller()

const tween1 = TweenMax.fromTo('.easing-block1', 2, {opacity: 0, x: -120}, {ease: Power4.easeOut, opacity: 1, x: 0})
const scene1 = new ScrollMagic.Scene({
  triggerElement: '.easing-block1',
  triggerHook: 'onEnter',
  offset : 200,
  reverse: false
})
  .setTween(tween1)
  .addTo(controller);


const tween2 = TweenMax.fromTo('.easing-block2', 2, {opacity: 0, x: -120}, {ease: Power4.easeOut, opacity: 1, x: 0})
const scene2 = new ScrollMagic.Scene({
  triggerElement: '.easing-block2',
  triggerHook: 'onEnter',
  offset : 200,
  reverse: false
})
  .setTween(tween2)
  .addTo(controller);

const tween5 = TweenMax.fromTo('.easing-block5', 2, {opacity: 0, x: -120}, {ease: Power4.easeOut, opacity: 1, x: 0})
const scene5 = new ScrollMagic.Scene({
  triggerElement: '.easing-block5',
  triggerHook: 'onEnter',
  offset : 0,
  reverse: false
})
  .setTween(tween5)
  .addTo(controller);

// player's detail

let players = require('./data')
  .map(
    (v, i) => document.getElementById(`player-${v}`)
  )
  .map((v, i) => {
    console.log(document.getElementById(`detail-${v.id}`))
    return v.onclick = () => 
      document.getElementById(`detail-${v.id}`).getAttribute('data-is-show') == 'true'
        ? document.getElementById(`detail-${v.id}`).setAttribute('data-is-show', 'false')
        : document.getElementById(`detail-${v.id}`).setAttribute('data-is-show', 'true')
  })

console.log(players)
