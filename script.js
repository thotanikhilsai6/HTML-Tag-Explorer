// ===== Central data =====
const TAGS = [
  {
    tag: "html",
    fullName: "HTML",
    category: "Structure",
    keywords: "html,document,root",
    purpose: "Root element of an HTML document.",
    syntax: '<html lang="en">...</html>',
    example: '<html lang="en">...</html>',
    whenToUse: "Use <html> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate structure context.",
    attributes: [
      { name: "lang", meaning: "Document language", example: 'lang="en"' },
    ],
    commonMistakes:
      "Do not use <html> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <html> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["head", "title", "base", "link"],
  },
  {
    tag: "head",
    fullName: "Document Head",
    category: "Structure",
    keywords: "head,metadata,document",
    purpose: "Contains metadata and resource information for the document.",
    syntax: "<head><title>My Page</title></head>",
    example: "<head><title>My Page</title></head>",
    whenToUse: "Use <head> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate structure context.",
    attributes: [],
    commonMistakes:
      "Do not use <head> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <head> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["html", "title", "base", "link"],
  },
  {
    tag: "title",
    fullName: "Document Title",
    category: "Structure",
    keywords: "title,page title,metadata",
    purpose: "Defines the title shown for the document.",
    syntax: "<title>My Page</title>",
    example: "<title>My Page</title>",
    whenToUse: "Use <title> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate structure context.",
    attributes: [],
    commonMistakes:
      "Do not use <title> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <title> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["html", "head", "base", "link"],
  },
  {
    tag: "base",
    fullName: "Document Base URL",
    category: "Structure",
    keywords: "base,url,relative url",
    purpose: "Sets the base URL and default target for relative URLs.",
    syntax: '<base href="/">',
    example: '<base href="/">',
    whenToUse: "Use <base> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate structure context.",
    attributes: [
      { name: "href", meaning: "Base URL", example: 'href="/"' },
      {
        name: "target",
        meaning: "Default link target",
        example: 'target="_blank"',
      },
    ],
    commonMistakes:
      "Do not use <base> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <base> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["html", "head", "title", "link"],
  },
  {
    tag: "link",
    fullName: "External Resource Link",
    category: "Structure",
    keywords: "link,stylesheet,resource,css",
    purpose: "Links the document to an external resource such as a stylesheet.",
    syntax: '<link rel="stylesheet" href="style.css">',
    example: '<link rel="stylesheet" href="style.css">',
    whenToUse: "Use <link> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate structure context.",
    attributes: [
      { name: "rel", meaning: "Relationship", example: 'rel="stylesheet"' },
      { name: "href", meaning: "Resource URL", example: 'href="style.css"' },
    ],
    commonMistakes:
      "Do not use <link> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <link> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["html", "head", "title", "base"],
  },
  {
    tag: "meta",
    fullName: "Metadata",
    category: "Structure",
    keywords: "meta,metadata,charset,viewport",
    purpose: "Provides metadata about the document.",
    syntax: '<meta name="description" content="HTML guide">',
    example: '<meta name="description" content="HTML guide">',
    whenToUse: "Use <meta> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate structure context.",
    attributes: [
      {
        name: "charset",
        meaning: "Character encoding",
        example: 'charset="UTF-8"',
      },
      { name: "name", meaning: "Metadata name", example: 'name="description"' },
      {
        name: "content",
        meaning: "Metadata value",
        example: 'content="HTML guide"',
      },
    ],
    commonMistakes:
      "Do not use <meta> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <meta> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["html", "head", "title", "base"],
  },
  {
    tag: "style",
    fullName: "Style Sheet",
    category: "Structure",
    keywords: "style,css,stylesheet",
    purpose: "Contains CSS rules for the document.",
    syntax: "<style>p { color: blue; }</style>",
    example: "<style>p { color: blue; }</style>",
    whenToUse: "Use <style> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate structure context.",
    attributes: [
      { name: "media", meaning: "Media condition", example: 'media="screen"' },
    ],
    commonMistakes:
      "Do not use <style> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <style> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["html", "head", "title", "base"],
  },
  {
    tag: "body",
    fullName: "Document Body",
    category: "Structure",
    keywords: "body,content,document",
    purpose: "Contains the visible content of the document.",
    syntax: "<body><h1>Hello</h1></body>",
    example: "<body><h1>Hello</h1></body>",
    whenToUse: "Use <body> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate structure context.",
    attributes: [],
    commonMistakes:
      "Do not use <body> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <body> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["html", "head", "title", "base"],
  },
  {
    tag: "header",
    fullName: "Header",
    category: "Semantic",
    keywords: "header,semantic,introduction",
    purpose: "Represents introductory content for a page or section.",
    syntax: "<header><h1>Site</h1></header>",
    example: "<header><h1>Site</h1></header>",
    whenToUse: "Use <header> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate semantic context.",
    attributes: [
      { name: "id", meaning: "Unique identifier", example: 'id="header"' },
    ],
    commonMistakes:
      "Do not use <header> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <header> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["nav", "main", "section", "article"],
  },
  {
    tag: "nav",
    fullName: "Navigation",
    category: "Semantic",
    keywords: "nav,navigation,menu,links",
    purpose: "Groups important navigation links.",
    syntax: '<nav><a href="/">Home</a></nav>',
    example: '<nav><a href="/">Home</a></nav>',
    whenToUse: "Use <nav> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate semantic context.",
    attributes: [
      {
        name: "aria-label",
        meaning: "Accessible name",
        example: 'aria-label="Main navigation"',
      },
    ],
    commonMistakes:
      "Do not use <nav> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <nav> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["header", "main", "section", "article"],
  },
  {
    tag: "main",
    fullName: "Main Content",
    category: "Semantic",
    keywords: "main,content,semantic",
    purpose: "Contains the dominant content of the document.",
    syntax: "<main><h1>Content</h1></main>",
    example: "<main><h1>Content</h1></main>",
    whenToUse: "Use <main> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate semantic context.",
    attributes: [],
    commonMistakes:
      "Do not use <main> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <main> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["header", "nav", "section", "article"],
  },
  {
    tag: "section",
    fullName: "Section",
    category: "Semantic",
    keywords: "section,semantic,content",
    purpose: "Groups thematically related content.",
    syntax: "<section><h2>About</h2></section>",
    example: "<section><h2>About</h2></section>",
    whenToUse: "Use <section> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate semantic context.",
    attributes: [
      {
        name: "aria-labelledby",
        meaning: "Heading reference",
        example: 'aria-labelledby="about-title"',
      },
    ],
    commonMistakes:
      "Do not use <section> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <section> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["header", "nav", "main", "article"],
  },
  {
    tag: "article",
    fullName: "Article",
    category: "Semantic",
    keywords: "article,post,blog,semantic",
    purpose: "Represents a self-contained piece of content.",
    syntax: "<article><h2>News</h2><p>Story</p></article>",
    example: "<article><h2>News</h2><p>Story</p></article>",
    whenToUse: "Use <article> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate semantic context.",
    attributes: [],
    commonMistakes:
      "Do not use <article> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <article> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["header", "nav", "main", "section"],
  },
  {
    tag: "aside",
    fullName: "Aside",
    category: "Semantic",
    keywords: "aside,sidebar,related,semantic",
    purpose: "Contains related content that is separate from the main flow.",
    syntax: "<aside>Related links</aside>",
    example: "<aside>Related links</aside>",
    whenToUse: "Use <aside> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate semantic context.",
    attributes: [],
    commonMistakes:
      "Do not use <aside> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <aside> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["header", "nav", "main", "section"],
  },
  {
    tag: "footer",
    fullName: "Footer",
    category: "Semantic",
    keywords: "footer,semantic,copyright",
    purpose: "Represents footer information for a page or section.",
    syntax: "<footer>© 2026</footer>",
    example: "<footer>© 2026</footer>",
    whenToUse: "Use <footer> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate semantic context.",
    attributes: [],
    commonMistakes:
      "Do not use <footer> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <footer> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["header", "nav", "main", "section"],
  },
  {
    tag: "address",
    fullName: "Contact Information",
    category: "Semantic",
    keywords: "address,contact,email,semantic",
    purpose: "Provides contact information for the nearest article or body.",
    syntax: "<address>Contact: hello@example.com</address>",
    example: "<address>Contact: hello@example.com</address>",
    whenToUse: "Use <address> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate semantic context.",
    attributes: [],
    commonMistakes:
      "Do not use <address> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <address> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["header", "nav", "main", "section"],
  },
  {
    tag: "search",
    fullName: "Search Landmark",
    category: "Semantic",
    keywords: "search,filter,form,landmark",
    purpose: "Represents a section containing search or filtering controls.",
    syntax: '<search><input type="search" placeholder="Search"></search>',
    example: '<search><input type="search" placeholder="Search"></search>',
    whenToUse: "Use <search> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate semantic context.",
    attributes: [],
    commonMistakes:
      "Do not use <search> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <search> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["header", "nav", "main", "section"],
  },
  {
    tag: "h1",
    fullName: "Heading 1",
    category: "Text",
    keywords: "heading,h1,title",
    purpose: "Defines the highest-level heading.",
    syntax: "<h1>HTML Guide</h1>",
    example: "<h1>HTML Guide</h1>",
    whenToUse: "Use <h1> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <h1> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <h1> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h2", "h3", "h4", "h5"],
  },
  {
    tag: "h2",
    fullName: "Heading 2",
    category: "Text",
    keywords: "heading,h2,subheading",
    purpose: "Defines a second-level heading.",
    syntax: "<h2>HTML Basics</h2>",
    example: "<h2>HTML Basics</h2>",
    whenToUse: "Use <h2> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <h2> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <h2> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h3", "h4", "h5"],
  },
  {
    tag: "h3",
    fullName: "Heading 3",
    category: "Text",
    keywords: "heading,h3,subheading",
    purpose: "Defines a third-level heading.",
    syntax: "<h3>Elements</h3>",
    example: "<h3>Elements</h3>",
    whenToUse: "Use <h3> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <h3> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <h3> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h4", "h5"],
  },
  {
    tag: "h4",
    fullName: "Heading 4",
    category: "Text",
    keywords: "heading,h4,subheading",
    purpose: "Defines a fourth-level heading.",
    syntax: "<h4>Examples</h4>",
    example: "<h4>Examples</h4>",
    whenToUse: "Use <h4> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <h4> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <h4> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h5"],
  },
  {
    tag: "h5",
    fullName: "Heading 5",
    category: "Text",
    keywords: "heading,h5,subheading",
    purpose: "Defines a fifth-level heading.",
    syntax: "<h5>Notes</h5>",
    example: "<h5>Notes</h5>",
    whenToUse: "Use <h5> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <h5> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <h5> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "h6",
    fullName: "Heading 6",
    category: "Text",
    keywords: "heading,h6,subheading",
    purpose: "Defines a sixth-level heading.",
    syntax: "<h6>Details</h6>",
    example: "<h6>Details</h6>",
    whenToUse: "Use <h6> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <h6> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <h6> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "p",
    fullName: "Paragraph",
    category: "Text",
    keywords: "paragraph,text",
    purpose: "Defines a paragraph of text.",
    syntax: "<p>Hello world.</p>",
    example: "<p>Hello world.</p>",
    whenToUse: "Use <p> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <p> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <p> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "br",
    fullName: "Line Break",
    category: "Text",
    keywords: "break,line break,text",
    purpose: "Inserts a line break within text.",
    syntax: "Hello<br>World",
    example: "Hello<br>World",
    whenToUse: "Use <br> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <br> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <br> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "hr",
    fullName: "Thematic Break",
    category: "Text",
    keywords: "hr,horizontal rule,separator",
    purpose: "Represents a thematic change or break between sections.",
    syntax: "<hr>",
    example: "<hr>",
    whenToUse: "Use <hr> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <hr> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <hr> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "pre",
    fullName: "Preformatted Text",
    category: "Text",
    keywords: "preformatted,whitespace,text",
    purpose: "Displays text while preserving whitespace and line breaks.",
    syntax: "<pre>line 1\nline 2</pre>",
    example: "<pre>line 1\nline 2</pre>",
    whenToUse: "Use <pre> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <pre> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <pre> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "blockquote",
    fullName: "Block Quotation",
    category: "Text",
    keywords: "quote,quotation,blockquote",
    purpose: "Represents an extended quotation from another source.",
    syntax: "<blockquote>Learning never stops.</blockquote>",
    example: "<blockquote>Learning never stops.</blockquote>",
    whenToUse: "Use <blockquote> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <blockquote> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <blockquote> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "ol",
    fullName: "Ordered List",
    category: "Lists",
    keywords: "ordered,list,numbered,steps",
    purpose: "Creates a list in which item order matters.",
    syntax: "<ol><li>First</li><li>Second</li></ol>",
    example: "<ol><li>First</li><li>Second</li></ol>",
    whenToUse: "Use <ol> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate lists context.",
    attributes: [],
    commonMistakes:
      "Do not use <ol> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <ol> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["ul", "li", "dl", "dt"],
  },
  {
    tag: "ul",
    fullName: "Unordered List",
    category: "Lists",
    keywords: "unordered,list,bullets",
    purpose: "Creates a list in which item order does not matter.",
    syntax: "<ul><li>Apple</li><li>Banana</li></ul>",
    example: "<ul><li>Apple</li><li>Banana</li></ul>",
    whenToUse: "Use <ul> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate lists context.",
    attributes: [],
    commonMistakes:
      "Do not use <ul> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <ul> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["ol", "li", "dl", "dt"],
  },
  {
    tag: "li",
    fullName: "List Item",
    category: "Lists",
    keywords: "list item,li",
    purpose: "Defines an individual item in a list.",
    syntax: "<li>HTML</li>",
    example: "<li>HTML</li>",
    whenToUse: "Use <li> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate lists context.",
    attributes: [],
    commonMistakes:
      "Do not use <li> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <li> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["ol", "ul", "dl", "dt"],
  },
  {
    tag: "dl",
    fullName: "Description List",
    category: "Lists",
    keywords: "description list,definition list,dl",
    purpose: "Groups terms with their descriptions or values.",
    syntax: "<dl><dt>HTML</dt><dd>Markup language</dd></dl>",
    example: "<dl><dt>HTML</dt><dd>Markup language</dd></dl>",
    whenToUse: "Use <dl> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate lists context.",
    attributes: [],
    commonMistakes:
      "Do not use <dl> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <dl> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["ol", "ul", "li", "dt"],
  },
  {
    tag: "dt",
    fullName: "Description Term",
    category: "Lists",
    keywords: "term,description list,dt",
    purpose: "Defines a term in a description list.",
    syntax: "<dt>HTML</dt>",
    example: "<dt>HTML</dt>",
    whenToUse: "Use <dt> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate lists context.",
    attributes: [],
    commonMistakes:
      "Do not use <dt> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <dt> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["ol", "ul", "li", "dl"],
  },
  {
    tag: "dd",
    fullName: "Description Details",
    category: "Lists",
    keywords: "description,definition,dd",
    purpose: "Provides the description or value for a term.",
    syntax: "<dd>Markup language</dd>",
    example: "<dd>Markup language</dd>",
    whenToUse: "Use <dd> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate lists context.",
    attributes: [],
    commonMistakes:
      "Do not use <dd> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <dd> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["ol", "ul", "li", "dl"],
  },
  {
    tag: "figure",
    fullName: "Figure",
    category: "Media",
    keywords: "figure,image,diagram,media",
    purpose:
      "Represents self-contained content such as an image, diagram, or code example.",
    syntax: '<figure><img src="photo.jpg" alt="Photo"></figure>',
    example: '<figure><img src="photo.jpg" alt="Photo"></figure>',
    whenToUse: "Use <figure> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [],
    commonMistakes:
      "Do not use <figure> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <figure> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figcaption", "img", "picture", "source"],
  },
  {
    tag: "figcaption",
    fullName: "Figure Caption",
    category: "Media",
    keywords: "caption,figure,media",
    purpose: "Provides a caption for a figure.",
    syntax: "<figcaption>Example image</figcaption>",
    example: "<figcaption>Example image</figcaption>",
    whenToUse: "Use <figcaption> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [],
    commonMistakes:
      "Do not use <figcaption> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <figcaption> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "img", "picture", "source"],
  },
  {
    tag: "div",
    fullName: "Generic Block Container",
    category: "Structure",
    keywords: "div,container,layout,wrapper",
    purpose:
      "Provides a generic block container when no semantic element fits.",
    syntax: '<div class="card">Content</div>',
    example: '<div class="card">Content</div>',
    whenToUse: "Use <div> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate structure context.",
    attributes: [],
    commonMistakes:
      "Do not use <div> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <div> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["html", "head", "title", "base"],
  },
  {
    tag: "span",
    fullName: "Generic Inline Container",
    category: "Text",
    keywords: "span,inline,text,container",
    purpose:
      "Provides a generic inline container when no semantic element fits.",
    syntax: '<span class="highlight">HTML</span>',
    example: '<span class="highlight">HTML</span>',
    whenToUse: "Use <span> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <span> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <span> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "a",
    fullName: "Hyperlink",
    category: "Links",
    keywords: "link,anchor,url,navigation",
    purpose: "Creates a hyperlink to another resource or location.",
    syntax: '<a href="https://example.com">Visit</a>',
    example: '<a href="https://example.com">Visit</a>',
    whenToUse: "Use <a> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate links context.",
    attributes: [
      { name: "href", meaning: "Destination URL", example: 'href="/about"' },
      {
        name: "target",
        meaning: "Opening context",
        example: 'target="_blank"',
      },
      { name: "rel", meaning: "Link relationship", example: 'rel="noopener"' },
      { name: "download", meaning: "Download hint", example: "download" },
    ],
    commonMistakes:
      "Do not use <a> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <a> semantic, accessible, and valid for the context where it is used.",
    relatedTags: [],
  },
  {
    tag: "strong",
    fullName: "Strong Importance",
    category: "Formatting",
    keywords: "strong,bold,importance",
    purpose: "Marks content as strongly important.",
    syntax: "<strong>Important</strong>",
    example: "<strong>Important</strong>",
    whenToUse: "Use <strong> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <strong> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <strong> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["em", "b", "i", "u"],
  },
  {
    tag: "em",
    fullName: "Emphasis",
    category: "Formatting",
    keywords: "emphasis,italic,stress",
    purpose: "Marks text with stress emphasis.",
    syntax: "<em>Really</em> important",
    example: "<em>Really</em> important",
    whenToUse: "Use <em> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <em> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <em> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "b", "i", "u"],
  },
  {
    tag: "b",
    fullName: "Bring Attention To",
    category: "Formatting",
    keywords: "bold,attention,formatting",
    purpose: "Draws attention to text without adding strong importance.",
    syntax: "<b>Keyword</b>",
    example: "<b>Keyword</b>",
    whenToUse: "Use <b> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <b> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <b> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "i", "u"],
  },
  {
    tag: "i",
    fullName: "Alternate Voice or Mood",
    category: "Formatting",
    keywords: "italic,term,voice",
    purpose: "Marks text set apart from normal prose, such as a term or idiom.",
    syntax: "<i>et cetera</i>",
    example: "<i>et cetera</i>",
    whenToUse: "Use <i> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <i> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <i> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "b", "u"],
  },
  {
    tag: "u",
    fullName: "Non-textual Annotation",
    category: "Formatting",
    keywords: "underline,annotation",
    purpose:
      "Marks text with a non-textual annotation, commonly shown underlined.",
    syntax: "<u>Misspelled</u>",
    example: "<u>Misspelled</u>",
    whenToUse: "Use <u> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <u> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <u> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "b", "i"],
  },
  {
    tag: "s",
    fullName: "No Longer Accurate",
    category: "Formatting",
    keywords: "strikethrough,old price,deleted",
    purpose: "Represents content that is no longer accurate or relevant.",
    syntax: "<s>₹999</s> ₹699",
    example: "<s>₹999</s> ₹699",
    whenToUse: "Use <s> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <s> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <s> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "b", "i"],
  },
  {
    tag: "small",
    fullName: "Side Comment",
    category: "Formatting",
    keywords: "small,legal,side comment",
    purpose: "Represents side comments or small-print text.",
    syntax: "<small>Terms apply.</small>",
    example: "<small>Terms apply.</small>",
    whenToUse: "Use <small> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <small> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <small> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "b", "i"],
  },
  {
    tag: "mark",
    fullName: "Highlighted Text",
    category: "Formatting",
    keywords: "highlight,search,result",
    purpose: "Highlights text relevant to the current context.",
    syntax: "<mark>Important</mark>",
    example: "<mark>Important</mark>",
    whenToUse: "Use <mark> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <mark> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <mark> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "b", "i"],
  },
  {
    tag: "abbr",
    fullName: "Abbreviation",
    category: "Text",
    keywords: "abbreviation,acronym,tooltip",
    purpose: "Represents an abbreviation or acronym.",
    syntax: '<abbr title="HyperText Markup Language">HTML</abbr>',
    example: '<abbr title="HyperText Markup Language">HTML</abbr>',
    whenToUse: "Use <abbr> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <abbr> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <abbr> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "cite",
    fullName: "Citation Title",
    category: "Text",
    keywords: "citation,work,title,reference",
    purpose: "Marks the title of a creative work or cited source.",
    syntax: "<cite>HTML Standard</cite>",
    example: "<cite>HTML Standard</cite>",
    whenToUse: "Use <cite> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <cite> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <cite> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "q",
    fullName: "Inline Quotation",
    category: "Text",
    keywords: "quote,quotation,inline",
    purpose: "Represents a short inline quotation.",
    syntax: "<q>Hello</q>",
    example: "<q>Hello</q>",
    whenToUse: "Use <q> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <q> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <q> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "code",
    fullName: "Code Fragment",
    category: "Formatting",
    keywords: "code,programming,inline code",
    purpose: "Represents a short piece of computer code.",
    syntax: "<code>console.log()</code>",
    example: "<code>console.log()</code>",
    whenToUse: "Use <code> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <code> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <code> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "b", "i"],
  },
  {
    tag: "kbd",
    fullName: "Keyboard Input",
    category: "Formatting",
    keywords: "keyboard,input,shortcut",
    purpose: "Represents user input from a keyboard or similar device.",
    syntax: "<kbd>Ctrl</kbd> + <kbd>K</kbd>",
    example: "<kbd>Ctrl</kbd> + <kbd>K</kbd>",
    whenToUse: "Use <kbd> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <kbd> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <kbd> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "b", "i"],
  },
  {
    tag: "samp",
    fullName: "Sample Output",
    category: "Formatting",
    keywords: "sample,output,terminal",
    purpose: "Represents sample or quoted output from a computer program.",
    syntax: "<samp>File not found</samp>",
    example: "<samp>File not found</samp>",
    whenToUse: "Use <samp> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <samp> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <samp> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "b", "i"],
  },
  {
    tag: "var",
    fullName: "Variable",
    category: "Formatting",
    keywords: "variable,math,programming",
    purpose:
      "Represents a variable in a mathematical or programming expression.",
    syntax: "<var>x</var> = 10",
    example: "<var>x</var> = 10",
    whenToUse: "Use <var> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <var> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <var> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "b", "i"],
  },
  {
    tag: "sub",
    fullName: "Subscript",
    category: "Formatting",
    keywords: "subscript,formula",
    purpose: "Displays text as subscript.",
    syntax: "H<sub>2</sub>O",
    example: "H<sub>2</sub>O",
    whenToUse: "Use <sub> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <sub> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <sub> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "b", "i"],
  },
  {
    tag: "sup",
    fullName: "Superscript",
    category: "Formatting",
    keywords: "superscript,formula",
    purpose: "Displays text as superscript.",
    syntax: "x<sup>2</sup>",
    example: "x<sup>2</sup>",
    whenToUse: "Use <sup> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate formatting context.",
    attributes: [],
    commonMistakes:
      "Do not use <sup> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <sup> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["strong", "em", "b", "i"],
  },
  {
    tag: "time",
    fullName: "Time or Date",
    category: "Text",
    keywords: "time,date,datetime",
    purpose: "Represents a specific time or date.",
    syntax: '<time datetime="2026-09-01">September 1</time>',
    example: '<time datetime="2026-09-01">September 1</time>',
    whenToUse: "Use <time> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <time> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <time> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "data",
    fullName: "Machine-readable Data",
    category: "Text",
    keywords: "data,machine-readable,value",
    purpose: "Associates visible content with a machine-readable value.",
    syntax: '<data value="101">Product 101</data>',
    example: '<data value="101">Product 101</data>',
    whenToUse: "Use <data> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <data> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <data> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "bdi",
    fullName: "Bidirectional Isolation",
    category: "Text",
    keywords: "bdi,bidirectional,rtl",
    purpose: "Isolates text so its direction does not affect surrounding text.",
    syntax: "<bdi>اسم</bdi>",
    example: "<bdi>اسم</bdi>",
    whenToUse: "Use <bdi> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <bdi> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <bdi> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "bdo",
    fullName: "Bidirectional Override",
    category: "Text",
    keywords: "bdo,direction,rtl,ltr",
    purpose: "Explicitly overrides the text direction for its content.",
    syntax: '<bdo dir="rtl">ABC</bdo>',
    example: '<bdo dir="rtl">ABC</bdo>',
    whenToUse: "Use <bdo> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <bdo> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <bdo> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "ruby",
    fullName: "Ruby Annotation",
    category: "Text",
    keywords: "ruby,annotation,east asian",
    purpose: "Groups base text with ruby pronunciation or annotation text.",
    syntax: "<ruby>漢<rt>kan</rt></ruby>",
    example: "<ruby>漢<rt>kan</rt></ruby>",
    whenToUse: "Use <ruby> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <ruby> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <ruby> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "rt",
    fullName: "Ruby Text",
    category: "Text",
    keywords: "ruby,annotation,pronunciation",
    purpose: "Provides the annotation text inside a ruby annotation.",
    syntax: "<ruby>漢<rt>kan</rt></ruby>",
    example: "<ruby>漢<rt>kan</rt></ruby>",
    whenToUse: "Use <rt> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <rt> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <rt> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "rp",
    fullName: "Ruby Fallback Parentheses",
    category: "Text",
    keywords: "ruby,fallback,parentheses",
    purpose:
      "Provides fallback parentheses around ruby text when ruby is unsupported.",
    syntax: "<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp></ruby>",
    example: "<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp></ruby>",
    whenToUse: "Use <rp> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <rp> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <rp> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "wbr",
    fullName: "Word Break Opportunity",
    category: "Text",
    keywords: "word break,line wrapping",
    purpose: "Marks a place where a long word may be broken.",
    syntax: "superlong<wbr>word",
    example: "superlong<wbr>word",
    whenToUse: "Use <wbr> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate text context.",
    attributes: [],
    commonMistakes:
      "Do not use <wbr> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <wbr> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["h1", "h2", "h3", "h4"],
  },
  {
    tag: "img",
    fullName: "Image",
    category: "Media",
    keywords: "image,picture,photo,media",
    purpose: "Embeds an image resource in the page.",
    syntax: '<img src="photo.jpg" alt="A photo">',
    example: '<img src="photo.jpg" alt="A photo">',
    whenToUse: "Use <img> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [
      { name: "src", meaning: "Image URL", example: 'src="photo.jpg"' },
      { name: "alt", meaning: "Alternative text", example: 'alt="Photo"' },
      { name: "width", meaning: "Rendered width", example: 'width="600"' },
      { name: "height", meaning: "Rendered height", example: 'height="400"' },
      { name: "loading", meaning: "Loading mode", example: 'loading="lazy"' },
    ],
    commonMistakes:
      "Do not use <img> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <img> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "picture", "source"],
  },
  {
    tag: "picture",
    fullName: "Responsive Image Container",
    category: "Media",
    keywords: "picture,responsive,image,art direction",
    purpose:
      "Provides alternative image sources for responsive or art-directed images.",
    syntax: '<picture><img src="photo.jpg" alt="Photo"></picture>',
    example: '<picture><img src="photo.jpg" alt="Photo"></picture>',
    whenToUse: "Use <picture> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [
      {
        name: "class",
        meaning: "CSS class",
        example: 'class="responsive-image"',
      },
    ],
    commonMistakes:
      "Do not use <picture> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <picture> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "source"],
  },
  {
    tag: "source",
    fullName: "Media Source",
    category: "Media",
    keywords: "source,media,picture,audio,video",
    purpose:
      "Provides an alternative media or image source for a parent element.",
    syntax: '<source src="movie.webm" type="video/webm">',
    example: '<source src="movie.webm" type="video/webm">',
    whenToUse: "Use <source> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [
      { name: "src", meaning: "Media URL", example: 'src="movie.webm"' },
      { name: "type", meaning: "MIME type", example: 'type="video/webm"' },
      {
        name: "media",
        meaning: "Media condition",
        example: 'media="(min-width: 700px)"',
      },
    ],
    commonMistakes:
      "Do not use <source> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <source> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "audio",
    fullName: "Audio",
    category: "Media",
    keywords: "audio,sound,music,media",
    purpose: "Embeds sound content.",
    syntax: '<audio controls src="song.mp3"></audio>',
    example: '<audio controls src="song.mp3"></audio>',
    whenToUse: "Use <audio> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [
      { name: "controls", meaning: "Playback controls", example: "controls" },
      { name: "src", meaning: "Audio URL", example: 'src="song.mp3"' },
    ],
    commonMistakes:
      "Do not use <audio> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <audio> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "video",
    fullName: "Video",
    category: "Media",
    keywords: "video,movie,media",
    purpose: "Embeds video content.",
    syntax: '<video controls src="movie.mp4"></video>',
    example: '<video controls src="movie.mp4"></video>',
    whenToUse: "Use <video> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [
      { name: "controls", meaning: "Playback controls", example: "controls" },
      {
        name: "poster",
        meaning: "Poster image",
        example: 'poster="cover.jpg"',
      },
      { name: "width", meaning: "Width", example: 'width="640"' },
      { name: "height", meaning: "Height", example: 'height="360"' },
    ],
    commonMistakes:
      "Do not use <video> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <video> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "track",
    fullName: "Text Track",
    category: "Media",
    keywords: "track,captions,subtitles,video",
    purpose: "Provides timed text such as captions or subtitles for media.",
    syntax: '<track kind="captions" src="captions.vtt" srclang="en">',
    example: '<track kind="captions" src="captions.vtt" srclang="en">',
    whenToUse: "Use <track> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [],
    commonMistakes:
      "Do not use <track> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <track> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "map",
    fullName: "Image Map",
    category: "Media",
    keywords: "map,image map,clickable image",
    purpose: "Defines an image map containing clickable areas.",
    syntax:
      '<map name="places"><area href="/map" shape="rect" coords="0,0,100,100"></map>',
    example:
      '<map name="places"><area href="/map" shape="rect" coords="0,0,100,100"></map>',
    whenToUse: "Use <map> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [],
    commonMistakes:
      "Do not use <map> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <map> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "area",
    fullName: "Image Map Area",
    category: "Media",
    keywords: "area,image map,hotspot",
    purpose: "Defines a clickable area within an image map.",
    syntax: '<area href="/home" shape="rect" coords="0,0,100,100">',
    example: '<area href="/home" shape="rect" coords="0,0,100,100">',
    whenToUse: "Use <area> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [],
    commonMistakes:
      "Do not use <area> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <area> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "iframe",
    fullName: "Inline Frame",
    category: "Media",
    keywords: "iframe,embed,page,frame",
    purpose: "Embeds another HTML document inside the current page.",
    syntax: '<iframe src="page.html" title="Example"></iframe>',
    example: '<iframe src="page.html" title="Example"></iframe>',
    whenToUse: "Use <iframe> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [
      { name: "src", meaning: "Document URL", example: 'src="page.html"' },
      {
        name: "title",
        meaning: "Accessible title",
        example: 'title="Embedded page"',
      },
      { name: "loading", meaning: "Loading mode", example: 'loading="lazy"' },
    ],
    commonMistakes:
      "Do not use <iframe> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <iframe> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "embed",
    fullName: "Embedded External Content",
    category: "Media",
    keywords: "embed,external,media,pdf",
    purpose:
      "Embeds external content handled by the browser or a plugin-like handler.",
    syntax: '<embed src="file.pdf" type="application/pdf">',
    example: '<embed src="file.pdf" type="application/pdf">',
    whenToUse: "Use <embed> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [
      { name: "src", meaning: "Resource URL", example: 'src="file.pdf"' },
      { name: "type", meaning: "MIME type", example: 'type="application/pdf"' },
    ],
    commonMistakes:
      "Do not use <embed> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <embed> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "object",
    fullName: "External Resource Object",
    category: "Media",
    keywords: "object,external,pdf,resource",
    purpose: "Represents an external resource, such as an embedded document.",
    syntax: '<object data="file.pdf" type="application/pdf"></object>',
    example: '<object data="file.pdf" type="application/pdf"></object>',
    whenToUse: "Use <object> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [
      { name: "data", meaning: "Resource URL", example: 'data="file.pdf"' },
      { name: "type", meaning: "MIME type", example: 'type="application/pdf"' },
    ],
    commonMistakes:
      "Do not use <object> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <object> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "canvas",
    fullName: "Scriptable Graphics Canvas",
    category: "Media",
    keywords: "canvas,drawing,graphics,2d",
    purpose: "Provides a drawable bitmap surface controlled by scripts.",
    syntax: '<canvas width="200" height="100"></canvas>',
    example: '<canvas width="200" height="100"></canvas>',
    whenToUse: "Use <canvas> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [
      { name: "width", meaning: "Canvas width", example: 'width="300"' },
      { name: "height", meaning: "Canvas height", example: 'height="150"' },
    ],
    commonMistakes:
      "Do not use <canvas> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <canvas> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "svg",
    fullName: "Scalable Vector Graphics",
    category: "Media",
    keywords: "svg,vector,graphics,icon",
    purpose: "Embeds a scalable vector graphics document or fragment.",
    syntax: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"/></svg>',
    example:
      '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"/></svg>',
    whenToUse: "Use <svg> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [
      {
        name: "viewBox",
        meaning: "SVG coordinate system",
        example: 'viewBox="0 0 100 100"',
      },
      { name: "width", meaning: "Rendered width", example: 'width="100"' },
      { name: "height", meaning: "Rendered height", example: 'height="100"' },
    ],
    commonMistakes:
      "Do not use <svg> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <svg> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "math",
    fullName: "MathML Container",
    category: "Media",
    keywords: "math,mathml,equation",
    purpose: "Embeds MathML markup for mathematical notation.",
    syntax: "<math><mi>x</mi><mo>=</mo><mn>2</mn></math>",
    example: "<math><mi>x</mi><mo>=</mo><mn>2</mn></math>",
    whenToUse: "Use <math> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate media context.",
    attributes: [
      { name: "display", meaning: "Display mode", example: 'display="block"' },
    ],
    commonMistakes:
      "Do not use <math> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <math> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["figure", "figcaption", "img", "picture"],
  },
  {
    tag: "table",
    fullName: "Table",
    category: "Tables",
    keywords: "table,tabular,data,grid",
    purpose: "Represents data arranged in rows and columns.",
    syntax: "<table><tr><td>A</td></tr></table>",
    example: "<table><tr><td>A</td></tr></table>",
    whenToUse: "Use <table> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate tables context.",
    attributes: [
      { name: "class", meaning: "CSS class", example: 'class="data-table"' },
    ],
    commonMistakes:
      "Do not use <table> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <table> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["caption", "thead", "tbody", "tfoot"],
  },
  {
    tag: "caption",
    fullName: "Table Caption",
    category: "Tables",
    keywords: "table,caption,title",
    purpose: "Provides a title or caption for a table.",
    syntax: "<table><caption>Scores</caption></table>",
    example: "<table><caption>Scores</caption></table>",
    whenToUse: "Use <caption> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate tables context.",
    attributes: [
      { name: "class", meaning: "CSS class", example: 'class="caption"' },
    ],
    commonMistakes:
      "Do not use <caption> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <caption> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["table", "thead", "tbody", "tfoot"],
  },
  {
    tag: "thead",
    fullName: "Table Head",
    category: "Tables",
    keywords: "table,header,thead",
    purpose: "Groups header rows in a table.",
    syntax: "<thead><tr><th>Name</th></tr></thead>",
    example: "<thead><tr><th>Name</th></tr></thead>",
    whenToUse: "Use <thead> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate tables context.",
    attributes: [],
    commonMistakes:
      "Do not use <thead> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <thead> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["table", "caption", "tbody", "tfoot"],
  },
  {
    tag: "tbody",
    fullName: "Table Body",
    category: "Tables",
    keywords: "table,body,rows",
    purpose: "Groups the main data rows in a table.",
    syntax: "<tbody><tr><td>Ana</td></tr></tbody>",
    example: "<tbody><tr><td>Ana</td></tr></tbody>",
    whenToUse: "Use <tbody> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate tables context.",
    attributes: [],
    commonMistakes:
      "Do not use <tbody> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <tbody> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["table", "caption", "thead", "tfoot"],
  },
  {
    tag: "tfoot",
    fullName: "Table Foot",
    category: "Tables",
    keywords: "table,footer,summary",
    purpose: "Groups footer or summary rows in a table.",
    syntax: "<tfoot><tr><td>Total</td></tr></tfoot>",
    example: "<tfoot><tr><td>Total</td></tr></tfoot>",
    whenToUse: "Use <tfoot> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate tables context.",
    attributes: [],
    commonMistakes:
      "Do not use <tfoot> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <tfoot> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["table", "caption", "thead", "tbody"],
  },
  {
    tag: "tr",
    fullName: "Table Row",
    category: "Tables",
    keywords: "table,row,tr",
    purpose: "Defines a row in a table.",
    syntax: "<tr><td>A</td><td>B</td></tr>",
    example: "<tr><td>A</td><td>B</td></tr>",
    whenToUse: "Use <tr> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate tables context.",
    attributes: [],
    commonMistakes:
      "Do not use <tr> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <tr> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["table", "caption", "thead", "tbody"],
  },
  {
    tag: "th",
    fullName: "Table Header Cell",
    category: "Tables",
    keywords: "table,header,th,scope",
    purpose: "Defines a header cell that labels table data.",
    syntax: '<th scope="col">Name</th>',
    example: '<th scope="col">Name</th>',
    whenToUse: "Use <th> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate tables context.",
    attributes: [
      { name: "scope", meaning: "Header scope", example: 'scope="col"' },
      { name: "colspan", meaning: "Columns spanned", example: 'colspan="2"' },
      { name: "rowspan", meaning: "Rows spanned", example: 'rowspan="2"' },
    ],
    commonMistakes:
      "Do not use <th> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <th> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["table", "caption", "thead", "tbody"],
  },
  {
    tag: "td",
    fullName: "Table Data Cell",
    category: "Tables",
    keywords: "table,data,cell,td",
    purpose: "Defines a standard data cell in a table.",
    syntax: "<td>Ravi</td>",
    example: "<td>Ravi</td>",
    whenToUse: "Use <td> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate tables context.",
    attributes: [
      { name: "colspan", meaning: "Columns spanned", example: 'colspan="2"' },
      { name: "rowspan", meaning: "Rows spanned", example: 'rowspan="2"' },
    ],
    commonMistakes:
      "Do not use <td> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <td> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["table", "caption", "thead", "tbody"],
  },
  {
    tag: "colgroup",
    fullName: "Column Group",
    category: "Tables",
    keywords: "table,column,group,colgroup",
    purpose: "Groups one or more table columns for shared properties.",
    syntax: '<colgroup><col span="2"></colgroup>',
    example: '<colgroup><col span="2"></colgroup>',
    whenToUse: "Use <colgroup> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate tables context.",
    attributes: [
      { name: "span", meaning: "Number of columns", example: 'span="2"' },
    ],
    commonMistakes:
      "Do not use <colgroup> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <colgroup> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["table", "caption", "thead", "tbody"],
  },
  {
    tag: "col",
    fullName: "Table Column",
    category: "Tables",
    keywords: "table,column,col",
    purpose: "Defines properties for one or more table columns.",
    syntax: '<col span="2">',
    example: '<col span="2">',
    whenToUse: "Use <col> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate tables context.",
    attributes: [
      { name: "span", meaning: "Number of columns", example: 'span="2"' },
    ],
    commonMistakes:
      "Do not use <col> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <col> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["table", "caption", "thead", "tbody"],
  },
  {
    tag: "form",
    fullName: "Form",
    category: "Forms",
    keywords: "form,input,submit,data",
    purpose: "Represents a user-submittable form.",
    syntax: '<form action="/submit" method="post">...</form>',
    example: '<form action="/submit" method="post">...</form>',
    whenToUse: "Use <form> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      {
        name: "action",
        meaning: "Submission URL",
        example: 'action="/submit"',
      },
      { name: "method", meaning: "HTTP method", example: 'method="post"' },
      {
        name: "autocomplete",
        meaning: "Autocomplete hint",
        example: 'autocomplete="on"',
      },
    ],
    commonMistakes:
      "Do not use <form> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <form> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["label", "input", "button", "select"],
  },
  {
    tag: "label",
    fullName: "Form Label",
    category: "Forms",
    keywords: "label,form,accessibility",
    purpose: "Provides a caption for a form control.",
    syntax: '<label for="email">Email</label>',
    example: '<label for="email">Email</label>',
    whenToUse: "Use <label> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "for", meaning: "Associated control id", example: 'for="email"' },
    ],
    commonMistakes:
      "Do not use <label> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <label> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "input", "button", "select"],
  },
  {
    tag: "input",
    fullName: "Input Control",
    category: "Forms",
    keywords: "input,form,field,text",
    purpose: "Creates an interactive form control.",
    syntax: '<input type="text" name="name">',
    example: '<input type="text" name="name">',
    whenToUse: "Use <input> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "type", meaning: "Input type", example: 'type="email"' },
      { name: "name", meaning: "Field name", example: 'name="email"' },
      { name: "id", meaning: "Control id", example: 'id="email"' },
      { name: "required", meaning: "Requires a value", example: "required" },
    ],
    commonMistakes:
      "Do not use <input> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <input> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "button", "select"],
  },
  {
    tag: "button",
    fullName: "Button",
    category: "Forms",
    keywords: "button,click,action,form",
    purpose: "Creates a clickable button.",
    syntax: '<button type="button">Save</button>',
    example: '<button type="button">Save</button>',
    whenToUse: "Use <button> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "type", meaning: "Button behavior", example: 'type="button"' },
      { name: "disabled", meaning: "Disables button", example: "disabled" },
    ],
    commonMistakes:
      "Do not use <button> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <button> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "input", "select"],
  },
  {
    tag: "select",
    fullName: "Select Control",
    category: "Forms",
    keywords: "select,dropdown,form,choice",
    purpose: "Creates a control for choosing one or more options.",
    syntax: "<select><option>HTML</option></select>",
    example: "<select><option>HTML</option></select>",
    whenToUse: "Use <select> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "name", meaning: "Field name", example: 'name="language"' },
      {
        name: "multiple",
        meaning: "Allows multiple choices",
        example: "multiple",
      },
      { name: "required", meaning: "Requires selection", example: "required" },
    ],
    commonMistakes:
      "Do not use <select> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <select> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "input", "button"],
  },
  {
    tag: "option",
    fullName: "Option",
    category: "Forms",
    keywords: "option,select,choice,form",
    purpose: "Defines one choice inside a select, optgroup, or datalist.",
    syntax: '<option value="html">HTML</option>',
    example: '<option value="html">HTML</option>',
    whenToUse: "Use <option> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "value", meaning: "Submitted value", example: 'value="html"' },
      { name: "selected", meaning: "Initially selected", example: "selected" },
      { name: "disabled", meaning: "Disables choice", example: "disabled" },
    ],
    commonMistakes:
      "Do not use <option> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <option> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "input", "button"],
  },
  {
    tag: "optgroup",
    fullName: "Option Group",
    category: "Forms",
    keywords: "optgroup,select,group,options",
    purpose: "Groups related options inside a select control.",
    syntax: '<optgroup label="Languages"><option>HTML</option></optgroup>',
    example: '<optgroup label="Languages"><option>HTML</option></optgroup>',
    whenToUse: "Use <optgroup> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "label", meaning: "Group label", example: 'label="Languages"' },
      { name: "disabled", meaning: "Disables group", example: "disabled" },
    ],
    commonMistakes:
      "Do not use <optgroup> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <optgroup> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "input", "button"],
  },
  {
    tag: "textarea",
    fullName: "Multiline Text Input",
    category: "Forms",
    keywords: "textarea,multiline,form,comments",
    purpose: "Creates a multi-line text input control.",
    syntax: '<textarea name="message"></textarea>',
    example: '<textarea name="message"></textarea>',
    whenToUse: "Use <textarea> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "name", meaning: "Field name", example: 'name="message"' },
      { name: "rows", meaning: "Visible rows", example: 'rows="5"' },
      { name: "cols", meaning: "Visible columns", example: 'cols="40"' },
      { name: "required", meaning: "Requires a value", example: "required" },
    ],
    commonMistakes:
      "Do not use <textarea> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <textarea> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "input", "button"],
  },
  {
    tag: "datalist",
    fullName: "Input Suggestions",
    category: "Forms",
    keywords: "datalist,suggestions,input,form",
    purpose: "Provides a list of suggested values for an input.",
    syntax:
      '<input list="languages"><datalist id="languages"><option value="HTML"></datalist>',
    example:
      '<input list="languages"><datalist id="languages"><option value="HTML"></datalist>',
    whenToUse: "Use <datalist> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "id", meaning: "List identifier", example: 'id="languages"' },
    ],
    commonMistakes:
      "Do not use <datalist> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <datalist> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "input", "button"],
  },
  {
    tag: "output",
    fullName: "Calculation Output",
    category: "Forms",
    keywords: "output,form,calculation,result",
    purpose: "Represents the result of a calculation or user action.",
    syntax: "<output>42</output>",
    example: "<output>42</output>",
    whenToUse: "Use <output> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "for", meaning: "Controls used", example: 'for="a b"' },
      { name: "name", meaning: "Output name", example: 'name="result"' },
    ],
    commonMistakes:
      "Do not use <output> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <output> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "input", "button"],
  },
  {
    tag: "progress",
    fullName: "Task Progress",
    category: "Forms",
    keywords: "progress,loading,completion",
    purpose: "Shows the completion progress of a task.",
    syntax: '<progress value="60" max="100">60%</progress>',
    example: '<progress value="60" max="100">60%</progress>',
    whenToUse: "Use <progress> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "value", meaning: "Current progress", example: 'value="60"' },
      { name: "max", meaning: "Maximum progress", example: 'max="100"' },
    ],
    commonMistakes:
      "Do not use <progress> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <progress> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "input", "button"],
  },
  {
    tag: "meter",
    fullName: "Scalar Measurement",
    category: "Forms",
    keywords: "meter,measurement,range,value",
    purpose: "Represents a scalar measurement within a known range.",
    syntax: '<meter min="0" max="100" value="75">75%</meter>',
    example: '<meter min="0" max="100" value="75">75%</meter>',
    whenToUse: "Use <meter> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "min", meaning: "Minimum", example: 'min="0"' },
      { name: "max", meaning: "Maximum", example: 'max="100"' },
      { name: "value", meaning: "Current value", example: 'value="75"' },
    ],
    commonMistakes:
      "Do not use <meter> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <meter> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "input", "button"],
  },
  {
    tag: "fieldset",
    fullName: "Form Control Group",
    category: "Forms",
    keywords: "fieldset,form,group",
    purpose: "Groups related form controls.",
    syntax: "<fieldset><legend>Account</legend>...</fieldset>",
    example: "<fieldset><legend>Account</legend>...</fieldset>",
    whenToUse: "Use <fieldset> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [
      { name: "disabled", meaning: "Disables controls", example: "disabled" },
      { name: "name", meaning: "Group name", example: 'name="account"' },
    ],
    commonMistakes:
      "Do not use <fieldset> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <fieldset> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "input", "button"],
  },
  {
    tag: "legend",
    fullName: "Fieldset Caption",
    category: "Forms",
    keywords: "legend,fieldset,form,label",
    purpose: "Provides a caption for a fieldset.",
    syntax: "<fieldset><legend>Account</legend></fieldset>",
    example: "<fieldset><legend>Account</legend></fieldset>",
    whenToUse: "Use <legend> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate forms context.",
    attributes: [],
    commonMistakes:
      "Do not use <legend> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <legend> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["form", "label", "input", "button"],
  },
  {
    tag: "details",
    fullName: "Disclosure Widget",
    category: "Interactive",
    keywords: "details,disclosure,expand,collapse",
    purpose:
      "Creates a disclosure control that can show or hide additional content.",
    syntax: "<details><summary>More</summary><p>Details</p></details>",
    example: "<details><summary>More</summary><p>Details</p></details>",
    whenToUse: "Use <details> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate interactive context.",
    attributes: [
      { name: "open", meaning: "Initially expanded", example: "open" },
    ],
    commonMistakes:
      "Do not use <details> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <details> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["summary", "dialog", "template", "slot"],
  },
  {
    tag: "summary",
    fullName: "Disclosure Summary",
    category: "Interactive",
    keywords: "summary,details,disclosure",
    purpose: "Provides the visible summary or label for a details element.",
    syntax: "<details><summary>More</summary></details>",
    example: "<details><summary>More</summary></details>",
    whenToUse: "Use <summary> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate interactive context.",
    attributes: [],
    commonMistakes:
      "Do not use <summary> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <summary> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["details", "dialog", "template", "slot"],
  },
  {
    tag: "dialog",
    fullName: "Dialog",
    category: "Interactive",
    keywords: "dialog,modal,popup,interactive",
    purpose: "Represents a dialog or interactive modal-like component.",
    syntax: "<dialog open>Hello</dialog>",
    example: "<dialog open>Hello</dialog>",
    whenToUse: "Use <dialog> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate interactive context.",
    attributes: [{ name: "open", meaning: "Initially shown", example: "open" }],
    commonMistakes:
      "Do not use <dialog> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <dialog> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["details", "summary", "template", "slot"],
  },
  {
    tag: "template",
    fullName: "HTML Template",
    category: "Interactive",
    keywords: "template,clone,web components",
    purpose: "Holds inert HTML that can be cloned and used later.",
    syntax: "<template><p>Reusable content</p></template>",
    example: "<template><p>Reusable content</p></template>",
    whenToUse: "Use <template> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate interactive context.",
    attributes: [],
    commonMistakes:
      "Do not use <template> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <template> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["details", "summary", "dialog", "slot"],
  },
  {
    tag: "slot",
    fullName: "Web Component Slot",
    category: "Interactive",
    keywords: "slot,web components,shadow dom",
    purpose:
      "Defines a placeholder for user-provided content in a web component.",
    syntax: '<slot name="title"></slot>',
    example: '<slot name="title"></slot>',
    whenToUse: "Use <slot> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate interactive context.",
    attributes: [
      { name: "name", meaning: "Slot name", example: 'name="title"' },
    ],
    commonMistakes:
      "Do not use <slot> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <slot> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["details", "summary", "dialog", "template"],
  },
  {
    tag: "script",
    fullName: "Script",
    category: "Interactive",
    keywords: "script,javascript,code",
    purpose: "Embeds or references executable script code.",
    syntax: '<script src="app.js"></script>',
    example: '<script src="app.js"></script>',
    whenToUse: "Use <script> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate interactive context.",
    attributes: [
      { name: "src", meaning: "Script URL", example: 'src="app.js"' },
      { name: "defer", meaning: "Defers execution", example: "defer" },
      { name: "type", meaning: "Script type", example: 'type="module"' },
    ],
    commonMistakes:
      "Do not use <script> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <script> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["details", "summary", "dialog", "template"],
  },
  {
    tag: "noscript",
    fullName: "No-Script Fallback",
    category: "Interactive",
    keywords: "noscript,javascript,fallback",
    purpose:
      "Provides content for users or environments where scripting is unavailable.",
    syntax: "<noscript>Please enable JavaScript.</noscript>",
    example: "<noscript>Please enable JavaScript.</noscript>",
    whenToUse: "Use <noscript> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate interactive context.",
    attributes: [],
    commonMistakes:
      "Do not use <noscript> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <noscript> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["details", "summary", "dialog", "template"],
  },
  {
    tag: "fencedframe",
    fullName: "Fenced Frame",
    category: "Interactive",
    keywords: "fencedframe,privacy,embedded,experimental",
    purpose:
      "Experimental privacy-focused embedded frame technology for protected cross-site content.",
    syntax: '<fencedframe title="Example"></fencedframe>',
    example: '<fencedframe title="Example"></fencedframe>',
    whenToUse: "Use <fencedframe> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate interactive context.",
    attributes: [
      {
        name: "title",
        meaning: "Accessible title",
        example: 'title="Embedded content"',
      },
    ],
    commonMistakes:
      "Do not use <fencedframe> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <fencedframe> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["details", "summary", "dialog", "template"],
  },
  {
    tag: "selectedcontent",
    fullName: "Selected Content",
    category: "Interactive",
    keywords: "selectedcontent,select,customizable select,experimental",
    purpose:
      "Represents the selected option content in customizable select controls.",
    syntax:
      "<select><button><selectedcontent></selectedcontent></button><option>HTML</option></select>",
    example:
      "<select><button><selectedcontent></selectedcontent></button><option>HTML</option></select>",
    whenToUse: "Use <selectedcontent> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate interactive context.",
    attributes: [],
    commonMistakes:
      "Do not use <selectedcontent> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <selectedcontent> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["details", "summary", "dialog", "template"],
  },
  {
    tag: "geolocation",
    fullName: "Geolocation",
    category: "Interactive",
    keywords: "geolocation,location,experimental,requested",
    purpose:
      "Not a standard HTML element; this name is included here because it was requested in the project list.",
    syntax: "<geolocation></geolocation>",
    example: "<geolocation></geolocation>",
    whenToUse: "Use <geolocation> when you need its specific HTML meaning.",
    whereToUse: "Use it in the appropriate interactive context.",
    attributes: [],
    commonMistakes:
      "Do not use <geolocation> only for visual styling; use it for its intended meaning.",
    bestPractices:
      "Keep <geolocation> semantic, accessible, and valid for the context where it is used.",
    relatedTags: ["details", "summary", "dialog", "template"],
  },
];
const S = {
  fav: "hte-favorites",
  learned: "hte-learned",
  recent: "hte-recent",
  theme: "hte-theme",
};
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const get = (k) => JSON.parse(localStorage.getItem(k) || "[]"),
  set = (k, v) => localStorage.setItem(k, JSON.stringify(v));
function toast(m) {
  const e = $("#toast");
  if (!e) return;
  e.textContent = m;
  e.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => e.classList.remove("show"), 2200);
}
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const a = document.createElement("textarea");
    a.value = text;
    a.style.position = "fixed";
    a.style.opacity = "0";
    document.body.appendChild(a);
    a.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {}
    a.remove();
    return ok;
  }
}
function loadTheme() {
  const x =
    localStorage.getItem(S.theme) ||
    (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = x;
  const b = $("#themeToggle");
  if (b) b.textContent = x === "dark" ? "☀" : "☾";
}
function toggleTheme() {
  const x =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = x;
  localStorage.setItem(S.theme, x);
  $("#themeToggle").textContent = x === "dark" ? "☀" : "☾";
  toast("Theme changed to " + x + " mode");
}
function nav() {
  const m = $("#menuToggle"),
    n = $("#mainNav");
  m?.addEventListener("click", () => {
    let o = n.classList.toggle("open");
    m.setAttribute("aria-expanded", o);
  });
  $("#themeToggle")?.addEventListener("click", toggleTheme);
  $$("#mainNav a").forEach(
    (a) => (a.onclick = () => n?.classList.remove("open")),
  );
}
function fav(t) {
  return get(S.fav).includes(t);
}
function learned(t) {
  return get(S.learned).includes(t);
}
function toggleFav(t) {
  let a = get(S.fav);
  let add = !a.includes(t);
  a = add ? [...a, t] : a.filter((x) => x !== t);
  set(S.fav, a);
  toast(add ? "⭐ Favorite added" : "☆ Favorite removed");
  dashboard();
  homeLists();
  renderTags();
}
function toggleLearned(t) {
  let a = get(S.learned);
  let yes = !a.includes(t);
  a = yes ? [...a, t] : a.filter((x) => x !== t);
  set(S.learned, a);
  toast(yes ? "✓ Tag marked learned" : "Tag unmarked");
  dashboard();
  const b = $("#learnedBtn");
  if (b) b.textContent = yes ? "✓ Learned" : "✓ Mark as Learned";
}
function recent(t) {
  let a = get(S.recent).filter((x) => x !== t);
  a.unshift(t);
  set(S.recent, a.slice(0, 10));
}
function findTag(t) {
  return TAGS.find((x) => x.tag === t);
}
function esc(s) {
  return String(s).replace(
    /[&<>'"]/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        c
      ],
  );
}
function tagDescription(t) {
  return t.purpose || t.description || "No description available.";
}
let query = "",
  category = "All",
  showAllTags = false;
function searchTags(q = query, c = category) {
  q = q.trim().toLowerCase();
  return TAGS.map((t, i) => {
    let h = [
      t.tag,
      t.fullName,
      t.keywords,
      t.purpose,
      t.syntax,
      t.whenToUse,
      t.whereToUse,
      t.attributes.map((a) => a.name).join(" "),
      t.commonMistakes,
      t.bestPractices,
    ]
      .join(" ")
      .toLowerCase();
    let score = q
      ? (t.tag === q ? 100 : 0) +
        (t.tag.startsWith(q) ? 40 : 0) +
        (t.fullName.toLowerCase().includes(q) ? 25 : 0) +
        (h.includes(q) ? 10 : 0)
      : 0;
    return { t, score, i };
  })
    .filter((x) => (c === "All" || x.t.category === c) && (!q || x.score))
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .map((x) => x.t);
}
function sortTags(a) {
  let m = $("#sortSelect")?.value || "recommended",
    x = [...a];
  if (m === "az") x.sort((a, b) => a.tag.localeCompare(b.tag));
  if (m === "za") x.sort((a, b) => b.tag.localeCompare(a.tag));
  if (m === "category")
    x.sort(
      (a, b) =>
        a.category.localeCompare(b.category) || a.tag.localeCompare(b.tag),
    );
  return x;
}
function card(t) {
  return `<article class="tag-card"><button class="fav ${fav(t.tag) ? "is-fav" : ""}" data-fav="${t.tag}" aria-label="Favorite ${t.tag}">${fav(t.tag) ? "★" : "☆"}</button><a href="tag.html?tag=${encodeURIComponent(t.tag)}"><code class="tag-badge">&lt;${esc(t.tag)}&gt;</code><span> ${esc(t.category)}</span><h3>${esc(t.fullName)}</h3><p>${esc(tagDescription(t))}</p><div class="card-footer"><span class="learn-state">${learned(t.tag) ? "✓ Learned" : "Not learned"}</span><span>View →</span></div></a></article>`;
}
function renderTags() {
  let g = $("#tagGrid");
  if (!g) return;
  let a = sortTags(searchTags());
  let filtered = category !== "All" || !!query;
  let visible = !showAllTags && !filtered ? a.slice(0, 8) : a;
  g.innerHTML = visible.map(card).join("");
  $("#tagsTitle").textContent =
    category === "All" ? "All HTML Tags" : category + " Tags";
  $("#activeFilters").innerHTML =
    (category !== "All" ? `<span>Category: ${esc(category)}</span>` : "") +
    (query ? `<span>Search: ${esc(query)}</span>` : "");
  $("#emptyState")?.classList.toggle("hidden", a.length > 0);
  if (!filtered && a.length > 8)
    g.insertAdjacentHTML(
      "beforeend",
      `<button class="btn secondary more-tags-grid" id="moreTags" type="button">${showAllTags ? "Show Less ↑" : "Show More Tags ↓"}</button>`,
    );
  $$("[data-fav]").forEach(
    (b) =>
      (b.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFav(b.dataset.fav);
      }),
  );
}
function categories() {
  let cs = [
    "Structure",
    "Text",
    "Links",
    "Media",
    "Lists",
    "Tables",
    "Forms",
    "Formatting",
    "Semantic",
    "Interactive",
  ];
  let g = $("#categoryGrid");
  if (!g) return;
  g.innerHTML = cs
    .map(
      (c) =>
        `<button class="category-card" data-cat="${c}"><strong>${c}</strong><span>${TAGS.filter((t) => t.category === c).length} tags</span></button>`,
    )
    .join("");
  $$("[data-cat]").forEach(
    (b) =>
      (b.onclick = () => {
        category = b.dataset.cat;
        renderTags();
        location.hash = "tags";
      }),
  );
}
function dashboard() {
  let l = get(S.learned),
    f = get(S.fav),
    r = get(S.recent),
    p = Math.round((l.length / TAGS.length) * 100);
  if ($("#totalCount")) $("#totalCount").textContent = TAGS.length;
  if ($("#learnedCount")) $("#learnedCount").textContent = l.length;
  if ($("#progressPercent")) $("#progressPercent").textContent = p + "%";
  if ($("#favoriteCount")) $("#favoriteCount").textContent = f.length;
  if ($("#recentCount")) $("#recentCount").textContent = r.length;
  if ($("#progressBar")) $("#progressBar").style.width = p + "%";
}
function mini(t) {
  return `<a class="mini-card" href="tag.html?tag=${t.tag}"><code>&lt;${t.tag}&gt;</code><small>${esc(t.fullName)}</small></a>`;
}
function homeLists() {
  let r = get(S.recent).map(findTag).filter(Boolean),
    f = get(S.fav).map(findTag).filter(Boolean);
  if ($("#recentGrid"))
    $("#recentGrid").innerHTML = r.length
      ? r.map(mini).join("")
      : '<p class="empty-note">No tags viewed yet.</p>';
  if ($("#favoriteGrid")) $("#favoriteGrid").innerHTML = f.map(mini).join("");
  $("#favoriteEmpty")?.classList.toggle("hidden", f.length > 0);
}
function suggestions(q) {
  let b = $("#suggestions");
  if (!b) return;
  if (!q.trim()) {
    b.classList.add("hidden");
    b.innerHTML = "";
    return;
  }
  let a = searchTags(q).slice(0, 6);
  b.classList.remove("hidden");
  b.innerHTML = a.length
    ? a
        .map(
          (t) =>
            `<a class="suggestion" href="tag.html?tag=${t.tag}"><code class="suggestion-code">&lt;${t.tag}&gt;</code><div><strong>${esc(t.fullName)}</strong><small>${esc(tagDescription(t))}</small></div></a>`,
        )
        .join("")
    : '<div class="suggestion"><strong>No results found</strong></div>';
}
function searchSetup() {
  let i = $("#smartSearch");
  if (!i) return;
  i.oninput = () => {
    query = i.value;
    suggestions(query);
    renderTags();
  };
  i.onkeydown = (e) => {
    if (e.key === "Enter") {
      let t = searchTags(i.value)[0];
      if (t) location.href = "tag.html?tag=" + t.tag;
    }
    if (e.key === "Escape") {
      $("#suggestions").classList.add("hidden");
      i.blur();
    }
  };
  $("#clearSearch").onclick = () => {
    i.value = "";
    query = "";
    suggestions("");
    renderTags();
    i.focus();
  };
  $$(".hint").forEach(
    (b) =>
      (b.onclick = () => {
        i.value = b.dataset.query;
        i.dispatchEvent(new Event("input"));
        i.focus();
      }),
  );
}
function home() {
  categories();
  renderTags();
  dashboard();
  homeLists();
  searchSetup();
  $("#sortSelect")?.addEventListener("change", renderTags);
  $("#tagGrid")?.addEventListener("click", (e) => {
    if (e.target.closest("#moreTags")) {
      showAllTags = !showAllTags;
      renderTags();
    }
  });
  $("#randomTag")?.addEventListener(
    "click",
    () =>
      (location.href =
        "tag.html?tag=" + TAGS[Math.floor(Math.random() * TAGS.length)].tag),
  );
  $("#emptyClear")?.addEventListener("click", () => {
    query = "";
    category = "All";
    showAllTags = false;
    $("#smartSearch").value = "";
    renderTags();
  });
  $("#clearRecent")?.addEventListener("click", () => {
    set(S.recent, []);
    dashboard();
    homeLists();
    toast("Recently viewed cleared");
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-shell"))
      $("#suggestions")?.classList.add("hidden");
  });
}
function formatHtmlExample(code) {
  code = (code || "").trim();
  if (!code) return "";

  // Educational HTML formatter: opening tag, content, and closing tag appear on separate lines.
  const voidTags = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]);
  const tokens = code
    .replace(/>\s*</g, "><")
    .split(/(<[^>]+>)/g)
    .filter(Boolean);
  const lines = [];
  let indent = 0;

  tokens.forEach((token) => {
    token = token.trim();
    if (!token) return;

    if (token.startsWith("</")) {
      indent = Math.max(0, indent - 1);
      lines.push("  ".repeat(indent) + token);
    } else if (token.startsWith("<")) {
      lines.push("  ".repeat(indent) + token);
      const match = token.match(/^<\s*([a-z][\w-]*)/i);
      if (
        match &&
        !token.startsWith("<!") &&
        !token.startsWith("<?") &&
        !token.endsWith("/>") &&
        !voidTags.has(match[1].toLowerCase())
      ) {
        indent++;
      }
    } else {
      lines.push("  ".repeat(indent) + token);
    }
  });

  return lines.join("\n");
}

