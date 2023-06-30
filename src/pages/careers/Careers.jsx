import { Link, useLoaderData } from "react-router-dom"
export default function Careers() {

    const careers = useLoaderData();

    return (
        <>
         <div className="careers">
            {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
    </>
  )
}

// Data Loader
export const careersLoader = async () => {
    // const res = await fetch('http://localhost:4000/careers')
    const res = await fetch('https://649f60ee245f077f3e9d85dc.mockapi.io/api/v1/')

    return res.json()
}   
