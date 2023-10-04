/* eslint-disable @typescript-eslint/no-var-requires */
const handler = require('./ControllerMock')
const Operations = require('../api/Operations')
const ErrorTreatment = require('../api/ErrorTreatment')
//
const res = {
  json: jest.fn()
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
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should handle Add function', () => {
    const req = {
      method: 'POST',
      body: {
        value1: 5,
        value2: 3,
        operation: 'add'
      }
    }

    handler(req, res)

    expect(Operations.add).toHaveBeenCalledWith(5, 3)
    expect(res.json).toHaveBeenCalledWith(8)
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

    handler(req, res)

    expect(Operations.mult).toHaveBeenCalledWith(5, 3)
    expect(res.json).toHaveBeenCalledWith(15)
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

    handler(req, res)

    expect(Operations.sub).toHaveBeenCalledWith(5, 3)
    expect(res.json).toHaveBeenCalledWith(2)
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

    handler(req, res)

    expect(Operations.div).toHaveBeenCalledWith(5, 3)
    expect(res.json).toHaveBeenCalledWith(1.6666666666666667)
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

    handler(req, res)

    expect(ErrorTreatment.handlerNotANumber).toHaveBeenCalledWith(res)
  })

  it('should handle invalid request method', () => {
    const req = {
      method: 'GET',
      body: {}
    }

    handler(req, res)

    expect(ErrorTreatment.handlerInvReqMethod).toHaveBeenCalledWith(res)
  })
})
