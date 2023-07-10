import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  // useParams()
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <>
     <div className="career-details">
      <h1>{id}</h1>
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
      </div>
    </div>
    </>
  )
}

// data loader
export const careerDetailsLoader = async ({  params  }) => {
  const { id } = params

  const res = await fetch('https://yulidarmaulana.github.io/netninja-react-router/data/db.json')
  console.log(res.json());
  // const res = await fetch('https://649f60ee245f077f3e9d85dc.mockapi.io/api/v1/' + id)

  return res.json()[id];
}