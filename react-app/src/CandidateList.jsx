import React, { useState, useEffect } from "react"
import { getCandidates } from "./api";
import CandidateItem from "./CandidateItem";
import 'semantic-ui-css/semantic.min.css'
import "./style.css";

export default function CandidateList({ updateCandidates }) {

  const [errMessage, setErrMessage] = useState([])
  const [candidatesElems, setCandidatesElems] = useState([])

  useEffect(() => {

    getCandidates().then((res) => {
      
      updateCandidates(res.data.candidates)
      let candidatesElemsTmp = res.data.candidates.map((candidate) => {

        return (
          < CandidateItem
            key={candidate.id}
            info={candidate}
          />
        )
      })
      setCandidatesElems(candidatesElemsTmp)
    }).catch(e => {
      if (e.response && e.response.data) {
        setErrMessage(e.response.data.message)
      }
      throw e
    })
  }, [])

  return (
    <div>
      {errMessage}
      <div className="grid">
        {candidatesElems}
      </div>
    </div>
  )
}