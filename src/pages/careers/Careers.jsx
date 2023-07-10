import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {

    const careers = useLoaderData();
    console.log(careers)

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
    const res = await fetch('https://yulidarmaulana.github.io/netninja-react-router/data/db.json')
    // const res = await fetch('https://649f60ee245f077f3e9d85dc.mockapi.io/api/v1/')

    return res.json()
}   
