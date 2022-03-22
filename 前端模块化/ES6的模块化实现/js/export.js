var name = 'HarryPort';
var age = 18;
var flag = true;

if (flag) {
    document.getElementById('acont').innerHTML = 'export-content';
}

function sum(a, b) {
    return a + b;
}

//导出方式一：声明时导出
export var height = 1.88;
export function mul(n1, n2) {
    return n1 * n2;
}

//导出方式二：导出对象
export {
    flag,
    sum
};

//导出方式三：导出类
export class Person {

    constructor(pName, pAge) {
        this.name = pName;
        this.age = pAge;
        // 类中的字段 this.name,this.age 与当前模块中定义的 name age 不冲突
        // console.log('export.name', name);
        // console.log('export.age', age);
    }

    learning() {
        console.log('I`m learing code!--', this.name, this.age);
    }
}

// 导出方式四：default 唯一默认变量或函数或类
// 某些情况下，一个模块中包含某个功能，或只包含一个功能，想让使用者自己定义暴露数据名称，且不会与其他需要暴露的数据有冲突时，可以使用 export default
// 注意：default 声明一个模块只能有一个
// const address = '地球';
// export default address;

export default function (args) {
    console.log(args);
}