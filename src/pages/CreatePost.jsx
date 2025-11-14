import { useState } from 'react'
import { supabase } from '../client'
import './CreatePost.css'

const CreatePost = () => {

    const [post, setPost] = useState({creator: "", name: "", level: "", species: "", class: "", story: "", secret: ""})

    const createPost = async (event) => {
        event.preventDefault()

        await supabase
            .from('Party')
            .insert({creator: post.creator, name: post.name, level: post.level, species: post.species, class: post.class, story: post.story, secret: post.secret})
            .select()
        
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
            <form onSubmit={createPost}>
                <label htmlFor="creator">Creator</label><br />
                <input type="text" id="creator" name="creator" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="level">Level</label><br />
                <input type="text" id="level" name="level" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="species">Species</label><br />
                <select id="species" name="species" onChange={handleChange}>
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
                <input type="text" id="class" name="class" onChange={handleChange} /><br />
                <br/>                       

                <label htmlFor="story">Story</label><br />
                <textarea rows="5" cols="50" id="story" name="story" onChange={handleChange}>
                </textarea>
                <br />

                <label htmlFor="secret">Secret</label><br />
                <input type="text" id="secret" name="secret" onChange={handleChange} /><br />
                <br/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default CreatePost