import { SkillsNameEnum } from "@/types/enums";

interface skillSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    selectClassName?: string
    optionsClassName?: string
}


/* const skillsList = [
    {id: crypto.randomUUID(), name:""},
    {id: crypto.randomUUID(), name:"Athletics"},
    {id: crypto.randomUUID(), name:"Burglary"},
    {id: crypto.randomUUID(), name:"Contacts"},
    {id: crypto.randomUUID(), name:"Crafts"},
    {id: crypto.randomUUID(), name:"Deceive"},
    {id: crypto.randomUUID(), name:"Drive"},
    {id: crypto.randomUUID(), name:"Empathy"},
    {id: crypto.randomUUID(), name:"Fight"},
    {id: crypto.randomUUID(), name:"Investigate"},
    {id: crypto.randomUUID(), name:"Lore"},
    {id: crypto.randomUUID(), name:"Notice"},
    {id: crypto.randomUUID(), name:"Physique"},
    {id: crypto.randomUUID(), name:"Provoke"},
    {id: crypto.randomUUID(), name:"Rapport"},
    {id: crypto.randomUUID(), name:"Resources"},
    {id: crypto.randomUUID(), name:"Shoot"},
    {id: crypto.randomUUID(), name:"Stealth"},
    {id: crypto.randomUUID(), name:"Will"}
] as const; */

let skillsList : {id : string, name : SkillsNameEnum}[] = [];

Object.values(SkillsNameEnum).forEach( skill => {
    skillsList.push({
        id : crypto.randomUUID(),
        name : skill
    })
})

export function SkillSelect({ selectClassName, optionsClassName, ...rest} : skillSelectProps){
    return  <>
        <select {...rest} className={selectClassName}>
            {
                skillsList.map( (skill) => (
                    <option 
                        className={optionsClassName} 
                        key={skill.id} id={skill.id} 
                        value={skill.name} 
                        style={{ fontFamily:"Arial, Helvetica, sans-serif", }} 
                    >
                            {skill.name}
                    </option>
                ))
            }
        </select>
    </>
}