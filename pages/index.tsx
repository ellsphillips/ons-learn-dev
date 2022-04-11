import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div>Go to about page</div>
      <Link href="/about">
        <a>
          <img src="https://raw.githubusercontent.com/ellsphillips/doctor/master/docs/img/doctor-logo.svg" />
        </a>
      </Link>
    </>
  )
}

export default Page
