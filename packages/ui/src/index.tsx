import { Text, VStack } from '@chakra-ui/react'

export interface TitleSectionProps {
  type: 'page' | 'drawer'
  title: string
  description: string
}

export const TitleSection = ({
  type,
  title,
  description,
}: TitleSectionProps) => {
  return (
    <VStack>
      <Text as={'h3'} alignSelf={'center'}>
        {title}
      </Text>
      <Text alignSelf={'center'} textAlign={'center'}>
        {description}
      </Text>
    </VStack>
  )
}
