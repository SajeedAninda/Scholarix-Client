import React from 'react';
import useAxiosInstance from './useAxiosInstance';
import { useQuery } from '@tanstack/react-query';

const useCountries = () => {
    let axiosInstance = useAxiosInstance();

    const { data: countries, isLoading: isCountriesLoading, refetch } = useQuery({
        queryKey: ['allCountries'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/countryDetails`);
            return response.data;
        }
    })

    return {
        countries,
        isCountriesLoading,
        refetch,
    };
};

export default useCountries;