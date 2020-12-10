import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Card,Image, Button} from 'semantic-ui-react'
import { navigate } from "hookrouter"
import { useState } from "react";
import "./style.css";


export default function CandidateItem({ info }) {
  const [id, setId] = useState(info.id)
  const showProfile = () => {

    navigate(`/profile/${id}`)
  }

  return (

    <div key={info.id} >
         <Card className="center-item">
        <Image src={info.avatar} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{info.first_name + ' ' + info.last_name}</Card.Header>

          <Card.Description>
            {info.job_title}
          </Card.Description>

          <Card.Description>
            {info.job_decription}
          </Card.Description>
        </Card.Content>
      <Button type="submit" onClick={showProfile}>Show Profile</Button>
      </Card>
    </div>
  )
}