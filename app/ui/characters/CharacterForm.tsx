'use client';

import Image from "next/image";
import { Character } from "@/app/lib/definitions";
import { Button } from "../Button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SkillSelect } from "./SkillSelect";
import { getCharacterById, getCharacters, saveCharacters } from "@/app/lib/localStorageService";

export function CharacterForm(){
    const characterId = useSearchParams().get("id");

    const [character, setCharacter] = useState<Character>({
        id : -1,
        character_name : "",
        character_description : "",
        refresh : "",
        aspects_1 : "",
        aspects_2 : "",
        aspects_3 : "",
        aspects_4 : "",
        aspects_5 : "",
        skills_superb : "",
        skills_great_1 : "",
        skills_great_2 : "",
        skills_good_1 : "",
        skills_good_2 : "",
        skills_good_3 : "",
        skills_fair_1 : "",
        skills_fair_2 : "",
        skills_fair_3 : "",
        skills_fair_4 : "",
        skills_average_1 : "",
        skills_average_2 : "",
        skills_average_3 : "",
        skills_average_4 : "",
        skills_average_5 : "",
        extras : "",
        stunts : "",
        stress_physical_1 : "",
        stress_physical_2 : "",
        stress_physical_3 : "",
        stress_physical_4 : "",
        stress_mental_1 : "",
        stress_mental_2 : "",
        stress_mental_3 : "",
        stress_mental_4 : "",
        consequences_1 : "",
        consequences_2 : "",
        consequences_3 : "",
        consequences_4 : "",
    })

    useEffect(() => {
        // se ejecuta cuando el componente se crea por primera vez
        if(characterId){
            setCharacter(getCharacterById(Number(characterId)));
        }
        //se vuelve a ejecutar cuando las dependencias(characterId en este caso) cambian
    }, [characterId]);

    function getAvailableId() : number{
        return getCharacters().length > 0 ? getCharacters()[getCharacters().length - 1].id + 1 : 1;
    }

    // el event que recibo es del onchange del campo que corresponda
    function handleFieldChange(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
        //lo desarmo en el atributo de name y value
        let {name, value} = e.target;

        if(e.target.type == "checkbox"){
            value = (e.target as HTMLInputElement).checked ? "true" : "false";
        }

        //al setCharacter del useState le puedo asignar un arrow fn que siempre recibe como parametro el estado previo de mi dato/objeto
        //en este caso si a un objeto le hago {...objeto, key : value} asigno todo lo previo y cabio solo lo que quiero cambiar
        setCharacter((prev) => ({
            ...prev,
            [name] : value
        }))
        //[name]: es una propiedad dinámica, como si fuese un array asociativo. Si el input tiene name="character_name", actualiza esa propiedad. Si tiene name="refresh", actualiza esa otra.
    }

    function handleSubmit(event : React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        const characters = getCharacters();
        let idInArray : number = characters.findIndex( (c : Character) => c.id == character.id);

        if(idInArray == -1){
            character.id = getAvailableId();
            characters.push(character);
        }else{
            characters[idInArray] = character;
        }

        saveCharacters(characters);
    }

    return(
        
            <form id="characterFrm" onSubmit={handleSubmit}>
                {/* ID + Name + Descr section */}
                <div id="first_section" className="grid grid-cols-1 md:grid-cols-[3fr_1fr] mb-4">
                    <div id="first_section_left" className="grid order-2 md:order-1 grid-cols-[3fr_1fr] grid-rows-[1fr_3fr] gap-2">
                        <div className="col-span-4">
                            <p className="w-full border-2 border-b-black ">ID</p>
                            {/* <input name="character_id" type="text" placeholder="id" className="w-full border-2 border-b-black "/> */}
                        </div>
                        <div className="col-span-4 md:col-span-3 grid gap-2">
                            {/* para los inputs siempre declaro el name, que es lo que me va a definir el nombre del atributo para el objeto y pongo en el value el valor del atributo que actualizo y en el onChange llamo al handleFieldChange que actualiza ese campo en especial*/}
                            <input name="character_name" 
                                type="text" 
                                placeholder="name" 
                                className="w-full border-2 border-b-black" 
                                value={character.character_name}
                                onChange={handleFieldChange} />

                            <textarea id="character_description" 
                                name="character_description"
                                placeholder="description" 
                                className="w-full border-2 border-b-black"
                                value={character.character_description}
                                onChange={handleFieldChange}>
                            </textarea>
                        </div>
                        
                        <div className="col-span-4 md:col-span-1 border-2 border-b-black">
                            <input id="refresh" name="refresh" type="number" placeholder="refresh" className="h-full w-full" value={character.refresh} onChange={handleFieldChange}/>
                        </div>
                    </div>
                    <div id="first_section_right" className="order-1 md:order-2 flex justify-center mb-2 md:mb-0">
                        <Image 
                            src="/fate_core_logo.jpg"
                            width={350}
                            height={169}
                            alt="fate_core_logo"
                            className="h-full w-auto"
                        />
                    </div>
                </div>

                {/* ASPECTS + SKILLS*/}
                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] my-2 gap-2">
                    {/* ASPECTS */}
                    <div className="gap-2">
                        <p className="w-full border-2 border-b-black mb-2">
                            ASPECTS
                        </p>
                        <input type="text" 
                            id="aspects_1" 
                            name="aspects_1"
                            className="w-full border-2 border-b-black mb-2"
                            value={character.aspects_1} onChange={handleFieldChange}/>
                        <input type="text" 
                            id="aspects_2" 
                            name="aspects_2"
                            className="w-full border-2 border-b-black mb-2"
                            value={character.aspects_2} onChange={handleFieldChange}/>
                        <input type="text" 
                            id="aspects_3" 
                            name="aspects_3"
                            className="w-full border-2 border-b-black mb-2"
                            value={character.aspects_3} onChange={handleFieldChange}/>
                        <input type="text" 
                            id="aspects_4" 
                            name="aspects_4"
                            className="w-full border-2 border-b-black mb-2"
                            value={character.aspects_4} onChange={handleFieldChange}/>
                        <input type="text" 
                            id="aspects_5" 
                            name="aspects_5"
                            className="w-full border-2 border-b-black"
                            value={character.aspects_5} onChange={handleFieldChange}/>
                    </div>

                    {/* SKILLS */}
                    <div className="grid grid-cols-[100px_10fr] gap-2">
                        <p className="w-full border-2 border-b-black col-span-2">SKILLS</p>
                        <div className="grid grid-rows-5 text-end">
                            <p>Superb (+5)</p>
                            <p>Great (+4)</p>
                            <p>Good (+3)</p>
                            <p>Fair (+2)</p>
                            <p>Average (+1)</p>
                        </div>
                        <div className="grid grid-cols-5 grid-rows-5">
                            <div className="col-span-5">
                                <SkillSelect id="skills_superb" 
                                    name="skills_superb" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_superb}
                                    onChange={handleFieldChange}></SkillSelect>
                            </div>
                            <div className="col-span-5">
                                <SkillSelect id="skills_great_1" 
                                    name="skills_great_1" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_great_1}
                                    onChange={handleFieldChange}></SkillSelect>
                                <SkillSelect id="skills_great_2" 
                                    name="skills_great_2" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_great_2}
                                    onChange={handleFieldChange}></SkillSelect>
                            </div>
                            <div className="col-span-5">
                                <SkillSelect id="skills_good_1" 
                                    name="skills_good_1" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_good_1}
                                    onChange={handleFieldChange}></SkillSelect>
                                <SkillSelect id="skills_good_2" 
                                    name="skills_good_2" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_good_2}
                                    onChange={handleFieldChange}></SkillSelect>
                                <SkillSelect id="skills_good_3" 
                                    name="skills_good_3" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_good_3}
                                    onChange={handleFieldChange}></SkillSelect>
                            </div>
                            <div className="col-span-5">
                                <SkillSelect id="skills_fair_1" 
                                    name="skills_fair_1" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_fair_1}
                                    onChange={handleFieldChange}></SkillSelect>
                                <SkillSelect id="skills_fair_2" 
                                    name="skills_fair_2" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_fair_2}
                                    onChange={handleFieldChange}></SkillSelect>
                                <SkillSelect id="skills_fair_3" 
                                    name="skills_fair_3" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_fair_3}
                                    onChange={handleFieldChange}></SkillSelect>
                                <SkillSelect id="skills_fair_4" 
                                    name="skills_fair_4" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_fair_4}
                                    onChange={handleFieldChange}></SkillSelect>
                            </div>

                            <div className="col-span-5">
                                <SkillSelect id="skills_average_1" 
                                    name="skills_average_1" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_average_1}
                                    onChange={handleFieldChange}></SkillSelect>
                                <SkillSelect id="skills_average_2" 
                                    name="skills_average_2" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_average_2}
                                    onChange={handleFieldChange}></SkillSelect>
                                <SkillSelect id="skills_average_3" 
                                    name="skills_average_3" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_average_3}
                                    onChange={handleFieldChange}></SkillSelect>
                                <SkillSelect id="skills_average_4" 
                                    name="skills_average_4" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_average_4}
                                    onChange={handleFieldChange}></SkillSelect>
                                <SkillSelect id="skills_average_5" 
                                    name="skills_average_5" 
                                    selectClassName="border-2 border-b-black min-w-1/5" 
                                    value={character.skills_average_5}
                                    onChange={handleFieldChange}></SkillSelect>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EXTRAS + STUNTS */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-2">
                    {/* EXTRAS */}
                    <div>
                        <p className="w-full border-2 border-b-black">EXTRAS</p>
                        <textarea id="extras" 
                            name="extras"
                            className="border-2 border-b-black w-full"
                            value={character.extras}
                            onChange={handleFieldChange}>
                            </textarea>
                    </div>

                    {/* STUNTS */}
                    <div>
                        <p className="w-full border-2 border-b-black">STUNTS</p>
                        <textarea id="stunts" 
                            name="stunts"
                            className="border-2 border-b-black w-full"
                            value={character.stunts}
                            onChange={handleFieldChange}>
                            </textarea>
                    </div>
                </div>

                {/* STRESS + CONSECUENCES */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-2">
                    {/* STRESS */}
                    <div>
                        <div className="grid grid-cols-4">
                            <p className="w-full border-2 border-b-black col-span-4">PHYSICAL STRESS</p>
                            <div>
                                <input type="checkbox" id="stress_physical_1" name="stress_physical_1" className="border-2 border-b-black" value={character.stress_physical_1} onChange={handleFieldChange}/>
                            </div>
                            <div>
                                <input type="checkbox" id="stress_physical_2" name="stress_physical_2" className="border-2 border-b-black" value={character?.stress_physical_2} onChange={handleFieldChange}/>
                            </div>
                            <div>
                                <input type="checkbox" id="stress_physical_3" name="stress_physical_3" className="border-2 border-b-black" value={character?.stress_physical_3} onChange={handleFieldChange}/>
                            </div>        
                            <div>
                                <input type="checkbox" id="stress_physical_4" name="stress_physical_4" className="border-2 border-b-black" value={character?.stress_physical_4} onChange={handleFieldChange}/>
                            </div>    
                        </div>

                        <div className="grid grid-cols-4">
                            <p className="w-full border-2 border-b-black col-span-4">MENTAL STRESS</p>
                            <div>
                                <input type="checkbox" id="stress_mental_1" name="stress_mental_1" className="border-2 border-b-black" value={character?.stress_mental_1} onChange={handleFieldChange}/>
                            </div>
                            <div>
                                <input type="checkbox" id="stress_mental_2" name="stress_mental_2" className="border-2 border-b-black" value={character?.stress_mental_2} onChange={handleFieldChange}/>
                            </div>
                            <div>
                                <input type="checkbox" id="stress_mental_3" name="stress_mental_3" className="border-2 border-b-black" value={character?.stress_mental_3} onChange={handleFieldChange}/>
                            </div>        
                            <div>
                                <input type="checkbox" id="stress_mental_4" name="stress_mental_4" className="border-2 border-b-black" value={character?.stress_mental_4} onChange={handleFieldChange}/>
                            </div>    
                        </div>
                    </div>

                    {/* CONSEQUENCES */}
                    <div>
                        <p className="w-full border-2 border-b-black col-span-2 mb-2">CONSEQUENCES</p>
                        
                        <div className="grid grid-flow-col grid-rows-2 gap-2">
                            <input type="text" id="consequences_1" name="consequences_1" className="border-2 border-b-black" value={character.consequences_1} onChange={handleFieldChange}/>
                            <input type="text" id="consequences_2" name="consequences_2" className="border-2 border-b-black" value={character.consequences_2} onChange={handleFieldChange}/>
                            <input type="text" id="consequences_3" name="consequences_3" className="border-2 border-b-black" value={character.consequences_3} onChange={handleFieldChange}/>
                            <input type="text" id="consequences_4" name="consequences_4" className="border-2 border-b-black" value={character.consequences_4} onChange={handleFieldChange}/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end w-full gap-4">
                    <Button type="submit"><a href="/characters"> Volver </a></Button>
                    <Button type="submit">Guardar</Button>
                </div>
            </form>
    )
}