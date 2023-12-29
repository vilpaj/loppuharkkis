<script>
// @ts-nocheck
    export let id;
    export let text;
    export let course;
    export let timestamp;
     
    const {id: courseID, name: courseName} = course

    function deleteNote(){
        console.log("Poista note: ", {id})
    }
</script>
    
<div class="note">
    <p>Course name: {courseName} // ID: {courseID}</p>
    <p>{timestamp}</p>
    {#if text !== undefined}
        <p>{text}</p>
    {:else}
        <p>Ei muistiinpanoja!</p>  
    {/if}
 <button on:click={deleteNote}>Poista note!</button>
</div>
    
<style>
    div{
        border: 1px solid black;
        margin-bottom: 1rem;
        background-color: rgb(168, 166, 145);
        border-radius: 10px;
        padding: 10px;
    }
    .note:hover{
        background-color: red;
    }
    .note:hover button{
        display: block;
    }
    button{
        margin-top: 1rem;
      padding: 5px 10px;
      cursor: pointer;
      background-color: #fff;
      border: 1px solid #000;
      border-radius: 5px;
      display: none;
    }
</style>