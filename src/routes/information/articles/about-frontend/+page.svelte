<script>
    import { base } from '$app/paths';
</script>

<main>
    <div class="breadcrumbs">
        <a href={base + "/"}>Home</a> / articles / <a href={base + "/articles/what-is-frontend"}>What Is Frontend</a>
    </div>

    <section>
        <h1>What Is Frontend</h1>
        <p>This article explains the concept of frontend development, its purpose, core technologies,
            and how it interacts with other parts of a website or application.
            By reading this article, you will gain a clear understanding of what frontend development means
            and why it is essential in modern web projects.</p>

        <ol>
            <li><a href="#definition">Definition of Frontend</a></li>
            <li><a href="#core-tech">Core Technologies</a></li>
            <li><a href="#responsibilities">Responsibilities of a Frontend Developer</a></li>
            <li><a href="#tools-frameworks">Common Tools and Frameworks</a></li>
            <li><a href="#frontend-vs-backend">Frontend vs Backend</a></li>
            <li><a href="#importance">Importance in Modern Web Development</a></li>
            <li><a href="#future">Future of Frontend Development</a></li>
        </ol>
    </section>

    <hr>

    <section id="definition">
        <h2>1. Definition of Frontend</h2>
        <p>The <strong>frontend</strong> of a website or web application refers to the part that users directly see and interact with.
           It includes everything that runs in the browser — layout, colors, fonts, buttons, animations, and interactive elements.
           In short, it is the <em>visual and interactive layer</em> of the web experience.</p>
    </section>

    <section id="core-tech">
        <h2>2. Core Technologies</h2>
        <p>Frontend development is built upon three core web technologies:</p>
        <ul>
            <li><strong>HTML (HyperText Markup Language)</strong> – Structures the content of a webpage, defining elements such as headings, paragraphs, and links.</li>
            <li><strong>CSS (Cascading Style Sheets)</strong> – Controls the design and layout, including colors, fonts, spacing, and responsive behavior.</li>
            <li><strong>JavaScript</strong> – Adds interactivity and dynamic behavior, such as form validation, animations, and live content updates.</li>
        </ul>
    </section>

    <section id="responsibilities">
        <h2>3. Responsibilities of a Frontend Developer</h2>
        <p>A frontend developer focuses on creating a seamless user experience by ensuring the site looks good and works well across devices and browsers.
           Key responsibilities include:</p>
        <ul>
            <li>Building responsive layouts for desktops, tablets, and phones.</li>
            <li>Implementing interactive features and animations.</li>
            <li>Optimizing performance for fast loading times.</li>
            <li>Ensuring accessibility for users with disabilities.</li>
            <li>Collaborating with designers and backend developers.</li>
        </ul>
    </section>

    <section id="tools-frameworks">
        <h2>4. Common Tools and Frameworks</h2>
        <p>Modern frontend development often uses tools and frameworks to speed up workflows and maintain consistency:</p>
        <ul>
            <li><strong>Frameworks & Libraries</strong> – Such as React, Svelte, Vue.js, or Angular for building dynamic interfaces.</li>
            <li><strong>Preprocessors</strong> – Like SCSS or Sass to write cleaner and more modular CSS.</li>
            <li><strong>Build Tools</strong> – Webpack, Vite, or Parcel to bundle and optimize code.</li>
            <li><strong>Version Control</strong> – Git for managing and collaborating on code changes.</li>
        </ul>
    </section>

    <section id="frontend-vs-backend">
        <h2>5. Frontend vs Backend</h2>
        <p>Frontend and backend development are two sides of web development that work together:</p>
        <ul>
            <li><strong>Frontend</strong> – Manages everything the user sees and interacts with in the browser.</li>
            <li><strong>Backend</strong> – Handles server-side logic, databases, authentication, and data processing.</li>
        </ul>
        <p>They communicate through APIs or other interfaces to create a complete, functional application.</p>
    </section>

    <section id="importance">
        <h2>6. Importance in Modern Web Development</h2>
        <p>Good frontend development is crucial because it directly shapes the user’s experience.
           A well-designed frontend improves usability, builds trust, and keeps visitors engaged.
           Poorly built frontends, on the other hand, can lead to slow performance, broken layouts, and frustrated users.</p>
    </section>

    <section id="future">
        <h2>7. Future of Frontend Development</h2>
        <p>The frontend field continues to evolve with trends such as progressive web apps (PWAs), WebAssembly, and improved accessibility standards.
           As technology grows, the role of the frontend developer remains key in creating fast, secure, and interactive digital experiences.</p>
    </section>
</main>
