import Link from 'next/link'

function PostList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map(user => {
        return (
          <div key={user.id}>
            <Link href={`/posts/${user.id}`}>
              <a>{user.name}</a>
            </Link>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default PostList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      users: data
    }
  }
}