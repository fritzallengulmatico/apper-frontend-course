function transform(nums){
    if(!nums.every(number => Number.isInteger(number))){
        console.log("Please input an array of integers.")
        return []
    }

    let squared = nums.map(number => number * number)

    squared.sort((a,b) => a - b)
    return squared
}

const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums)

// for checking of invalid scenario
const numsError = [4,9,5,3,'hey']
const sortedSquaredNumsError = transform(numsError) // "Please input an array of integers"
console.log(sortedSquaredNumsError)