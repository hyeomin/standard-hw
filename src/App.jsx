import { useState } from "react";

function App() {
    const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
    const [array, setArray] = useState(initialState);
    const [results, setResults] = useState("");
    const [query, setQuery] = useState("");

    const handleForEach = function () {
        let temp = "";
        array.forEach(function (fruits, index) {
            temp += `${index}: ${fruits}`;
        });
        setResults(temp);
    };

    const handleFilter = function () {
        const filteredArray = array.filter(function (fruits, index) {
            return fruits.includes(query);
        });
        setResults(filteredArray.join(", "));
    };

    const handleMap = function () {
        const uppercaseArray = array.map(function (fruits) {
            return fruits.toUpperCase();
        });
        setResults(uppercaseArray.join(", "));
    };

    const handleReduce = function () {
        const reducedArray = array.reduce(function (acc, cur) {
            return `${acc} + ${cur}`;
        });
        setResults(reducedArray);
    };

    const handlePush = function () {
        const newArray = [...array, query];
        setArray(newArray);
        setResults(newArray.join(", "));
    };

    const handlePop = function () {
        const poppedArr = [...array];
        poppedArr.pop();
        setArray(poppedArr);
        setResults(poppedArr.join(", "));
    };

    const handleSlice = function () {
        const newArr = [...array];
        const slicedArr = newArr.slice(1, 4);
        setArray(slicedArr);
        setResults(slicedArr.join(", "));
    };

    const handleIndexOf = function () {
        const index = array.indexOf(query);
        setResults(index);
    };

    const handleIncludes = function () {
        const checkInclude = array.includes(query);
        setResults(`${checkInclude}`);
    };

    const handleFind = function () {
        const findQuery = array.find(function (fruits, index) {
            return fruits.includes(query);
        });
        setResults(findQuery);
    };

    const handleSome = function () {
        const checkSome = array.some(function (fruits) {
            return fruits.includes(query);
        });
        setResults(`${checkSome}`);
    };

    const handleEvery = function () {
        const checkEvery = array.every(String);
        setResults(`${checkEvery}`);
    };

    // const handleSort

    // const handleJoin

    return (
        <div>
            <h1>스탠다드반 배열 API 테스트</h1>
            <input
                value={query}
                onChange={function (e) {
                    setQuery(e.target.value);
                }}
            />
            <div>
                <button onClick={handleForEach}>forEach</button>
                <button onClick={handleFilter}>filter</button>
                <button onClick={handleMap}>map</button>
                <button onClick={handleReduce}>reduce</button>
                <button onClick={handlePush}>push</button>
                <button onClick={handlePop}>pop</button>
                <button onClick={handleSlice}>slice</button>
                <button onClick={handleIndexOf}>indexOf</button>
                <button onClick={handleIncludes}>includes</button>
                <button onClick={handleFind}>find</button>
                <button onClick={handleSome}>some</button>
                <button onClick={handleEvery}>every</button>
                {/* <button onClick={handleSort}>sort</button>
                <button onClick={handleJoin}>join</button> */}
            </div>
            <div>
                <h3>원본 배열</h3>
                <p>{array.join(", ")}</p>
            </div>
            <div>
                <h3>결과물</h3>
                <p>{results}</p>
            </div>
        </div>
    );
}

export default App;
