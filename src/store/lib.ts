export interface IApiRes {
  type: string;
  data: any
}

const createExtra = (type: string , funcApi :any) =>{
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`
  return {
    mutations: {
      [SUCCESS] (state: any, data: any){
        state.data = data
      },
      [FAILURE] (state: any, error: any){
        state.error = error.error.replace("Error: ", "오류: ")
      }
    },
    actions: {
      async [type]({ commit }: any, payload: any){
        const res : IApiRes = await funcApi(payload)
        if (res.type === 'SUCCESS'){
          commit(SUCCESS, res.data)
        } else{
          commit(FAILURE, res.data)
        }
      }
    },
  }
}

export default createExtra