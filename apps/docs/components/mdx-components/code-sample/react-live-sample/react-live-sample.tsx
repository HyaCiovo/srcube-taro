import { LivePreview, LiveProvider } from 'react-live'
import { scope } from '.'

interface ReactLiveProps {
  code?: string
  noInline?: boolean
}

function ReactLive(props: ReactLiveProps) {
  const { code, noInline } = props

  return (
    <LiveProvider code={code} scope={scope} noInline={noInline}>
      <LivePreview />
    </LiveProvider>
  )
}

ReactLive.displayName = 'ReactLive'

export { ReactLive }
