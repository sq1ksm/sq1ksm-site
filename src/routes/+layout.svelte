<script>
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import SideMenu from '../lib/SideMenu.svelte';
	import InfoBar from '$lib/InfoBar.svelte';

	afterNavigate(() => {
		// @ts-ignore
		if (window.initLytebox) {
			// @ts-ignore
			window.initLytebox();
		}
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
	});
</script>

<svelte:head>
	<title>SQ1KSL/SQ1KSM</title>
	<meta
		name="keywords"
		content="slawera, SQ1KSM, SQ1KSL, Weronika, Slawek, Krzesnica, Kostrzyn, Krotkofalarstwo, Hamradio"
	/>
	<meta name="description" content="Strona SQ1KSM i SQ1KSl." />
	<!-- <script src="/lib/jquery-3.3.1.min.js" type="text/javascript"></script> -->
	<!---zamiast u góry-Piotr: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script> ---->
	<script type="text/javascript" src="/lib/lytebox.js" defer></script>
	<link rel="stylesheet" href="/lib/lytebox.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="/lib/styles.css" />
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	<!-- <script src="/lib/script_1.js" defer></script> -->
	<!---usunolem: <LINK href="images/favicon.gif" type=image/ico rel="shortcut icon"></script> ---->
	<!---usunolem / przed favicon 2 linie wcześniej ---->
</svelte:head>

<div id="sidebar">
	<!-----------Logo Literowe--------------->
	<h1>
		<a href="https://sq1ksm.pzk.pl">.SQ1KSL...<br />...SQ1KSM.</a>
	</h1>
	<!-------------Menu strony---------------->
	<div class="dropdown">
		<SideMenu />
	</div>
	<!---------Tresc strony------------->
	<br />
	<InfoBar />
</div>

<div id="content">
	<slot />
</div>

<footer>
	<div class="stopa">
		<hr style="width: 65%; border-color: #666;" />
		© 2004-2024 slawera
		<div class="socials">
			<a href="https://github.com/sq1ksm/sq1ksm-site" title="github">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960" width="20">
					<path
						fill="white"
						d="M480 476c10.667 0 24.667-.667 42-2s31-2 41-2 20.667 1.333 32 4c11.333 2.667 21 7.333 29 14 17.333 17.333 26 37.333 26 60 0 42.667-14.333 70.667-43 84-28.667 13.333-71 20-127 20s-98.333-6.667-127-20-43-41.333-43-84c0-22.667 8.667-42.667 26-60 8-6.667 17.667-11.333 29-14 11.333-2.667 22-4 32-4s23.667.667 41 2 31.333 2 42 2m-80 128c9.333 0 17-4.667 23-14s9-20 9-32c0-30.667-10.667-46-32-46s-32 15.333-32 46c0 12 3 22.667 9 32 6 9.333 13.667 14 23 14m160 0c9.333 0 17.333-4.667 24-14 6.667-9.333 10-20 10-32 0-13.333-3.333-24.333-10-33-6.667-8.667-14.667-13-24-13-21.333 0-32 15.333-32 46 0 12 3 22.667 9 32 6 9.333 13.667 14 23 14M480 0c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 960 480 960c-132 0-245-47-339-141S0 612 0 480c0-133.333 47-246.667 141-340S348 0 480 0m44 676c125.333 0 188-61.333 188-184 0-37.333-12.667-70-38-98 2.667-2.667 3-16.333 1-41s-7.667-48.333-17-71c-29.333 4-67.333 21.333-114 52-13.333-4-34.667-6-64-6-26.667 0-48 2-64 6-20-13.333-39.667-24.333-59-33-19.333-8.667-33-14.333-41-17l-14-2c-9.333 22.667-15 46.333-17 71s-1.667 38.333 1 41c-25.333 28-38 60.667-38 98 0 122.667 62.667 184 188 184h88"
					>
					</path>
				</svg></a
			>
			<a href="https://www.youtube.com/channel/@slawera" title="youtube">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20">
					<path
						fill="red"
						d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
					>
					</path>
				</svg></a
			>
		</div>
		<hr style="width: 70%; border-color: #666;" />
	</div>
</footer>

<style>
	.stopa {
		position: relative;
	}

	.socials {
		position: absolute;
		top: 10px;
		right: 19vw;
	}
</style>
