<script>
    export let data
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
    <ul>
        {#each data.jokes as joke }
        <!-- ${data.jokes.indexOf(joke)} -->
        <li><a href={`/details`}>{joke.setup}</a></li>
        {/each}
    </ul>
</div>
