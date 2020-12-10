import React, { useEffect, useState } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Card, Button, Image } from 'semantic-ui-react'
import "./style.css"
import { navigate } from "hookrouter";

export default function CandidateProfile({ id, candidates }) {

  let [candidate, setCandidate] = useState({})

  useEffect(() => {
    let foundCandidate = candidates.find(cand => cand.id == id)
    setCandidate(foundCandidate)
  })

  const backToCandidates = ()=>{
    navigate('/candidates')
  }

  return (
    <div >
      <Card className="center-item">
        <Image src={candidate.avatar} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{candidate.first_name + ' ' + candidate.last_name}</Card.Header>

          <Card.Description>
            {candidate.email}
          </Card.Description>

          <Card.Description>
            {candidate.gender}
          </Card.Description>

          <Card.Description>
            {candidate.job_title}
          </Card.Description>

          <Card.Description>
            {candidate.job_decription}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
      <Button type="submit" onClick={backToCandidates}>Back to Candidates</Button>
      </Card>
    </div>

  )
}