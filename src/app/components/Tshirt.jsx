import Image from "next/image";
import Link from "next/link";

export default function Tshirt() {
  return (
    <div className="flex flex-col mt-[-3vh] justify-center items-center min-h-screen bg-black px-4">
      <div className="group flex flex-col items-center">
        {/* Poster Image */}
        <Image
          src="/tshirtposterfinal.jpg"
          alt="T-Shirt Poster"
          width={1000}
          height={1500}
          className="rounded-lg shadow-lg object-contain"
        />

        {/* Buy Now Button */}
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdlVWGr2QXiQINzx7lDttearfMlF5Jkri1wPrEfpAkGvdEANw/viewform" target="_blank">
          <button className="mt-6 px-6 py-3 text-lg border border-white bg-white text-black font-ys uppercase rounded-md transition duration-300 ease-in-out transform group-hover:bg-black group-hover:text-white group-hover:border-white group-hover:scale-105">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}
