<script>
    export let data
</script>

<header class="top">
    <h1>Lighten up with a joke</h1>
    <h3>Laughter is an instant vacation</h3>
</header>
<div class="jokeWrapper">
    <ul class="jokeContainer">
        {#each data.jokes as joke }
        <!-- ${data.jokes.indexOf(joke)} -->
        <li class="listItem"><a class="link" href={`/details/${data.jokes.indexOf(joke)}`}>{joke.setup}</a></li>
        {/each}
    </ul>
</div>

<style>
    .top {
        text-align: center;
    }
    .jokeContainer {
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    .listItem {
        list-style: none;
        padding: 50px;
        text-align: center;
        border: rgba(0, 0, 255, 0.415) 10px solid;
    }
    .link {
        text-decoration: none;
    }
</style>
