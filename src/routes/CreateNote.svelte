<script>
	import { notes } from "$lib/noteStore.js";

    let courseName = "";
    let courseID = "";
    let text = "";
    
    function saveNote(){
        console.log("Saved a note!");
        console.log(courseName, courseID, text);

        let note = {
            //tarkastaa onko olemassa note jo valmiiksi 
            // ja tallentaa +1 viimeisimpään tallennettuun noteen
            id: $notes.length > 0 ? $notes[$notes.length - 1].id + 1 : 1,
            course: {id: courseID, name: courseName},
            //muutetaan timestamp suomen aikaan, wauuuu
            timestamp: new Date().toLocaleDateString('fi-FI', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            text: text
        };

        //notes = [...notes, note];
        notes.add(note);

        courseName = "";
        courseID = "";
        text = "";

        console.log("Note saved with id:", note.id);
    }
</script>

<div>
    <p><strong>Save a note: </strong></p>
    <input bind:value={courseName} placeholder="Course Name" />
    <input bind:value={courseID} placeholder="Course ID" />
    <input bind:value={text} placeholder="Text" />
    <button on:click={saveNote}>Save</button>
</div>

<style>
    div p{
        font-size: 25px;
        margin-bottom: 8px;
    }
    input{
        width: 20%;
        padding: 10px;
        margin: 5px 0;
        border: 2px solid #ccc;
        border-radius: 5px;
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