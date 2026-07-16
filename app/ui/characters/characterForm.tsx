'use client';

import Image from "next/image";
import { Character } from "@/app/lib/definitions";
import { Button } from "../Button";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { SkillSelect } from "./SkillSelect";

export function CharacterForm(){

    const characterId = useSearchParams().get("id");
    let character : Character | null = null;

    const [inputName, setName] = useState("");

    if(characterId){
        character = getCharacters().find( (ch : Character) => ch.id  as unknown as string == characterId)
    }

    function setAtribute(){

    }

    function getCharacters(){
        let localItem = localStorage.getItem("characters");
        return localItem 
            ? JSON.parse(localItem) 
            : [];
    }

    function handleSubmit(event : React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();

        const characters = getCharacters();

        const form = new FormData(event.target);

        if(character){
            character.character_name = form.get("character_name") as string;
            character.refresh = form.get("refresh") as string;
            character.aspects_1 = form.get("aspects_1") as string;
            character.aspects_2 = form.get("aspects_2") as string;
            character.aspects_3 = form.get("aspects_3") as string;
            character.aspects_4 = form.get("aspects_4") as string;
            character.aspects_5 = form.get("aspects_5") as string;
            character.skills_superb = form.get("skills_superb") as string;
            character.skills_great_1 = form.get("skills_great_1") as string;
            character.skills_great_2 = form.get("skills_great_2") as string;
            character.skills_good_1 = form.get("skills_good_1") as string;
            character.skills_good_2 = form.get("skills_good_2") as string;
            character.skills_good_3 = form.get("skills_good_3") as string;
            character.skills_fair_1 = form.get("skills_fair_1") as string;
            character.skills_fair_2 = form.get("skills_fair_2") as string;
            character.skills_fair_3 = form.get("skills_fair_3") as string;
            character.skills_fair_4 = form.get("skills_fair_4") as string;
            character.skills_average_1 = form.get("skills_average_1") as string;
            character.skills_average_2 = form.get("skills_average_2") as string;
            character.skills_average_3 = form.get("skills_average_3") as string;
            character.skills_average_4 = form.get("skills_average_4") as string;
            character.skills_average_5 = form.get("skills_average_5") as string;
            character.extras = form.get("extras") as string;
            character.stunts = form.get("stunts") as string;
            character.stress_physical_1 = form.get("stress_physical_1") as string;
            character.stress_physical_2 = form.get("stress_physical_2") as string;
            character.stress_physical_3 = form.get("stress_physical_3") as string;
            character.stress_physical_4 = form.get("stress_physical_4") as string;
            character.stress_mental_1 = form.get("stress_mental_1") as string;
            character.stress_mental_2 = form.get("stress_mental_2") as string;
            character.stress_mental_3 = form.get("stress_mental_3") as string;
            character.stress_mental_4 = form.get("stress_mental_4") as string;
            character.consequences_1 = form.get("consequences_1") as string;
            character.consequences_2 = form.get("consequences_2") as string;
            character.consequences_3 = form.get("consequences_3") as string;
            character.consequences_4 = form.get("consequences_4") as string;
        }

        characters.push(character);

        localStorage.setItem("characters", JSON.stringify(characters));
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
                            <input name="character_name" type="text" placeholder="name" className="w-full border-2 border-b-black" onChange={ (event) => setName(event.target.value) } value={character?.character_name}/>

                            <textarea name="character_description" id="" placeholder="description" className="w-full border-2 border-b-black ">{character?.character_description}</textarea>
                        </div>
                        
                        <div className="col-span-4 md:col-span-1 border-2 border-b-black">
                            <input name="refresh" type="number" placeholder="refresh" className="h-full w-full" value={character?.refresh}/>
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
                        <input type="text" name="aspects_1" value={character?.skills_average_1} className="w-full border-2 border-b-black mb-2"/>
                        <input type="text" name="aspects_2" value={character?.skills_average_2} className="w-full border-2 border-b-black mb-2"/>
                        <input type="text" name="aspects_3" value={character?.skills_average_3} className="w-full border-2 border-b-black mb-2"/>
                        <input type="text" name="aspects_4" value={character?.skills_average_4} className="w-full border-2 border-b-black mb-2"/>
                        <input type="text" name="aspects_5" value={character?.skills_average_5} className="w-full border-2 border-b-black"/>
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
                                <SkillSelect name="skills_superb" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_superb}></SkillSelect>
                            </div>
                            <div className="col-span-5">
                                <SkillSelect name="skills_great_1" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_great_1}></SkillSelect>
                                <SkillSelect name="skills_great_2" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_great_2}></SkillSelect>
                            </div>
                            <div className="col-span-5">
                                <SkillSelect name="skills_good_1" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_good_1}></SkillSelect>
                                <SkillSelect name="skills_good_2" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_good_2}></SkillSelect>
                                <SkillSelect name="skills_good_3" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_good_3}></SkillSelect>
                            </div>
                            <div className="col-span-5">
                                <SkillSelect name="skills_fair_1" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_fair_1}></SkillSelect>
                                <SkillSelect name="skills_fair_2" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_fair_2}></SkillSelect>
                                <SkillSelect name="skills_fair_3" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_fair_3}></SkillSelect>
                                <SkillSelect name="skills_fair_4" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_fair_4}></SkillSelect>
                            </div>

                            <div className="col-span-5">
                                <SkillSelect name="skills_average_1" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_average_1}></SkillSelect>
                                <SkillSelect name="skills_average_2" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_average_2}></SkillSelect>
                                <SkillSelect name="skills_average_3" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_average_3}></SkillSelect>
                                <SkillSelect name="skills_average_4" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_average_4}></SkillSelect>
                                <SkillSelect name="skills_average_5" selectClassName="border-2 border-b-black min-w-1/5" value={character?.skills_average_5}></SkillSelect>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EXTRAS + STUNTS */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-2">
                    {/* EXTRAS */}
                    <div>
                        <p className="w-full border-2 border-b-black">EXTRAS</p>
                        <textarea name="extras" id="" className="border-2 border-b-black w-full">{character?.extras}</textarea>
                    </div>

                    {/* STUNTS */}
                    <div>
                        <p className="w-full border-2 border-b-black">STUNTS</p>
                        <textarea name="stunts" id="" className="border-2 border-b-black w-full">{character?.stunts}</textarea>
                    </div>
                </div>

                {/* STRESS + CONSECUENCES */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-2">
                    {/* STRESS */}
                    <div>
                        <div className="grid grid-cols-4">
                            <p className="w-full border-2 border-b-black col-span-4">PHYSICAL STRESS</p>
                            <div>
                                <input type="checkbox" name="stress_physical_1" value={character?.stress_physical_1} className="border-2 border-b-black"/>
                            </div>
                            <div>
                                <input type="checkbox" name="stress_physical_2" value={character?.stress_physical_2} className="border-2 border-b-black"/>
                            </div>
                            <div>
                                <input type="checkbox" name="stress_physical_3" value={character?.stress_physical_3} className="border-2 border-b-black"/>
                            </div>        
                            <div>
                                <input type="checkbox" name="stress_physical_4" value={character?.stress_physical_4} className="border-2 border-b-black"/>
                            </div>    
                        </div>

                        <div className="grid grid-cols-4">
                            <p className="w-full border-2 border-b-black col-span-4">MENTAL STRESS</p>
                            <div>
                                <input type="checkbox" name="stress_mental_1" value={character?.stress_mental_1} className="border-2 border-b-black"/>
                            </div>
                            <div>
                                <input type="checkbox" name="stress_mental_2" value={character?.stress_mental_2} className="border-2 border-b-black"/>
                            </div>
                            <div>
                                <input type="checkbox" name="stress_mental_3" value={character?.stress_mental_3} className="border-2 border-b-black"/>
                            </div>        
                            <div>
                                <input type="checkbox" name="stress_mental_4" value={character?.stress_mental_4} className="border-2 border-b-black"/>
                            </div>    
                        </div>
                    </div>

                    {/* CONSEQUENCES */}
                    <div>
                        <p className="w-full border-2 border-b-black col-span-2 mb-2">CONSEQUENCES</p>
                        
                        <div className="grid grid-flow-col grid-rows-2 gap-2">
                            <input type="text" name="consequences_1" className="border-2 border-b-black"/>
                            <input type="text" name="consequences_2" className="border-2 border-b-black"/>
                            <input type="text" name="consequences_3" className="border-2 border-b-black"/>
                            <input type="text" name="consequences_4" className="border-2 border-b-black"/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end w-full">
                    <Button type="submit">Guardar</Button>
                </div>
            </form>
    )
}