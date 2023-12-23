
export async function convertImageToFile(image: { uri: string, name: string, type: string }): Promise<File> {
  const response = await fetch(image.uri)
  const blob = await response.blob()
  return new File([blob], image.name, { type: image.type })
}

export function formatPrice(price: number): string {
  return `${price}$`
}