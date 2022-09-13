export async function load( { item, page } ) {
    const id = page.param.id
    const res = await fetch(`https://official-joke-api.appspot.com/random_ten/${id}`)
    const joke = await res.json()
    return {
        joke:joke
    }
}