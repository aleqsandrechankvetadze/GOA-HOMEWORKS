import {arr1} from "./data/arrIndex.js"
import {arr2} from "./data/arrIndex2.js"

import handleClick from "./data/funkExport.js"
import {handleOver} from "./data/funcExport.js"
import * as Math from "./data/MathModule.js"


console.log("-----function-----")
console.log(handleClick("bro"),handleOver())
console.log("---files-----")
console.log(arr1,arr2)
console.log("---multiple-models")
console.log(Math.sum(3,5))