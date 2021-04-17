export const STORAGE_NAME = 'stored-todos'

export function getCurrentDateTime () {
  const timeZoneOffset = new Date().getTimezoneOffset() * 60000
  const timeZoneOffsetISO = new Date(Date.now() - timeZoneOffset).toISOString()
  return timeZoneOffsetISO.slice(0, timeZoneOffsetISO.lastIndexOf(':'))
}

let nextId = 0
export function generateId () {
  return nextId++
}

export function setNextId (lastId) {
  nextId = (lastId + 1)
}
