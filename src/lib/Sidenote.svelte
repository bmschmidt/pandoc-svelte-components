<script>
	export let data;
	export let settings;
	if (settings._note_number === undefined) {
		settings._note_number = 1;
	} else {
		settings._note_number += 1;
	}
	import Elements from './Elements.svelte';
	const id = ('' + Math.random()).slice(0, 10);
	$: over_element = false;
	$: over_note = false;
</script>

<sup>
	<label
		class="fn note-toggle"
		class:focused={over_element}
		on:mouseenter={() => {
			over_note = true;
		}}
		on:mouseleave={() => {
			over_note = false;
		}}
		for="fn{id}"
	/>
</sup>

<input type="checkbox" class="note-toggle" id="fn{id}" name="fn_{id}" />

<aside
	class="note"
	class:focused={over_note}
	on:mouseenter={() => {
		over_element = true;
	}}
	on:mouseleave={() => {
		over_element = false;
	}}
>
	<Elements {settings} elems={data} />
</aside>

<style>
	.fn::after {
		content: counter(note);
		counter-increment: note; /* Increment the value of section counter by 1 */
		font-size: 75%;
		cursor: pointer;
	}
	.fn::after:hover {
		text-decoration: underline;
	}
	.fn.focused::after {
		content: counter(note);
		text-decoration: underline;
		color: #8b0000;
	}
	.note::before {
		content: counter(note);
		position: absolute;
		margin-left: -3em;
		width: 2.5em;
		text-align: right;
	}
	.note {
		display: flex;
		flex-direction: column;
		float: right;
		clear: right;
		padding-left: 2px;
		margin-right: -50%;
		width: 40%;
		/*		margin-top: 0.3rem;*/
		margin-bottom: 0;
		margin-block-start: 0em;
		font-size: smaller;
		/*line-height: 1.3;*/
		vertical-align: baseline;
		position: relative;
		transition: all 500ms ease-in-out;
	}
	.note :global(:first-child) {
		margin-top: 0px;
		margin-block-start: 0px;
	}
	.note.focused {
		box-shadow: -3px 0 0 #8b0000;
	}
	.note-toggle:not(.fn) {
		display: none;
	}

	@media (max-width: 640px) {
		.note {
			display: none;
		}
		.note-toggle:checked + .note {
			display: block;
			float: left;
			left: 1rem;
			clear: both;
			width: 95%;
			margin: 1rem 2.5%;
			vertical-align: baseline;
			position: relative;
		}
	}
</style>
