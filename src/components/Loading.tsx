import React from 'react'

const styleLoading: React.CSSProperties = {
  border: 'var(--gap-s) solid var(--color-2)',
  borderRightColor: 'transparent',
  width: 'var(--gap)',
  height: 'var(--gap)',
  borderRadius: '50%',
  animation: 'spin 1s infinite',
}

const Loading = () => {
  return (
    <div className="mb" style={styleLoading}>
      <style>
        {`@keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }`}
      </style>
    </div>
  )
}

export default Loading