function buildPlaygroundDocument(t) {
  const tag = t.tag.toLowerCase();
  const example = formatHtmlExample(t.example || "");

  // Keep the playground simple: DOCTYPE + html + body. No unnecessary meta/title.
  // The opened tag's own example is placed directly in the document.
  if (tag === "html") {
    return `<!DOCTYPE html>\n<html lang="en">\n  <body>\n    <h1>HTML Document</h1>\n  </body>\n</html>`;
  }

  if (tag === "head") {
    return `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>HTML Example</title>\n  </head>\n  <body>\n    <h1>Head Example</h1>\n  </body>\n</html>`;
  }

  if (["title", "base", "link", "meta", "style"].includes(tag)) {
    return `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    ${example.replace(/\n/g, "\n    ")}\n  </head>\n  <body>\n    <h1>${esc(t.fullName || tag)} Example</h1>\n    <p>This tag is used in the document head, so its effect may not be visible here.</p>\n  </body>\n</html>`;
  }

  if (tag === "body") {
    return `<!DOCTYPE html>\n<html lang="en">\n  <body>\n    <h1>Body Example</h1>\n    <p>This content is inside the &lt;body&gt; element.</p>\n  </body>\n</html>`;
  }

  // All normal content tags use the exact selected tag example inside <body>.
  return `<!DOCTYPE html>\n<html lang="en">\n  <body>\n${example
    .split("\n")
    .map((line) => "    " + line)
    .join("\n")}\n  </body>\n</html>`;
}

function highlightHTML(code) {
  // Syntax highlighter: tokenize raw HTML first, then escape each piece.
  // This avoids leaking helper classes such as "syn-tag" into the displayed code.
  const source = String(code || "");
  const tokenRe =
    /<!--[\s\S]*?-->|<!DOCTYPE[^>]*>|<\/?[A-Za-z][^>]*>|<\/?[^>]*>/gi;
  let html = "",
    last = 0,
    match;

  while ((match = tokenRe.exec(source))) {
    // Plain text between HTML tokens.
    html += esc(source.slice(last, match.index));
    const token = match[0];

    if (/^<!--/.test(token)) {
      html += `<span class="syn-comment">${esc(token)}</span>`;
      last = tokenRe.lastIndex;
      continue;
    }

    if (/^<!DOCTYPE/i.test(token)) {
      html += `<span class="syn-punc">&lt;!</span><span class="syn-tag">DOCTYPE</span><span class="syn-punc">${esc(token.slice(9))}</span>`;
      last = tokenRe.lastIndex;
      continue;
    }

    const parsed = token.match(/^(<\/?)([A-Za-z][\w:-]*)([\s\S]*?)(\/?>)$/);
    if (!parsed) {
      html += esc(token);
      last = tokenRe.lastIndex;
      continue;
    }

    const [, open, name, rawAttrs, close] = parsed;
    let attrs = esc(rawAttrs);

    // Highlight attribute names and values without corrupting escaped HTML.
    attrs = attrs.replace(
      /([A-Za-z_:][\w:.-]*)(\s*=\s*)("[^"]*"|'[^']*'|[^\s>]+)/g,
      '<span class="syn-attr">$1</span>$2<span class="syn-value">$3</span>',
    );

    html += `<span class="syn-punc">${esc(open)}</span><span class="syn-tag">${esc(name)}</span>${attrs}<span class="syn-punc">${esc(close)}</span>`;
    last = tokenRe.lastIndex;
  }

  html += esc(source.slice(last));
  return html;
}

