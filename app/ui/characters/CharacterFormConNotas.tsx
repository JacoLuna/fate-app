'use client';

import Image from "next/image";
import { Character } from "@/app/lib/definitions";
import { SkillSelect } from "./SkillSelect";
import { Button } from "../Button";
// import { useActionState} from "react";
import { createCharacter, State } from "@/app/lib/actions";
import { use, useState } from "react";

type CharacterFormProps = {
    character?: Character;
};

export function CharacterForm({character} : CharacterFormProps){

    //const initialState: State = { errors: {}, message: null };
    //const [state, formAction] = useActionState(createCharacter, initialState);

    //useStates
    const [count, setCount] = useState(0); // no es necesario tipar aca por que ts infiere que es de tipo number
    // lo mismo pasa con todos los tipos de datos nativos ya sea string o boolean, puedo tipar con <> asi
    // const [isPrimary, setPrimary] = <boolean>useState(true); pero no es realmente necesario

    // si no hago <Character | null> ts no sabe de que tipo es el objeto
    const [user, setUser] = useState<Character | null>(null);
    
    // al inidicar que el user puede ser Character o null, tengo que tener cuidado ya que los atributos pueden llegar a ser null
    // asi que hay que usar optional chaining, osea el ?
    // console.log(user?.name);

    function handleSubmit(event : React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(event.target.elements); 
    }

    return(
        
            <form id="characterFrm" /* action={formAction} */ onSubmit={handleSubmit}>
                {/* ID + Name + Descr section */}
                <div id="first_section" className="grid grid-cols-1 md:grid-cols-[3fr_1fr] mb-4">
                    <div id="first_section_left" className="grid order-2 md:order-1 grid-cols-[3fr_1fr] grid-rows-[1fr_3fr] gap-2">
                        <div className="col-span-4">
                            <p className="w-full border-2 border-b-black ">ID</p>
                            {/* <input name="character_id" type="text" placeholder="id" className="w-full border-2 border-b-black "/> */}
                        </div>
                        <div className="col-span-4 md:col-span-3 grid gap-2">
                            <input name="character_name" type="text" placeholder="name" className="w-full border-2 border-b-black " defaultValue={character?.character_name}/>

                            <textarea name="character_description" id="" placeholder="description" className="w-full border-2 border-b-black "></textarea>
                        </div>
                        
                        <div className="col-span-4 md:col-span-1 border-2 border-b-black">
                            <input name="refresh" type="number" placeholder="refresh" className="h-full w-full"/>
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
                        <input type="text" name="aspects[]" className="w-full border-2 border-b-black mb-2"/>
                        <input type="text" name="aspects[]" className="w-full border-2 border-b-black mb-2"/>
                        <input type="text" name="aspects[]" className="w-full border-2 border-b-black mb-2"/>
                        <input type="text" name="aspects[]" className="w-full border-2 border-b-black mb-2"/>
                        <input type="text" name="aspects[]" className="w-full border-2 border-b-black"/>
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
                                <SkillSelect name="skills[superb][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                            </div>
                            <div className="col-span-5">
                                <SkillSelect name="skills[great][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                                <SkillSelect name="skills[great][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                            </div>
                            <div className="col-span-5">
                                <SkillSelect name="skills[good][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                                <SkillSelect name="skills[good][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                                <SkillSelect name="skills[good][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                            </div>
                            <div className="col-span-5">
                                <SkillSelect name="skills[fair][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                                <SkillSelect name="skills[fair][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                                <SkillSelect name="skills[fair][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                                <SkillSelect name="skills[fair][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                            </div>

                            <div className="col-span-5">
                                <SkillSelect name="skills[average][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                                <SkillSelect name="skills[average][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                                <SkillSelect name="skills[average][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                                <SkillSelect name="skills[average][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                                <SkillSelect name="skills[average][]" selectClassName="border-2 border-b-black min-w-1/5"></SkillSelect>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EXTRAS + STUNTS */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-2">
                    {/* EXTRAS */}
                    <div>
                        <p className="w-full border-2 border-b-black">EXTRAS</p>
                        <textarea name="" id="" className="border-2 border-b-black w-full"></textarea>
                    </div>

                    {/* STUNTS */}
                    <div>
                        <p className="w-full border-2 border-b-black">STUNTS</p>
                        <textarea name="" id="" className="border-2 border-b-black w-full"></textarea>
                    </div>
                </div>

                {/* STRESS + CONSECUENCES */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-2">
                    {/* STRESS */}
                    <div>
                        <div className="grid grid-cols-4">
                            <p className="w-full border-2 border-b-black col-span-4">PHYSICAL STRESS</p>
                            <div>
                                <input type="checkbox" className="border-2 border-b-black"/>
                            </div>
                            <div>
                                <input type="checkbox" className="border-2 border-b-black"/>
                            </div>
                            <div>
                                <input type="checkbox" className="border-2 border-b-black"/>
                            </div>        
                            <div>
                                <input type="checkbox" className="border-2 border-b-black"/>
                            </div>    
                        </div>

                        <div className="grid grid-cols-4">
                            <p className="w-full border-2 border-b-black col-span-4">MENTAL STRESS</p>
                            <div>
                                <input type="checkbox" className="border-2 border-b-black"/>
                            </div>
                            <div>
                                <input type="checkbox" className="border-2 border-b-black"/>
                            </div>
                            <div>
                                <input type="checkbox" className="border-2 border-b-black"/>
                            </div>        
                            <div>
                                <input type="checkbox" className="border-2 border-b-black"/>
                            </div>    
                        </div>
                    </div>

                    {/* CONSEQUENCES */}
                    <div>
                        <p className="w-full border-2 border-b-black col-span-2 mb-2">CONSEQUENCES</p>
                        
                        <div className="grid grid-flow-col grid-rows-2 gap-2">
                            <input type="text" className="border-2 border-b-black"/>
                            <input type="text" className="border-2 border-b-black"/>
                            <input type="text" className="border-2 border-b-black"/>
                            <input type="text" className="border-2 border-b-black"/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end w-full">
                    <Button type="submit">Guardar</Button>
                </div>
            </form>
    )
} 