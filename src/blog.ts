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
        date: "Wednesday October 15",
        description: "Today, I made a blog entry...",
        image: "dog2.jpeg",
        imageAlt: "cute dog",
        slug: "not yet",
    },

    {
        title: "Day 2",
        date: "Thursday October 16",
        description: "Today, I made another blog entry!",
        image: "dog3.jpeg",
        imageAlt: "cuter dog",
        slug: "not yet",
    }
]

const blogContainer = document.getElementById('blog-entry');

blogs.forEach(blog => 
    {
        const blogEntry = document.createElement('div')
        blogEntry.classList.add("entry-post")

        const header = document.createElement('h1');
        header.textContent = blog.title;

        const paragraph = document.createElement('p')
        paragraph.textContent = blog.description
        
        blogEntry.appendChild(header)
        blogEntry.appendChild(paragraph)

        if (blogContainer)
            blogContainer.appendChild(blogEntry)
    }
);