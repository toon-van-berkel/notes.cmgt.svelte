<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte'
	import favicon from '$lib/assets/favicon.svg';
	import '../scss/style.css'

	let { children } = $props();
</script>

<Nav />
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<Footer />