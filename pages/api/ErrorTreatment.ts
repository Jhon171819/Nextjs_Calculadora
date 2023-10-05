import { type NextApiResponse } from 'next'

export function handlerNotANumber (res: NextApiResponse): void {
  res.status(400).json({ message: 'Is not a number' })
}

export function handlerBadRequest (res: NextApiResponse): void {
  res.status(400).json({ message: 'Bad request' })
}

export function handlerNotFound (res: NextApiResponse): void {
  res.status(404).json({ message: 'Not found' })
}

export function handlerInvReqMethod (res: NextApiResponse): void {
  res.status(405).json({ message: 'Invalid request method' })
}

export function handlerPTL (res: NextApiResponse): void {
  res.status(413).json({ message: 'Payload too large' })
}

export function handlerIFRL (res: NextApiResponse): void {
  res.status(429).json({ message: 'Internal fuction rate limit' })
}

export function handlerIServerE (res: NextApiResponse): void {
  res.status(500).json({ message: 'Internal server error' })
}
