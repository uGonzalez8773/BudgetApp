
export const generateID = () => {
    const random = Math.random().toString(36).substring(2)
    const dateForId = Date.now().toString(36)

    return random + dateForId
}