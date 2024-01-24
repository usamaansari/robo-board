const hostnames = ["img.freepik.com", "hollywoodlife.com","m.media-amazon.com", "thumbs.dreamstime.com", "storage.googleapis.com", "images.pexels.com" ]

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org"
      },
      {
        protocol: "https",
        hostname: "img.freepik.com"
      },
      {
        protocol: "https",
        hostname: "hollywoodlife.com"
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com"
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com"
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com"
      },
      {
        protocol: "https",
        hostname: "www.cartierwomensinitiative.com"
      },
      {
        protocol: "https",
        hostname: "mycionics.com"
      },
      {
        protocol: "https",
        hostname: "www.kuka.com"
      },
      {
        protocol: "https",
        hostname: "sciencebusiness.net"
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com"
      },
     {
      protocol:"https",
      hostname:"images.pexels.com"
     },
    ],
  },

}

module.exports = nextConfig
