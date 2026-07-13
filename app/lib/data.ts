import { Character } from "./definitions";
import { characters } from "./mockdata";

export async function fetchCharacters() {
    return characters
}