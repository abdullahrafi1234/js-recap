// copyWithin(target, start, end)

/**
 * 1. target is required
 * 2. start defaults to 0
 * 3. end defaults to array.length
 * 4. never changes array.length
 * 5. overwrites original array
 * 6. returns modified array
 */

let a = ['Js', 'PHP', 'Python', 'Ruby', 'C++', 'Rust', 'Express', 'Node']

a.copyWithin(2, 1,3)  // target array length theke beshi hoile copy hbena and array length er bahire jaia kisu copy hobena
// console.log(a)