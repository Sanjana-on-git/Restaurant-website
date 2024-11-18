import { Student, Course, DashboardStats } from '../types';

export const students: Student[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    grade: 'A',
    email: 'emma.t@school.edu',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '2',
    name: 'James Wilson',
    grade: 'B+',
    email: 'james.w@school.edu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '3',
    name: 'Sofia Rodriguez',
    grade: 'A-',
    email: 'sofia.r@school.edu',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const courses: Course[] = [
  {
    id: '1',
    name: 'Advanced Mathematics',
    instructor: 'Dr. Sarah Chen',
    credits: 4,
    description: 'Covers calculus, linear algebra, and statistical analysis'
  },
  {
    id: '2',
    name: 'World History',
    instructor: 'Prof. Michael Brown',
    credits: 3,
    description: 'Comprehensive study of major historical events and their impact'
  },
  {
    id: '3',
    name: 'Computer Science',
    instructor: 'Dr. David Kumar',
    credits: 4,
    description: 'Introduction to programming, algorithms, and data structures'
  }
];

export const dashboardStats: DashboardStats = {
  totalStudents: 342,
  totalCourses: 24,
  averageGrade: 3.7
};