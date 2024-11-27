import Image from "next/image";


export default function Home() {
  return (
    <div className="max-w-6xl max-h-3xl mx-20 mt-20">
      {/* Home Page */}
      <div className=" bg-pink-50 p-10">
        {/* navigation bar */}
        <ul className="flex justify-end gap-5 font-semibold cursor-pointer">
          <li className="hover:underline hover:text-blue-600">Work</li>
          <li className="hover:underline hover:text-blue-600">Blog</li>
          <li className="hover:underline hover:text-blue-600">Contact</li>
        </ul>
        {/* hero content */}
        <div className="flex justify-between gap-20 p-28">
          {/* heading , button and button */}
          <div className="max-w-3xl mx-auto my-auto ">
            <h1 id="heroHeading" className="font-bold text-[42px]">Hi, I am John, <br /> Creative Technologist</h1>
            <p className="mr-[25%] text-md mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className="bg-red-400 hover:bg-red-300 text-white p-3 mt-8 shadow-md shadow-gray-500 rounded-sm" >Download Resume</button>
          </div>
          {/* image */}
          <div className="relative">
            <div id="heroImage" >
              <Image src={'/heroImage.png'} alt="" height={500} width={500}
                className="rounded-full  z-10  absolute"
              />
            </div>
            <div className="bg-stone-200 rounded-full h-[300px] w-[300px] top-3 right-3 absolute"/>
          </div>

        </div>

      </div>
      {/* Post page */}
      <div className=" bg-red-100  pl-40 pr-40 pt-5 p-16">
        <div className="flex justify-between p-5">
          <p className="text-2xl font-semibold">Recent Post</p>
          <p className="text-xl text-red-500 font-semibold underline cursor-pointer hover:text-rose-400">View All</p>
        </div>
        <div className="flex gap-8 ">
          <div className=" bg-white p-10 border-2 ">
            <h1 className="font-bold text-[23px] hover:text-blue-600 hover:underline cursor-pointer">Making a design system from scratch</h1>
            <div className="flex  my-5">
              <p className="border-r-2 border-black mr-5 pr-5">12 Feb 2020</p>
              <hr />
              <p>Design , Pattern</p>
            </div>
            <p className="text-sm">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <div className=" bg-white p-10">
            <h1 className="font-bold text-[23px] hover:text-blue-600 hover:underline cursor-pointer">Making a design system from scratch</h1>
            <div className="flex  my-5">
              <p className="border-r-2 border-black mr-5 pr-5">12 Feb 2020</p>
              <hr />
              <p>Design , Pattern</p>
            </div>
            <p className="text-sm">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
      {/* featured work */}
      <div className=" bg-pink-50 pt-10 pr-40 pl-40 pb-16">
        <h1 className="pl-10 text-2xl font-semibold">Featured Work</h1>
        {/* featured work 1 */}
        <div className="flex gap-16 p-10">
          <Image
            src={"/image2.png"}
            alt=""
            height={250}
            width={250}
            className="cursor-pointer"
          />
          <div>
            <h1 className="text-3xl font-bold">Designing Dashboards</h1>
            <div className="flex gap-2 max-w-4xl mt-3 mb-2">
              <h1 className="bg-red-400 px-3  text-xl text-white font-semibold m-3  rounded-full">2020</h1>
              <h1 className="m-3 text-xl">Dashboard</h1>
            </div>
            <p className="text-md mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        {/* featured work 2 */}
        <div className="flex gap-16 p-10">
          <Image
            src={"/image1.png"}
            alt=""
            height={250}
            width={250}
            className="cursor-pointer"
          />
          <div>
            <h1 className="text-3xl font-bold">Designing Dashboards</h1>
            <div className="flex gap-2 max-w-4xl mt-3 mb-2">
              <h1 className="bg-red-400 px-3  text-xl text-white font-semibold m-3  rounded-full">2020</h1>
              <h1 className="m-3 text-xl">Dashboard</h1>
            </div>
            <p className="text-md mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        {/* featured work 3 */}
        <div className="flex gap-16 p-10">
          <Image
            src={"/image3.png"}
            alt=""
            height={250}
            width={250}
            className="cursor-pointer"
          />
          <div>
            <h1 className="text-3xl font-bold">Designing Dashboards</h1>
            <div className="flex gap-2 max-w-4xl mt-3 mb-2">
              <h1 className="bg-red-400 px-3  text-xl text-white font-semibold m-3  rounded-full">2020</h1>
              <h1 className="m-3 text-xl">Dashboard</h1>
            </div>
            <p className="text-md mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer>
        <div className=" bg-red-50 inset-0 bg-black/10 pt-10 pl-20 pr-20 pb-10">
          <div className="flex gap-5 max-w-4xl mx-96">
            <Image
              src={"/icon1.webp"}
              alt=""
              height={50}
              width={50}
              className="rounded-xl cursor-pointer hover:h-10 hover:width-10"
            />
            <Image
              src={"/icon2.png"}
              alt=""
              height={50}
              width={50}
              className="rounded-xl cursor-pointer hover:h-10 hover:width-10"
            />
            <Image
              src={"/icon3.png"}
              alt=""
              height={50}
              width={50}
              className="rounded-xl cursor-pointer hover:h-10 hover:width-10"
            />
            <Image
              src={"/icon4.png"}
              alt=""
              height={50}
              width={50}
              className="rounded-xl cursor-pointer hover:h-10 hover:width-10"
            />
          </div>
          <h1 className="pt-5 font-semibold max-w-4xl mx-80 pl-16">Copyright ©2020 All rights reserved </h1>
        </div>
      </footer>
    </div>
  );
}
