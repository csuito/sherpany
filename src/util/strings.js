export const normalize = (str) =>
	str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export const getFullName = ({ first, last }) => `${first} ${last}`
