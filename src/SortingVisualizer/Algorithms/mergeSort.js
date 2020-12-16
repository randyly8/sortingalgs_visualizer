let tempArray = []
export const sort = ((array) => {
    tempArray = array
    mergeSort(tempArray, 0, array.length)
    return tempArray
})

const mergeSort = ((array, left, right) => {
    if (left < right) {
        // middle point
        const mid = math.floor((left + right) / 2)

        // recursivly divide
        mergeSort(array, left, mid)
        mergeSort(array, mid + 1, right)

        // merge sorted
        merge(array, left, mid, right)
    }
})

const merge = ((array, left, middle, right) => {
    // array sizes of both sides
    leftArraySize = middle - left + 1
    rightArraySize = right - middle

    // temp arrays
    let L = []
    let R = []


})