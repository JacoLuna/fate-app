import { Nerko_One } from "next/font/google";
import { ReactElement } from "react";
import styles from 'characterForm.module.css';

export function CustomInput(
    {   
        label,
        name, 
        defaultValue = "", 
        type,
        labelPosition = "up"
    }:{
        label: string,
        name: string, 
        defaultValue : string, 
        type: "text" | "number" | "email",
        labelPosition?: "up" | "left" | "right"
    }): ReactElement{

    const id = "id_" + Math.random().toString(16).slice(2)
    let returnValue: ReactElement = <></>;
    
    switch(labelPosition){
        case "up":
            returnValue =
                <>
                    <div className="{styles.test}">
                        <label id={"id_label_" + id} htmlFor={id}>{label}</label>
                    </div>
                    <div>
                        <input id={id} className="outline border-solid" type={type} defaultValue={defaultValue} name={name} />
                    </div>
                </>;
            break;
        case "left":
            returnValue =
                <>
                    <div>
                        <label id={"id_label_" + id} htmlFor={id}>{label}</label>
                        <input id={id} className="outline border-solid" type={type} defaultValue={defaultValue} name={name} />
                    </div>
                </>;
            break;
        case "right":
            returnValue =
                <>
                    <div>
                        <input id={id} className="outline border-solid" type={type} defaultValue={defaultValue} name={name} />
                        <label id={"id_label_" + id} htmlFor={id}>{label}</label>
                    </div>
                </>;
            break;
    }

    return returnValue;
}