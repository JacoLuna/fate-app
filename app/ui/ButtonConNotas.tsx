// notas sobre ts  
// con alias
// el alias podes simplemente declararlo con asignación o como objeto o como en este caso los dos
// aca estoy intersectando
/* type ButtonProps2 = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
} */

//con interfaces
//las interfaces siempre deben ser un objeto
//aca estoy extendiendo 
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const ejemploTexto = [ // esto está inferido como const ejemploTexto: string[]
    "texto 1",
    "texto 2",
    "texto 3",
];

const ejemploTextoAsConst = [ // ahora esto está inferido como const ejemploTextoAsConst: readonly ["texto 1", "texto 2", "texto 3"]
    "texto 1",
    "texto 2",
    "texto 3",
] as const; // esto es puramente ts
// lo que hace es que esto no es un array de string, es específicamente un array con estos strings y nada mas, ademas es readonly osea que es inmutable
// esto lo hace mas específico, capaz esto es una serie de opciones unicas para mostrar

export function Button({ children, className, ...rest }: ButtonProps) {
    // si quiero asignar por fuera la funcion
    // puede ser una fn normal
    /* function funcionExterna(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
        console.log("Hola 2");
    } */
    // o una arrow fn
    const funcionExterna = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("Hola 2");
    }
    return (
        <>
        {/* en este caso ts por contexto puede saber que e es de tipo MouseEvent<HTMLButtonElement, MouseEvent>
        <button {...rest} className={className} onClick={ (e) => console.log("hola")}>
            {children}
        </button> */}
        {/* si yo quiero asignarle una función por fuera tengo que tipar el argumento */}
        <button {...rest} className={className} onClick={funcionExterna}>
            {children}
        </button>
        </>
    );
}
