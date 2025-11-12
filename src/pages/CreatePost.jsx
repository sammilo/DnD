import { useState } from 'react'
import { supabase } from '../client'
import './CreatePost.css'

const CreatePost = () => {

    const [post, setPost] = useState({creator: "", name: "", level: "", race: "", class: "", story: ""})

    const createPost = async (event) => {
        event.preventDefault()

        await supabase
            .from('Party')
            .insert({creator: post.creator, name: post.name, level: post.level, race: post.race, class: post.class, story: post.story})
            .select()

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form>
                <label htmlFor="creator">Creator</label> <br />
                <input type="text" id="creator" name="creator" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="level">Level</label><br />
                <input type="text" id="level" name="level" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="race">Race</label><br />
                <input type="text" id="race" name="race" onChange={handleChange} /><br />
                <br/>   

                <label htmlFor="class">Class</label><br />
                <input type="text" id="class" name="class" onChange={handleChange} /><br />
                <br/>                       

                <label htmlFor="story">Story</label><br />
                <textarea rows="5" cols="50" id="story" name="story" onChange={handleChange}>
                </textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
}
export default CreatePost