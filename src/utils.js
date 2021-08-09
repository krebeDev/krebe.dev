export 	const toTitleCase = (str)  => str.charAt(0).toUpperCase() + str.slice(1)

export const validateField = (field, value) => {
  switch (field) {
    case 'name':
      return value.length > 1
    case 'email': 
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    case 'message':
      return value.length > 9
  }
}