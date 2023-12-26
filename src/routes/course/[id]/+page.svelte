<script>
    import {notes} from "$lib/noteStore.js"
	import Note from "../../Note.svelte";
    export let data;

    //let note = $notes[+data.id]
    let filterNotes = $notes.filter(note => note.course.id === +data.id);
</script>

<h2>Hello there</h2>

<!--
    filteröi kurssi notes sen kurssin id perusteella
-->
{#each filterNotes as note(note.id)}
    <Note {...note}/>
{/each}