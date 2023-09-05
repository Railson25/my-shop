'use client'

import { Button } from "./button"
import { CardCourse } from "./card-course"

export const Course = () => {
    return(
        <div className="w-full py-28 flex items-center flex-col">
            <h2 className="text-[60px] font-bold leading-[75px] text-[#07152F;]">Our Popular Course</h2>
            <p className="w-[708px] text-[22px] leading-[33px] font-medium text-center mt-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th </p>

            <div className="gap-x-[63px] gap-y-[57px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <CardCourse 
                    title="Web Design  Basic to advance"
                    note="5.0"
                    rating="2rating"
                    src="/images/course-image-one.png"
                    price={70}
                />
                <CardCourse 
                    title="Web development  Basic to advance"
                    note="5.0"
                    rating="2rating"
                    src="/images/course-image-two.png"
                    price={50}
                />
                <CardCourse 
                    title="Digital marketing  Basic to advance"
                    note="5.0"
                    rating="2rating"
                    src="/images/course-image-three.png"
                    price={40}
                />
                <CardCourse 
                    title="App Design  Basic to advance"
                    note="5.0"
                    rating="2rating"
                    src="/images/course-image-four.png"
                    price={90}
                />
                <CardCourse 
                    title="Mobile design  Basic to advance"
                    note="5.0"
                    rating="2rating"
                    src="/images/course-image-five.png"
                    price={75}
                />
                <CardCourse 
                    title="Graphics Design  Basic to advance"
                    note="5.0"
                    rating="2rating"
                    src="/images/course-image-six.png"
                    price={95}
                />
            </div>
            <Button 
                className="mt-[75px] hover:text-[#6a6b6c] hover:bg-white"
                label="See More"
            />
        </div>

    )
}