import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updatePost, getDetail } from "../lib/api/post";
import FormBody from "./Form";

const Edit = () => {
  const [value, setValue] = useState({name: '', content: ''})
  // Get to id from List
  const query = useParams()
  const history = useHistory()

  // queryを取得したタイミングでhandleGetDateが発火
  useEffect(() => {
    handleGetData(query)
  }, [query])

  const handleGetData = async (query) => {
    try {
      const res = await getDetail(query.id)
      console.log(res.data)
      setValue({
        name: res.data.name,
        content: res.data.content
      })
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await updatePost(query.id, value)
      console.log(res)
      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <h1>編集</h1>
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType='更新'
      />
    </>
  )
}

export default Edit;
