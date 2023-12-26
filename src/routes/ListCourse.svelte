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

    let name = "";
    let id = "";

    function saveCourse(){
        console.log("Saved course!", {name, id});
        courses.add({name,id});
    }
</script>

<div>
    <h2>Add a course: </h2>
    <input bind:value={name} placeholder="Course Name" />
    <input bind:value={id} placeholder="Course ID" />
    <button on:click={saveCourse}>Save</button>
</div>

<h2>Courses listed: </h2>
<ul>
    {#each [...courseAPI, ...$courses] as course (course.id)}
        <Course {...course} />
    {/each}
</ul>

