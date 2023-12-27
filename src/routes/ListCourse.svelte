<script>
// @ts-nocheck
    import { courses } from "$lib/courseStore.js"

    let courseAPI = [];
    async function getCourses(){
        const res = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses");

        if(res.ok){
            const data = await res.json();
            courseAPI = data;
        }else{
            throw new Error();
        }
    }
    getCourses();
    
</script>

<ul>
    {#each [...courseAPI, ...$courses] as {id, name}}
        <li>
            <a href={`/course/${id}`}>{name} // ID: {id}</a>
        </li>
    {/each}
</ul>

<style>
    a{
        text-decoration: none;
        color: inherit;
    }
</style>