import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./Article.css";

function Article() {
  const navigate = useNavigate()
  const location = useLocation()

  const text = location.state

  useEffect(() => {
    if (!text) {
      navigate('/')
    }
  }, [text, navigate])

  return <div className="article">
    <h1>Full View</h1>
    {text}
    </div>
}

export default Article