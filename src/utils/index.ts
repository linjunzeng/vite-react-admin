export function findIntersection(a: string[] | string, b :string[] | string){
    if(a === '' || b === ''){
        return false
    }
    const list1 = Array.isArray(a) ? a : [a]
    const list2 = Array.isArray(b) ? b : [b]

    return list1.some(item => {
        return list2.includes(item)
    })
}