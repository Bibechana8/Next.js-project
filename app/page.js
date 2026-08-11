import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]">
        <div className="font-bold flex gap-2 text-5xl justify-center items-center">
          Buy me a chai!
          <span>
            <Image src="/tea.gif.png" alt="Tea illustration" width={44} height={44} />
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get me a chai is a platform where
          you can support your favorite creators by contributing to their projects.
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
          >
            Start Here
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14">
          Your fans can buy you a chai
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image
              className="bg-slate-400 rounded-full p-1 text-black"
              width={90}
              height={90}
              src="/man.gif"
              alt="Fans want to help"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image
              className="bg-slate-400 rounded-full p-1 text-black"
              width={90}
              height={90}
              src="/coin.gif"
              alt="Support creators"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image
              className="bg-slate-400 rounded-full p-1 text-black"
              width={90}
              height={90}
              src="/group.gif"
              alt="Join the community"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32 pt-14 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BLl32FvcdVM?si=KA5FGblmXtnYHUnO"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
