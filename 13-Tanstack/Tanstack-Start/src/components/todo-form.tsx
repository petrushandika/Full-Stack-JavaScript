import { useState } from 'react'
import { useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { prisma } from '@/db'

const createTodo = createServerFn({
  method: 'POST',
})
  .inputValidator((data: { name: string }) => {
    if (!data.name || data.name.trim().length === 0) {
      throw new Error('Todo name is required')
    }
    return data
  })
  .handler(async ({ data }) => {
    return await prisma.todo.create({
      data: {
        name: data.name.trim(),
        isComplete: false,
      },
    })
  })

export function TodoForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!name.trim()) {
      setError('Todo name is required')
      return
    }

    setIsSubmitting(true)

    try {
      await createTodo({ data: { name } })
      router.invalidate()
      router.navigate({ to: '/' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create todo')
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-4xl bg-gray-950/50 border-gray-800 backdrop-blur-sm mx-auto">
      <CardHeader className="space-y-2 sm:space-y-3 md:space-y-4 pb-3 sm:pb-4 md:pb-6 px-3 sm:px-4 md:px-6 pt-4 sm:pt-5 md:pt-6">
        <div className="flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.navigate({ to: '/' })}
            className="text-gray-400 hover:text-white hover:bg-gray-900 shrink-0 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
          >
            <ArrowLeft className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </Button>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent break-words leading-tight">
              Create New Todo
            </CardTitle>
            <CardDescription className="mt-1.5 sm:mt-2 md:mt-3 text-gray-400 text-xs sm:text-sm md:text-base">
              Add a new task to your todo list
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-3 sm:space-y-4 md:space-y-6 px-3 sm:px-4 md:px-6 pb-4 sm:pb-5 md:pb-6">
          <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
            <Label
              htmlFor="name"
              className="text-gray-300 font-medium text-xs sm:text-sm md:text-base"
            >
              Todo Name
            </Label>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setError(null)
              }}
              placeholder="Enter todo name..."
              disabled={isSubmitting}
              className={`bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600 text-sm sm:text-base h-9 sm:h-10 md:h-11 ${
                error
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : ''
              }`}
            />
            {error && (
              <p className="text-xs sm:text-sm text-red-400 font-medium mt-1">
                {error}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-2 md:gap-3 pt-3 sm:pt-4 md:pt-6 border-t border-gray-800 px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.navigate({ to: '/' })}
            disabled={isSubmitting}
            className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white w-full sm:w-auto text-xs sm:text-sm md:text-base h-9 sm:h-10 md:h-11 order-2 sm:order-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting || !name.trim()}
            className="bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px] sm:min-w-[120px] w-full sm:w-auto text-xs sm:text-sm md:text-base h-9 sm:h-10 md:h-11 order-1 sm:order-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 animate-spin" />
                <span className="hidden sm:inline">Creating...</span>
                <span className="sm:hidden">Creating</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Create Todo</span>
                <span className="sm:hidden">Create</span>
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