const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
function validateHTML(code) {
  const errors = [],
    stack = [];
  let htmlCount = 0,
    bodyCount = 0;
  const cleaned = String(code)
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<![^>]*>/g, "");
  const re = /<\/?([A-Za-z][\w:-]*)(?:\s[^>]*)?\/?\>/g;
  let m;
  while ((m = re.exec(cleaned))) {
    const raw = m[0],
      name = m[1].toLowerCase(),
      closing = /^<\//.test(raw),
      selfClosing = /\/\s*>$/.test(raw);
    if (name === "html" && !closing) htmlCount++;
    if (name === "body" && !closing) bodyCount++;
    if (closing) {
      if (VOID_TAGS.has(name))
        errors.push(
          `&lt;${name}&gt; is a void element and should not have a closing tag.`,
        );
      else if (!stack.length)
        errors.push(`Unexpected closing tag &lt;/${name}&gt;.`);
      else {
        const top = stack.pop();
        if (top !== name) {
          errors.push(
            `Mismatched closing tag: expected &lt;/${top}&gt; but found &lt;/${name}&gt;.`,
          );
          const idx = stack.lastIndexOf(name);
          if (idx >= 0) stack.splice(idx);
        }
      }
    } else if (!VOID_TAGS.has(name) && !selfClosing) stack.push(name);
  }
  while (stack.length)
    errors.push(`Missing closing tag for &lt;${stack.pop()}&gt;.`);
  if (htmlCount > 1)
    errors.push("Only one &lt;html&gt; element should be used.");
  if (bodyCount > 1)
    errors.push("Only one &lt;body&gt; element should be used.");
  return [...new Set(errors)];
}
function updateValidation() {
  const e = $("#playEditor"),
    box = $("#htmlValidation");
  if (!e || !box) return;
  const errors = validateHTML(e.value);
  box.className = errors.length
    ? "html-validation has-errors"
    : "html-validation valid";
  box.innerHTML = errors.length
    ? `<strong>⚠ HTML issues found</strong><ul>${errors.map((x) => `<li>${x}</li>`).join("")}</ul>`
    : "<strong>✓ HTML looks valid</strong><span>No structural errors detected.</span>";
}
function playground(t) {
  const documentCode = buildPlaygroundDocument(t);
  return `<section class="doc-card"><h2>Try It Yourself</h2><p class="playground-help">Edit the complete HTML document below, then click Run to see the rendered result.</p><div class="playground-grid"><div class="editor-wrap"><div class="editor-head">HTML Editor · complete document</div><textarea id="playEditor" class="editor" spellcheck="false">${esc(documentCode)}</textarea><div id="htmlValidation" class="html-validation" aria-live="polite"></div></div><div class="preview-wrap"><div class="preview-head">Live Preview</div><iframe id="playPreview" class="preview" sandbox title="Safe HTML preview"></iframe></div></div><div class="playground-actions"><button id="runCode" class="btn primary" type="button">▶ Run</button><button id="resetCode" class="btn secondary" type="button">↻ Reset</button><button id="copyPlay" class="btn secondary" type="button">Copy</button><button id="clearPlay" class="btn ghost" type="button">Clear</button><button id="programiz" class="btn ghost" type="button">Try It on Programiz ↗</button></div><p class="empty-note">JavaScript is blocked inside the preview for safety.</p></section>`;
}
function run() {
  const e = $("#playEditor"),
    f = $("#playPreview");
  if (!e || !f) return;
  updateValidation();
  let html = e.value.trim();
  if (!html) {
    f.srcdoc =
      '<!doctype html><html><body style="font-family:system-ui;padding:24px;color:#64748b">Nothing to preview. Enter some HTML code.</body></html>';
    return;
  }
  // Keep the editor's full structure and block script execution in the safe preview.
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  f.srcdoc = html;
}

