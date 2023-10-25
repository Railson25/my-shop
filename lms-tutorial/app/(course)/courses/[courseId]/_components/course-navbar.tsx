import { NavbarRoutes } from "@/components/navbar-routes"
import { Chapter, Course, UserProgress } from "@prisma/client"
import { CourseMobileSidebar } from "./course-mobile-sidebar"

interface CourseNavbarProps{
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null
        })[]
    }
    progressCount: number
} 

export const CourseNavbar = ({course, progressCount}: CourseNavbarProps) => {
    return(
        <div className="flex p-4 border-b h-full items-center bg-white shadow-sm">
            <CourseMobileSidebar 
                course={course}
                progressCount={progressCount}
            />
            <NavbarRoutes />
        </div>
    )
}