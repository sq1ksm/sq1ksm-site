<script>
	import { routes } from '$lib';
	import { onMount } from 'svelte';

	let open = -1;
	onMount;

	const today = new Date();
	const isChristmas = today.getMonth() === 11 && today.getDate() >= 24 && today.getDate() <= 26;
	const isStNicholasDay = today.getMonth() === 11 && today.getDate() === 6;
	const isBd = today.getMonth() === 3 && today.getDate() === 14;

	const celebration = isChristmas || isStNicholasDay || isBd;
</script>

<nav class:celebration>
	<ul>
		{#each routes as route, i}
			{#if !route.sub}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li
					class:active={open == i}
					class="main-nav"
					data-index={i}
					on:click={() => {
						open = i;
					}}
				>
					<a href={route.href}><span>{route.name}</span></a>
				</li>
			{:else}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li
					class:active={open == i}
					class="main-nav"
					on:click={() => {
						open = i;
					}}
					data-index={i}
				>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#"><span>{route.name}</span></a>
					<ul class="sublist" class:hidden={open != i}>
						{#each route.sub as subroute, i}
							<li class="subcont">
								<a href={subroute.href} class:odd={i % 2 == 1} class="sub-link"
									><span>{subroute.name}</span></a
								>
							</li>
						{/each}
					</ul>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<style>
	* {
		box-sizing: border-box;
	}
	nav {
		width: 200px;
		font-size: 13px;
		overflow: hidden;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		list-style-type: none;
		border-bottom: 1px solid #4c4e53;
	}
	a {
		display: block;
		padding: 6px 15px;
	}
	.main-nav > a {
		background: linear-gradient(#64676e 0%, #4c4e53 100%);
		color: #ffffff;
		text-shadow: 0 1px 1px #000;
		position: relative;
	}
	.main-nav.active > a,
	.main-nav:hover > a {
		background: linear-gradient(#97c700 0%, #709400 100%);
		text-shadow: 0 1px 1px #333;
	}

	.main-nav:has(ul) > a:after {
		content: '';
		position: absolute;
		top: 10px;
		right: 10px;
		border: 5px solid transparent;
		border-left: 5px solid #ffffff;
	}
	.main-nav.active:has(ul) > a:after {
		right: 14px;
		top: 12px;
		border: 5px solid transparent;
		border-top: 5px solid #4e5800;
	}

	.sub-link {
		background: #efefef;
		display: block;
		color: #797979;
		font-size: 13px;
	}
	.subcont {
		border-bottom: 1px solid #c9c9c9;
	}
	.sub-link.odd {
		background: #e5e5e5;
	}
	/*  */
	.sublist {
		transition: all 0.6s;
	}
	.sublist:not(.hidden) {
		max-height: 30rem;
	}
	.hidden {
		max-height: 0;
		overflow: hidden;
	}
	/*  */
	nav.celebration {
		-webkit-animation: rainbow 1s steps(36) infinite;
	}

	@-webkit-keyframes rainbow {
		from {
			-webkit-filter: hue-rotate(10deg);
		}
		to {
			-webkit-filter: hue-rotate(360deg);
		}
	}

	@keyframes rainbow {
		from {
			-webkit-filter: hue-rotate(10deg);
			filter: hue-rotate(10deg);
		}
		to {
			-webkit-filter: hue-rotate(360deg);
			filter: hue-rotate(360deg);
		}
	}
</style>
