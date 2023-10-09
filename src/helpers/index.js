
export const generateID = () => {
    const random = Math.random().toString(36).substring(2)
    const dateForId = Date.now().toString(36)

    return random + dateForId
}

export const formatdate = dateOf => {
    const dateOfCharge = new Date(dateOf)

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return dateOfCharge.toLocaleDateString ('en-US', options)
}