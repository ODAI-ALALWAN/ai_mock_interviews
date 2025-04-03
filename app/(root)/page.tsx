import InterviewCard from "@/components/InterviewCard"
import { Button } from "@/components/ui/button"
import { dummyInterviews } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>


        </div>


        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />

      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>


        <div className="interviews-section">
                {dummyInterviews.map((interview) => {
                  return <InterviewCard {...interview} key={interview.id} />;
                })}
        </div>


        <p>You haven&apos;t taken any interviews yet</p>
      </section>



      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
                {dummyInterviews.map((interview) => {
                  return <InterviewCard {...interview} key={interview.id} />;
                })}
        </div>



        <p>There are no interviews available</p>
      </section>



    </>
    
  )
}

export default Page