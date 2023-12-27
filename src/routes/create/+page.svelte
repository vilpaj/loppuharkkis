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
