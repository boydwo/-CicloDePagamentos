import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getLis() {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}