<script>
	import ListCourse from "../ListCourse.svelte";
	
	let isExpanded = false;
	function toggleExp(){
		isExpanded = !isExpanded;
	}

</script>

<div>
	<button on:click={toggleExp}>Choose course</button>
	{#if isExpanded}
		<ListCourse />
	{/if}
</div>

<style>
	button{
        padding: 10px;
        margin-top: 10px;
        background-color: rgb(235, 214, 165);
        border: none;
        border-radius: 5px;
        cursor: pointer;
		margin-left: 10px;
		margin-bottom: 30px;
    }
</style>