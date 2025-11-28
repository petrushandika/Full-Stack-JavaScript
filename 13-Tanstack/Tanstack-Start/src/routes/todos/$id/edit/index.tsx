import { useState } from 'react'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { ArrowLeft, Check, Loader2, Pencil, Trash2, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { prisma } from '@/db'

const getTodos = createServerFn({
  method: 'GET',
}).handler(async () => {
  return await prisma.todo.findMany({
    orderBy: { createdAt: 'desc' },
  })
})

const updateTodo = createServerFn({
  method: 'POST',
})
  .inputValidator(
    (data: { id: number; name?: string; isComplete?: boolean }) => {
      if (data.name !== undefined && data.name.trim().length === 0) {
        throw new Error('Todo name cannot be empty')
      }
      return data
    },
  )
  .handler(async ({ data }) => {
    return await prisma.todo.update({
      where: { id: data.id },
      data: {
        ...(data.name !== undefined && { name: data.name.trim() }),
        ...(data.isComplete !== undefined && { isComplete: data.isComplete }),
      },
    })
  })

const deleteTodo = createServerFn({
  method: 'POST',
})
  .inputValidator((data: { id: number }) => data)
  .handler(async ({ data }) => {
    return await prisma.todo.delete({
      where: { id: data.id },
    })
  })

const bulkDeleteTodos = createServerFn({
  method: 'POST',
})
  .inputValidator((data: { ids: Array<number> }) => {
    if (data.ids.length === 0) {
      throw new Error('No todos selected')
    }
    return data
  })
  .handler(async ({ data }) => {
    return await prisma.todo.deleteMany({
      where: {
        id: {
          in: data.ids,
        },
      },
    })
  })

export const Route = createFileRoute('/todos/$id/edit/')({
  component: RouteComponent,
  loader: async () => await getTodos(),
})

function RouteComponent() {
  const router = useRouter()
  const todos = Route.useLoaderData()
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editName, setEditName] = useState('')
  const [isDeleting, setIsDeleting] = useState<number | null>(null)
  const [isBulkDeleting, setIsBulkDeleting] = useState(false)
  const [isUpdating, setIsUpdating] = useState<number | null>(null)

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(todos.map((todo) => todo.id)))
    } else {
      setSelectedIds(new Set())
    }
  }

  const handleSelect = (id: number, checked: boolean) => {
    const newSelected = new Set(selectedIds)
    if (checked) {
      newSelected.add(id)
    } else {
      newSelected.delete(id)
    }
    setSelectedIds(newSelected)
  }

  const handleStartEdit = (todo: { id: number; name: string }) => {
    setEditingId(todo.id)
    setEditName(todo.name)
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditName('')
  }

  const handleSaveEdit = async (id: number) => {
    if (!editName.trim()) {
      return
    }

    setIsUpdating(id)
    try {
      await updateTodo({ data: { id, name: editName } })
      router.invalidate()
      setEditingId(null)
      setEditName('')
    } catch (error) {
      console.error('Failed to update todo:', error)
    } finally {
      setIsUpdating(null)
    }
  }

  const handleToggleComplete = async (id: number, currentStatus: boolean) => {
    setIsUpdating(id)
    try {
      await updateTodo({ data: { id, isComplete: !currentStatus } })
      router.invalidate()
    } catch (error) {
      console.error('Failed to update todo:', error)
    } finally {
      setIsUpdating(null)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this todo?')) {
      return
    }

    setIsDeleting(id)
    try {
      await deleteTodo({ data: { id } })
      router.invalidate()
      setSelectedIds((prev) => {
        const newSet = new Set(prev)
        newSet.delete(id)
        return newSet
      })
    } catch (error) {
      console.error('Failed to delete todo:', error)
    } finally {
      setIsDeleting(null)
    }
  }

  const handleBulkDelete = async () => {
    if (selectedIds.size === 0) {
      return
    }

    if (
      !confirm(`Are you sure you want to delete ${selectedIds.size} todo(s)?`)
    ) {
      return
    }

    setIsBulkDeleting(true)
    try {
      await bulkDeleteTodos({ data: { ids: Array.from(selectedIds) } })
      router.invalidate()
      setSelectedIds(new Set())
    } catch (error) {
      console.error('Failed to delete todos:', error)
    } finally {
      setIsBulkDeleting(false)
    }
  }

  const allSelected = todos.length > 0 && selectedIds.size === todos.length

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.navigate({ to: '/' })}
              className="text-gray-400 hover:text-white hover:bg-gray-900 shrink-0"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent break-words">
                Manage Todos
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm">
                Edit, delete, or bulk manage your todos
              </p>
            </div>
          </div>
          {selectedIds.size > 0 && (
            <Button
              variant="destructive"
              onClick={handleBulkDelete}
              disabled={isBulkDeleting}
              className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto text-sm sm:text-base"
            >
              {isBulkDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span className="hidden sm:inline">Deleting...</span>
                  <span className="sm:hidden">Deleting</span>
                </>
              ) : (
                <>
                  <Trash2 className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">
                    Delete Selected ({selectedIds.size})
                  </span>
                  <span className="sm:hidden">Delete ({selectedIds.size})</span>
                </>
              )}
            </Button>
          )}
        </div>

        {todos.length === 0 ? (
          <div className="border border-dashed border-gray-800 bg-gray-950/50 rounded-lg p-8 sm:p-12 text-center">
            <p className="text-gray-400 text-sm sm:text-base">No todos found</p>
          </div>
        ) : (
          <>
            {/* Desktop/Tablet Table View */}
            <div className="hidden lg:block border border-gray-800 rounded-lg bg-gray-950/30 backdrop-blur-sm overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800 hover:bg-gray-900/50">
                      <TableHead className="w-12">
                        <Checkbox
                          checked={allSelected}
                          onCheckedChange={handleSelectAll}
                          className="border-gray-700"
                        />
                      </TableHead>
                      <TableHead className="text-gray-300 font-semibold text-sm">
                        Task
                      </TableHead>
                      <TableHead className="text-gray-300 font-semibold text-sm">
                        Status
                      </TableHead>
                      <TableHead className="text-gray-300 font-semibold text-sm">
                        Created
                      </TableHead>
                      <TableHead className="text-gray-300 font-semibold text-right text-sm">
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
                        <TableCell>
                          <Checkbox
                            checked={selectedIds.has(todo.id)}
                            onCheckedChange={(checked) =>
                              handleSelect(todo.id, checked as boolean)
                            }
                            className="border-gray-700"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {editingId === todo.id ? (
                            <div className="flex items-center gap-2">
                              <Input
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    handleSaveEdit(todo.id)
                                  } else if (e.key === 'Escape') {
                                    handleCancelEdit()
                                  }
                                }}
                                className="bg-gray-900 border-gray-700 text-white h-8 text-sm"
                                autoFocus
                              />
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => handleSaveEdit(todo.id)}
                                disabled={
                                  isUpdating === todo.id || !editName.trim()
                                }
                                className="h-8 w-8 text-green-400 hover:text-green-300 hover:bg-green-500/20"
                              >
                                {isUpdating === todo.id ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Check className="h-4 w-4" />
                                )}
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={handleCancelEdit}
                                disabled={isUpdating === todo.id}
                                className="h-8 w-8 text-gray-400 hover:text-gray-300 hover:bg-gray-800"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <span className="text-white text-sm">
                              {todo.name}
                            </span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={todo.isComplete ? 'default' : 'secondary'}
                            className={`cursor-pointer text-xs ${
                              todo.isComplete
                                ? 'bg-green-500/20 text-green-400 border-green-500/30'
                                : 'bg-gray-800 text-gray-300 border-gray-700'
                            } ${isUpdating === todo.id ? 'opacity-50' : ''}`}
                            onClick={() =>
                              handleToggleComplete(todo.id, todo.isComplete)
                            }
                          >
                            {todo.isComplete ? 'Complete' : 'Pending'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-400 text-sm">
                          {new Date(todo.createdAt).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            },
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            {editingId !== todo.id && (
                              <>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => handleStartEdit(todo)}
                                  className="h-8 w-8 text-gray-400 hover:text-blue-400 hover:bg-blue-500/20"
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => handleDelete(todo.id)}
                                  disabled={isDeleting === todo.id}
                                  className="h-8 w-8 text-gray-400 hover:text-red-400 hover:bg-red-500/20"
                                >
                                  {isDeleting === todo.id ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                  ) : (
                                    <Trash2 className="h-4 w-4" />
                                  )}
                                </Button>
                              </>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Mobile/Tablet Card View */}
            <div className="lg:hidden space-y-3">
              <div className="flex items-center gap-2 mb-3 px-2">
                <Checkbox
                  checked={allSelected}
                  onCheckedChange={handleSelectAll}
                  className="border-gray-700"
                />
                <span className="text-sm text-gray-400">
                  Select all ({selectedIds.size} selected)
                </span>
              </div>
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="border border-gray-800 rounded-lg bg-gray-950/30 backdrop-blur-sm p-4 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={selectedIds.has(todo.id)}
                      onCheckedChange={(checked) =>
                        handleSelect(todo.id, checked as boolean)
                      }
                      className="border-gray-700 mt-1"
                    />
                    <div className="flex-1 min-w-0 space-y-2">
                      {editingId === todo.id ? (
                        <div className="space-y-2">
                          <Input
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleSaveEdit(todo.id)
                              } else if (e.key === 'Escape') {
                                handleCancelEdit()
                              }
                            }}
                            className="bg-gray-900 border-gray-700 text-white text-sm"
                            autoFocus
                          />
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleSaveEdit(todo.id)}
                              disabled={
                                isUpdating === todo.id || !editName.trim()
                              }
                              className="h-8 text-green-400 hover:text-green-300 hover:bg-green-500/20"
                            >
                              {isUpdating === todo.id ? (
                                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                              ) : (
                                <Check className="h-4 w-4 mr-2" />
                              )}
                              Save
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={handleCancelEdit}
                              disabled={isUpdating === todo.id}
                              className="h-8 text-gray-400 hover:text-gray-300 hover:bg-gray-800"
                            >
                              <X className="h-4 w-4 mr-2" />
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <h3 className="font-medium text-white text-base break-words">
                            {todo.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge
                              variant={
                                todo.isComplete ? 'default' : 'secondary'
                              }
                              className={`cursor-pointer text-xs ${
                                todo.isComplete
                                  ? 'bg-green-500/20 text-green-400 border-green-500/30'
                                  : 'bg-gray-800 text-gray-300 border-gray-700'
                              } ${isUpdating === todo.id ? 'opacity-50' : ''}`}
                              onClick={() =>
                                handleToggleComplete(todo.id, todo.isComplete)
                              }
                            >
                              {todo.isComplete ? 'Complete' : 'Pending'}
                            </Badge>
                            <span className="text-gray-400 text-xs">
                              {new Date(todo.createdAt).toLocaleDateString(
                                'en-US',
                                {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                },
                              )}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    {editingId !== todo.id && (
                      <div className="flex items-center gap-1 shrink-0">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleStartEdit(todo)}
                          className="h-8 w-8 text-gray-400 hover:text-blue-400 hover:bg-blue-500/20"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleDelete(todo.id)}
                          disabled={isDeleting === todo.id}
                          className="h-8 w-8 text-gray-400 hover:text-red-400 hover:bg-red-500/20"
                        >
                          {isDeleting === todo.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
