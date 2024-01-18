import React from 'react';
import scholarshipImg from "../../assets/ScholarshipImage/scholarshipImg.jpg"
import DifferentScholarships from './DifferentScholarships';
import CoursesWithScholarships from './CoursesWithScholarships';

const Scholarships = () => {
    return (
        <div className='w-[90%] mx-auto py-8'>
            <div>
                <div className="max-w-3xl mx-auto pb-12">
                    <h1 className="text-lg text-[#0e2b45] text-center">Study With Scholarship</h1>
                    <p className="text-xl font-semibold text-[#0e2b45] text-center">Our scholarships are designed to recognize and support exceptional individuals who demonstrate academic excellence, leadership, and a commitment to making a positive impact. As you explore the possibilities that our scholarships offer, we invite you to embark on a journey of educational enrichment, personal growth, and boundless opportunities.
                    </p>
                </div>

                <div className='flex gap-10 items-center justify-between pb-12'>
                    <div className="max-w-3xl mx-auto flex-1">
                        <h1 className="text-lg text-[#0e2b45] text-left">Overview</h1>
                        <p className="text-xl font-semibold text-[#0e2b45] text-left">At Scholarix, our scholarships are a testament to our unwavering commitment to fostering educational excellence and empowering deserving individuals. Our mission is to break down barriers to education, recognizing and supporting students who demonstrate exceptional dedication to their academic pursuits, leadership qualities, and a strong commitment to making a positive impact on their communities and the world. These scholarships are not just financial support; they are a reflection of our belief in the transformative power of education to shape lives and drive positive change. By offering these opportunities, we aim to cultivate a community of scholars who will go on to become leaders, innovators, and contributors to society. At the heart of our scholarships is the vision to unlock the full potential of bright minds and inspire a future where education knows no bounds.
                        </p>
                    </div>

                    <div className='flex-1'>
                        <img className='rounded-lg border-8 border-[#ed4747]' src={scholarshipImg} alt="" />
                    </div>
                </div>

                <DifferentScholarships></DifferentScholarships>
                <CoursesWithScholarships></CoursesWithScholarships>
            </div>
        </div>
    );
};

export default Scholarships;