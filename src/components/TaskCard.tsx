import { Task } from "../types/task";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, Flag, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { useTaskStore } from "../store/taskStore";

interface TaskCardProps {
  task: Task;
}

const priorityColors = {
  low: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

const statusColors = {
  pending: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  completed: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
};

export function TaskCard({ task }: TaskCardProps) {
  const navigate = useNavigate();
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id);
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardHeader onClick={() => navigate(`/task/${task.id}`)}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{task.title}</CardTitle>
            <CardDescription className="mt-2">
              {task.description || "No description"}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent onClick={() => navigate(`/task/${task.id}`)}>
        <div className="flex flex-wrap gap-2">
          <span className={`px-2 py-1 rounded-md text-xs font-medium ${statusColors[task.status]}`}>
            {task.status}
          </span>
          <span className={`px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 ${priorityColors[task.priority]}`}>
            <Flag className="h-3 w-3" />
            {task.priority}
          </span>
          {task.dueDate && (
            <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {format(new Date(task.dueDate), "MMM dd, yyyy")}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-xs text-muted-foreground">
          Created: {format(new Date(task.createdAt), "MMM dd, yyyy")}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDelete}
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
