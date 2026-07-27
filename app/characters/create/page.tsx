
// import { characters } from "@/app/lib/mockdata";
import { CharacterForm } from "@/app/ui/characters/characterForm"
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