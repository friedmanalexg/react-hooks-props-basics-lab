import React from 'react'
import user from '../data/user'
const github = user.links.github
const linkedin = user.links.linkedin 

function Links(props){
    return (
        <>
            <h3>Links</h3>
            <p><a href={github}>{github}</a></p>
            <p><a href={linkedin}>{linkedin}</a></p>
        </>
    )
}
export default Links