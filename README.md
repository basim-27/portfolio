# BASIM. — Digital Experiences & Frontend Development

A cinematic, responsive personal portfolio for **Basim**, a frontend developer in progress at SMIT. The site presents an honest learning journey through thoughtful layout, motion, and accessible frontend craft.

## Live site

Add your deployed URL here after publishing:

`https://your-site-name.netlify.app`

## Highlights

- Cinematic GSAP opening sequence with a skip control
- Smooth scrolling with Lenis and GSAP ScrollTrigger synchronization
- Animated SVG hero artwork and restrained scroll reveals
- Live GitHub repository panel powered by the public GitHub REST API
- Responsive navigation and editorial layouts for mobile through desktop
- Accessible focus states, semantic HTML, and reduced-motion support
- SEO foundations: title, meta description, Open Graph tags, `robots.txt`, and `sitemap.xml`

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- [GSAP](https://gsap.com/)
- [Lenis](https://lenis.darkroom.engineering/)

## Run locally

This is a static website, so no installation or build command is needed.

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser, or use a local development server such as VS Code Live Server.

## Project structure

```text
portfolio/
├── assets/
│   └── images/
├── index.html
├── style.css
├── script.js
├── robots.txt
└── sitemap.xml
```

## Deploy on Netlify

### From GitHub (recommended)

1. Create a new GitHub repository and upload these files.
2. Sign in at [Netlify](https://app.netlify.com/).
3. Select **Add new project** → **Import an existing project** → **GitHub**.
4. Select this repository.
5. Leave the build command empty and set the publish directory to `.` (the repository root).
6. Select **Publish**.
7. In **Domain management**, customize the generated `*.netlify.app` address or attach a custom domain.

Future pushes to the connected GitHub repository automatically redeploy the site.

### With drag and drop

1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag the complete project folder containing `index.html` onto the drop zone.
3. Netlify will publish the site and give you a `*.netlify.app` URL.

## Google Search Console

Google Search Console does not host your portfolio. It verifies the deployed site and lets you request indexing and monitor Google Search performance.

1. Deploy the site first and copy its final HTTPS URL.
2. Open [Google Search Console](https://search.google.com/search-console/about) and select **Add property**.
3. For a Netlify URL, choose **URL prefix** and paste the exact site URL, for example `https://your-site.netlify.app/`.
4. Choose **HTML tag** verification, copy the provided `<meta>` tag, and add it inside the `<head>` of `index.html`.
5. Commit and deploy the change, then return to Search Console and select **Verify**.
6. In Search Console, open **Sitemaps**, enter `sitemap.xml`, and select **Submit**.

> Before submitting the sitemap, replace the sample address in `sitemap.xml` with your real Netlify or custom-domain URL.

## Contact

- GitHub: [@basim-27](https://github.com/basim-27)
- Instagram: [@_basim_27](https://www.instagram.com/_basim_27/)

---

Designed with intention. Built with code.
