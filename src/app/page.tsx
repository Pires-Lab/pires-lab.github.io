import Link from "next/link";
import Image from "next/image";

import { newsData, pubData } from "@/lib/info_helper.server";

export const metadata = {
  title: "Pires Lab - Home",
  description:
    "Digital agriculture research at Purdue University: computer vision, data analysis and crop systems.",
};

// Get first 5 publications
const slicedPubData = pubData.slice(0, 5);
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-purdue-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-1">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Pires Lab
              </h1>
              <h2 className="text-3xl md:text-4xl">
                 <span className="text-purdue-field font-bold">
                  Soil Health
                </span>{" "}
                 and{" "}
                <span className="text-purdue-field font-bold">
                   Cover Crops
                  {" "}
                </span>
                Research
              </h2>
              <p className="pt-6 text-lg md:text-xl opacity-90">
                Advancing agricultural sustainability through research on soil health,
                cover crops, nutrient cycling, and resilient cropping systems in the
                Northern Great Plains and beyond.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/research" className="btn-primary">
                  Our Research
                </Link>
                <Link href="/about" className="btn-secondary">
                  About Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative w-full h-80">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/liquid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>


      {/* Recent News/Blog Posts Section */}
      <section className="py-16">
        <div className="container-custom text-purdue-black">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl text-white font-bold">Latest News</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-purdue-secondary-gray2 relative">
                  <Image
                    src={`/blog/img/${post.img_file_name}`}
                    alt={post.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover bg-purdue-black"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                  <Link
                    href={`/news/${post.slug}`}
                    className="text-purdue-rush text-bold font-heading hover:underline mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/news"
              className="btn-secondary bg-white text-purdue-black"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
