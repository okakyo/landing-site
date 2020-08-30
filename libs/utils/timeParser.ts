export const dateParser = (setDateTime: Date | string): string => {
  const getDateTime = new Date(setDateTime)
  return `${getDateTime.getFullYear()}/${
    getDateTime.getMonth() + 1
  }/${getDateTime.getDate()}`
}
