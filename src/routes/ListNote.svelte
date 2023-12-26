<script>
    // @ts-nocheck
        import Note from "./Note.svelte";
        import {notes as notesJS} from "$lib/noteStore.js";
        export let savedNotes = [];
    
        let notesAPI = [];
    
        async function getNotes(){
            const res = await fetch ("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes");
    
            if(res.ok){
                const data = await res.json();
                notesAPI = data;
            }else{
                throw new Error();
            }
        }
        
    </script>
    
    <p><strong>List of Notes:</strong> ({notesAPI.length + $notesJS.length + savedNotes.length}) </p>
    {#await getNotes()}
        <p>Loading notes...</p>
    {:then}
        {#each [...notesAPI, ...$notesJS, ...savedNotes] as note}
            <Note {...note} />
        {/each}
    {/await}