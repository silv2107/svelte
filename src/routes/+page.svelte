<script>
    export let data
</script>

<header class="top">
    <h1 class="top__title">STAR WARS</h1>
    <h3 class="top__subTitle">THE FORCE IS WITH YOU</h3>
</header>
<div class="jokeWrapper">
    <ul class="jokeContainer">
        {#each data.cast.results as person }
        <!-- ${data.jokes.indexOf(joke)} -->
        <li class="listItem"><a class="link" href={`/details/${data.cast.results.indexOf(person) + 1}`}>{person.name}</a></li>
        {/each}
    </ul>
</div>

<style>
    .top {
        text-align: center;
    }
    .top__title {
        color: darkred;
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
