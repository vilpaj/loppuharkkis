<script>
    import {courses} from "$lib/courseStore.js"
    
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
<style>
    input{
        width: 20%;
        padding: 10px;
        margin: 5px 0;
        border: 2px solid #625353;
        border-radius: 5px;
        background-color: rgb(236, 233, 229);
    }
    button{
        padding: 10px;
        margin-top: 10px;
        background-color: rgb(235, 214, 165);
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>