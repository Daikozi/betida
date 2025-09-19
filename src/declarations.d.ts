// Allow SVG imports to be typed as string (default Next.js behavior)
declare module '*.svg' {
  const content: string
  export default content
}

// Tell TypeScript that all SVG imports are always string, never any
// (fixes: Unsafe assignment of an `any` value)
// @ts-ignore
declare module '*.svg' {
  const src: string
  export default src
}
