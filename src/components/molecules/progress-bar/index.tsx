import { Flex, Progress } from 'antd'

const ProgressBar = () => {
  return (
    <Flex gap="small" wrap>
      <Progress type="circle" percent={75} showInfo={false} />
    </Flex>
  )
}

export { ProgressBar }
