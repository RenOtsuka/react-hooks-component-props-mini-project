import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    //console.log(posts)
    const artArr = posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })

    return(
        <main>
            {artArr}
        </main>
    )
}

export default ArticleList;