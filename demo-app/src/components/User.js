import { useParams }from 'react-router-dom'

function User() {
    const { id } = useParams()
    return (
        <div>
          <h1>User Details</h1>
          id: {id}
        </div>
    )
}

export default User
