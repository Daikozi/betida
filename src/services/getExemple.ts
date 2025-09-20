export const getExemple = async (): Promise<unknown> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}
