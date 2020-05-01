const reduceHelper = (f, acc, arr) => {
    if (arr.length === 0) return acc//求值完毕,递归结束。
    const [head, ...tail] = arr//将arr存入新建的数组中，[head, ...tail]为动态数组
    return reduceHelper(f, f(acc, head), tail)//递归
  }
  
  Array.prototype.myReduce = function (fn, initialValue) {
    const array = this//获取原数组
    //传入的回调函数,reduce期望的初始值
    return reduceHelper(fn, initialValue, array)
  }
var a = [1,2,3,4,5]

//var sum = a.reduce((total,value)=>total+value,0);
var sum = a.myReduce((total,value)=>total+value,0);
console.log(sum)
console.log(a)