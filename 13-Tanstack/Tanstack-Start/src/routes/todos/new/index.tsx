import { createFileRoute } from '@tanstack/react-router'
import { TodoForm } from '@/components/todo-form'

export const Route = createFileRoute('/todos/new/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <TodoForm />
      </div>
    </div>
  )
}
