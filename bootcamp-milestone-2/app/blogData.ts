export interface Blog {
    title: string;
    date: Date;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    comments : string[];
    _id: string;
}

/*const blogs : Blog[] = [
    {
        title: "Day 1",
        date: "WEDNESDAY 10/15/25",
        description: "Today, I made a blog entry...",
        image: "/dog2.jpeg",
        imageAlt: "cute dog",
        slug: "/day-1",
        key: 1,
    },
    {
        title: "Day 2",
        date: "THURSDAY 10/16/25",
        description: "Today, I made another blog entry!",
        image: "/dog3.jpeg",
        imageAlt: "cuter dog",
        slug: "/day-2",
        key: 2,
    },
    {
        title: "Day 3",
        date: "MONDAY 11/3/25",
        description: "New day, new blog entry...",
        image: "/dog4.jpeg",
        imageAlt: "even cuter dog",
        slug: "/day-3",
        key: 3,
    },
]

const reversed_blogs = [...blogs].reverse()

export default reversed_blogs;*/