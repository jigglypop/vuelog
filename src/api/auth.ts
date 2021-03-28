import { SERVER_URL } from '../api/SERVER_URL'

// 로그인
export const loginApi = async (payload:{ username: string, password: string }) => {
      const res : any = await fetch(`${SERVER_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "user": payload
        }),
      })
      if (res.status != 200){
          const error = await res.json()
          return { type:'FAILURE', data: error }
      }
      const data = await res.json()
      return { type:'SUCCESS', data: data }
}

// 회원가입
export const registerApi = async (payload: { username: string, email: string, password: string }) => {
    const res : any = await fetch(`${SERVER_URL}/api/auth/register`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          "user": payload
      }),
    })
    if (res.status != 200){
        const error = await res.json()
        return { type:'FAILURE', data: error }
    }
    const data = await res.json()
    return { type:'SUCCESS', data: data }
}

// 체크
export const checkApi  = async (payload: { token: string }) => {
    const res : any = await fetch(`${SERVER_URL}/api/auth/check`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`${payload.token}`
        },
    })
    if (res.status != 200){
        const error = await res.json()
        return { type:'FAILURE', data: error }
    }
    const data = await res.json()
    return { type:'SUCCESS', data: data }
}