import { useState } from 'react'
import { Link, createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { ListTodo, Loader2, Pencil, Plus, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { prisma } from '@/db'

const serverLoader = createServerFn({
  method: 'GET',
}).handler(async () => await prisma.todo.findMany())

const deleteTodo = createServerFn({
  method: 'POST',
})
  .inputValidator((data: { id: number }) => data)
  .handler(async ({ data }) => {
    return await prisma.todo.delete({
      where: { id: data.id },
    })
  })

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => await serverLoader(),
})

function App() {
  const todos = Route.useLoaderData()

  const completedCount = todos.filter((todo) => todo.isComplete).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Todos
            </h1>
            {totalCount > 0 && (
              <Badge
                variant="outline"
                className="bg-gray-900 border-gray-700 text-gray-300 text-xs sm:text-sm"
              >
                <span className="font-medium">
                  {completedCount} of {totalCount} completed
                </span>
              </Badge>
            )}
          </div>
          <Button
            size="default"
            asChild
            className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto text-sm sm:text-base"
          >
            <Link
              to="/todos/new"
              className="flex items-center justify-center gap-2"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Todo</span>
              <span className="sm:hidden">Add</span>
            </Link>
          </Button>
        </div>

        <TodoListTable todos={todos} />
      </div>
    </div>
  )
}

function TodoListTable({
  todos,
}: {
  todos: Array<{
    id: number
    name: string
    isComplete: boolean
    createdAt: Date
  }>
}) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState<number | null>(null)

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this todo?')) {
      return
    }

    setIsDeleting(id)
    try {
      await deleteTodo({ data: { id } })
      router.invalidate()
    } catch (error) {
      console.error('Failed to delete todo:', error)
    } finally {
      setIsDeleting(null)
    }
  }
  if (todos.length === 0) {
    return (
      <Empty className="border border-dashed border-gray-800 bg-gray-950/50 rounded-lg">
        <EmptyHeader>
          <EmptyMedia variant="icon" className="bg-gray-900 border-gray-800">
            <ListTodo className="h-6 w-6 text-gray-400" />
          </EmptyMedia>
          <EmptyTitle className="text-white">No todos found</EmptyTitle>
          <EmptyDescription className="text-gray-400">
            Try adding a new todo to get started
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button
            size="default"
            asChild
            className="bg-white text-black hover:bg-gray-200"
          >
            <Link to="/todos/new" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Todo
            </Link>
          </Button>
        </EmptyContent>
      </Empty>
    )
  }

  return (
    <>
      {/* Desktop/Tablet Table View */}
      <div className="hidden md:block border border-gray-800 rounded-lg bg-gray-950/30 backdrop-blur-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800 hover:bg-gray-900/50">
                <TableHead className="text-gray-300 font-semibold text-sm md:text-base">
                  Task
                </TableHead>
                <TableHead className="text-gray-300 font-semibold text-sm md:text-base">
                  Status
                </TableHead>
                <TableHead className="text-gray-300 font-semibold text-sm md:text-base">
                  Created
                </TableHead>
                <TableHead className="text-gray-300 font-semibold text-right text-sm md:text-base">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {todos.map((todo) => (
                <TableRow
                  key={todo.id}
                  className="border-gray-800 hover:bg-gray-900/50 transition-colors"
                >
                  <TableCell className="font-medium text-white text-sm md:text-base">
                    {todo.name}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={todo.isComplete ? 'default' : 'secondary'}
                      className={`text-xs sm:text-sm ${
                        todo.isComplete
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : 'bg-gray-800 text-gray-300 border-gray-700'
                      }`}
                    >
                      {todo.isComplete ? 'Complete' : 'Pending'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-400 text-xs sm:text-sm md:text-base">
                    {new Date(todo.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        asChild
                        className="h-8 w-8 text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-colors"
                      >
                        <Link
                          to="/todos/$id/edit"
                          params={{ id: todo.id.toString() }}
                        >
                          <Pencil className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(todo.id)}
                        disabled={isDeleting === todo.id}
                        className="h-8 w-8 text-gray-400 hover:text-red-400 hover:bg-red-500/20 transition-colors disabled:opacity-50"
                      >
                        {isDeleting === todo.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="border border-gray-800 rounded-lg bg-gray-950/30 backdrop-blur-sm p-4 space-y-3"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-white text-base flex-1">
                {todo.name}
              </h3>
              <Badge
                variant={todo.isComplete ? 'default' : 'secondary'}
                className={`text-xs ${
                  todo.isComplete
                    ? 'bg-green-500/20 text-green-400 border-green-500/30'
                    : 'bg-gray-800 text-gray-300 border-gray-700'
                }`}
              >
                {todo.isComplete ? 'Complete' : 'Pending'}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-xs">
                Created:{' '}
                {new Date(todo.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
              <div className="flex items-center gap-1">
                <Button
                  size="icon"
                  variant="ghost"
                  asChild
                  className="h-8 w-8 text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-colors"
                >
                  <Link
                    to="/todos/$id/edit"
                    params={{ id: todo.id.toString() }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleDelete(todo.id)}
                  disabled={isDeleting === todo.id}
                  className="h-8 w-8 text-gray-400 hover:text-red-400 hover:bg-red-500/20 transition-colors disabled:opacity-50"
                >
                  {isDeleting === todo.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
