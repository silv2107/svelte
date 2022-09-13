<script>
    export let data
</script>

<h1 class="title">Character profile</h1>

<section class="profileMain">
    <article class="profileSection">
        <h3>Name</h3>
        <p>{data.person.name.toUpperCase()}</p>
    </article>
    <article class="profileSection">
        <h3>Gender</h3>
        <p>{data.person.gender.toUpperCase()}</p>
    </article>
    <article class="profileSection">
        <h3>Height</h3>
        <p>{data.person.height.toUpperCase()}</p>
    </article>
</section>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    .title {
        text-align: center;
        color: darkred;
        margin: 20px 0;
    }
    .profileMain {
        
        border: solid rgba(0, 0, 0, 0.393) 100px;
        padding: 100px;
        width: 50%;
        margin: auto;
        text-align: center;
    }
    .profileSection {
        padding: 15px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>