function tagPage() {
  let n = new URLSearchParams(location.search).get("tag"),
    i = TAGS.findIndex((t) => t.tag === n),
    t = TAGS[i];
  if (!t) return;
  recent(t.tag);
  $("#crumbTag").textContent = "<" + t.tag + ">";
  document.title = "<" + t.tag + "> " + t.fullName + " — HTML Tag Explorer";
  let prev = TAGS[(i - 1 + TAGS.length) % TAGS.length],
    next = TAGS[(i + 1) % TAGS.length];
  let attrs = t.attributes.length
    ? `<table class="attr-table"><thead><tr><th>Attribute</th><th>Meaning</th><th>Example</th></tr></thead><tbody>${t.attributes.map((a) => `<tr><td><code>${esc(a.name)}</code></td><td>${esc(a.meaning)}</td><td><code>${esc(a.example)}</code></td></tr>`).join("")}</tbody></table>`
    : "<p>No common attributes apply to this tag in this reference.</p>";
  $("#tagContent").innerHTML =
    `<div class="tag-header"><div><h1 class="tag-title">&lt;${esc(t.tag)}&gt;</h1><div class="tag-full">${esc(t.fullName)} · ${esc(t.category)}</div><p>${esc(tagDescription(t))}</p><div class="tag-actions"><button id="copyMain" class="btn primary">Copy Code</button><button id="learnedBtn" class="btn secondary">${learned(t.tag) ? "✓ Learned" : "✓ Mark as Learned"}</button><button id="favTag" class="btn ghost">${fav(t.tag) ? "★" : "☆"} Favorite</button><a class="btn ghost" href="index.html#tags">← All Tags</a></div></div><aside class="tag-side"><strong>Purpose</strong><p>${esc(t.purpose)}</p><strong>When to use</strong><p>${esc(t.whenToUse)}</p><strong>Where to use</strong><p>${esc(t.whereToUse)}</p></aside></div><div class="doc-grid"><article class="doc-card"><h2>Description</h2><p>${esc(tagDescription(t))}</p><h2>Purpose</h2><p>${esc(t.purpose)}</p></article><article class="doc-card"><h2>Syntax</h2><div class="code-block"><button class="copy-code" id="copySyntax">Copy</button><pre>${highlightHTML(formatHtmlExample(t.syntax))}</pre></div><h2>Live Example</h2><div class="live-example"><pre>${highlightHTML(formatHtmlExample(t.example))}</pre></div></article><article class="doc-card"><h2>Where to use</h2><p>${esc(t.whereToUse)}</p><h2>When to use</h2><p>${esc(t.whenToUse)}</p></article><article class="doc-card"><h2>Common Mistakes</h2><p>⚠️ ${esc(t.commonMistakes)}</p><h2>Best Practices</h2><p>✓ ${esc(t.bestPractices)}</p></article></div><article class="doc-card" style="margin-top:15px"><h2>Common Attributes</h2>${attrs}</article><div style="margin-top:15px">${playground(t)}</div><section class="doc-card" style="margin-top:15px"><h2>Related Tags</h2><div class="related-grid">${t.relatedTags.map((x) => `<a class="related-card" href="tag.html?tag=${x}"><code>&lt;${x}&gt;</code><small>${esc(findTag(x)?.fullName || "Related tag")}</small></a>`).join("")}</div></section><div class="tag-nav"><a href="tag.html?tag=${prev.tag}">← Previous: &lt;${prev.tag}&gt;</a><a href="tag.html?tag=${next.tag}">Next: &lt;${next.tag}&gt; →</a></div>`;
  $("#copyMain").onclick = async () =>
    toast((await copyText(t.example)) ? "✓ Copied" : "Copy failed");
  $("#copySyntax").onclick = async () =>
    toast(
      (await copyText(formatHtmlExample(t.syntax)))
        ? "✓ Copied"
        : "Copy failed",
    );
  $("#learnedBtn").onclick = () => toggleLearned(t.tag);
  $("#favTag").onclick = () => {
    toggleFav(t.tag);
    $("#favTag").textContent = (fav(t.tag) ? "★" : "☆") + " Favorite";
  };
  $("#runCode").onclick = run;
  $("#playEditor").oninput = updateValidation;
  $("#resetCode").onclick = () => {
    $("#playEditor").value = buildPlaygroundDocument(t);
    run();
  };
  $("#clearPlay").onclick = () => {
    $("#playEditor").value = "";
    run();
  };
  $("#copyPlay").onclick = async () =>
    toast(
      (await copyText($("#playEditor").value))
        ? "✓ Code copied"
        : "Copy failed",
    );
  $("#programiz").onclick = async () => {
    let doc = $("#playEditor").value;
    let ok = await copyText(doc);
    if (ok) {
      toast("Complete HTML copied ✓");
      setTimeout(
        () =>
          window.open(
            "https://www.programiz.com/html/online-compiler",
            "_blank",
            "noopener",
          ),
        400,
      );
    } else toast("Clipboard failed — copy the displayed code manually.");
  };
  run();
}
const QUIZ = [
  [
    "Which tag creates a hyperlink?",
    "a",
    ["a", "img", "link", "href"],
    "The <a> element creates hyperlinks; href supplies the destination.",
  ],
  [
    "Which tag displays an image?",
    "img",
    ["image", "img", "picture", "src"],
    "The <img> element embeds an image resource.",
  ],
  [
    "Which tag creates a numbered list?",
    "ol",
    ["ul", "li", "ol", "list"],
    "The <ol> element creates an ordered list.",
  ],
  [
    "Which tag defines a table row?",
    "tr",
    ["td", "row", "tr", "th"],
    "The <tr> element defines a table row.",
  ],
  [
    "Which tag creates a form?",
    "form",
    ["input", "form", "fieldset", "submit"],
    "The <form> element represents a user-submittable form.",
  ],
  [
    "Which tag creates the largest heading?",
    "h1",
    ["h6", "heading", "h1", "title"],
    "The <h1> element is the highest-level heading.",
  ],
];
let qi = 0,
  score = 0,
  answered = false;
