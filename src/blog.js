var blogs = [
    {
        title: "Day 1",
        date: "Wednesday, 08/15/25",
        description: "Today, I made a blog entry...",
        image: "dog2.jpeg",
        imageAlt: "cute dog",
        slug: "day-1",
    },
    {
        title: "Day 2",
        date: "Thursday, 08/16/25",
        description: "Today, I made another blog entry!",
        image: "dog3.jpeg",
        imageAlt: "cuter dog",
        slug: "day-2",
    }
];
var blogContainer = document.getElementById('blog-entry');
blogs.forEach(function (blog) {
    var blogEntry = document.createElement('div');
    blogEntry.classList.add("entry-post");
    var header = document.createElement('h1');
    header.textContent = blog.title;
    var date = document.createElement('p');
    date.textContent = blog.date;
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.style.width = "50%";
    var paragraph = document.createElement('p');
    paragraph.textContent = blog.description;
    var slug = document.createElement('a');
    slug.href = "".concat(blog.slug, ".html");
    slug.textContent = "click me";
    var space = document.createElement('p');
    space.textContent = "";
    blogEntry.appendChild(header);
    blogEntry.appendChild(date);
    blogEntry.appendChild(image);
    blogEntry.appendChild(paragraph);
    blogEntry.appendChild(slug);
    blogEntry.appendChild(space);
    if (blogContainer)
        blogContainer.appendChild(blogEntry);
});
