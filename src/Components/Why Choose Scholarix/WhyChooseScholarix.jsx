import React from 'react';
import choose1 from "../../assets/WhyChooseScholarixImg/chooseImg1.jpg"
import choose2 from "../../assets/WhyChooseScholarixImg/chooseImg2.jpg"

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

                <div className='flex'>
                    <div className='images flex-1 relative'>
                        <img className='w-[30%] rounded-lg' src={choose2} alt="" />
                        <img className='w-[30%] rounded-lg absolute top-80 left-32' src={choose1} alt="" />
                    </div>

                    <div className='flex-1'>
                        <Accordion style={{ backgroundColor: '#ffffff', border: "2px solid #05386B", padding: "8px", marginBottom: '2px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '24px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>What is an asset management system, and how does it benefit our organization?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontSize: '16px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                    An asset management system is a digital platform designed to track, monitor, and manage an organization's assets efficiently. It provides real-time insights, improves resource allocation, enhances accountability, and ultimately contributes to increased operational efficiency.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "2px solid #05386B", padding: "8px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '24px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}> How user-friendly is the asset management system, and will it require extensive training for our team to adapt?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontSize: '16px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                    Our asset management system is designed with a user-friendly interface, ensuring ease of use for administrators and employees. While comprehensive training materials are available, the intuitive design minimizes the learning curve, allowing users to quickly adapt and utilize its features effectively.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "2px solid #05386B", padding: "8px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '24px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>How does the asset management system contribute to cost savings and improved financial management?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontSize: '16px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                    The system provides accurate insights into asset utilization, maintenance schedules, and depreciation, enabling better financial planning. By optimizing resource allocation and reducing downtime through proactive maintenance, the asset management system contributes to cost savings and improved overall financial management.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "2px solid #05386B", padding: "8px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '24px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>How does the asset management system handle scalability as our organization grows and acquires more assets?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontSize: '16px', color: '#05386B', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                    The asset management system is scalable and can easily accommodate the growing needs of your organization. Whether you have a small business or a large enterprise, the system is designed to scale with your requirements, providing flexibility and adaptability to support your evolving asset management needs.
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