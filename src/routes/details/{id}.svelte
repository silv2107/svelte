<script context="module">
    export async function load( { fetch, page }) {
    const id = page.params.id
    const res = await fetch(`https://swapi.dev/api/people/${id}`)
    const person = await res.json()
    console.log(person);
    
    return {
         person
    }
}
</script>

<script>
    export let person
</script>

<h1>Details</h1>

<p>{person.name}</p>
