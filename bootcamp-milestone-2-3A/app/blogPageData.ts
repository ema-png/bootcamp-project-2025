export interface BlogPages {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    key: number;
}

const blogPages : BlogPages[] = [
    {
        title: "Day 1",
        date: "WEDNESDAY 10/15/25",
        description: "Today I went to class and then I ate lots of food. This is a normal schedule for me.",
        image: "/dog2.jpeg",
        imageAlt: "cute dog",
        key: 1,
    },
    {
        title: "Day 2",
        date: "THURSDAY 10/16/25",
        description: "Today I went to class again and I still ate lots of food. This is a normal schedule for me.",
        image: "/dog3.jpeg",
        imageAlt: "cuter dog",
        key: 2,
    },
    {
        title: "Day 3",
        date: "MONDAY 11/3/25",
        description: "Today I worked hard on my studies and had fun with my friends.",
        image: "/dog4.jpeg",
        imageAlt: "even cuter dog",
        key: 3,
    },
    {
        title: "Day 4",
        date: "WEDNESDAY 12/4/25",
        description: "Today I am finishing hack for impact bootcamp...",
        image: "/dog5.jpeg",
        imageAlt: "even even cuter dog",
        key: 4,
    },
 
 
]

export default blogPages;