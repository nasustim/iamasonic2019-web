import './index.scss'

import * as ScrollMagic from 'scrollmagic'
import {TweenMax, TimelineMax, Power4} from 'gsap'
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

const headerBackgroundImg = require('./res/header_back.png')
const footerBackgroundImg = require('./res/footer_back.png')

var GLOBAL_WIDTH = window.innerWidth
var GLOBAL_HEIGHT = window.innerHeight
var threshold = 600

/**
 * view
 */
window.scrollTo(0, 0)


/**
 * canvas
 */

const headerCanvas: HTMLCanvasElement = document.querySelector('#header-image')
let headerCtx: CanvasRenderingContext2D
const footerCanvas: HTMLCanvasElement = document.querySelector('#footer-image')
let footerCtx: CanvasRenderingContext2D

function* fInverseFluction (frame: number, from: number, to: number, max: number) {
  const waves: Array<(number) => number> = (new Array(to - from)).map((v, i) => (x) => Math.sin(x * (i + 1)) * (max / (i + 1)))
  for(let i = 0; i < to - from; i++){
    yield waves[i](frame)
  }
}

function initCanvasForHeader (canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  browserResizeForHeader(canvas)
  return canvas.getContext('2d')
}
function initCanvasForFooter (canvas: HTMLCanvasElement, imgPath: string): CanvasRenderingContext2D {
  browserResizeForFooter(canvas, imgPath)
  return canvas.getContext('2d')
}

function browserResizeForHeader (canvas: HTMLCanvasElement): void {
  canvas.setAttribute('width', window.innerWidth.toString())
  canvas.setAttribute('height', window.innerHeight.toString())
}
async function browserResizeForFooter (canvas: HTMLCanvasElement, imgPath: string): Promise<void> {
  let img = await loadImg(imgPath)
  let imgWidth = img.width
  let imgHeight = img.height

  let deviceWidth = window.innerWidth
  let deviceToImgRatio = imgWidth / deviceWidth
  
  let width = imgWidth / deviceToImgRatio
  let height = imgHeight / deviceToImgRatio
  
  canvas.setAttribute('width', width + 'px')
  canvas.setAttribute('height', height + 'px')
}

async function loadImg (imgPath: string): Promise<HTMLImageElement | any> {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = imgPath
    img.onload = () => resolve(img)
    img.onerror = e => {
      console.error(e)
      reject(e)
    }
  })
}

function sizeCulculate (img: HTMLImageElement, canvas:HTMLCanvasElement): any {
  let canvasWidth = canvas.width
  let imgWidth = img.width
  let canvasHeight = canvas.height
  let imgHeight = img.height

  return {sx: 0, sy: 0, sw: imgWidth, sh: imgHeight, dx: 0, dy: 0, dw: canvasWidth, dh: canvasHeight}
}

async function appendBackImgToCanvas (ctx: CanvasRenderingContext2D, imgPath: string, canvas: HTMLCanvasElement): Promise<CanvasRenderingContext2D> {
  let img = await loadImg(imgPath)
  let size = sizeCulculate(img, canvas)
  //console.log(size)
  ctx.drawImage(img, size.sx, size.sy, size.sw, size.sh, size.dx, size.dy, size.dw, size.dh)
  return ctx
}

let resizeTimer
window.addEventListener('resize', function (event) {
  if (resizeTimer != null) {
    clearTimeout(resizeTimer);
  }
  resizeTimer = setTimeout(() => {
    GLOBAL_WIDTH = window.innerWidth
    GLOBAL_HEIGHT = window.innerHeight
    headerCtx = initCanvasForHeader(headerCanvas)
    appendBackImgToCanvas(headerCtx, headerBackgroundImg, headerCanvas)
    setFooter()
    //footerCtx = initCanvasForFooter(footerCanvas, footerBackgroundImg)
    //appendBackImgToCanvas(footerCtx, footerBackgroundImg, footerCanvas)
  }, 120)
})

/**
 * easing animation
 */

 // あとでArray.mapか何かにまとめる

