<script>
	export let data;
	export let settings;
	import Elements from '$lib/Elements.svelte';
</script>

<sup><Elements {settings} elems={data} /></sup>
