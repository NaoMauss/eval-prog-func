type Student = {
    id: number;
    firstName: string;
    lastName: string;
    gender: 'male' | 'female';
};

type Group = {
    students: Student[];
    isMixt: boolean;
}

type Professor = {
    id: number;
    firstName: string;
    lastName: string;
};

type Session = {
    id: number;
    courseName: string;
    professor: Professor;
    students: Student[];
    city: string;
    date: string;
};

export type {
    Student,
    Group,
    Professor,
    Session
}