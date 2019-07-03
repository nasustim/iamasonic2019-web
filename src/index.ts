import './index.scss'

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
    appendBackImgToCanvas(headerCtx, './res/header_back.jpg')
  }, 200)
})


// exec
headerCtx = initCanvas(headerCanvas)
appendBackImgToCanvas(headerCtx, './res/header_back.jpg')