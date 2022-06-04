import { useState } from 'react'
import { postMessage } from '../lib/discord'

export function IineButton({ title }: { title: string }) {
  const [isDisplay, setIsDisplay] = useState(false)

  function postIine(title: string) {
    postMessage(title)
    toggleDisplay()
  }

  function toggleDisplay() {
    setIsDisplay(!isDisplay)
  }

  return (
    <>
      <button disabled={isDisplay ? true : false} onClick={() => postIine(title)}>
        👍
      </button>
      <span style={{ display: isDisplay ? '' : 'none' }}> {"<"} thank you ! </span>
    </>
  )
} 