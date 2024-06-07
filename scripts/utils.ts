import type { Professor, Session, Student, Group } from '../src/types/models'
import { mockStudents, mockProfessors, mockSessions } from '../src/assets/mock-data'

type AttributeModel = {
    [key: string]: string | number
}

const getAllProfessorInASession = (sessions: Session[]):Professor[] => {
    const rawProfessors = sessions.map(session => session.professor)
    const uniqueProfessors = [...new Set(rawProfessors)];
    return uniqueProfessors;
}

const getAllProfessor = (professors: Professor[]):Professor[] => professors


const getProfessorByAttribute = (professors: Professor[], attribute: AttributeModel):Professor[] => {
    const keys = Object.keys(attribute)
    const values = Object.values(attribute)

    return professors.filter(professor => {
        return keys.map((key, index) => {
            return professor[key] === values[index]
        })
    })
}

const createGroupOfStudents = (students: Student[]):Student[] => students

const assignGroupToSession = (session: Session, group: Student[]):Session => {
    const previousGroup = session.students
    const newSession = {
        ...session,
        students: [...previousGroup, ...createGroupOfStudents(group)]
    }
    return newSession
}

const assignProfessorToSession = (session: Session, professor: Professor):Session => {
    const newSession = {
        ...session,
        professor: professor
    }
    return newSession
}

const getStudentsBySession = (session: Session):Student[] => session.students

const filterStudentsByGender = (students: Student[], gender: "male" | "female"):Student[] => {
    return students.filter(student => student.gender === gender)
}

const findSessionWithMostStudents = (sessions: Session[]):Session => {
    return sessions.reduce((acc, session) => {
        return session.students.length > acc.students.length ? session : acc
    }, sessions[0])
}

const findAllStudentsThatHaveSessionInCity = (sessions: Session[], city: string):Student[] => {
    const sessionsInCity = sessions.filter(session => session.city === city)
    const rawStudents = sessionsInCity.map(session => session.students)
    const flatStudents = rawStudents.flat()
    const uniqueStudents = [...new Set(flatStudents)];
    return uniqueStudents;
}

const findStudentsThatAreInMultipleSessions = (sessions: Session[], students: Student[]):Student[] => {
    const rawStudents = sessions.map(session => session.students)
    const flatStudents = rawStudents.flat()
    const countStudents = flatStudents.reduce((acc, student) => {
        return {
            ...acc,
            [student.id]: acc[student.id] ? acc[student.id] + 1 : 1
        }
    }, {})
    const keysCountStudents = Object.keys(countStudents)
    const studentsIdInMultipleSessions = keysCountStudents.filter(key => countStudents[key] > 1)
    const studentsInMultipleSessions = studentsIdInMultipleSessions
    .map(id => students.find(student => student.id === parseInt(id)))
    .filter((student): student is Student => student !== undefined);
    return studentsInMultipleSessions
}

const findProfessorsThatAreInMultipleSessions = (sessions: Session[], professors: Professor[]):Professor[] => {
    const rawProfessors = sessions.map(session => session.professor)
    const countProfessors = rawProfessors.reduce((acc, professor) => {
        return {
            ...acc,
            [professor.id]: acc[professor.id] ? acc[professor.id] + 1 : 1
        }
    }, {})
    const keysCountProfessors = Object.keys(countProfessors)
    const professorsIdInMultipleSessions = keysCountProfessors.filter(key => countProfessors[key] > 1)
    const professorsInMultipleSessions = professorsIdInMultipleSessions
    .map(id => professors.find(professor => professor.id === parseInt(id)))
    .filter((professor): professor is Professor => professor !== undefined);
    return professorsInMultipleSessions
}

