import BlogPages from '@/components/blogPage';
import blogPages from "../blogPageData"

export default function Day2() {
    const blogPage = blogPages[1];
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