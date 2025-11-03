type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs : Blog[] = [
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
]

const blogContainer = document.getElementById('blog-entry');

blogs.forEach(blog => 
    {
        const blogEntry = document.createElement('div')
        blogEntry.classList.add("entry-post")

        const header = document.createElement('h1');
        header.textContent = blog.title;

        const date = document.createElement('p')
        date.textContent = blog.date;

        const image = document.createElement("img")
        image.src = blog.image
        image.alt = blog.imageAlt
        image.style.width = "50%"
    
        const paragraph = document.createElement('p')
        paragraph.textContent = blog.description

        const slug = document.createElement('a')
        slug.href = `${blog.slug}.html`;
        slug.textContent = "click me";

        const space = document.createElement('p')
        space.textContent = "";
        
        blogEntry.appendChild(header)
        blogEntry.appendChild(date)
        blogEntry.appendChild(image)
        blogEntry.appendChild(paragraph)
        blogEntry.appendChild(slug)
        blogEntry.appendChild(space)


        if (blogContainer)
            blogContainer.appendChild(blogEntry)
    }
);