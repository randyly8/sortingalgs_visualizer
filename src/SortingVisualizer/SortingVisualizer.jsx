import React, { useState, useEffect } from 'react';
import * as mergeSortAlg from "./Algorithms/mergeSort"
import * as heapSortAlg from "./Algorithms/heapSort"
import * as bubbleSortAlg from "./Algorithms/bubbleSort"
import * as insertionSortAlg from "./Algorithms/insertionSort"
import * as quickSortAlg from "./Algorithms/quickSort"
import * as selectionSortAlg from "./Algorithms/selectionSort"

const PRIMARY_COLOR = 'blue';

function SortingVisualizer() {
    const [length, setLength] = useState(150)
    const [array, setArray] = useState([])

    useEffect(() => {
        populate_array()
    }, [])

    useEffect(() => {
        populate_array()
    }, [length])


    // create array functions
    const populate_array = (() => {
        const array = []
        for (let i = 0; i < length; i++) {
            array.push(random_number())
        }
        setArray(array)
    })

    const random_number = (() => {
        return Math.floor(Math.random() * (800 - 1) + 1);
    })

    // Sorting algs call
    const mergeSort = (() => {
        const sortedArrayTester = array.slice().sort()
        const sortedArray = mergeSortAlg.sort(array)

        // test 
        console.log(arraysAreEqual(sortedArrayTester, sortedArray))
    })

    const heapSort = (() => {
        const sortedArrayTester = array.slice().sort()
        const sortedArray = heapSortAlg.sort(array)

        // test 
        console.log(arraysAreEqual(sortedArrayTester, sortedArray))
    })

    const bubbleSort = (() => {
        const sortedArrayTester = array.slice().sort()
        const sortedArray = bubbleSortAlg.sort(array)

        // test 
        console.log(arraysAreEqual(sortedArrayTester, sortedArray))
    })

    const insertionSort = (() => {
        const sortedArrayTester = array.slice().sort()
        const sortedArray = insertionSortAlg.sort(array)

        // test 
        console.log(arraysAreEqual(sortedArrayTester, sortedArray))
    })

    const quickSort = (() => {
        const sortedArrayTester = array.slice().sort()
        const sortedArray = quickSortAlg.sort(array)

        // test 
        console.log(arraysAreEqual(sortedArrayTester, sortedArray))
    })

    const selectionSort = (() => {
        const sortedArrayTester = array.slice().sort()
        const sortedArray = selectionSortAlg.sort(array)

        // test 
        console.log(arraysAreEqual(sortedArrayTester, sortedArray))
    })

    // array comparison function
    const arraysAreEqual = ((arrayOne, arrayTwo) => {
        if (arrayOne.length !== arrayTwo.length) return false
        for (let i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i] !== arrayTwo[i]) return false
        }
        return true
    })

    return (
        <div>
            {console.log(array)}
            <button onClick={populate_array}>repopulate</button>
            <button onClick={() => mergeSort()}>Merge Sort</button>
            <button onClick={() => heapSort()}>Heap Sort</button>
            <button onClick={() => bubbleSort()}>Bubble Sort</button>
            <button onClick={() => insertionSort()}>Insertion Sort</button>
            <button onClick={() => quickSort()}>Quick Sort</button>
            <button onClick={() => selectionSort()}>Selection Sort</button>
            <input
                type="range"
                min="1"
                max="630"
                id="length"
                onChange={() => setLength(document.getElementById("length").value)}
            />
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        key={idx}
                        className="array-bar"
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                            width: `${document.body.clientWidth / length}px`
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default SortingVisualizer;