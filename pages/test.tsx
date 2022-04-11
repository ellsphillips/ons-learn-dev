import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div>This is about, go back home!</div>
      <Link href="/">
        <a>
          <button>Back to home</button>
        </a>
      </Link>
    </>
  )
}

export default Page
