import ValidateOrder from '../ValidateOrder/Components/ValidateOrder'
import {ErrorBoundary} from 'react-error-boundary'

import ErrorFallback from '../common/Components/ErrorFallback'

const ValidateOrderPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ValidateOrder />
    </ErrorBoundary>
  )
}

export default ValidateOrderPage
