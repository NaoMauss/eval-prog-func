import { Student, Professor, Session } from '../types/models';

// Données fictives pour les étudiants
const mockStudents: Student[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', gender: 'male' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', gender: 'female' },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', gender: 'female' },
    { id: 4, firstName: 'Bob', lastName: 'Brown', gender: 'male' },
    { id: 5, firstName: 'Charlie', lastName: 'Davis', gender: 'male' },
    { id: 6, firstName: 'Diana', lastName: 'Martinez', gender: 'female' },
    { id: 7, firstName: 'Edward', lastName: 'Garcia', gender: 'male' },
    { id: 8, firstName: 'Fiona', lastName: 'Miller', gender: 'female' },
    { id: 9, firstName: 'George', lastName: 'Wilson', gender: 'male' },
    { id: 10, firstName: 'Hannah', lastName: 'Moore', gender: 'female' },
    { id: 11, firstName: 'Ivan', lastName: 'Taylor', gender: 'male' },
    { id: 12, firstName: 'Julia', lastName: 'Anderson', gender: 'female' },
    { id: 13, firstName: 'Kevin', lastName: 'Thomas', gender: 'male' },
    { id: 14, firstName: 'Laura', lastName: 'Jackson', gender: 'female' },
    { id: 15, firstName: 'Michael', lastName: 'White', gender: 'male' },
    { id: 16, firstName: 'Natalie', lastName: 'Harris', gender: 'female' },
    { id: 17, firstName: 'Oliver', lastName: 'Martin', gender: 'male' },
    { id: 18, firstName: 'Paula', lastName: 'Thompson', gender: 'female' },
    { id: 19, firstName: 'Quentin', lastName: 'Lee', gender: 'male' },
    { id: 20, firstName: 'Rachel', lastName: 'Walker', gender: 'female' }
];

// Données fictives pour les professeurs
const mockProfessors: Professor[] = [
    { id: 1, firstName: 'Alice', lastName: 'Johnson' },
    { id: 2, firstName: 'Bob', lastName: 'Brown' },
    { id: 3, firstName: 'Catherine', lastName: 'Williams' },
    { id: 4, firstName: 'David', lastName: 'Jones' },
    { id: 5, firstName: 'Eleanor', lastName: 'Wilson' }
];

// Données fictives pour les sessions
const mockSessions: Session[] = [
    { id: 1, courseName: 'Math', professor: mockProfessors[0], students: [mockStudents[0], mockStudents[1], mockStudents[2]], city: 'Paris', date: '2024-06-15' },
    { id: 2, courseName: 'Science', professor: mockProfessors[1], students: [mockStudents[3], mockStudents[4], mockStudents[5]], city: 'Lyon', date: '2024-06-16' },
    { id: 3, courseName: 'History', professor: mockProfessors[2], students: [mockStudents[6], mockStudents[7], mockStudents[8]], city: 'Marseille', date: '2024-06-17' },
    { id: 4, courseName: 'Geography', professor: mockProfessors[3], students: [mockStudents[9], mockStudents[10], mockStudents[11]], city: 'Bordeaux', date: '2024-06-18' },
    { id: 5, courseName: 'Physics', professor: mockProfessors[4], students: [mockStudents[12], mockStudents[13], mockStudents[14]], city: 'Toulouse', date: '2024-06-19' },
    { id: 6, courseName: 'Chemistry', professor: mockProfessors[0], students: [mockStudents[15], mockStudents[16], mockStudents[17]], city: 'Nice', date: '2024-06-20' },
    { id: 7, courseName: 'Biology', professor: mockProfessors[1], students: [mockStudents[18], mockStudents[19], mockStudents[0]], city: 'Nantes', date: '2024-06-21' },
    { id: 8, courseName: 'Literature', professor: mockProfessors[2], students: [mockStudents[1], mockStudents[2], mockStudents[3]], city: 'Strasbourg', date: '2024-06-22' },
    { id: 9, courseName: 'Philosophy', professor: mockProfessors[3], students: [mockStudents[4], mockStudents[5], mockStudents[6]], city: 'Rennes', date: '2024-06-23' },
    { id: 10, courseName: 'Art', professor: mockProfessors[4], students: [mockStudents[7], mockStudents[8], mockStudents[9]], city: 'Lille', date: '2024-06-24' }
];

export { mockStudents, mockProfessors, mockSessions };
