import "../../App.css";
import {socialMedia} from '../../assets/assets'

const Footer = () => {

    return (
        <>
            <div className="backgroundcolor bg-opacity-100  w-[100%] text-white">
                <div className="flex w-[85%] m-auto py-10 justify-between">
                    <div>
                        <img src="Group 121847.png" alt="" />
                    </div>
                    <div>
                        <img src="button (2).png" alt="" />
                    </div>
                </div>
                <div className=" gradient w-[85%] m-auto h-[5px]"></div>
                {/* services */}
                <div className="w-[85%] m-auto flex-wrap md:flex justify-between ">
                    <div className="w-[35%] ">
                        <div className="font-bold text-lg border-b-4 border-white p-2">
                            Services
                        </div>
                        <div className="flex-wrap md:flex justify-between py-4">
                            <ul>
                                <li className="font-bold text-lg">Digital Marketing</li>
                                <li>Email Nurture</li>
                                <li>SEO</li>
                                <li>Social Media Marketing</li>
                                <li>Conversion Rate Optimization</li>
                                <li>Copy Writing</li>
                                <li>Email Marketing</li>
                                <li>Remarketing</li>
                                <li>PPC</li>
                            </ul>

                            <ul>
                                <li className="font-bold text-lg">Bespoke Web Design</li>
                                <li>Web Design</li>
                                <li>Web Redesign</li>
                                <li>UI/UX Design</li>
                                <li>Brand Indentity and Logo</li>
                                <li className="font-bold text-lg">App Developmen</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>

                            <div className="font-bold text-lg border-b-4 border-white py-2">
                                Home
                            </div>
                            <div className="font-bold text-lg border-b-4 border-white py-2">
                                About Us
                            </div>
                            <div className="font-bold text-lg border-b-4 border-white py-2">
                                Contact Us
                            </div>
                        </div>

                        <div>
                            United Kington,
                            <br />
                            TW4 7LU <br />
                            London
                        </div>
                    </div>

                    <div>
                        <div className="font-bold text-lg border-b-4 border-white py-2 ">
                            Resources
                        </div>
                        <ul className="flex flex-col gap-3 py-3">
                            <li>Our Work</li>
                            <li>Insights</li>
                        </ul>
                    </div>


                    <div className="flex flex-col gap-5">

                        <div className="font-bold text-lg border-b-4 border-white py-2">
                            Social Media
                        </div>
                        <ul className="flex flex-col gap-5">
                            {socialMedia.map((item, i) => {
                                return (

                                    <li className="flex gap-2">
                                        <img src={item.img} alt="" />
                                        <span>{item.name}</span>
                                    </li>


                                )
                            })}

                        </ul>
                    </div>



                </div>

                <div className="flex justify-end px-20 mt-[2%]">
                    <div className="flex flex-col gap-2">

                        <span>Subscribe to our weekly newsletter today!</span>
                        <img src="subscribe.png" alt="" />
                    </div>
                </div>

                <div className="flex justify-center pt-10">
                    ©Copyright. 2024 Web Magnetism All rights reserved I Terms and condition I Privacy Policy.
                </div>
            </div>
        </>
    );
};
export default Footer;
