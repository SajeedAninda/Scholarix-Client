import React from 'react';
import useAxiosInstance from './useAxiosInstance';
import { useQuery } from '@tanstack/react-query';

const useConsultants = () => {
    let axiosInstance = useAxiosInstance();

    const { data: consultants, isLoading: isConsultantsLoading, refetch } = useQuery({
        queryKey: ['consultants'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getConsultants`);
            return response.data;
        }
    })

    return {
        consultants,
        isConsultantsLoading,
        refetch
    }
};

export default useConsultants;