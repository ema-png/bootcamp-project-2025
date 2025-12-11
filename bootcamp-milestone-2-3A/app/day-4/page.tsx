import BlogPages from '@/components/blogPage';
import blogPages from "../blogPageData"

export default function Day4() {
    const blogPage = blogPages[3];
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