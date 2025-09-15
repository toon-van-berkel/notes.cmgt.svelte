<script lang="ts">
    import { base } from '$app/paths';

    export let imgsrc: string;
    export let title: string;
    export let description: string;
    export let reference: string;
</script>

<div class="SimpleCard">
    <img src={base + imgsrc} alt={title}>
    <h3>{title}</h3>
    <p style="margin-bottom: 10px;">{description}</p>

    {#if reference}
        <a href={base + reference}>Read more...</a>
    {/if}
</div>