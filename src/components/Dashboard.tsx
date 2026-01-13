import React, { useMemo } from 'react';
// Assuming you move your task list to a central place later
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  priority: string;
}

// Demo data (replace with Zustand store later)
const tasks: Task[] = [
  { id: '1', title: 'Task 1', isCompleted: true, priority: 'High' },
  { id: '2', title: 'Task 2', isCompleted: false, priority: 'Medium' },
  { id: '3', title: 'Task 3', isCompleted: false, priority: 'Low' },
];

export default function Dashboard() {
  // Requirement: useMemo for Stats calculation
  const stats = useMemo(() => {
    console.log("Calculating stats..."); // To prove it only runs when 'tasks' change
    const total = tasks.length;
    const completed = tasks.filter(t => t.isCompleted).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, percentage };
  }, [tasks]);

  return (
    <div className="p-8 space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here is your progress.</p>
      </header>

      {/* Stats Section */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-600">Total Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 border-emerald-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-emerald-600">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
          </CardContent>
        </Card>

        <Card className="bg-indigo-50 border-indigo-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-indigo-600">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.percentage}%</div>
            {/* Visual Progress Bar */}
            <div className="w-full bg-indigo-200 h-2 rounded-full mt-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.percentage}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Overview</h2>
        <div className="bg-white border rounded-xl divide-y">
           {tasks.slice(0, 3).map(task => (
             <div key={task.id} className="p-4 flex justify-between items-center">
               <span className="text-sm font-medium">{task.title}</span>
               <span className={`text-xs px-2 py-1 rounded ${task.isCompleted ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                 {task.isCompleted ? 'Done' : 'In Progress'}
               </span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
