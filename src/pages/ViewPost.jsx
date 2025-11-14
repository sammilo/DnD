import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import './ViewPost.css'

const ViewPost = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('Party')
                .select('*')
                .eq('id', id)
                .single()

            if (data) {
                setPost(data)
            }
            setLoading(false)
        }
        fetchPost()
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!post) {
        return <div>Post not found</div>
    }

    return (
        <div className="ViewPost">
            <div className="postDetails">
                <h2>{post.name}</h2>
                <p><strong>Creator:</strong> {post.creator}</p>
                <p><strong>Level:</strong> {post.level}</p>
                <p><strong>Species:</strong> {post.species.charAt(0).toUpperCase() + post.species.slice(1)}</p>
                <p><strong>Class:</strong> {post.class}</p>
                <p><strong>Story:</strong> {post.story}</p>
                <p><strong>Secret:</strong> {post.secret}</p>
            </div>
        </div>
    )
}

export default ViewPost
