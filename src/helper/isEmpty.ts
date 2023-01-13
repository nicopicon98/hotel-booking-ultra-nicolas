export const isAtLeastOneMissing = (obj: any) => {
  return Object.values(obj).includes(null) || Object.values(obj).includes("")
}