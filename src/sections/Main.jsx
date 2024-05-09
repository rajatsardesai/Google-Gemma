import { useState } from "react"
import { image, mic, send, verticalEllipsis } from "../assets/icons"
import { Input, MainNav } from "../components"
import { Card } from "../components"
import { promptData } from "../constants/promptData"

const Main = () => {
  const [toggleInputItems, setToggleInputItems] = useState(false);

  const onToggleItems = (setItem) => {
    setItem((toggle) => !toggle);
  };

  return (
    <section id="main" className="bg-white dark:bg-color-dark-100 flex flex-col h-screen p-4">
      <div className="flex flex-col flex-none">
        <MainNav />
      </div>
      <div className="flex flex-col grow justify-center items-center text-center">
        <div className="w-full max-w-[890px] overflow-hidden">
          <h1 className="font-poppins text-[46px] leading-tight font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">
            Hello, XYZ
            <span className="block text-gray-300">How can I help you today?</span>
          </h1>
          <p className="font-opensans dark:text-white text-sm font-medium leading-5 py-4">Your conversations are processed by human reviewers to improve the technologies powering Gemini Apps. Don't enter anything you wouldn't want reviewed or used.</p>

          <div className="relative overflow-x-auto h-[208px]">
            <div className="flex items-center gap-3  absolute top-0 left-0">
              {
                promptData.map(({ cardIcon, iconAlt, cardTitle, cardDescription }) => (
                  <Card key={cardTitle} cardIcon={cardIcon} iconAlt={iconAlt} cardTitle={cardTitle} cardDescription={cardDescription} />
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex self-center w-full max-w-[890px]">
        <Input type="text" placeholder="Type your prompt here..." className="py-5" />
        <div className="absolute top-1 right-3 flex items-center">
          <button className="m-4" onClick={() => onToggleItems(setToggleInputItems)}>
            <img src={verticalEllipsis} alt="new chat icon" className="w-[17px] h-[17px] dark:invert" />
          </button>
          <button className="m-4">
            <img src={send} alt="new chat icon" width={17} height={17} className="dark:invert" />
          </button>
        </div>
        {
          toggleInputItems && (
            <div className="absolute right-12 bottom-full mt-1 z-10 bg-white dark:bg-color-dark-300 rounded-md shadow-lg">
              <button className="flex justify-center items-center w-full hover:bg-gray-100 hover:dark:bg-color-dark-400 px-6 py-5">
                <img src={image} alt="new chat icon" width={17} height={17} className="dark:invert" />
              </button>
              <button className="flex justify-center items-center w-full hover:bg-gray-100 hover:dark:bg-color-dark-400 px-6 py-5">
                <img src={mic} alt="new chat icon" width={17} height={17} className="dark:invert" />
              </button>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Main