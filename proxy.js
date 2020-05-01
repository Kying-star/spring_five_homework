//获取dom元素

var input1 = document.getElementById('input');
var txt1 = document.getElementById('txt');
//初始化代理对象
let obj = {};

let myproxy = new Proxy(obj, {
    //拦截get事件
    get: (target, key, recevier) => {
        //获取对象的值
        return Reflect.get(target, key, recevier)
    },
    set: (target, key, value, recevier) => {
        if (key == 'text') {
            txt1.innerHTML = value;
        }
        //将变化反射回原有对象
        return Reflect.set(target, key, value, recevier);
    }
})
//监听keyup事件
input1.addEventListener('keyup', (e) => {
    myproxy.text = e.target.value;
})