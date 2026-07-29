'use client';

import { CharacterForm } from "@/app/ui/characters/CharacterForm"
import { Suspense } from "react"

export default function Page(){
    
    // <CustomInput name="Nombre" type="text" defaultValue=""></CustomInput>
    return(
        <>
            <Suspense>
                <CharacterForm/>
            </Suspense>
        </>
    )

}