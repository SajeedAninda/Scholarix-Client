import React from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';

const Consultants = () => {
    let axiosInstance = useAxiosInstance();

    const { data: consultants, isLoading: isConsultantsLoading, refetch } = useQuery({
        queryKey: ['consultants'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getConsultants`);
            return response.data;
        }
    })

    return (
        <div className='w-[90%] mx-auto py-8'>
            <div>
                <div className="max-w-3xl mx-auto text-center pb-8">
                    <h1 className="mb-4 text-lg text-[#0e2b45]">Consultants</h1>
                    <p className="text-xl font-semibold text-[#0e2b45]">
                        Explore the diverse expertise of our team of dedicated consultants — your guiding heroes who are always ready to support and illuminate your educational journey. In every circumstance, whether you're contemplating study abroad options, seeking career advice, or navigating the intricacies of educational technology, our consultants bring a wealth of knowledge and experience.
                    </p>
                </div>
            </div>

            <div>
                {
                    consultants ?
                        <div className='grid grid-cols-3 gap-10'>
                            {
                                consultants.map(consultant =>
                                    <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#ed4747] to-[#920707] before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden shadow-2xl">
                                        <div className="w-28 h-28 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-100 group-hover:-translate-x-24  group-hover:-translate-y-12 transition-all duration-500">
                                            <img className='w-28 h-28 object-cover rounded-full' src={consultant?.imageUrl} alt="" />
                                        </div>
                                        <div className="z-10 group-hover:text-white group-hover:-translate-y-10 transition-all duration-500">
                                            <span className="text-2xl font-semibold">{consultant?.fullName}</span>
                                            <p>{consultant?.expertise}</p>
                                        </div>
                                        <a className="relative px-5 py-1 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-2xl active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0" href="#">See Details</a>
                                    </div>
                                )
                            }
                        </div>
                        :
                        <div>
                            Loading
                        </div>
                }
            </div>
        </div>
    );
};

export default Consultants;