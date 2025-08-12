export interface TasksSchema{
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string,
}
export interface NewTaskSchema {
    title: string;
    summary: string;
    dueDate: string;
}