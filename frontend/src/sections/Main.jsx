import { useContext, useState } from "react";
import { image, mic, send, user, verticalEllipsis } from "../assets/icons";
import { Button, Input, MainNav } from "../components";
import { Card } from "../components";
import { promptData } from "../constants/promptData";
import { Context } from "../context/Context";
import { headerLogo } from "../assets/images";
import CustomSkeleton from "../theme/CustomSkeleton";

const Main = () => {
  const [toggleInputItems, setToggleInputItems] = useState(false);
  const {
    onSent,
    recentPrompt,
    setRecentPrompt,
    setPrevPrompts,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    onToggleItems
  } = useContext(Context);

  // Function to send prompt when Enter key is pressed
  const sendPrompt = (event) => {
    if (event.key === 'Enter') {
      setInput(event.target.value);
      onSent();
    }
  };

  // Function to send prompt when clicked on cards
  const onClickCard = async (cardTitle) => {
    setInput(cardTitle);
    setRecentPrompt(cardTitle);
    setPrevPrompts((prompt) => [...prompt, cardTitle])
    await onSent(cardTitle);
  };

  return (
    <section id="main" className="bg-white dark:bg-color-dark-100 flex flex-col h-dvh p-4">
      <div className="flex flex-col flex-none">
        <MainNav />
      </div>
      <div className={`flex flex-col grow max-h-full overflow-auto ${!showResult && 'justify-center text-center'} items-center mt-4 mb-2`}>
        <div className={`w-full max-w-[890px] overflow-hidden`}>
          {
            !showResult ? (
              <>
                <h1 className="font-poppins text-[46px] leading-tight font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">
                  Hello, Guest
                  <span className="block text-gray-300">How can I help you today?</span>
                </h1>
                <p className="font-opensans dark:text-white text-sm font-medium leading-5 py-4 w-full max-w-[620px] m-auto">Your conversations are processed by human reviewers to improve the technologies powering Gemma Apps. Don't enter anything you wouldn't want reviewed or used.</p>

                <div className="relative overflow-x-auto h-[208px]">
                  <div className="flex items-center gap-3  absolute top-0 left-0">
                    {
                      promptData.map(({ cardIcon, iconAlt, cardTitle, cardDescription }) => (
                        <Card key={cardTitle} onClick={() => onClickCard(cardTitle)} cardIcon={cardIcon} iconAlt={iconAlt} cardTitle={cardTitle} cardDescription={cardDescription} />
                      ))
                    }
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="max-h-full overflow-auto sm:[&::-webkit-scrollbar]:[width:6px] [&::-webkit-scrollbar-thumb]:bg-color-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-color-dark-300">
                  <div className="flex max-sm:flex-col md:items-center gap-4">
                    <div className="w-fit rounded-full border border-slate-500 dark:border-white p-2 ml-1">
                      <img src={user} alt="user icon" width={15} height={15} className="dark:invert" />
                    </div>
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

      <div className="flex m-auto w-full max-w-[890px]">
        <Input type="text" placeholder="Type your prompt here..." onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => sendPrompt(e)} className="py-5" value={input} />
        <div className="flex items-center gap-6 bg-color-gray-100 dark:bg-color-dark-300 dark:text-white rounded-r-lg px-8">
          <div className="relative">
            <Button onClick={() => onToggleItems(setToggleInputItems)}>
              <img src={verticalEllipsis} alt="new chat icon" className="w-[17px] h-[17px] dark:invert m-2" />
            </Button>
            {
              toggleInputItems && (
                <div className="absolute bottom-10 -left-4 z-10 bg-white dark:bg-color-dark-300 rounded-md shadow-lg w-14 flex flex-col gap-8 justify-center items-center p-4">
                  <Button>
                    <img src={image} alt="new chat icon" width={17} height={17} className="dark:invert" />
                  </Button>
                  <Button>
                    <img src={mic} alt="new chat icon" width={17} height={17} className="dark:invert" />
                  </Button>
                </div>
              )
            }
          </div>
          {
            input && (
              <Button onClick={() => onSent(input)}>
                <img src={send} alt="new chat icon" width={17} height={17} className="dark:invert m-2" />
              </Button>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Main;