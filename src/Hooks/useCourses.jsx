import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosInstance from './useAxiosInstance';

const useCourses = () => {
    let axiosInstance = useAxiosInstance();

    const { data: courses, isLoading: isCoursesLoading, refetch } = useQuery({
        queryKey: ['allCourses'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/allCourses`);
            return response.data;
        }
    })

    return {
        courses,
        isCoursesLoading,
        refetch,
    };
};

export default useCourses;