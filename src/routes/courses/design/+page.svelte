<script>
    import { base } from '$app/paths';
</script>

<main>
    <div class="breadcrumbs">
        <a href={base + "/"}>Home</a> / <a href={base + "/courses/design"}>Design</a>
    </div>
    <section>
        <h1>Course design</h1>
        <p>
            This is the course design, here you will find all the lectures and information.
        </p>

        <h2>All lectures</h2>
        <ul>
            <li><a href={base + "/courses/design"}>Lecture 1</a> (Not ready)</li>
            <li><a href={base + "/courses/design/design-lecture-two"}>Lecture 2</a></li>
        </ul>

        <h2>All inforamtion pages</h2>
        <ul>
            <li><a href={base + "/courses/design"}>What is designing</a> (Not ready)</li>
            <li><a href={base + "/courses/design"}>The design process</a> (Not ready)</li>
        </ul>
    </section>
</main> 