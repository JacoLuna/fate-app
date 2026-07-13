"use client";

import { Character } from "@/app/lib/definitions";

export function CharacterPill({characterId} : {characterId: Number}){
    
    let localItem = localStorage.getItem("characters");
    let character : Character | undefined;
    
    if(localItem){
        character = (JSON.parse(localItem) as Character[]).find( (ch) => ch.id == characterId);
    }
    
    if(character){
        return <>
            <div className="w-full py-2">
                
                <div>
                    nombre: {character.character_name}
                </div>

                <a href={`characters/create?id= ${characterId}`}>Edit character</a>
            </div>
        </>
    }else{
        return "id no encontrado"
    }


}