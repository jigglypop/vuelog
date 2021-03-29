import { SERVER_URL } from "./SERVER_URL"


// 댓글 리스트 읽기
export const readCommentApi  = async ( payload: { postId: string } ) => {
    const res : any = await fetch(`${SERVER_URL}/api/comment/${payload.postId}`)
    if (res.status != 200){
        const error = await res.json()
        return { type:'FAILURE', data: error }
    }
    const data = await res.json()
    return { type:'SUCCESS', data: data }
}

// 댓글 쓰기
export const writecommentApi  = async ( payload: { token: string, postId: string, content: string } ) => {
    const res : any = await fetch(`${SERVER_URL}/api/comment/${payload.postId}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`${payload.token}`
        },
        body: JSON.stringify({
            "comments":{
                "content": payload.content
            }
        }),
    })
    if (res.status != 200){
        const error = await res.json()
        return { type:'FAILURE', data: error }
    }
    const data = await res.json()
    return { type:'SUCCESS', data: data }
}


// 삭제
export const removeCommentApi = async ( payload: { token: string, postId: string, commentId: string }) => {
    const res : any = await fetch(`${SERVER_URL}/api/comment/${payload.postId}/${payload.commentId}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`${payload.token}`
        }
    })
    if (res.status != 200){
        const error = await res.json()
        return { type:'FAILURE', data: error }
    }
    const data = await res.json()
    return { type:'SUCCESS', data: data }
}

