<script>
    import { courses } from "$lib/courseStore.js"

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
    {#each $courses as course (course.id)}
        <li>
            <a href={`/course/${course.id}`}>
                {course.name} // ID: {course.id}
            </a>
        </li>
    {/each}
</ul>

<style>
    a{
        text-decoration: none;
        color: inherit;
    }
</style>