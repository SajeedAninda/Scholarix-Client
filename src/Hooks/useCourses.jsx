import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosInstance from './useAxiosInstance';

const useCourses = () => {
    let axiosInstance = useAxiosInstance();

    const { data: courses, isLoading: isCoursesLoading } = useQuery({
        queryKey: ['allCourses'],
        queryFn: async () => {
            const response = await axiosInstance(`/allCourses`);
            return response.data;
        }
    })

    return [courses, isCoursesLoading];
};

export default useCourses;