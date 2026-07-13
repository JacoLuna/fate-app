"use client";

import { Character } from "../lib/definitions"
import { CharacterPill } from "../ui/characters/characterPill"

export default function Page(){

    let localItem = localStorage.getItem("characters");
    const characters: Character[] = localItem 
        ? JSON.parse(localItem) 
        : [];

    return (
        <>
            {characters.map( (ch) => (
                <CharacterPill 
                    key={ch.id} 
                    characterId={ch.id}
                />
            ))}

            <a href="characters/create">create character</a>
        </>
    )

}