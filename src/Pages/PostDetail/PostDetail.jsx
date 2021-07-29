import React from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () =>{
const params = useParams()

    return (
        <div>
            {params.postId}
        </div>
    )
}

export default PostDetail
