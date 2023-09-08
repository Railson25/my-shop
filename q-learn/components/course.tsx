'use client'

import { Button } from "./button"
import { CardCourse } from "./card-course"
import { SectionTitle } from "./section-title"

export const Course = () => {
    return(
        <div className="w-full py-28 flex items-center flex-col">
            <SectionTitle 
                title="Our Popular Course"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th"
            />
            <div className="gap-x-[63px] gap-y-[57px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <CardCourse 
                    title="Web Design  Basic to advance"
                    src="/images/course-image-one.png"
                    price={70}
                />
                <CardCourse 
                    title="Web development  Basic to advance"
                    src="/images/course-image-two.png"
                    price={50}
                />
                <CardCourse 
                    title="Digital marketing  Basic to advance"
                    src="/images/course-image-three.png"
                    price={40}
                />
                <CardCourse 
                    title="App Design  Basic to advance"
                    src="/images/course-image-four.jpg"
                    price={90}
                />
                <CardCourse 
                    title="Mobile design  Basic to advance"
                    src="/images/course-image-five.png"
                    price={75}
                />
                <CardCourse 
                    title="Graphics Design  Basic to advance"
                    src="/images/course-image-six.png"
                    price={95}
                />
            </div>
            <Button 
                onClick={() => {}}
                className="mt-[75px] hover:text-[#7253A4] hover:border-[#7253A4] hover:bg-white w-[176px]"
                label="See More"
            />
        </div>

    )
}