export async function load({ params }) {
    const id = params.id
    const res = await fetch(`https://swapi.dev/api/people/${id}`)
    const person = await res.json()
        
    return {
         person
    }
}