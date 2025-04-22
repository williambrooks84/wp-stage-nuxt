export {}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    googleFonts?: {
      families?: Record<string, number[] | boolean>
      display?: string
    }
  }

  interface NuxtOptions {
    googleFonts?: {
      families?: Record<string, number[] | boolean>
      display?: string
    }
  }
}
