import { Character } from "./definitions";

export function getCharacters(){
    let localItem = localStorage.getItem("characters");
    return localItem 
        ? JSON.parse(localItem) 
        : [];
}

export function saveCharacters(characters : Character[]){
    //faltaría controlar que realmente hubo un cambio en la librería
    localStorage.setItem("characters", JSON.stringify(characters));
}

export function getCharacterById(characterId : number){
    return getCharacters().find( (ch : Character) => ch.id == characterId);
}

export function deleteCharacter(characterId : number){
    let characters : Character[] = getCharacters();
    const character : Character | null = getCharacterById(characterId);
    let characterDeleted = false;

    if(character){
        let i = characters.findIndex( (e) => e.id == characterId );
        characters.splice(i, 1);
        saveCharacters(characters);
        characterDeleted = true;
    }

    return characterDeleted
}