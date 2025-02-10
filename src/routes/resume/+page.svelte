<script lang="ts">
	import { data } from '@data/resume';
	import { currentLanguage, translations } from '$lib/stores/languages';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage title={translations[$currentLanguage].resume.title}>
	<div class="resume">
		{#if $data}
			<a href={$data} target="_blank" rel="noopener noreferrer">
				<Chip size={'1.25em'}>{translations[$currentLanguage].resume.download}</Chip>
			</a>
		{:else}
			<Chip>{translations[$currentLanguage].resume.notFound}</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
