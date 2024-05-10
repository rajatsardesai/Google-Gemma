import { useContext, useState } from "react";
import { add, image, mic, send, verticalEllipsis } from "../assets/icons";
import { Button, Input, MainNav } from "../components";
import { Card } from "../components";
import { promptData } from "../constants/promptData";
import { Context } from "../context/Context";
import { headerLogo } from "../assets/images";
import CustomSkeleton from "../theme/CustomSkeleton";

const Main = () => {
  const [toggleInputItems, setToggleInputItems] = useState(false);
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, onToggleItems } = useContext(Context);

  // Function to send prompt when Enter key is pressed
  const sendPrompt = (event) => {
    if (event.key === 'Enter') {
      onSent(input);
      setInput((text) => text === "" ? "" : text)
    }
  };

  return (
    <section id="main" className="bg-white dark:bg-color-dark-100 flex flex-col h-screen p-4">
      <div className="flex flex-col flex-none">
        <MainNav />
      </div>
      <div className={`flex flex-col grow max-h-full overflow-auto ${!showResult && 'justify-center text-center'} items-center my-4`}>
        <div className={`w-full max-w-[890px] overflow-hidden`}>
          {
            !showResult ? (
              <>
                <h1 className="font-poppins text-[46px] leading-tight font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">
                  Hello, XYZ
                  <span className="block text-gray-300">How can I help you today?</span>
                </h1>
                <p className="font-opensans dark:text-white text-sm font-medium leading-5 py-4 w-full max-w-[620px] m-auto">Your conversations are processed by human reviewers to improve the technologies powering Gemini Apps. Don't enter anything you wouldn't want reviewed or used.</p>

                <div className="relative overflow-x-auto h-[208px]">
                  <div className="flex items-center gap-3  absolute top-0 left-0">
                    {
                      promptData.map(({ cardIcon, iconAlt, cardTitle, cardDescription }) => (
                        <Card key={cardTitle} cardIcon={cardIcon} iconAlt={iconAlt} cardTitle={cardTitle} cardDescription={cardDescription} />
                      ))
                    }
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="max-h-full overflow-auto sm:[&::-webkit-scrollbar]:[width:6px] [&::-webkit-scrollbar-thumb]:bg-color-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-color-dark-300">
                  <div className="flex max-sm:flex-col items-start gap-4">
                    <img src={add} alt="new chat icon" width={15} height={15} />
                    <span className="font-opensans text-md font-medium leading-5 dark:text-white">{recentPrompt}</span>
                  </div>
                  <div className="mt-6 flex max-sm:flex-col items-start gap-4">
                    <img src={headerLogo} alt="new chat icon" width={40} height={40} />
                    {
                      loading ? (
                        <div className="w-full">
                          <CustomSkeleton />
                        </div>
                      ) : (
                        <p className="mt-2 pr-4 sm:pr-6 font-opensans text-md font-medium leading-5 dark:text-white" dangerouslySetInnerHTML={{ __html: resultData }}></p>
                      )
                    }
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>


      <div className="relative flex self-center w-full max-w-[890px]">
        <Input type="text" placeholder="Type your prompt here..." onChange={(e) => setInput(e.target.value)} onKeyDown={sendPrompt} className="py-5" value={input} />
        <div className="absolute top-1 right-3 flex items-center">
          <Button className="m-4" onClick={() => onToggleItems(setToggleInputItems)}>
            <img src={verticalEllipsis} alt="new chat icon" className="w-[17px] h-[17px] dark:invert" />
          </Button>
          {
            input && (
              <Button className="m-4" onClick={() => onSent(input)}>
                <img src={send} alt="new chat icon" width={17} height={17} className="dark:invert" />
              </Button>
            )
          }
        </div>
        {
          toggleInputItems && (
            <div className="absolute right-12 bottom-full mt-1 z-10 bg-white dark:bg-color-dark-300 rounded-md shadow-lg">
              <Button className="flex justify-center items-center w-full hover:bg-gray-100 hover:dark:bg-color-dark-400 px-6 py-5">
                <img src={image} alt="new chat icon" width={17} height={17} className="dark:invert" />
              </Button>
              <Button className="flex justify-center items-center w-full hover:bg-gray-100 hover:dark:bg-color-dark-400 px-6 py-5">
                <img src={mic} alt="new chat icon" width={17} height={17} className="dark:invert" />
              </Button>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Main