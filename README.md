# JSuspense
JSuspense is a light weight lib. for prelaoding content

![PreloaderLib Logo](https://i.ibb.co/Jmt67fj/Screenshot-2023-06-06-at-6-29-04-AM.png)

JSuspense is a powerful JavaScript , lightweight library that helps you add stunning preloader animations to your web pages. With JSuspense, you can create a captivating loading experience for your users while your content loads in the background. 

## Features
- Easy to use: Simply include the JSuspense script in your HTML file and let it handle the rest.
- Customizable: Choose from a variety of preloader styles and customize colors, animations, and loading messages to match your brand. "new Release"
- Lightweight: PreloaderLib is designed to be lightweight and efficient, ensuring fast loading times for your website.
- Seamless integration: Works with any HTML, CSS, or JavaScript framework seamlessly.

## Installation
To use JSuspense in your project, you can install it via npm or include the script directly in your HTML file. Here's an example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <!-- Include JSuspense CSS file -->
   <link rel="stylesheet" href="https://unpkg.com/jsuspense@1.0.6/src/index.css">
</head>
<body>
  <!-- Your content goes here -->
        <div class="JSuspense-wraper">
            <h2 class="content">Title</h2>
        </div>
        <div class="JSuspense-wraper">
            <p class="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
  <!-- Include JSuspense JS file -->
      <script  src="https://unpkg.com/jsuspense@1.0.6/lib/index.js"></script>
</body>
</html>
