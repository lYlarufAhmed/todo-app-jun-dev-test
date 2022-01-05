export interface TodoItem {
    id: number;
    title: string;
    description: string;
    status: 'to-do' | 'in-progress' | 'done';
}

export interface User {
    name: string;
    birth_year: string;
}

