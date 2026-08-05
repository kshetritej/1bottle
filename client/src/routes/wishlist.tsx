import { createFileRoute } from '@tanstack/react-router'
import { Wishlist } from '../ui/pages/user/wishlist'

export const Route = createFileRoute('/wishlist')({
    component: () => <Wishlist />,
})