const findTop3StudentsByProfessor = (sessions: Session[], professors: Professor[], students: Student[]):{professor: Professor, students: Student[]}[] => {
    const professorsWithTop3Students = professors.map(professor => {
        const sessionsByProfessor = sessions.filter(session => session.professor.id === professor.id)
        const rawStudents = sessionsByProfessor.map(session => session.students)
        const flatStudents = rawStudents.flat()
        const countStudents = flatStudents.reduce((acc, student) => {
            return {
                ...acc,
                [student.id]: acc[student.id] ? acc[student.id] + 1 : 1
            }
        }, {})
        const keysCountStudents = Object.keys(countStudents)
        const sortedStudents = keysCountStudents.sort((a, b) => countStudents[b] - countStudents[a])
        const top3Students = sortedStudents.slice(0, 3)
        const studentsInTop3 = top3Students
        .map(id => students.find(student => student.id === parseInt(id)))
        .filter((student): student is Student => student !== undefined);
        return {
            professor,
            students: studentsInTop3
        }
    })
    return professorsWithTop3Students
}

const getSessionsByCity = (sessions: Session[], city: string):Session[] => {
    return sessions.filter(session => session.city === city)
}

const sortSessionsByDate = (sessions: Session[]):Session[] => {
    return sessions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

const getSessionByMonth = (sessions: Session[], month: number):Session[] => {
    return sessions.filter(session => new Date(session.date).getMonth() === month)
}

const getStudentsThatHaveMoreThanXSessions = (sessions: Session[], students: Student[], x: number):Student[] => {
    const rawStudents = sessions.map(session => session.students)
    const flatStudents = rawStudents.flat()
    const countStudents = flatStudents.reduce((acc, student) => {
        return {
            ...acc,
            [student.id]: acc[student.id] ? acc[student.id] + 1 : 1
        }
    }, {})
    const keysCountStudents = Object.keys(countStudents)
    const studentsWithMoreThanXSessions = keysCountStudents
    .filter(key => countStudents[key] > x)
    .map(id => students.find(student => student.id === parseInt(id)))
    .filter((student): student is Student => student !== undefined);
    return studentsWithMoreThanXSessions
}

const findPeopleByName = (people: (Student | Professor)[], letter: string): (Student | Professor)[] => {
    return people.filter(person => {
        return person.firstName.includes(letter) || person.lastName.includes(letter)
    })
}

const createGroup = (groupStudents: Student[], isMixt?: boolean): Group => {
    return {
        students: groupStudents,
        isMixt: isMixt ? isMixt : false
    }
}

const createGroupOf4StudentsWithAtLeastOneGirl = (students: Student[]): Group[] => {
    const girls = filterStudentsByGender(students, 'female');
    const boys = filterStudentsByGender(students, 'male');

    const groupNumber = Math.ceil((girls.length)/4)

    const filteredBoys = (boys.length > (groupNumber*4)) 
    ? boys.splice(0, groupNumber*4)
    : boys

    const remainingBoys = (boys.length > (groupNumber*4)) 
    ? boys.splice(groupNumber*4)
    : []

    const groupsOfBoys = filteredBoys.reduce((acc: Student[][], curr, index) => {
        if (index % 3 === 0) {
            return [...acc, [curr]]
        } else {
            const head = acc.slice(0, -1);
            const tail = acc[acc.length - 1];
            return [...head, [...tail, curr]]
        }
    }, []);

    const formattedGroupsOfBoysWithGirls = groupsOfBoys.map((group, index) => {
        return {
            students: [...group, girls[index]],
            isMixt: true
        }
    })

    const groupsOfBoysRemaining = remainingBoys.reduce((acc: Student[][], curr, index) => {
        if (index % 4 === 0) {
            return [...acc, [curr]]
        } else {
            const head = acc.slice(0, -1);
            const tail = acc[acc.length - 1];
            return [...head, [...tail, curr]]
        }
    }, []);

    const formattedGroupsOfBoysRemaining = groupsOfBoysRemaining.map(group => {
        return {
            students: group,
            isMixt: false
        }
    })

    const allGroups = [...formattedGroupsOfBoysWithGirls, ...formattedGroupsOfBoysRemaining]

    return allGroups
};