const controller = new ScrollMagic.Controller()

const tween0 = TweenMax.fromTo('.easing-block0', 2, {opacity: 0, x: -120}, {ease: Power4.easeOut, opacity: 1, x: 0})
const scene0 = new ScrollMagic.Scene({
  triggerElement: '.easing-block0',
  triggerHook: 'onEnter',
  offset : 200,
  reverse: false
})
  .setTween(tween0)
  .addTo(controller);

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

const tween3 = TweenMax.fromTo('.easing-block3', 2, {opacity: 0, x: -120}, {ease: Power4.easeOut, opacity: 1, x: 0})
const scene3 = new ScrollMagic.Scene({
  triggerElement: '.easing-block3',
  triggerHook: 'onEnter',
  offset : 200,
  reverse: false
})
  .setTween(tween3)
  .addTo(controller);

const tween4 = TweenMax.fromTo('.easing-block4', 2, {opacity: 0, x: -120}, {ease: Power4.easeOut, opacity: 1, x: 0})
const scene4 = new ScrollMagic.Scene({
  triggerElement: '.easing-block4',
  triggerHook: 'onEnter',
  offset : 50,
  reverse: false
})
  .setTween(tween4)
  .addTo(controller);

const tweenTitle = TweenMax.fromTo('#header-logo', 2, {width: GLOBAL_WIDTH > threshold ? '90vw' : '100vw'}, {ease: Power4.easeOut, width: GLOBAL_WIDTH > threshold ? '50vw' : '70vw'})
const sceneTitle = new ScrollMagic.Scene({
  triggerElement: 'header',
  triggerHook: 'onLeave',
  offset : 1,
  reverse: false
})
  .setTween(tweenTitle)
  .addTo(controller);

/*const tween5 = TweenMax.fromTo('.easing-block5', 2, {opacity: 0, x: -120}, {ease: Power4.easeOut, opacity: 1, x: 0})
const scene5 = new ScrollMagic.Scene({
  triggerElement: '.easing-block5',
  triggerHook: 'onEnter',
  offset : 0,
  reverse: false
})
  .setTween(tween5)
  .addTo(controller);*/

// player's detail

let players = require('./data').playersData
  .map(
    (v, i) => document.getElementById(`player-${v.id}`)
  )

for(let i in players)
  players[i].onclick = () => {
    document.getElementById(`detail-${players[i].id}`).getAttribute('data-is-show') == 'true'
      ? (() => {
        document.getElementById(`detail-${players[i].id}`).setAttribute('data-is-show', 'false')
      })()
      : (() => {
        let details = document.getElementsByClassName('player-detail')
        //console.log(details)
        for(let i = 0; i < details.length; i++){
          details[i].setAttribute('data-is-show', 'false')
        }
        document.getElementById(`detail-${players[i].id}`).setAttribute('data-is-show', 'true')
      })()
    }


// exec canvas
headerCtx = initCanvasForHeader(headerCanvas)
appendBackImgToCanvas(headerCtx, headerBackgroundImg, headerCanvas)
//footerCtx = initCanvasForFooter(footerCanvas, footerBackgroundImg)
//appendBackImgToCanvas(footerCtx, footerBackgroundImg, footerCanvas)
const setFooter = (): void =>{
  let footer = document.querySelector('footer')
  let footerBack = document.getElementById('footer-image')
  let footerImg = new Image()
  footerImg.src = footerBackgroundImg
  footerImg.onload = () => {

    footer.setAttribute('style', `height: ${(GLOBAL_WIDTH / footerImg.width) * footerImg.height}px; width: 100vw;margin: 50px 0 0 0;padding: 0;position: relative;`)
    footerBack.setAttribute('style', `height: ${(GLOBAL_WIDTH / footerImg.width) * footerImg.height}px; background-image: url('res/footer_back.png'); background-size: contain; width: 100vw;position: absolute;left: 0;top: 0;`)
  }
  footerImg.onerror = (e) => {
    console.error (e)
  }
}
setFooter()