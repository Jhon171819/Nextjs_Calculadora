import { type NextApiResponse } from 'next'

function handlerNotANumber (res: NextApiResponse): void {
  res.status(400).json({ message: 'Is not a number' })
}

function handlerBadRequest (res: NextApiResponse): void {
  res.status(400).json({ message: 'Bad request' })
}

function handlerNotFound (res: NextApiResponse): void {
  res.status(404).json({ message: 'Not found' })
}

function handlerInvReqMethod (res: NextApiResponse): void {
  res.status(405).json({ message: 'Invalid request method' })
}

function handlerPTL (res: NextApiResponse): void {
  res.status(413).json({ message: 'Payload too large' })
}

function handlerIFRL (res: NextApiResponse): void {
  res.status(429).json({ message: 'Internal fuction rate limit' })
}

function handlerIServerE (res: NextApiResponse): void {
  res.status(500).json({ message: 'Internal server error' })
}

module.exports = {
  handlerNotANumber,
  handlerBadRequest,
  handlerNotFound,
  handlerInvReqMethod,
  handlerPTL,
  handlerIFRL,
  handlerIServerE
}
