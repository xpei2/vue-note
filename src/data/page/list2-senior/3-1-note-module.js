let value1 = 10;
let value2 = 99;
let value3 = 52;

export {
    value1,
    value2,
    value3
};
export let num = 20;
export function mul(num, value1) {
    return num + value1;
}
export class Person { run() { console.log('导入类：', 0); } }