import { createContext, useState } from "react";
import runChat from "../config/gemma";

export const Context = createContext();

const ContextProvider = (props) => {
    const [toggleChats, setToggleChats] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(true);
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        let time = Math.floor((10 + Math.random() * 250) / 4); // 10-250ms delay per word
    }

    // Function to get response from Gemini API and format it
    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);

        const response = await runChat(prompt);
        console.log(response)

        // Logic to convert ## and ### headings
        let formattedResponse = response.replace(/##\s(.*?)(?=\n)/g, "<h2>$1</h2>");
        formattedResponse = formattedResponse.replace(/###\s(.*?)(?=\n)/g, "<h3>$1</h3>");

        // Logic to create headings using '**' (in bold letters)
        formattedResponse = formattedResponse.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

        // Logic to add new lines using '*' that we get in the response
        formattedResponse = formattedResponse.split("*").join("</br>");

        // Logic to add line breaks for newline characters
        formattedResponse = formattedResponse.split("\n").join("</br>");

        // Logic to add code snippet format with JSX as the title
        formattedResponse = formattedResponse.replace(/```(.*?)```/gs, `<span>$1</span>`);

        setResultData(formattedResponse);
        setLoading(false);
        setInput("");
    };

    // Global Function to toggle items
    const onToggleItems = (setItem) => {
        setItem((toggle) => !toggle);
    };

    // Retrieve theme from localStorage on initial render
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    const contextValue = {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        loading,
        resultData,
        onSent,
        toggleChats,
        setToggleChats,
        toggleMenu,
        setToggleMenu,
        onToggleItems,
        isDark,
        setIsDark,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;