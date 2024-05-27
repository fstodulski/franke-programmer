/// <reference types="astro/client" />

interface Window {
  gtag: (type: string, name: string, data: any) => void;
}
