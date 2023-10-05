import handler from './ControllerMock'
import * as Operations from '../api/Operations'
import * as ErrorTreatment from '../api/ErrorTreatment'
import { type NextApiRequest, type NextApiResponse } from 'next'
// import '@testing-library/jest-dom/extend-expect'
function createMockResponse (data: any): NextApiResponse {
  return {
    json: jest.fn().mockImplementation(() => data)
  } as unknown as NextApiResponse
}

const mockResponse = createMockResponse({ key: 'value' })

interface SimplifiedRequest {
  method: string
  body: {
    value1: number
    value2: number
    operation: string
  }
}
jest.mock('../api/Operations', () => ({
  add: jest.fn((a, b) => a + b),
  mult: jest.fn((a, b) => a * b),
  div: jest.fn((a, b) => a / b),
  sub: jest.fn((a, b) => a - b)
}))

jest.mock('../api/ErrorTreatment', () => ({
  handlerNotANumber: jest.fn(),
  handlerInvReqMethod: jest.fn(),
  handlerNotFound: jest.fn()
}))

describe('handler function', () => {
  // it('should handle Add function', () => {
  //   afterEach(() => {
  //     jest.clearAllMocks()
  //   })

  it('should test add function', () => {
    const req: SimplifiedRequest = {
      method: 'POST',
      body: {
        value1: 5,
        value2: 3,
        operation: 'add'
      }
    }
    handler(req as NextApiRequest, mockResponse)

    expect(Operations.add).toBeCalledWith(5, 3)
    expect(mockResponse.json).toBeCalledWith(8)
  })
  
  it('should handle Mult function', () => {
    const req = {
      method: 'POST',
      body: {
        value1: 5,
        value2: 3,
        operation: 'mult'
      }
    }

    handler(req as NextApiRequest, mockResponse)

    expect(Operations.mult).toHaveBeenCalledWith(5, 3)
    expect(mockResponse.json).toHaveBeenCalledWith(15)
  })

  it('should handle Sub function', () => {
    const req = {
      method: 'POST',
      body: {
        value1: 5,
        value2: 3,
        operation: 'sub'
      }
    }

    handler(req as NextApiRequest, mockResponse)

    expect(Operations.sub).toHaveBeenCalledWith(5, 3)
    expect(mockResponse.json).toHaveBeenCalledWith(2)
  })

  it('should handle Div function', () => {
    const req = {
      method: 'POST',
      body: {
        value1: 5,
        value2: 3,
        operation: 'div'
      }
    }

    handler(req as NextApiRequest, mockResponse)

    expect(Operations.div).toHaveBeenCalledWith(5, 3)
    expect(mockResponse.json).toHaveBeenCalledWith(1.6666666666666667)
  })

  it('should handle invalid POST request', () => {
    const req = {
      method: 'POST',
      body: {
        value1: 'invalid',
        value2: 3,
        operation: 'add'
      }
    }

    handler(req as NextApiRequest, mockResponse)

    expect(ErrorTreatment.handlerNotANumber).toHaveBeenCalledWith(mockResponse)
  })

  it('should handle invalid request method', () => {
    const req = {
      method: 'GET',
      body: {}
    }

    handler(req as NextApiRequest, mockResponse)

    expect(ErrorTreatment.handlerInvReqMethod).toHaveBeenCalledWith(mockResponse)
  })
})
