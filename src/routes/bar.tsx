import { createFileRoute } from '@tanstack/react-router'
import BarPage from '../features/bar/pages'
export const Route = createFileRoute('/bar')({
  component: BarPage,
})
