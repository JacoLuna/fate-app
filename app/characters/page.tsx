"use client";

import { Character } from "../lib/definitions"
import CharacterCard from "../ui/characters/CharacterCard";
import { Button } from "../ui/Button";
import { useEffect, useState } from "react";

export default function Page() {

    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const item = localStorage.getItem("characters");

        if (item) {
            setCharacters(JSON.parse(item));
        }
    }, []);

    return (
        <>
            <div className="flex justify-end">
                <Button>
                    <a href="characters/create">create character</a>
                </Button>
            </div>

            <div className="flex items-baseline">
                {characters.map((ch) => (
                    <CharacterCard
                        key={ch.id}
                        characterId={ch.id}
                    />
                ))}
            </div>
        </>
    )

}