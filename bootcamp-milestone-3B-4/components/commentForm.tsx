"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import style from './commentForm.module.css';

export default function CommentForm({ slug }: { slug: string }) {
  const router = useRouter(); 

  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const getBaseUrl = () => {
      if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
      }
      return 'http://localhost:3000';
    };

    const base = getBaseUrl()


    const res = await fetch(`${base}/api/blog/${slug}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, comment }),
    });

    setLoading(false);

    if (!res.ok) {
      alert("could not post comment");
      return;
    }

    router.refresh(); 
  }

  return (
    <main className={style.commentform}>
      <h3 className={style.header}>
        𐙚.⋆ Leave a comment! ⋆❀˖°
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          className={style.input}
          placeholder="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <textarea
          className={style.input}
          placeholder="write here!"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button
          type="submit"
          className={style.submitButton}
          disabled={loading}
        >
          {loading ? "Posting..." : "comment"}
        </button>
      </form>
    </main>
  );
}
