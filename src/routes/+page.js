export async function load( { data }) {
    const res = await fetch("https://swapi.dev/api/people")
    const cast = await res.json()
    return {
         cast
    }
}