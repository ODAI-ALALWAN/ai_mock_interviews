import Agent from '@/components/Agent'


const Page = () => {
  return (
    <>
    <h3>Interview generation</h3>

    <Agent
      userName='You'
      userId='USER1'
      type="generate"
    />
  </>
  )
}

export default Page
