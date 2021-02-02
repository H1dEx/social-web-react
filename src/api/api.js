import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '7de158bf-36a5-4de3-8c71-0f4cdddc6819'
	}
});

export const usersAPI = {
	async getUsers(pageSize = 10, currentPage = 1) {
		const response = await instance.get(`users?count=${pageSize}&page=${currentPage}`,
			{withCredentials: true})
		return response.data;
	}
};

export const followAPI = {
	async follow(id) {
		const response = await instance.post(`follow/${id}`, {})
		return response.data
	},
	
	async unfollow(id) {
		const response = await instance.delete(`follow/${id}`)
		return response.data
	}
};

export const authAPI = {
	async me() {
		const response = await instance.get('auth/me')
		return response.data
	},
	
	async login(email, password, rememberMe = false) {
		const response = await instance.post('auth/login', {
			email, password, rememberMe
		})
		return response.data
	},
	
	async logout() {
		const response = await instance.delete('auth/login')
		return response.data
	}
};

export const profileAPI = {
	async getProfile(userId) {
		const response = await instance.get('profile/' + userId)
		return response.data
	},
	
	async getStatus(userId) {
		const response = await instance.get('profile/status/' + userId)
		return response.data;
	},
	
	async updateStatus(status) {
		const response = await instance.put('profile/status', {status})
		return response.data
	},

	async savePhoto(photo) {
		const formData = new FormData();
		formData.append("image", photo)
		const response = await instance.put('profile/photo', formData, {"Content-Type": "multipart/form-data"})
		return response.data
	},

	saveProfile(profile) {
		return instance.put('profile', profile)
	}
};
