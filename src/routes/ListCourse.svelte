<script>
// @ts-nocheck

    import Course from "./Course.svelte";
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
    {#each [...courseAPI, ...$courses] as course (course.id)}
        <Course {...course} />
    {/each}
</ul>