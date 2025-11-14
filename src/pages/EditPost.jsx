import {useState} from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import './EditPost.css'

const EditPost = ({data}) => {

    const {id} = useParams()
    const [post, setPost] = useState({id: null, creator: "", name: "", level: "", species: "", class: "", story: "", secret: ""})

    const updatePost = async (event) => {
        event.preventDefault()

        const updateData = {}
        if (post.creator) updateData.creator = post.creator
        if (post.name) updateData.name = post.name
        if (post.level) updateData.level = post.level
        if (post.species) updateData.species = post.species
        if (post.class) updateData.class = post.class
        if (post.story) updateData.story = post.story
        if (post.secret) updateData.secret = post.secret

        await supabase
            .from('Party')
            .update(updateData)
            .eq('id', id)

        window.location = "/"
    }

    const deletePost = async (event) => {
        event.preventDefault()
        await supabase
            .from('Party')
            .delete()
            .eq('id', id)

        window.location = "/"
    }

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
                <label htmlFor="creator">Creator</label><br />
                <input type="text" id="creator" name="creator" value={post.creator} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="level">Level</label><br />
                <input type="text" id="level" name="level" value={post.level} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="species">Species</label><br />
                <select id="species" name="species" value={post.species} onChange={handleChange}>
                    <option value="">Select a species</option>
                    <option value="human">Human</option>
                    <option value="elf">Elf</option>
                    <option value="dragonborn">Dragonborn</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="gnome">Gnome</option>
                    <option value="tiefling">Tiefling</option>
                    <option value="orc">Orc</option>
                </select><br />
                <br/>   

                <label htmlFor="class">Class</label><br />
                <input type="text" id="class" name="class" value={post.class} onChange={handleChange} /><br />
                <br/>                       

                <label htmlFor="story">Story</label><br />
                <textarea rows="5" cols="50" id="story" name="story" value={post.story} onChange={handleChange}>
                </textarea>
                <br />

                <label htmlFor="secret">Secret</label><br />
                <input type="text" id="secret" name="secret" onChange={handleChange} /><br />
                <br/>

                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost