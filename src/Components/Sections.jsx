import React from 'react'
import './sections.css'

export default function Sections(){
    return(
        <div className="section-parent">
            <header>Here is a header</header>
            <nav>Nav bar here</nav>
            <section>
                <article className="article-one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam in ab accusantium quisquam molestias ipsam quo eaque repudiandae repellendus consectetur numquam iure doloremque hic, corporis pariatur provident voluptate ratione placeat.</article>
                <article className="article-two">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magni vero dolorem ea modi explicabo harum est vitae, eum quibusdam perferendis earum iste. Quo eum adipisci modi. Quasi, esse est.</article>
                <article className="article-three">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus! Tempora eaque necessitatibus, beatae ex nihil doloremque modi blanditiis officiis obcaecati veniam repellendus, delectus illum assumenda libero! Beatae, qui id.</article>
            </section>
            <footer>Here is a footer</footer>
        </div>
    )
}