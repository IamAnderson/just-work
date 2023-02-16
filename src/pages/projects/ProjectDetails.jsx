import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exploreComponentData } from '../../data/data';

const ProjectDetails = () => {

    const { title } = useParams();
    // const [projDetails, setProjDetails] = useState({});

    const projectFind = exploreComponentData.find((items) => items.title === title)
    // console.log(projectsFind)

  return (
    <div>
        Working.. Yup.. {projectFind.title}
    </div>
  )
}

export default ProjectDetails