import { Component, createSignal, onMount } from "solid-js";
// Metti il logo in /src/assets con questo nome, oppure sposta in /public e usa "/barwise-logo.png"
import logoUrl from "../assets/Barwise_lite_512_noBorder_3.jpg";

/**
 * Landing page "one-page" per BarWise — aggiornata sui contenuti reali
 * - SolidJS + TailwindCSS
 * - Sezioni verticali, header sticky, CTA
 * - Palette: #66cc8a, bianco, nero
 * - Copy semplificato e allettante, fedele alle feature elencate
 */
const BarwiseLanding: Component = () => {
	const [menuOpen, setMenuOpen] = createSignal(false);

	const smoothScroll = (e: Event) => {
		const target = e.currentTarget as HTMLAnchorElement;
		const href = target.getAttribute("href");
		if (!href || !href.startsWith("#")) return;
		e.preventDefault();
		const el = document.querySelector(href);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
		setMenuOpen(false);
	};

	onMount(() => {
		const header = document.getElementById("bw-header");
		const onScroll = () => {
			if (!header) return;
			header.classList.toggle("shadow-lg", window.scrollY > 10);
		};
		window.addEventListener("scroll", onScroll);
		onScroll();
	});

	const logout = () => {
		localStorage.removeItem("bw_invited");
		window.location.reload(); // torna alla pagina di accesso
	};

	return (
		<div class="bg-black text-white selection:bg-[#66cc8a] selection:text-black">
			{/* Header */}
			<header
				id="bw-header"
				class="sticky top-0 z-40 w-full border-b border-white/10 bg-black/70 backdrop-blur-md transition-shadow"
			>
				<div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
					<a href="#top" onClick={smoothScroll} class="flex items-center gap-3">
						<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
							<img
								src={logoUrl}
								alt="BarWise logo"
								class="h-6 w-6 rounded-full"
							/>
						</div>
						<span class="text-lg font-semibold tracking-wide">
							<span class="text-[#66cc8a]">Bar</span>Wise
						</span>
					</a>

					{/* Desktop nav */}
					<nav class="hidden gap-6 md:flex">
						{[
							["Home", "#hero"],
							["Dotazione", "#features"],
							// ["Moduli", "#modules"],
							["Come funziona", "#how"],
							["Iniziamo", "#pricing"],
							["FAQ", "#faq"],
						].map(([label, href]) => (
							<a
								href={href}
								onClick={smoothScroll}
								class="text-sm opacity-80 hover:opacity-100"
							>
								{label}
							</a>
						))}
					</nav>

					{/* CTA + Mobile menu */}
					<div class="flex items-center gap-3">
						<a
							href="#cta"
							onClick={smoothScroll}
							class="hidden rounded-xl bg-[#66cc8a] px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110 md:inline-block"
						>
							Contatti
						</a>

						{/* NUOVO: bottone Esci (desktop) */}
						<button
							type="button"
							onClick={logout}
							class="hidden rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/5 md:inline-block"
						>
							Esci
						</button>

						<button
							class="md:hidden"
							aria-label="Apri menu"
							onClick={() => setMenuOpen(!menuOpen())}
						>
							<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none">
								<path
									d="M4 6h16M4 12h16M4 18h16"
									stroke="white"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile nav */}
				<div
					class={`md:hidden ${menuOpen() ? "block" : "hidden"} border-t border-white/10 bg-black`}
				>
					<nav class="mx-auto flex max-w-7xl flex-col px-5 py-3">
						{[
							["Perché", "#hero"],
							["Funzioni", "#features"],
							["Moduli", "#modules"],
							["Come funziona", "#how"],
							["Prezzi", "#pricing"],
							["FAQ", "#faq"],
						].map(([label, href]) => (
							<a
								href={href}
								onClick={smoothScroll}
								class="rounded-lg px-3 py-2 text-sm opacity-80 hover:bg-white/5 hover:opacity-100"
							>
								{label}
							</a>
						))}
						<a
							href="#cta"
							onClick={smoothScroll}
							class="mt-2 rounded-xl bg-[#66cc8a] px-4 py-2 text-center text-sm font-semibold text-black"
						>
							Provalo ora
						</a>
					</nav>
				</div>
			</header>

			{/* Hero aggiornato */}
			<section id="hero" class="relative isolate overflow-hidden">
				<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
					<div class="absolute left-1/2 top-[-15%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[#66cc8a]/20 blur-[120px]" />
					<div class="absolute right-[-10%] bottom-[-10%] h-[40vh] w-[40vh] rounded-full bg-[#66cc8a]/10 blur-[120px]" />
				</div>

				<div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-20 pt-16 md:grid-cols-2 md:pb-28 md:pt-24">
					<div class="space-y-6">
						<p class="inline-block rounded-full border border-[#66cc8a]/30 bg-[#66cc8a]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#66cc8a]">
							Il nuovo gestionale smart per il tuo locale
						</p>
						<h1 class="text-4xl font-extrabold leading-tight md:text-6xl">
							Più servizio, meno pensieri.
							<div class="text-[#66cc8a] mt-4">Ci pensa BarWise.</div>
						</h1>
						<p class="max-w-prose text-lg opacity-80">
							Il gestionale per ristoranti e bar: comande veloci,
							stampe per reparto, gestione delle scorte, storico e statistiche.<br />
							<span class="font-semibold">Salta internet? Tu no.</span>
						</p>
						<div class="flex flex-col gap-3 sm:flex-row">
							<a
								href="#cta"
								onClick={smoothScroll}
								class="rounded-xl bg-[#66cc8a] px-6 py-3 text-center font-semibold text-black transition hover:brightness-110"
							>
								Inizia gratis
							</a>
							<a
								href="#features"
								onClick={smoothScroll}
								class="rounded-xl border border-white/15 px-6 py-3 text-center font-semibold hover:bg-white/5"
							>
								Caratteristiche
							</a>
						</div>
						<div class="flex flex-wrap items-center gap-4 pt-2 text-sm opacity-70">
							<span>Database in locale</span>
							<span class="h-1 w-1 rounded-full bg-white/40" />
							<span>Gestione pagamenti per quote</span>
							<span class="h-1 w-1 rounded-full bg-white/40" />
							<span>Preconto e post-stampe</span>
						</div>
					</div>

					{/* Mockup vetrina */}
					<div class="relative">
						<div class="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-4 shadow-2xl">
							<div class="rounded-2xl bg-black p-5 ring-1 ring-white/10">
								<div class="mb-4 flex items-center gap-3">
									<img src={logoUrl} alt="BarWise" class="h-10 w-10 rounded-full ring-2 ring-[#66cc8a]" />
									<div>
										<div class="font-semibold">
											<span class="text-[#66cc8a]">Bar</span>Wise
										</div>
										<div class="text-xs opacity-70">Comande senza pensieri.</div>
									</div>
								</div>
								<div class="grid gap-3">
									<div class="h-28 rounded-xl border border-white/10 bg-white/5" />
									<div class="grid grid-cols-3 gap-3">
										<div class="h-20 rounded-xl border border-white/10 bg-white/5" />
										<div class="h-20 rounded-xl border border-white/10 bg-white/5" />
										<div class="h-20 rounded-xl border border-white/10 bg-white/5" />
									</div>
									<div class="h-10 rounded-xl bg-[#66cc8a]" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Funzioni chiave: riscritte */}
			<section id="features" class="mx-auto max-w-7xl px-5 py-16 md:py-24">
				<h2 class="mb-10 text-3xl font-extrabold md:text-4xl">
					Solo ciò che serve. <span class="text-[#66cc8a]">Davvero.</span>
				</h2>

				<div class="grid gap-6 md:grid-cols-3">
					{[
						{
							title: "Locale & Offline",
							desc:
								"Lavora su database locale: se manca internet, continui a prendere ordini e stampare.",
						},
						{
							title: "Multi-stampante / Multi-cassa",
							desc:
								"Gestisci in modo semplice più stampanti per reparto e più casse fiscali in parallelo.",
						},
						{
							title: "Aree & Tavoli",
							desc:
								"Crea Aree e Tavoli come vuoi. Sposta conti ed etichetta un tavolo quando ti serve.",
						},
						{
							title: "Preconto & Post-stampe",
							desc:
								"Stampa il preconto in un clic. Trasmetti ordini per reparto con la post-stampa quando ne hai bisogno.",
						},
						{
							title: "Messaggistica interna",
							desc:
								"Lo Staff si scambia messaggi e allega note alle comande: tutti sanno cosa fare, subito.",
						},
						{
							title: "Pagamenti flessibili",
							desc:
								"Dividi per quote o usa i subtotali, non è mai stato così semplice",
						},
						{
							title: "Stock",
							desc:
								"Imposta lo stock per prodotto, ricevi avvisi a esaurimento e blocca la vendita automaticamente.",
						},
						{
							title: "PIN & permessi",
							desc:
								"Ogni membro del tuo Staff ha un PIN d’accesso e privilegi su misura scelti da te.",
						},
						{
							title: "Backup nativi",
							desc:
								"Importa delle strutture iniziali di default o crea i tuoi backup. Puoi ripristinarli quando vuoi.",
						},
						{
							title: "Storico e statistiche",
							desc:
								"Storico ordini: vedi volumi, best seller e orari caldi — solo se vuoi tenerli.",
						},
						{
							title: "Ordini senza tavolo",
							desc:
								"Gestisci comande senza tavolo con semplice riferimento al cliente.",
						},
						{
							title: "Gestione prodotti rapida e completa",
							desc:
								"Crea/modifica/cancella prodotti in pochi passaggi: formati, categorie, varianti e tag inclusi.",
						},
					].map((f) => (
						<div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
							<div class="flex gap-3">
								<div class="mb-3 h-8 w-8 rounded-lg bg-[#66cc8a]" />
								<h3 class="mb-1 text-lg font-semibold">{f.title}</h3>
							</div>
							<p class="text-sm opacity-80">{f.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Moduli specifici: tutto ciò che puoi voler usare */}
			{/* <section id="modules" class="bg-white/[0.03]">
				<div class="mx-auto max-w-7xl px-5 py-16 md:py-24">
					<h2 class="mb-4 text-3xl font-extrabold md:text-4xl">Moduli BarWise</h2>
					<p class="mb-10 max-w-prose opacity-80">
						Attiva solo ciò che ti serve. Al resto…{" "}
						<span class="text-[#66cc8a] font-semibold">ci pensa BarWise</span>.
					</p>

					<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{[
							"Presa comande",
							"Stampe termiche per reparto",
							"Preconto",
							"Post-stampa ordini",
							"Gestione sale e tavoli",
							"Secondo nome tavolo",
							"Ordini senza tavolo",
							"Pagamenti per quote / subtotale",
							"Spostamento conto tra tavoli",
							"Multi-cassa fiscale",
							"Multi-stampante",
							"Messaggistica interna & note in comanda",
							"Gestione prodotti",
							"Formati con prezzi",
							"Categorie multiple",
							"Varianti di prezzo",
							"Tag prodotto",
							"Stock & blocco vendite",
							"Storico ordini & statistiche",
							"Utenti, PIN e permessi",
							"Backup: import/export",
							"Sincronizzazione locale Triplit",
						].map((m) => (
							<div class="flex items-center gap-3 rounded-xl border border-white/10 bg-black/60 p-4">
								<svg viewBox="0 0 24 24" class="h-5 w-5">
									<path
										d="M20 6L9 17l-5-5"
										stroke="#66cc8a"
										stroke-width="2"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span class="text-sm">{m}</span>
							</div>
						))}
					</div>
				</div>
			</section> */}

			{/* Come funziona */}
			<section id="how" class="mx-auto max-w-7xl px-5 py-16 md:py-24">
				<h2 class="mb-8 text-3xl font-extrabold md:text-4xl">Come funziona</h2>

				<ol class="grid gap-6 md:grid-cols-3">
					{[
						{
							step: "1",
							title: "Configura",
							desc:
								"Crea sale e tavoli, aggiungi prodotti, imposta stampanti e casse fiscali. Importa un backup se vuoi partire già pronto.",
						},
						{
							step: "2",
							title: "Prendi gli ordini",
							desc:
								"Comande veloci con note e messaggi interni. Stampa automatica su reparto, anche offline.",
						},
						{
							step: "3",
							title: "Chiudi & analizza",
							desc:
								"Preconto, pagamenti per quote o subtotale, statistiche e storico ordini.",
						},
					].map((s) => (
						<li class="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
							<div class="mb-2 text-2xl font-extrabold text-[#66cc8a]">
								{s.step}
							</div>
							<h3 class="mb-1 text-lg font-semibold">{s.title}</h3>
							<p class="text-sm opacity-80">{s.desc}</p>
						</li>
					))}
				</ol>
			</section>

			{/* Pricing teaser + CTA */}
			<section id="pricing" class="bg-gradient-to-b from-white/[0.03] to-transparent">
				<div class="mx-auto max-w-7xl px-5 py-16 md:py-24">
					<h2 class="mb-4 text-3xl font-extrabold md:text-4xl">
						Zero sorprese.
					</h2>
					<p class="mb-10 max-w-prose opacity-80">
						Parti gratis, dacci un tuo feedback. Parliamone.
					</p>

					<div class="grid gap-6 md:grid-cols-3">
						{[
							{
								name: "Start",
								price: "Gratis",
								features: [
									"Presa comande",
									"Stampe di reparto",
									"1 cassa fiscale",
								],
							},
							{
								name: "Pro",
								price: "€",
								badge: "Più scelto",
								features: [
									"Multi-stampante",
									"Multi-cassa fiscale",
									"Stock & Varianti",
								],
							},
							{
								name: "Enterprise",
								price: "Su misura",
								features: [
									"Multi-sede",
									"Permessi granulari",
									"Supporto dedicato",
								],
							},
						].map((p) => (
							<div class="relative rounded-3xl border border-white/10 bg-black/60 p-6">
								{p.badge && (
									<span class="absolute right-4 top-4 rounded-full bg-[#66cc8a] px-2 py-1 text-xs font-bold text-black">
										{p.badge}
									</span>
								)}
								<h3 class="mb-2 text-xl font-semibold">{p.name}</h3>
								<div class="mb-4 text-3xl font-extrabold">{p.price}</div>
								<ul class="mb-6 space-y-2 text-sm opacity-80">
									{p.features.map((f) => (
										<li class="flex items-center gap-2">
											<span class="inline-block h-1.5 w-1.5 rounded-full bg-[#66cc8a]" />
											{f}
										</li>
									))}
								</ul>
								<a
									href="#cta"
									onClick={smoothScroll}
									class="block rounded-xl bg-[#66cc8a] px-4 py-2 text-center font-semibold text-black hover:brightness-110"
								>
									Provalo ora
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ mirate */}
			<section id="faq" class="mx-auto max-w-7xl px-5 py-16 md:py-24">
				<h2 class="mb-8 text-3xl font-extrabold md:text-4xl">FAQ</h2>
				<div class="grid gap-4 md:grid-cols-2">
					{[
						[
							"Funziona senza internet?",
							"Sì. BarWise lavora in locale su Triplit: se la rete cade, continui a prendere comande e stampare.",
						],
						[
							"Posso usare più stampanti o più casse fiscali?",
							"Sì, è pensato per multi-stampante e multi-cassa, anche in contemporanea.",
						],
						[
							"Gestite stock e blocco prodotti?",
							"Sì: imposti le scorte, ricevi avvisi e puoi bloccare la vendita quando finiscono.",
						],
						[
							"Come gestisco il personale?",
							"Ogni membro dello staff ha un PIN e permessi configurabili dall’admin.",
						],
						[
							"Posso spostare un conto su un altro tavolo o fare scontrini parziali?",
							"Certo: spostamento conto tra tavoli, pagamento per quote o subtotale e preconto integrato.",
						],
						[
							"Posso fare ordini senza tavolo?",
							"Sì, puoi associare solo un riferimento cliente (es. nome) e stampare comunque.",
						],
					].map(([q, a]) => (
						<div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
							<h3 class="mb-2 text-base font-semibold">{q}</h3>
							<p class="text-sm opacity-80">{a}</p>
						</div>
					))}
				</div>
			</section>

			{/* CTA finale */}
			<section id="cta" class="bg-[#66cc8a] text-black">
				<div class="mx-auto max-w-7xl px-5 py-16 md:py-24">
					<div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
						<div>
							<h2 class="text-3xl font-extrabold md:text-4xl">
								Pronto a servire al meglio?
							</h2>
							<p class="mt-2 max-w-prose opacity-80">
								Attiva BarWise in pochi passaggi. Backup, permessi e stampanti:
								tutto già previsto.
							</p>
						</div>
						<div class="flex gap-3">
							<a
								href="#pricing"
								onClick={smoothScroll}
								class="rounded-xl bg-black px-6 py-3 font-semibold text-white hover:opacity-90"
							>
								Inizia gratis
							</a>
							{/* <a
								href="#features"
								onClick={smoothScroll}
								class="rounded-xl border border-black/20 px-6 py-3 font-semibold hover:bg-black/5"
							>
								Scopri le funzioni
							</a> */}
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer class="border-t border-white/10">
				<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm opacity-70 md:flex-row">
					<div class="flex items-center gap-3">
						<img src={logoUrl} alt="BarWise" class="h-6 w-6 rounded-full ring-2 ring-[#66cc8a]" />
						<span>© {new Date().getFullYear()} BarWise — Tutti i diritti riservati</span>
					</div>
					<div class="flex gap-4">
						<a href="#features" onClick={smoothScroll} class="hover:opacity-100">Funzioni</a>
						<a href="#pricing" onClick={smoothScroll} class="hover:opacity-100">Prezzi</a>
						<a href="#faq" onClick={smoothScroll} class="hover:opacity-100">FAQ</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default BarwiseLanding;
