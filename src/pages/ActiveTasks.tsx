import { useTaskStore } from "../store/taskStore";
import { TaskCard } from "../components/TaskCard";
import { TaskForm } from "../components/TaskForm";
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function ActiveTasks() {
  const tasks = useTaskStore((state) => state.tasks);
  const activeTasks = tasks.filter((task) => task.status === "active");

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Active Tasks</h1>
          <p className="text-muted-foreground">
            Tasks currently in progress ({activeTasks.length})
          </p>
        </div>
        <TaskForm />
      </div>

      {activeTasks.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium">No active tasks</p>
            <p className="text-sm text-muted-foreground">
              Create a task and set its status to active
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activeTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
