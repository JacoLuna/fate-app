import { Character } from "./definitions";

export type State = {
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
    body?: {}
};
/**
 * 
 * @param preState -> previousState
 * @param formData -> actionPayload
 */
export async function createCharacter(preState: State, formData:FormData) {
    /* const validatedFields = CreateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    // Prepare data for insertion into the database
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    try {
        await sql `
            INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;
    } catch (error) {
        console.error(error);
        return {
            message: 'Database Error: Failed to Create Invoice.',
        }
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices'); */

    
    return {
        message: "Character created",
        body : {
            name : formData.get("character_name")
        }
    };
}

export function getCharacters(){
    let localItem = localStorage.getItem("characters");
    return localItem 
        ? JSON.parse(localItem) 
        : [];
}

export function saveCharacters(characters : Character[]){
    //faltaría controlar que realmetne hubo un cambio en la librería
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