const newGuid = (): string => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}
const s4 = (): string => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

export default newGuid
