import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div>This is about, go back home!</div>
      <Link href="/">
        <button>Back to home</button>
      </Link>
    </>
  )
}

export default Page
