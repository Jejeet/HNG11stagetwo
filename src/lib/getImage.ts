export function getImageUrl(name:string, extention?:string) {
    return `./src/assets/${name}.${extention || "png"}`
  }