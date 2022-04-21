import React from 'react';
import styles from "./styles.module.css";

const PrintingBoard = () => {
    const colorControllers = [
        {
            "id" : 1,
            "name" : "blackColor"
        },
        {
            "id" : 2,
            "name" : "whiteColor"
        }
    ];
    //const {colorController, setColorController} = useState([]);
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Printing Board</h1>
            <canvas className={styles.canvas}></canvas>
            <ul className={styles.controllers}>
                {
                    colorControllers.map((item)=> {
                        // const {id, name} = item || {};
                        return(
                            <li key={item.id} className={`${styles.item}`}></li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default PrintingBoard;