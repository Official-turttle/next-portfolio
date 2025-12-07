import Image from "next/image";
// import heroImage from "@/public/hero.png"; // Place in public or assets folder
import Link from "next/link";

export default function Hero() {
    const heroImage = "https://picsum.photos/id/237/200";

    return (
    <section className="flex flex-col md:flex-row justify-center items-center h-screen px-6 md:px-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Text */}
      <div className="flex-1 md:pr-10 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Haraan</h1>
        <p className="text-lg md:text-2xl mb-6">
        I’m a full-stack developer who loves transforming ideas into functional, meaningful digital products. From concept to deployment, I craft solutions that solve real problems and elevate the user experience.{" "}
          {/* <span className="text-indigo-400">React</span> &{" "}
          <span className="text-indigo-400">Next.js</span>. */}
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-indigo-500 hover:bg-indigo-500 hover:text-white rounded-lg transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1">
        <Image
          src={heroImage}
          alt="Hero Illustration"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
