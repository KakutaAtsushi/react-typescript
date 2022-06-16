import React, {useState, useEffect} from "react";

const CleanUp: React.FC = () => {
    const [currentNum, setCurrentNum] = useState(0);

    const incrementNum = () => {
        console.log("mouse event invoked !!");
        setCurrentNum((preNumber) => preNumber + 1);
    }
    useEffect(() => {
        console.log("useEffect in CleanUp invoked !!");
        window.addEventListener("mousedown", incrementNum);
        return () => {
            console.log("CleanUp invoked !");
            window.addEventListener("mousedown", incrementNum);
        }
    }, []);
    return <div>{currentNum}</div>;
}
export default CleanUp