function quiz() {
  if (!$("#questionArea")) return;
  renderQ();
  $("#nextQuestion").onclick = () => {
    if (!answered) return toast("Choose an answer first.");
    qi++;
    if (qi >= QUIZ.length) return result();
    renderQ();
  };
  $("#restartQuiz").onclick = () => {
    qi = 0;
    score = 0;
    $("#restartQuiz").classList.add("hidden");
    renderQ();
  };
}
function renderQ() {
  let q = QUIZ[qi];
  answered = false;
  $("#quizProgress").textContent = `Question ${qi + 1} of ${QUIZ.length}`;
  $("#quizScore").textContent = "Score: " + score;
  $("#quizBar").style.width = (qi / QUIZ.length) * 100 + "%";
  $("#feedback").classList.add("hidden");
  $("#nextQuestion").classList.remove("hidden");
  $("#questionArea").innerHTML =
    `<h2 class="quiz-question">${q[0]}</h2><div class="answers">${q[2].map((a, i) => `<button class="answer" data-a="${a}">${String.fromCharCode(65 + i)}. &lt;${a}&gt;</button>`).join("")}</div>`;
  $$(".answer").forEach((b) => (b.onclick = () => answer(b, q)));
}
function answer(b, q) {
  if (answered) return;
  answered = true;
  let ok = b.dataset.a === q[1];
  if (ok) score++;
  $$(".answer").forEach((x) => {
    x.disabled = true;
    if (x.dataset.a === q[1]) x.classList.add("correct");
  });
  if (!ok) b.classList.add("wrong");
  $("#quizScore").textContent = "Score: " + score;
  $("#feedback").classList.remove("hidden");
  $("#feedback").innerHTML =
    `<strong>${ok ? "✓ Correct!" : "✕ Not quite."}</strong><br>${esc(q[3])}`;
}
function result() {
  $("#quizBar").style.width = "100%";
  $("#questionArea").innerHTML =
    `<div class="quiz-result"><span class="eyebrow">Quiz complete</span><h2>${score} / ${QUIZ.length}</h2><p>${score === 6 ? "Perfect!" : score >= 4 ? "Great work!" : "Keep practicing with the tag explorer."}</p></div>`;
  $("#nextQuestion").classList.add("hidden");
  $("#feedback").classList.add("hidden");
  $("#restartQuiz").classList.remove("hidden");
}
loadTheme();
nav();
home();
tagPage();
quiz();
document.addEventListener("keydown", (e) => {
  let typing = ["INPUT", "TEXTAREA", "SELECT"].includes(
    document.activeElement?.tagName,
  );
  if (
    (e.key === "/" && !typing) ||
    ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")
  ) {
    e.preventDefault();
    $("#smartSearch")?.focus();
  }
  if (e.key === "Escape") {
    $("#suggestions")?.classList.add("hidden");
    $("#mainNav")?.classList.remove("open");
  }
});
document.addEventListener("scroll", () =>
  $("#backTop")?.classList.toggle("show", scrollY > 450),
);
$("#backTop")?.addEventListener("click", () =>
  scrollTo({ top: 0, behavior: "smooth" }),
);
