<script lang="ts">
    import SimpleCard from "$lib/components/SimpleCard.svelte";
    import { base } from '$app/paths';
</script>

<header>
    <img src="{base}/images/CMGT-Banner.png" alt="CMGT Banner">
    <h1>CMGT - Hogeschool Rotterdam </h1>
    <span>Missed a lesson? No problem we will help you catch up!</span>
</header>
<main>
    <section id="courses">
        <h2>Available Cources</h2>
        <p>Here you can explore all available CMGT courses. If you need additional details or notice any missing information, you’ll find everything you need here. We’re also developing interactive quizzes to make learning easier and more fun through mini-games.</p>

        <div class="CardGrid">
            <SimpleCard imgsrc="{base}/images/Design.png" title="Design" description="Find all the information and recources needed for the course Deisgn" reference="/design" />
        </div>
    </section>

    <section>
        <h2>Mini-games</h2>
        <p>Mini-games will be added in a future update. This feature will focus on helping you learn for your courses.</p>
    </section>
</main>