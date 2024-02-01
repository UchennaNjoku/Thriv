"use client"
import Link from "next/link"
import Image from "next/image"
import Logo from "../resources/Logo.png";
import ThrivMockup from "../resources/ThrivMockup.png";

import Spline from '@splinetool/react-spline';


export default function Home() {
  return (
    <section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[#080b0a] to-[#171007]">


      <div className="container px-6 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          
          <div className="flex justify-center">
            <Image
              src={ThrivMockup}
              width={550}
              height={550}
              alt="Thriv app mockup"
            />
          </div> 
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Image
                src={Logo}
                width={100}
                height={100}
                alt="Logo of Thriv app"
              />
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                your personal fitness companion designed to help you dial in your fitness goals.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Track your workouts and progress over time.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Log your nutritional intake and maintain a balanced diet.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Connect with a community of fitness enthusiasts.
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={"/"} className="bg-[#091c0e] border-gray-500 border-2 text-white rounded-lg px-4 py-2">Coming Soon!</Link>
              <Link href={"/"} className="bg-[#462b16] border-gray-500 border-2 text-white rounded-lg px-4 py-2">Check out our Github!</Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}