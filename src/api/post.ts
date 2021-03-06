import { SERVER_URL } from './SERVER_URL'


// 포스트 읽기
export const readPostApi  = async ( payload : { postId: number } )  => {
    const res : any = await fetch(`${SERVER_URL}/api/posts/${payload.postId}`)
    if (res.status != 200){
        const error = await res.json()
        return { type:'FAILURE', data: error }
    }
    const data = await res.json()
    return { type:'SUCCESS', data: data }
}


// // 리스트 읽기
export const readListApi  = async ( payload: any )  => {
    const res : any = await fetch(`${SERVER_URL}/api/posts`)
    if (res.status != 200){
        const error = await res.json()
        return { type:'FAILURE', data: error }
    }
    const data = await res.json()
    return { type:'SUCCESS', data: data }
}

// 글쓰기
export const writeApi  = async ( payload: { token: string, title: string, content: string } ) => {
    const res : any = await fetch(`${SERVER_URL}/api/posts`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`${payload.token}`
        },
        body: JSON.stringify({
            "title": payload.title,
            "content": payload.content,
            "groupId": '602e3de39b29a93ab04a5ed6'
        }),
    })
    if (res.status != 200){
        const error = await res.json()
        return { type:'FAILURE', data: error }
    }
    const data = await res.json()
    return { type:'SUCCESS', data: data }
}

// 업데이트
export const updateApi  = async ( payload: { token: string, title: string, content: string, postId: string } ) => {
    const res : any = await fetch(`${SERVER_URL}/api/posts/${payload.postId}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`${payload.token}`
        },
        body: JSON.stringify({
            "title": payload.title,
            "content": payload.content
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
export const removeApi = async ( payload: { token: string, postId: string } ) => {
    const res : any = await fetch(`${SERVER_URL}/api/posts/${payload.postId}`,{
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






