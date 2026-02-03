import { createFileRoute } from '@tanstack/react-router'
import FooPage from '../features/foo/pages'
export const Route = createFileRoute('/foo')({
  component: FooPage,
})
