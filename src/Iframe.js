import { useState } from "react"
import { createPortal } from "react-dom"

function IFrame({ children }) {
  const [ref, setRef] = useState()
  const container = ref?.contentDocument?.body

  return (
    <iframe title="iframe" ref={setRef}>
      {createPortal(children)}
    </iframe>
  )
}

export default IFrame
