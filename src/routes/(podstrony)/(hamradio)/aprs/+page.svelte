<div class="lead">
	<!-- tresc-->
	<article>
		<h1>APRS</h1>
		<a href="/zdjecia/aprs/wx3i1.webp" rel="lytebox[vacation]"
			><img
				height="150"
				width="200"
				src="/zdjecia/aprs/wx3i1_m.webp"
				alt="Zdjęcie IC-208H i WX3in1 PLUS 2.0"
				title="Icom 208H i WX3in1 PLUS 2.0"
				style="margin:10px 0px 0px 10px;float:right"
			/></a
		>
		<p>
			APRS'em interesuję się od kilku lat.<br />

			Aktualnie APRS'u używam najczęściej podczas pieszych wycieczek i testowo analizując badane
			urządzenia czy teren. Do tego celu wykorzystuje przenośny transciver FT1D firmy YAESU.<br />
			Stacjonarnie w domu:
		</p>
		<ul>
			<li>Icom IC-208I</li>
			<li>WX3in1 Plus 2.0 - Digipeater/I-Gate APRS firmy Microsat</li>
			<li>Antena UKF X510 na 18m</li>
		</ul>
		<br />
		<iframe
			title=""
			src="https://aprs-map.info/sid/36834/time/60%22%20width=%22550%22%20height=%22340%22?center=52.6343,14.7924&amp;zoom=9"
			width="600"
			height="400"
		></iframe>
		<hr />
		<h1>TNC-12/24 Muel</h1>
		<p>
			Wcześniej używałem do APRS modem TNC12/24 firmy MUEL. Kontroler TNC-12 jest autonomicznym,
			wyposażonym we własny system mikroprocesorowy, kontrolerem węzłowym, służącym do przesyłania
			danych cyfrowych po łączu radiowym pod kontrolą protokołu XXTRANS lub AX.25 (Packet Radio).
			Kontroler może współpracować z dowolną radiostacją. Dla radiostacji z modulacją
			częstotliwości, 1200 BPS, lub po zainstalowaniu dodatkowego modułu PM-96 także 9600 BPS
			(którego nie posiadam). Kontroler TNC-12 może współpracować z terminalem lub komputerem
			wyposażonym w interfejs RS-232C.
		</p>
		<p>
			protokół transmisji zależy od zainstalowanego oprogramowania, posiada pamięć RAM 32KB i pamięć
			EPROM 64KB (którą przeprogramowałem). Podłączając do komputera korzystamy z interfejsu RS-232C
			(600, 1200, 2400, 4800, 9600, 19200 BPS - ustawiany zworkami wewnątrz modemu) linie do
			współpracy z radiostacją:
		</p>
		<ul>
			<li>RX Audio - czułość wejścia RX Audio 20 mV RMS</li>
			<li>TX Audio - AFSK (poziom wyjściowy 0 do 1000 mV RMS regulowany potencjometrem)</li>
			<li>PTT (kluczowanie nadajnika)</li>
			<li>zasilanie +10 ÷ +14V/0.5A</li>
		</ul>
		<p>
			Firmware UIDIGI 1.9 wgrałem do TNC by służył do obsługi samodzielnego digipeatera APRS.
			Program wypalony jest w EPROMie. Odpowiednia konfiguracja UIDIGI pozwala na obsługę ramek UI
			wysyłanych ze ścieżkami zgodnymi z New-N.
		</p>
		<p>
			Do komunikacji z modemem używamy terminala, ja używam małego "komputerka" Psion 5MX, można
			podejrzeć co modem odebrał, zresetować go itd.
		</p>
		<div style="text-align: center;">
			<a
				href="/zdjecia/aprs/tnc_01.webp"
				rel="lyteshow[vacation]"
				title="Zgłoszenie się modemu w aplikacji Terminal PSION"
				><img src="/zdjecia/aprs/tnc_01_m.webp" width="140" height="96" alt="" /></a
			>
			<a
				href="/zdjecia/aprs/tnc_02.webp"
				rel="lyteshow[vacation]"
				title="FT817, modem i PSION oraz w tle inne graty."
				><img src="/zdjecia/aprs/tnc_02_m.webp" width="140" height="96" alt="" /></a
			>
			<a
				href="/zdjecia/aprs/tnc_03.webp"
				rel="lyteshow[vacation]"
				title="W aplikacji Terminal PSION widać co się loguje."
				><img src="/zdjecia/aprs/tnc_03_m.webp" width="140" height="96" alt="" /></a
			>
		</div>
		<p></p>
		<h2>Proszę kliknac na dowolne zdjęcie- uruchomi się przeglądarka zdjęć.</h2>
		<p></p>
		<p>
			W ramach mojego wolnego czasu "przeprogramowałem" już kilka takich urządzeń. Jedną z ich wad
			jest niestety zawieszanie się i wymaga to restartu co kilka dni niestety! Zawsze polecam
			nowsze rozwiązania oparte chociażby na WX3IN1 lub podobne. <br />
			Poniżej film z pracy tego modemu z radiem ICOM IC-208H na antenie X510. Do podglądania pracy posłużyło
			radio przenośne FT1D. Wysyłam tam ramkę pozycji i dostaję odpowiedź, że TNC odebrało a ta "odpowiedź".
			To nic innego jak powtórzone moje współrzędne i wysłane z większą mocą, na antenie o większym zasięgu,
			do przemiennika APRS, by później trafić do serwerów APRS. Następnie można np. na mapie obserwować
			swoje położenie.
		</p>
		<iframe
			width="600"
			height="450"
			src="https://www.youtube.com/embed/5xLdu3SQsjo"
			frameborder="0"
			allowfullscreen
			title=""
		>
		</iframe>
	</article>
</div>
