<script>
    import { base } from '$app/paths';
</script>

<main>
    <div class="breadcrumbs">
        <a href={base + "/"}>Home</a> / <a href={base + "/courses/design"}>Design</a> / <a href={base + "/courses/design/design-lecture-two"}>Lecture Two</a>
    </div>
    <section>
        <h1>Course design - Lecture two</h1>
        <p>
            This is lecure two of the course designing, here is all the inforamtion on this lesson. This lesson was given by Rob Zoetewij, at 09-09-2025 on 4:30 PM.
        </p>

        <h2>Topics in this lesson</h2>
        <ul>
            <li><a href="#robZoetewij">About the Teacher</a></li>
            <li><a href={base + "/courses/design/design-lecture-two"}>sub2</a></li>
        </ul>
    </section>

    <hr/>

    <section>
        <h2 id="robZoetewij">About the Teacher</h2>
        <p>He can program in Java and c#. He give two seperate courses a minor in game development and a honor program for students who seek a extra challange. His personal interests are DC and marvel comics.</p>
    </section>
    
    <section>
        <h2>Tets</h2>
    </section>
</main>