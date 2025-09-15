<script>
    import { base } from '$app/paths';
</script>

<main>
    <div class="breadcrumbs">
        <a href={base + "/"}>Home</a> / <a href={base + "/legal"}>Legal</a>
    </div>

    <section>
        <h1>Legal</h1>

        <ul>
            <li><a href={base + "/legal/terms-of-usage"}>Terms of Usage</a></li>
            <li><a href={base + "/legal/security-and-privacy"}>Security & Privacy</a></li>
        </ul>
    </section>
</main>