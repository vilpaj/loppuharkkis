<script>
// @ts-nocheck
    import CreateNote from "../../CreateNote.svelte";
    import Note from "../../Note.svelte";
    import {notes as notesJS} from "$lib/noteStore.js";
    export let savedNotes = [];
    export let data;
            
    let notesAPI = [];
    let allNotes = [];
    let filterNotes = [];
    
    async function getNotes(){
        const res = await fetch ("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes");
            
        if(res.ok){
            //getNotesAPI, API data, nimeäminen ettei mene sekaisin data kanssa
            const getNotesAPI = await res.json();
            notesAPI = getNotesAPI;
            allNotes = [...notesAPI, ...$notesJS, ...savedNotes];
        }else{
            throw new Error();
        }
    }

    //reaktiivinen, suoritetaan aina kun jotain muuttuu
    $:{
        getNotes();
        //suodatetaan allNotes että näkyy vain kurssi id perusteella ne notet jotka liittyvät kurssiin
        filterNotes = allNotes.filter(note => note.course.id == +data.id)
    }
</script>
<CreateNote />

<p><strong>List of Notes:</strong></p>
{#if filterNotes.length > 0}
    {#each filterNotes as note(note.id)}
        <Note {...note}/>
    {/each}
{:else}
    <p>No notes found for course.</p>
{/if}
