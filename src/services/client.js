import axios from 'axios'
import { makeUseAxios } from 'axios-hooks'

const customInstance = axios.create({
	baseURL: 'https://randomuser.me/api/',
	timeout: 10000,
})

const useAxios = makeUseAxios({
	axios: customInstance,
})

export { useAxios }
