<script>
// @ts-nocheck
    import CreateNote from "../../CreateNote.svelte";
    import Note from "../../Note.svelte";
    import {notes as notesJS} from "$lib/noteStore.js";
    export let savedNotes = [];
    export let data;
            
    let notesAPI = [];
    let allNotes = [];
    
    //reaktiivinen lauseke, päivittyy aina kun allnotes tapahtuu muutoksia
    //tai ainakin pitäsi, ei vaan savedNotes päivity prkl
    $: filterNotes = allNotes.filter(note => note.course.id === +data.id)

    async function getNotes(){
        const res = await fetch ("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes");
            
        if(res.ok){
            //getNotesAPI, API data, nimeäminen ettei mene sekaisin data kanssa
            const getNotesAPI = await res.json();
            notesAPI = getNotesAPI;
            allNotes = [...notesAPI, ...$notesJS, ...savedNotes];
            //console.log('allNotes', allNotes);
        }else{
            throw new Error();
        }
    }
    getNotes();
             
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
