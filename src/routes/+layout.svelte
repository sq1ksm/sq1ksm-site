<script>
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

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
	<script src="/lib/jquery-3.3.1.min.js" type="text/javascript"></script>
	<!---zamiast u góry-Piotr: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script> ---->
	<script type="text/javascript" src="/lib/lytebox.js" defer></script>
	<link rel="stylesheet" href="/lib/lytebox.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="/lib/styles.css" />
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	<script src="/lib/script_1.js" defer></script>
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
		<div id="cssmenu">
			<ul>
				<!-- menu glowne i informacje -->
				<li class=""><a href="/"><span>Strona Główna</span></a></li>
				<li class="has-sub">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#"><span>Krótkofalarstwo</span></a>
					<ul style="display: none;">
						<li class="even"><a href="/kf"><span>Sprzęt<span></span></span></a></li>
						<li class="odd"><a href="/tria"><span>Tytus Romek i aTomek<span></span></span></a></li>
						<li class="even"><a href="/ameryka"><span>Nowa Ameryka</span></a></li>
						<li class="odd"><a href="/poryroku"><span>4 pory roku</span></a></li>
						<li class="even"><a href="/dzieci"><span>Amateur Kids Day</span></a></li>
						<li class="odd"><a href="/twierdza"><span>Twierdza Kostrzyn nad Odrą</span></a></li>
						<li class="even"><a href="/smolnica"><span>Smolnica</span></a></li>
						<li class="odd"><a href="/chwarszczany"><span>Chwarszczany</span></a></li>
						<li class="even"><a href="/pszczelnik"><span>Pszczelnik</span></a></li>
						<li class="odd"><a href="/spff"><span>Parki SPFF</span></a></li>
						<li class="even"><a href="/aprs"><span>APRS</span></a></li>
						<li class="odd"><a href="/ekoqsl"><span>Eko-QSL</span></a></li>
						<li class="even"><a href="/ft817"><span>QRP FT-817</span></a></li>
					</ul>
				</li>
				<li class="has-sub">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#"><span>LOGI</span></a>
					<ul style="display: none;">
						<li class="odd"><a href="/log_sq1ksm"><span>SQ1KSM</span></a></li>
						<li class="even"><a href="/log_sq1ksl"><span>SQ1KSL</span></a></li>
					</ul>
				</li>
				<li class="has-sub">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#"><span>Fotografia</span></a>
					<ul style="display: none;">
						<li class="odd"><a href="/foto"><span>Nasze prace</span></a></li>
						<li class="even"><a href="/analogowa"><span>Analogowa</span></a></li>
					</ul>
				</li>
				<li class="has-sub">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#"><span>Informatyka</span></a>
					<ul>
						<li class="odd"><a href="/webmastering"><span>Webmastering</span></a></li>
						<li class="even"><a href="/piotrus"><span>Piotruś</span></a></li>
						<li class="odd"><a href="/wm"><span>Windows Mobile</span></a></li>
						<li class="even"><a href="/c64"><span>Stare Komputery</span></a></li>
					</ul>
				</li>
				<li class="has-sub">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#"><span>SWL &amp; SAT</span></a>
					<ul>
						<li class="odd"><a href="/dlugie"><span>Fale długie i średnie</span></a></li>
						<li class="even"><a href="/sat"><span>Odbiór satelitarny</span></a></li>
					</ul>
				</li>
				<li><a href="/inne"><span>Inne</span></a></li>
			</ul>
		</div>
		<!---------Koniec Menu strony------------->
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
