export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs : Blog[] = [
    {
        title: "Day 2",
        date: "Thursday, 08/16/25",
        description: "Today, I made another blog entry!",
        image: "/dog3.jpeg",
        imageAlt: "cuter dog",
        slug: "day-2",
    },
    {
        title: "Day 1",
        date: "Wednesday, 08/15/25",
        description: "Today, I made a blog entry...",
        image: "/dog2.jpeg",
        imageAlt: "cute dog",
        slug: "day-1",
    }
]

export default blogs;