import { useState, useEffect } from 'react'
import Card from '../components/Card'
import './ReadPosts.css'
import { supabase } from '../client'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fectchPost = async () => {
            const {data} = await supabase
                .from('Party')
                .select()
                .order('created_at', { ascending: false })
        
            setPosts(data)
        }
        fectchPost()
    }, [props])
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                [...posts]
                .sort((a, b) => b.id - a.id)
                .map((post,index) => 
                    <Card 
                        key={post.id}
                        id={post.id} 
                        creator={post.creator}
                        name={post.name}
                        level={post.level}
                        species={post.species}
                        class={post.class}
                        story={post.story}
                    />
                ) : <h2 id="default-text">{'No Party 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts