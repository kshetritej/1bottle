import { createFileRoute } from '@tanstack/react-router'
import { Trending } from '../ui/pages/product/trending'

export const Route = createFileRoute('/trending')({
    component: () => <Trending />,
})
