<script>
    import { base } from '$app/paths';
</script>

<main>
    <div class="breadcrumbs">
        <a href={base + "/"}>Home</a> / articles / <a href={base + "/articles/what-are-elements"}>What Are Elements</a>
    </div>

    <section>
        <h1>What Are Elements</h1>
        <p>This article explains what elements are in the context of web development,
            how they form the building blocks of a webpage, and the different types of elements you can use.
            Understanding elements is essential for creating structured, semantic, and accessible websites.</p>

        <ol>
            <li><a href="#definition">Definition of an Element</a></li>
            <li><a href="#structure">Structure of an Element</a></li>
            <li><a href="#types">Types of Elements</a></li>
            <li><a href="#nesting">Nesting and Hierarchy</a></li>
            <li><a href="#attributes">Attributes and Properties</a></li>
            <li><a href="#semantic">Semantic Elements</a></li>
            <li><a href="#best-practices">Best Practices</a></li>
        </ol>
    </section>

    <hr>

    <section id="definition">
        <h2>1. Definition of an Element</h2>
        <p>An <strong>HTML element</strong> is a fundamental building block of every webpage.
           Elements define the structure and meaning of the content you see in the browser — such as paragraphs, headings, images, or links.
           Each piece of visible or structural content on a webpage is represented by an element.</p>
    </section>

    <section id="structure">
        <h2>2. Structure of an Element</h2>
        <p>A typical element consists of three parts:</p>
        <ul>
            <li><strong>Opening tag</strong> – Marks the beginning of the element (e.g., <code>&lt;p&gt;</code>).</li>
            <li><strong>Content</strong> – The text or other elements contained inside.</li>
            <li><strong>Closing tag</strong> – Marks the end of the element (e.g., <code>&lt;/p&gt;</code>).</li>
        </ul>
        <p>Example:</p>
        <pre><code>&lt;p&gt;This is a paragraph element.&lt;/p&gt;</code></pre>
        <p>Some elements, such as images (<code>&lt;img&gt;</code>), are <em>self-closing</em> and have no separate closing tag.</p>
    </section>

    <section id="types">
        <h2>3. Types of Elements</h2>
        <p>Elements can be grouped into different categories based on how they behave:</p>
        <ul>
            <li><strong>Block-level elements</strong> – Start on a new line and occupy the full width of their parent (e.g., <code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;h1&gt;</code>).</li>
            <li><strong>Inline elements</strong> – Stay in line with surrounding content (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>).</li>
            <li><strong>Empty (void) elements</strong> – Contain no content and close themselves (e.g., <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>).</li>
        </ul>
    </section>

    <section id="nesting">
        <h2>4. Nesting and Hierarchy</h2>
        <p>Elements can contain other elements, creating a hierarchical structure known as the <strong>DOM (Document Object Model)</strong>.</p>
        <pre><code>&lt;div&gt;
    &lt;h1&gt;Title&lt;/h1&gt;
    &lt;p&gt;This is a paragraph inside a div.&lt;/p&gt;
&lt;/div&gt;</code></pre>
        <p>Correct nesting is essential for valid HTML and consistent browser rendering.</p>
    </section>

    <section id="attributes">
        <h2>5. Attributes and Properties</h2>
        <p>Elements can have <strong>attributes</strong> that provide extra information or functionality.
           Attributes are defined inside the opening tag and always use a name-value pair:</p>
        <pre><code>&lt;a href="https://example.com" target="_blank"&gt;Visit Example&lt;/a&gt;</code></pre>
        <p>Common attributes include <code>id</code>, <code>class</code>, <code>src</code>, and <code>alt</code>.
           These attributes can affect style, behavior, or accessibility.</p>
    </section>

    <section id="semantic">
        <h2>6. Semantic Elements</h2>
        <p><strong>Semantic elements</strong> clearly describe their meaning and purpose,
           making code easier to read and improving SEO and accessibility.
           Examples include:</p>
        <ul>
            <li><code>&lt;header&gt;</code> – Defines the header of a page or section.</li>
            <li><code>&lt;article&gt;</code> – Represents an independent piece of content.</li>
            <li><code>&lt;footer&gt;</code> – Marks the footer of a page or section.</li>
            <li><code>&lt;main&gt;</code> – Indicates the main content area of the document.</li>
        </ul>
    </section>

    <section id="best-practices">
        <h2>7. Best Practices</h2>
        <p>When working with elements, follow these best practices:</p>
        <ul>
            <li>Use semantic elements whenever possible for clarity and accessibility.</li>
            <li>Ensure proper nesting and close all tags correctly.</li>
            <li>Provide descriptive <code>alt</code> text for images to support screen readers.</li>
            <li>Use <code>class</code> and <code>id</code> attributes to target elements with CSS and JavaScript cleanly.</li>
        </ul>
    </section>
</main>
