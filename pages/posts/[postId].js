import { useRouter } from 'next/router'

function User({ user }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>
        {user.name}
      </h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.address.city}</p>
    </>
  )
}

export default User

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.postId}`
  )
  const data = await response.json()

  if (!data.id) {
    return {
      notFound: true
    }
  }

  console.log(`Generating page for /posts/${params.postId}`)
  return {
    props: {
      user: data
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: '1' } },
    ],
    fallback: true
  }
}