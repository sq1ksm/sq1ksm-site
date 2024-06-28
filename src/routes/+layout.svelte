<script>
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import SideMenu from '$lib/SideMenu.svelte';
	import InfoBar from '$lib/InfoBar.svelte';
	import Logo from '$lib/Logo.svelte';
	import Footer from '$lib/Footer.svelte';
	import { preloadFullLytebox } from '$lib/imagePreloader';

	afterNavigate(() => {
		// @ts-ignore
		if (window.initLytebox) {
			// @ts-ignore
			window.initLytebox();
		}
		preloadFullLytebox();
	});

	onMount(() => {
		const a = location.pathname.substring(0, location.pathname.length - 1);
		console.log(a);
		if (a.length > 2) {
			const g = document.querySelector(`.has-sub:has([href="${a}"])`);
			if (g) {
				g.classList.add('active');
			}
		}
		preloadFullLytebox();
	});
</script>

<svelte:head>
	<title>SQ1KSL/SQ1KSM</title>
	<meta
		name="keywords"
		content="slawera, SQ1KSM, SQ1KSL, Weronika, Slawek, Krzesnica, Kostrzyn, Krotkofalarstwo, Hamradio"
	/>
	<meta name="description" content="Strona SQ1KSM i SQ1KSl." />
	<script type="text/javascript" src="/lib/lytebox.js" defer></script>
	<link rel="stylesheet" href="/lib/lytebox.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="/lib/styles.css" />
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<aside>
	<Logo />
	<SideMenu />
	<InfoBar />
</aside>

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		margin: 25px 10% 5em 220px;
		max-width: 800px;
		min-width: 600px;
	}

	aside {
		left: 20px;
		top: 38px;
		width: 180px;
		position: absolute;
		top: 0px;
		font-size: 0.9em;
	}
</style>
