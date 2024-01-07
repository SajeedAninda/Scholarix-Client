import React from 'react';
import choose1 from "../../assets/WhyChooseScholarixImg/chooseImg1.jpg"
import choose2 from "../../assets/WhyChooseScholarixImg/chooseImg2.jpg"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WhyChooseScholarix = () => {
    return (
        <div>
            <div className='w-[90%] mx-auto'>
                <div className='pt-16 pb-8'>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Why Choose Scholarix</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">At Scholarix, we take pride in being more than just an education consultancy; we are your dedicated partners in navigating the intricate landscape of global education. Our commitment to excellence extends beyond mere guidance; we are devoted to empowering your educational journey at every step.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row'>
                    <div className='images flex-1 relative'>
                        <img className='w-[65%] rounded-lg border-8 border-[#ed4747]' src={choose2} alt="" />
                        <img className='w-[65%] rounded-lg border-8 border-[#ed4747] absolute top-80 left-32' src={choose1} alt="" />
                    </div>

                    <div className='flex-1'>
                        <Accordion style={{ backgroundColor: '#ffffff', border: "4px solid #ed4747",borderRadius: '8px',marginBottom:"6px", padding: "8px", marginBottom: '2px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '20px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>Global Expertise</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontSize: '16px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>
                                    Scholarix brings a wealth of global expertise to guide you through the complex world of international education. Our team comprises seasoned professionals with extensive knowledge of various educational systems, ensuring you receive tailored advice for your academic journey.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                        <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "4px solid #ed4747",borderRadius: '8px',marginBottom:"6px", padding: "8px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '20px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}> Personalized Guidance</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontSize: '16px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>
                                    At Scholarix, we believe in personalized guidance. Our dedicated consultants take the time to understand your aspirations, academic background, and preferences. This allows us to provide customized solutions, ensuring you make informed decisions that align with your goals.</Typography>
                            </AccordionDetails>
                        </Accordion>


                        <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "4px solid #ed4747",borderRadius: '8px',marginBottom:"6px", padding: "8px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '20px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>Comprehensive Services
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontSize: '16px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>
                                    From university selection and application assistance to visa support and post-arrival services, Scholarix offers a comprehensive suite of services. We streamline the entire process, providing end-to-end support to make your transition into international education seamless and stress-free.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                        <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "4px solid #ed4747",borderRadius: '8px',marginBottom:"6px", padding: "8px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '20px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>Network of Top Institutions</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontSize: '16px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>
                                    Partnering with some of the world's leading universities, Scholarix opens doors to a diverse range of academic opportunities. Our extensive network allows you to explore programs that match your interests and ambitions, ensuring you receive a top-notch education.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "4px solid #ed4747",borderRadius: '8px',marginBottom:"6px", padding: "8px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '20px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>Holistic Approach to Education</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontSize: '16px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>
                                    Scholarix adopts a holistic approach to education, emphasizing not only academic success but also personal and professional development. We guide you in selecting programs that align with your long-term career goals, ensuring you graduate with a well-rounded skill set.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                        <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "4px solid #ed4747",borderRadius: '8px',marginBottom:"6px", padding: "8px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '20px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>Transparent Process</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontSize: '16px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>
                                    Transparency is at the core of Scholarix's ethos. We demystify the application process, keeping you informed at every step. Our consultants provide clear timelines, breakdowns of costs, and detailed information, empowering you to make decisions with confidence.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "4px solid #ed4747",borderRadius: '8px',marginBottom:"6px", padding: "8px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '20px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>Post-Placement Support</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontSize: '16px', color: '#0e2b45', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>
                                    Scholarix's commitment doesn't end with securing your admission. We offer post-placement support, assisting you in acclimating to your new academic environment. Whether it's finding accommodation, navigating local services, or addressing any concerns, we're here for you beyond enrollment.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseScholarix;