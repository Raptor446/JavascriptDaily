// T.C = O(n), S.C = O(n) but set returns undefined for empty spaces & doesn't do filteration for nested arrays
function dedupeWithSet(arr) {
    const uniqueElements = new Set(arr)
    return [...uniqueElements]
}

console.log('dedupeWithSet', dedupeWithSet([1,3,4,4,5,5,7]))
console.log('dedupeWithSet', dedupeWithSet([1,3,4,4,,null,Infinity,{},5,5,7]))
console.log('dedupeWithSet', dedupeWithSet([1,3,4,4,undefined,Symbol('ayush'),BigInt(1),[1,2,2,1,2,2],5,5,7]))