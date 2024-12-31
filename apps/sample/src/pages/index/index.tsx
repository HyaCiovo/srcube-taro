import { Section } from '@/components/section'
import { Button } from '@srcube-taro/ui'
import { useLoad } from '@tarojs/taro'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <Section title="Button" contentClass="flex flex-col gap-2">
      <Button color="primary" block>
        BUTTON
      </Button>
      <Button color="danger" block>
        DANGER
      </Button>
      <Button color="success" block>
        SUCCESS
      </Button>
      <Button color="warning" block>
        WARNING
      </Button>
      <Button color="secondary" block>
        SECONDARY
      </Button>
      <Button color="danger" loading block>
        LOADING
      </Button>
    </Section>
  )
}
