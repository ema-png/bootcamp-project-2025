import BlogPages from '@/components/blogPage';
import blogPages from "../blogPageData"

export default function Day1() {
    const blogPage = blogPages[0];
    return (
        <div>
            <BlogPages
                title = {blogPage.title}
                date = {blogPage.date}
                description = {blogPage.description}
                image = {blogPage.image}
                imageAlt = {blogPage.imageAlt}
                key = {blogPage.key}
            />
        </div>
  )
}