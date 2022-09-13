export async function load( { data }) {
    const res = await fetch("https://official-joke-api.appspot.com/random_ten")
    const jokes = await res.json()
    return {
         jokes:jokes
    }
}