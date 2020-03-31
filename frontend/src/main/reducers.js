import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycles/billingCycleReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer
})
export default rootReducer