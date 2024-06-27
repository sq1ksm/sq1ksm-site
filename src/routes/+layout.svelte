<script>
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import SideMenu from '../lib/SideMenu.svelte';

	afterNavigate(() => {
		// @ts-ignore
		window.initLytebox();
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
	<article>
		<!-- INFORMACJE -->
		<p>
			<br />
			------- <b>Informacje </b>------- <br /><br />
			---<b>26.06.2024</b>--------<br />
			Reorganizacja strony <br /><br />
			---17.04.2023--------<br />
			Rezygnacja z php.<br /><br />
			---17.04.2017--------<br />
			Zmiana serwera i adresu.<br /><br />
			---17.04.2015--------<br />
			Wielka rozbudowa strony.<br /><br />
			---13.07.2009--------<br />
			Optymalizacja.<br /><br />
			---06.02.2004--------<br />
			Zalążek strony.
		</p>
	</article>
</div>

<div id="content">
	<slot />
</div>

<footer>
	<div class="stopa">
		<hr style="width: 70%;" />
		© 2004-2024 slawera
		<hr style="width: 80%;" />
	</div>
</footer>
