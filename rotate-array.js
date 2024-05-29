var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    if (k < 1 ) return nums;
    const rotatedPart = nums.slice(-k);
    const remainingPart = nums.slice(0, n - k);
    nums.splice(0, n, ...rotatedPart, ...remainingPart)
    return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3))
console.log(rotate([-1,-100,3,99], 2))