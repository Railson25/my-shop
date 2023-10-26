
import Mux from "@mux/mux-node"
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const {Video} = new Mux(
    process.env.MUX_TOKEN_ID!,
    process.env.MUX_TOKEN_SECRET!
)

export async function DELETE(
    req: Request,
    { params }: { params: { courseId: string } }
  ) {
    try {
      const { userId } = auth();
  
      if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
      const course = await db.course.findUnique({
        where: {
          id: params.courseId,
          userId: userId,
        },
        include: {
          chapters: {
            include: {
              muxData: true,
            }
          }
        }
      });
  
      if (!course) {
        return new NextResponse("Not found", { status: 404 });
      }
  
      for (const chapter of course.chapters) {
        if (chapter.muxData?.assetId) {
          await Video.Assets.del(chapter.muxData.assetId);
        }
      }
  
      const deletedCourse = await db.course.delete({
        where: {
          id: params.courseId,
        },
      });
  
      return NextResponse.json(deletedCourse);
    } catch (error) {
      console.log("[COURSE_ID_DELETE]", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }
    


export async function PATCH(req: Request, {params}: {params: {courseId: string; chapterId: string}}){
    try {
        const {userId} = auth()
        const {isPublished ,...values} = await req.json()

        if(!userId){
            return new NextResponse('Unauthorized', {status: 401})
        }

        const ownCourse = await db.course.findUnique({
            where:{
                id: params.courseId,
                userId: userId
            }
        })

        if(!ownCourse){
            return new NextResponse('Unauthorized', {status: 401})
        }

        const chapter = await db.chapter.update({
            where:{
                id: params.chapterId,
                courseId: params.courseId
            },
            data: {
                ...values
            }
        })

        if(values.videoUrl){
            const existingMuxData = await db.muxData.findFirst({
                where: {
                    chapterId: params.chapterId
                }
            })

            if(existingMuxData){
                await Video.Assets.del(existingMuxData.assetId)
                await db.muxData.delete({
                    where:{
                        id: existingMuxData.id
                    }
                })
            }

            const asset = await Video.Assets.create({
                input: values.videoUrl,
                playback_policy: 'public',
                test: false
            })

            await db.muxData.create({
                data: {
                    chapterId: params.chapterId,
                    assetId: asset.id,
                    playbackId: asset.playback_ids?.[0]?.id
                }
            })
        }

       return NextResponse.json(chapter) 

    } catch (error) {
        console.log('[COURSES_CHAPTER_ID]', error)
        return new NextResponse('Internal Error', {status: 500})
    }
}