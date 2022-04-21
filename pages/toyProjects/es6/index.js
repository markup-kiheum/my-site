import React from 'react';
import styles from "./styles.module.css";

const BasicScript = () => {
    /* 콜백함수
    const add = (c, d) => {
        console.log(c);
        console.log(d);
        return c + d;
    };
    const multiple = (e, f) => {
        console.log(e);
        console.log(f);
        return e * f;
    };
    const calculator = (a, b, action) => {
        let result = action(a, b);
        console.log(a);
        console.log(b);
        console.log(result);
        return result;
    };
    calculator(1, 2, multiple); */
    
    /* 콜백함수 퀴즈 문제 (답 틀림)
    const max = (a) => {
        for (a = 0; a < 5; a++) {
            console.log(a);
        }
    };
    const iterate = (max, action) => {
        let result = action(max);
        console.log(result);
        result;
    }
    iterate(5, max);
    */
    /* 클래스 상속 문제 (답 틀림)
    class Staff {
        constructor (name, department, time) {
            this.name = name;
            this.department = department;
            this.time = time;
        }
        calculate = () => {
            console.log(this.time * 10000);
        }
    }
    class PartStaff extends Staff {
        calculate = () => {
            console.log(this.time * 8000);
        }
    }
    const staff = new Staff('기흠', 'IT', 8);
    const partStaff = new PartStaff('훈명', '증권', 8);
    console.log(partStaff.calculate());
    console.log(staff);
    */
    /* built-in Quiz
    const text = 'Hello World!';
    console.log(text.charAt());
    const ids = 'user1, user2, user3, user4';
    console.log(ids.split(','));
    */
    /* 배열 퀴즈 (답 틀림) 
    const numberInput = [1, 2, 3, 2];
    const newNumberInput = (array) => {
        const result = [...array];
        for (let i = 0; i < result.length; i++) {
            if (result[i] === 2) {
                result[i] = 4;
            }
        }
        return result;
    }
    const numberArray = [1, 2, 3, 2];
    const numberArrayFunc = (array, from) => {
        let count = 0;
        const result = [...array];
        for (let i = 0; i < result.length; i++) {
            if (result[i] === from) {
                count++;
            }
        }
        return count;
    }
    console.log(numberArrayFunc(numberArray, 2));
    const arrayFunc = (firstArray, secondArray) => {
        const newFirstArray = [...firstArray];
        const newSecondArray = [...secondArray];
        const result = [];
        for (let i = 0; i < newFirstArray.length; i++) {
            if (newSecondArray.includes(newFirstArray[i])) {
                result.push(newFirstArray[i]);
            }
        }
        return result;
    };
    console.log(arrayFunc([1, 2, 3, 4, 5], [1, 2, 3]));
    */

    return (
        <h1 className={styles.title}>ES6</h1>
    );   
};

export default BasicScript;