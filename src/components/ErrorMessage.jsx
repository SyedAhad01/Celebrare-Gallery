import PropTypes from 'prop-types'

function ErrorMessage({ message }) {
  return (
    <div
      role="alert"
      className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center text-red-400"
    >
      {message}
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMessage
