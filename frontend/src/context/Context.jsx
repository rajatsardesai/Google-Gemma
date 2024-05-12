import { createContext, useState } from "react";
import runChat from "../config/gemma";

export const Context = createContext();

// Regex to format prompt response
const formatResponse = (response) => {
    let formattedResponse = response.replace(/##\s(.*?)(?=\n)/g, "<h2>$1</h2>");
    formattedResponse = formattedResponse.replace(/###\s(.*?)(?=\n)/g, "<h3>$1</h3>");
    formattedResponse = formattedResponse.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    formattedResponse = formattedResponse.split("*").join("</br>");
    formattedResponse = formattedResponse.split("\n").join("</br>");
    formattedResponse = formattedResponse.replace(/```(.*?)```/gs, `<span>$1</span>`);
    return formattedResponse;
};

const ContextProvider = (props) => {
    const [toggleChats, setToggleChats] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(true);
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    // Function to delay appending each word
    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75 * index);
    };

    // Function to open new chat
    const newchat = () => {
        setLoading(false);
        setShowResult(false);
    };

    // Function to get response from Gemini API and format it
    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        try {
            let response;
            if (prompt !== undefined) {
                response = await runChat(prompt);
                setRecentPrompt(prompt);
            } else {
                setPrevPrompts(prev => [...prev, input]);
                setRecentPrompt(input);
                response = await runChat(input);
            };
            const formattedResponse = formatResponse(response);

            // Split the response into words and delay appending each word
            const words = formattedResponse.split(" ");
            words.forEach((word, i) => {
                delayPara(i, word + " ");
            });
        } catch (error) {
            console.error("Error fetching response:", error);
            setLoading(false);
        }
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
        prevPrompts,
        setPrevPrompts,
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
        newchat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;